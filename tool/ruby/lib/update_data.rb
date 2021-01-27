require 'json'
require 'open-uri'
require 'time'

@root = File.expand_path(File.join(File.dirname(__FILE__), '..', '..', '..'))
@data_path = File.join(@root, 'data', 'data.json')

class Date
  def iso8601
    (self.to_time + (17 * 60 * 60)).utc.iso8601.gsub(/00Z/, "00.000Z")
  end
end

def update_data
  data = JSON.parse(File.read(@data_path))
  current_data_url = URI.parse("https://covid19-akita.s3.amazonaws.com/current.json")
  current_data = JSON.parse current_data_url.read

  t = Time.parse current_data["感染者の概要"]["updated_at"]
  now = Time.new t.year, t.month, t.day, t.hour, t.min / 10 * 10
  
  data['patients']['date'] = now.strftime "%Y/%m/%d %H:%M"
  data['patients']['data'] = begin
    current_data['感染者の概要']['context'].map do |e|
      a = e["陽性確認日"].scan(/\d+/).to_a.map(&:to_i)
      d = Date.new(2020, *a)
      t = d.iso8601
      {
        "例目"        => e["県内症例"],
        "リリース日"   => t, 
        "居住地"      => e["居住地"], 
        "年代"        => e["年齢"],
        "性別"        => e["性別"],
        "退院"        => e["濃厚接触者等に関する調査"] == "調査終了" ? "〇" : nil,
        "date"       => d
      }
    end
  end
  
  data['patients_summary']['date'] = now.strftime "%Y/%m/%d %H:%M"
  data['patients_summary']['data'] = begin
    h = current_data['感染者の概要']['daily_total']
    (Date.new(2020, 3, 1)..Date.today).map do |d|
      k = "#{d.month}月#{d.day}日"
      c = h[k] || 0
      t = d.iso8601
      {
        "日付"  => t,
        "小計"  => c,
      }
    end
  end
   
  data['inspection_persons']['date'] = now.strftime "%Y/%m/%d %H:%M"
  data['inspection_persons']['labels'] = begin
    current_data['検査実施件数の推移']['context'].reverse.map do |e|
      # 全角数字が含まれていた
      a = e["期間"].scan(/[0-9０-９]+/).to_a.map(&:to_i)[2,2]
      d = Date.new(2020, *a)
      t = d.iso8601
    end
  end
  data['inspection_persons']['datasets'][0]['data'] = begin
    current_data['検査実施件数の推移']['context'].reverse.map do |e|
      e["PCR検査実施件数"]
    end
  end

  data['lastUpdate'] = now.strftime "%Y/%m/%d %H:%M"
  h = current_data['現在の入退院者数等']['context']
  
  # 検査実施人数
  data['main_summary']["value"] = data['inspection_persons']['datasets'][0]['data'].inject(0){|a, c| a + c}
  # 陽性患者数
  data['main_summary']['children'][0]["value"] = h['感染者数累計']
  # 入院中
  data['main_summary']['children'][0]['children'][0]["value"] = h['入院者数']
  # 宿泊療養
  data['main_summary']['children'][0]['children'][0]['children'][0]["value"] = h['宿泊療養者数']
  # 軽症・中等症
  data['main_summary']['children'][0]['children'][0]['children'][1]["value"] = nil
  # 重症
  data['main_summary']['children'][0]['children'][0]['children'][2]["value"] = h['うち重症者数']
  # 退院
  data['main_summary']['children'][0]['children'][1]["value"] = h['退院者・療養解除者数']
  # 死亡
  data['main_summary']['children'][0]['children'][2]["value"] = h['死亡者数']


  File.write @data_path, JSON.pretty_generate(data, indent: '    ')
end

def arrange_data
  data = JSON.parse(File.read(@data_path))
  File.write @data_path, JSON.pretty_generate(data, indent: '    ')
end
