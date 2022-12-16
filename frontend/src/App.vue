<template>
  <TheNaviguation />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNaviguation from "./components/TheNaviguation.vue";

export default {
  components: { TheNaviguation },
};
</script>

<style scoped></style>
