<script setup lang="ts">
  import type { TestProps, DataTest } from './TestProps'
  import { TresCanvas } from '@tresjs/core' 

  defineProps<TestProps<DataTest>>()
</script>
 
<template>
  <div class="data-test__title">
    {{ dataTest.title }}
    <p class="data-test__content">{{ dataTest.cabeza.pie }}</p>
  </div>
  <TresCanvas window-size>
     <TresPerspectiveCamera />
    <TresMesh>
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial color="orange" />
    </TresMesh>
  </TresCanvas>
</template>

<style lang="postcss" scoped>
  .data-test {
    &__title {
      color: #888;
      background-color: #f4f4f4;
      font-size: 3rem;
    }

    &__content {
      color: #333;
      background-color: #888;
      font-size: 3.5rem;
    }
  }
</style>
