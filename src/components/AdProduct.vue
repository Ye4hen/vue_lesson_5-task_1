<template>
  <a :href="productData.productLink" class="container">
    <div class="img-container">
      <img :src="productData.imgSrc" class="img" />
    </div>
    <div class="middle-container">
      <a :href="productData.companyLink" class="company-info">
        <div>
          <img :src="productData.logo" class="company-logo" />
        </div>
        <h6 class="company-title">
          {{ productData.companyTitle }}
        </h6>
      </a>
      <div v-if="productData.inStock" class="in-stock">В наявності</div>
    </div>
    <div class="text">
      <p>
        {{ productData.description }}
      </p>
    </div>
  </a>
</template>

<script>
export default {
  name: "AdProduct",

  props: {
    productData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
  color: inherit;
}
.container {
  color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.img-container {
  overflow: hidden;
  border-radius: 10%;
}
.img-container:not(:last-child) {
  margin-bottom: 5px;
}
.img {
  width: 300px;
  height: 300px;
  border-radius: 10%;
  transition: transform 0.5s ease 0s;
}
.img:hover {
  transform: scale(1.1);
}
.middle-container {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
}
.middle-container:not(:last-child) {
  margin-bottom: 10px;
}

.company-info {
  display: flex;
  align-items: center;
  gap: 10px;
}
.company-info:hover .company-title {
  color: aqua;
}
.company-logo {
}
.company-title {
  transition: color 0.3s ease 0s;
}
.in-stock {
  font-size: 14px;
  color: lightgreen;
}
.text {
  text-align: left;
}
</style>