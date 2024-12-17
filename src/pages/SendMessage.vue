<template>
  <div class="container">
    <div class="sensorForm">
      <input v-model="sensor.id" placeholder="ID do Sensor" />
      <input v-model="sensor.status" placeholder="Status do Sensor" />
      <input
        v-model="sensor.temperature"
        type="number"
        placeholder="Temperatura"
      />
      <input v-model="sensor.lastUpdate" placeholder="Última Atualização" />
      <button @click="sendSensorData">Enviar Mensagem</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { connectToMQTT, publishData } from "../services/mqtt.js";

const sensor = ref({
  id: "",
  status: "",
  temperature: null,
  lastUpdate: "",
});

onMounted(() => {
  connectToMQTT();
});

const sendSensorData = () => {
  publishData(sensor.value);

  sensor.value = {
    id: "",
    status: "",
    temperature: null,
    lastUpdate: "",
  };
};
</script>

<style>
.sensorForm {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: auto;
}

input {
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
