<template>
  <span :class="statusClass">{{ label }}</span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["sensorStatus"]);

const statusClass = computed(() =>
  props.sensorStatus === "online" ? "onlineStatus" : "offlineStatus"
);

const label = computed(() =>
  props.sensorStatus === "online" ? "Online ✅" : "Offline ❌"
);
</script>

<style>
.onlineStatus {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: green;
}

.offlineStatus {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: red;
}
</style>
