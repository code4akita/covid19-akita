<template>
  <div class="Worker">
    <page-header class="mb-3">
      {{ $t('企業の皆様・はたらく皆様へ') }}
    </page-header>
    <StaticCard>
      <h3>
        <a
          href="https://www.pref.akita.lg.jp/pages/archive/47236"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('事業者向け相談窓口・支援政策') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '秋田県では、新型コロナウイルス感染症による影響で経営に支障をきたしている事業者のための相談窓口を設置や事業の支援を行っています。国や県の制度をご活用ください。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.pref.akita.lg.jp/pages/archive/48327"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('建設企業向け相談窓口') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス感染症に伴い、建設企業の下請契約や下請代金支払についての相談を受け付けるため、建設企業向けの相談窓口を開設しました。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.pref.akita.lg.jp/pages/archive/47115"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('旅館業等を営む方々への連絡') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '国からの通知等について掲載しています。情報は随時更新していますのでご確認お願いします。'
          )
        }}
      </p>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard
  },
  head(): MetaInfo {
    return {
      title: this.$t('企業の皆様・はたらく皆様へ') as string
    }
  }
})
</script>
