<template>
  <header class="header">
    <h1 class="title">📡 Dashboard de Monitoramento</h1>
    <p v-if="!error">
      Conexão: <span>{{ connectionStatus }}</span>
    </p>
    <p v-else>Conexão com problemas</p>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { isLoading, error } from "../../services/mqtt.js";

const connectionStatus = ref("Conectando...");

watch(isLoading, (newVal) => {
  connectionStatus.value = newVal ? "Conectando..." : "✅ Conectado";
});

watch(error, (newVal) => {
  if (newVal) {
    connectionStatus.value = "Conexão com problemas";
  }
});
</script>
