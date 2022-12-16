<template>
  <div class="home">
    <h1>Tout nos murs !</h1>
    <div class="walls">
      <router-link
        v-for="wall in walls"
        :key="wall.id"
        :to="{ name: 'wall.show', params: { id: wall.id, slug: wall.slug } }"
      >
        <h2>{{ wall.name }}</h2>
        <img :src="`/images/${wall.image}`" :alt="wall.name" />
      </router-link>
    </div>
  </div>
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
