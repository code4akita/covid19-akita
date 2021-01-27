<template>
  <div class="Parent">
    <page-header class="mb-3">
      {{ $t('感染予防と相談窓口') }}
    </page-header>
    <StaticCard>
      <h3>1. {{ $t('感染予防・健康管理') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '換気が悪く、人が密に集まって過ごすような空間に集団で集まることは避けてください。'
            )
          }}
        </li>
        <li>
          {{ $t('手洗い、咳エチケット等により、感染予防に努めてください。')
          }}<br />
          <a
            href="https://tokyodouga.jp/lViN9C_BS-0.html"
            target="_blank"
            rel="noopener noreferrer"
            >{{ $t('【参考】感染症予防のための正しい手洗い方法（動画）') }}</a
          >
        </li>
        <li>
          {{
            $t(
              '規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。'
            )
          }}
        </li>
      </ul>
    </StaticCard>
    <StaticCard>
      <h3>2. {{ $t('感染症を疑う場合の対応') }}</h3>
      <ul>
        <li>{{ $t('各相談窓口にご相談ください') }}</li>
        <li>
          {{ $t('相談窓口の電話番号について') }}
          <br />
          <a
            href="https://www.pref.akita.lg.jp/pages/archive/16317#soudannmadoguchi"
            target="_blank"
            rel="noopener noreferrer"
            >{{
              $t('「新型コロナウイルス感染症について 相談窓口(個人向け)」')
            }}</a
          >
        </li>
      </ul>
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
      title: this.$t('感染予防と相談窓口') as string
    }
  }
})
</script>
