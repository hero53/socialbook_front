<template>
  <div :class="`alert ${alert.class}`" role="alert">
    {{ alert.msg }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['alert']);
</script>

<style scoped></style>
