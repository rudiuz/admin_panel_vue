<template>
  <div class="default-layout">
      <Sidebar></Sidebar>
      <div class="default-layout-main">
          <Header></Header>
          <div class="default-layout-main-pages">
              <div class="pages-wrapper">
                  <router-view></router-view>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Sidebar from '@/components/layouts/Sidebar.vue';
import Header from '../components/layouts/Header.vue';
export default {
    name: "DefaultLayout",
    components: { Sidebar, Header }
}
</script>

<style>

</style>