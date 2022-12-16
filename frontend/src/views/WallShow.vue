<template>
  <div>
    <h1>{{ wall.name }}</h1>
    <img :src="`/images/${wall.image}`" :alt="wall.name" />
    <p>{{ wall.blocs.length }}</p>
  </div>
</template>

<script>
import sourceData from "../data.json";
export default {
  computed: {
    wallId() {
      return parseInt(this.$route.params.id);
    },
    wall() {
      return sourceData.walls.find((wall) => wall.id === this.wallId);
    },
  },
};
</script>
