<template>
  <div class="container">
    <Header />
    <div class="containerSensorGrid">
      <SensorGrid />
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header/Header.vue";
import SensorGrid from "../components/organisms/SensorGrid/SensorGrid.vue";
import { connectToMQTT, sensors } from "../services/mqtt.js";
import { onMounted } from "vue";

onMounted(() => {
  connectToMQTT();
});
</script>

<style>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
