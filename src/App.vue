<template>
  <div class="main-container">
    <ad-panel :productsListData="raspberryList" />
  </div>
</template>

<script>
import AdPanel from "./components/AdPanel.vue";
import { raspberryList } from "./constants/2_data_raspberry";
export default {
  name: "App",
  components: { AdPanel },

  data() {
    return {
      raspberryList,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-block: 60px;
  background-color: #2c3e50;
}
.main-container {
}
</style>
