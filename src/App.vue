<template>
  <div class="top">
    <sharing-container />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SharingContainer from './components/SharingContainer.vue';

export default defineComponent({
  name: 'App',
  components: {
    SharingContainer,
  },
});
</script>

<style scoped>
.top {
  @apply h-screen;
  @apply w-screen;
  @apply flex;
  @apply bg-indigo-300;
}
</style>
