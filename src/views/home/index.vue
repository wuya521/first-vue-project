<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import homePanel from './components/homePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <home-panel title="新鲜好物" sub-title="新鲜好物 好多商品">

  </home-panel>
<div>
  新鲜好物的插槽内容
</div>
  <home-panel title="人气推荐" sub-title="人气商品 好多商品">
    <div>
  人气商品的插槽内容
    </div>
  </home-panel>
</template>