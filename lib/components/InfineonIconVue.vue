<!-- eslint-disable vue/no-v-html -->
<template>
  <svg
    v-if="iconObj"
    :height="height"
    :width="width"
    :viewBox="viewbox"
    v-html="iconObj.svgContent"
  />
</template>

<script setup>
import library from '@infineon/infineon-icons/library';

import {
  toRefs, computed,
} from 'vue';

const props = defineProps({
  icon: { type: String, required: true },
});

const { icon } = toRefs(props);

const iconObj = computed(() => library.getIcon(icon.value));

const width = computed(() => iconObj.value?.width);
const height = computed(() => iconObj.value?.width);
const viewbox = computed(() => `0 0 ${height.value} ${width.value}`);

</script>
