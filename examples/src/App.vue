<template>
  <div class="d-flex flex-row h-100">
    <div>
      Filter: <input v-model="searchText">
    </div>
    <div
      v-for="icon in searchedIcons"
      :key="icon.name"
      style="display:flex;margin-top:0.5em"
    >
      <div style="width:3em; display: flex; align-items: center;">
        <infineon-icon-vue
          :icon="icon.name"
        />
      </div>
      <div>
        <code>Name: <b>{{ icon.name }}</b> // <b>{{ icon.alternativeName }}</b><br>
          <b>&lt;infineon-icon-vue icon="{{ icon.name }}"&gt;</b></code>
      </div>
    </div>
  </div>
</template>

<script setup>
import library from '@infineon/infineon-icons/library';
import { ref, computed } from 'vue';
import { InfineonIconVue } from '../../lib';

const searchText = ref('');

const searchedIcons = computed(() => Object.values(library.getIcons())
  .filter((i) => i.name.includes(searchText.value)
  || i.alternativeName.includes(searchText.value)));

</script>
