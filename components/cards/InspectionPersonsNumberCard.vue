<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('1週間ごとの検査実施件数')"
      :title-id="'number-of-inspection-persons'"
      :chart-id="'number-of-inspection-persons'"
      :chart-data="graphData"
      :date="data.date"
      :unit="$t('人')"
      :url="'https://www.pref.akita.lg.jp/pages/archive/51592#kennsa'"
      :source="$t('県公式サイトで見る')"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{
              $t(
                '（注）県、秋田市が実施した件数であり、民間機関が実施した件数は含まれない'
              )
            }}
          </li>
          <li>
            {{ $t('（注）退院時の陰性確認用の検査等の件数は含まない') }}
          </li>
          <li>
            {{ $t('（注）後日修正される場合あり') }}
          </li>
        </ul>
      </template>
    </time-bar-chart>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    const formatData = Data.inspection_persons.labels.map((date, i) => {
      return {
        日付: date,
        小計: Data.inspection_persons.datasets[0].data[i]
      }
    })

    // 検査実施人数グラフ
    const graphData = formatGraph(formatData)

    return {
      data: Data.inspection_persons,
      graphData
    }
  }
}
</script>
