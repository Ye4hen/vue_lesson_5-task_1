<template>
  <div class="secondary-container">
    <ad-product
      v-for="product in productsListData"
      :key="product.id"
      :productData="product"
    />
  </div>
</template>

<script>
import AdProduct from "./AdProduct.vue";
export default {
  name: "AdPanel",

  components: { AdProduct },

  props: {
    productsListData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="css" scoped>
.secondary-container {
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 50px;
}
</style>