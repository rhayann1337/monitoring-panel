<template>
  <div class="containerCard">
    <h3 class="sensorId">{{ sensor.id }}</h3>
    <StatusIndicator :sensorStatus="sensor.status" />
    <p>Temperatura: {{ sensor.temperature ?? "--" }}°C</p>
    <p class="update">
      Última Atualização: <span class="date">{{ formattedDate ?? "--" }}</span>
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { format } from "date-fns";
import StatusIndicator from "../../atoms/StatusIndicator/StatusIndicator.vue";
const { sensor } = defineProps(["sensor"]);

const formattedDate = computed(() => {
  return sensor.lastUpdate
    ? format(sensor.lastUpdate, "dd/MM/yyyy HH:mm")
    : "--";
});
</script>

<style>
.containerCard {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid black;
  padding: 16px;
  max-width: 250px;
  background-color: rgba(16, 16, 16, 0.1);
  margin: 0;
  gap: 8px;
  transition: box-shadow 0.3s ease, background-color 0.3s ease,
    transform 1s ease;
}

.containerCard:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  background-color: #e0e0e0;
}

h3,
p {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
}

h3 {
  font-size: 24px;
  font-weight: 600;
}

.update {
  font-size: 12px;
  font-weight: 400;
}

.date {
  font-weight: 700;
  color: black;
}
</style>
