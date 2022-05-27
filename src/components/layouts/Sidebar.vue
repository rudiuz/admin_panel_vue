<template>
  <div class="default-layout-sidebar">
          <div class="default-layout-sidebar-header">

          </div>
          <div class="default-layout-sidebar-menu-list">
              <ul>
                  <li>
                      <router-link to="/statistics">
                          Statistika
                      </router-link>
                  </li>
                  <li>
                      <router-link to="/menus">
                          Menular
                      </router-link>
                  </li>
              </ul>
          </div>
      </div>
</template>

<script>
export default {
    name: "SidebarComponent"
}
</script>

<style>

</style>