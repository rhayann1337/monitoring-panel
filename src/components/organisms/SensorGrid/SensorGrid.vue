<template>
  <div class="containerGrid">
    <SensorCard
      v-for="sensor in sensorsRef"
      :key="sensor.id"
      :sensor="sensor"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { sensors } from "../../../services/mqtt.js";
import SensorCard from "../../molecules/SensorCard/SensorCard.vue";

const sensorsRef = ref(sensors);
</script>

<style>
.containerGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 300px));
  gap: 8px;
  padding: 32px;
}

@media (max-width: 768px) {
  .containerGrid-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
