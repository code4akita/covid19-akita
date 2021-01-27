require 'update_data'

namespace :data do

  desc "Update data"
  task :update do
    update_data
  end

  desc "Update data"
  task :arrange do
    arrange_data
  end

end
