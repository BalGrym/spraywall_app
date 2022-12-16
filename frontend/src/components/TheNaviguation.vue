<template>
  <router-link id="logo" :to="'/'">Home</router-link> ||
  <router-link
    v-for="wall in walls"
    :key="wall.id"
    :to="{ name: 'wall.show', params: { id: wall.id, slug: wall.slug } }"
    >{{ wall.name }} | |
  </router-link>
</template>

<script>
import sourceData from "../data.json";
export default {
  data() {
    return {
      walls: sourceData.walls,
    };
  },
};
</script>
