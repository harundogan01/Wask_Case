<template>
  <div class="main-container">
    <div class="main-header">
      <h1>Marketing Integrations</h1>
      <h2>Trust WASK's smart optimization features</h2>
    </div>
    <div class="main-content">
      <left-button-group></left-button-group>
      <main-group></main-group>
      <right-button-group></right-button-group>
    </div>
  </div>
</template>

<script>
import LeftButtonGroup from "./components/LeftButtonGroup.vue"
import MainGroup from "./components/MainGroup.vue"
import RightButtonGroup from "./components/RightButtonGroup.vue"
export default {
  components: { LeftButtonGroup, MainGroup, RightButtonGroup },
  name: 'App',
}
</script>