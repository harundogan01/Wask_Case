<template>
    <div class="rightButtons">
      <img v-for="icon in icons" :key="icon.id" :src="require('../assets/icons/' + icon.url)" :alt="icon.alt" :title="icon.alt">
    </div>
  </template>
  
  <script>
  import json from "../json/icons.json"
  export default {
      data() {
          return {
              icons: json.rightIcons
          }
      },
  }
  </script>
  <style>
  
  </style>