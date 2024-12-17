import mqtt from 'mqtt';
import { ref } from 'vue';

export const sensors = ref([
  {
    id: "Sensor A",
    status: "online",
    temperature: 22,
    lastUpdate: "2024-12-16 14:30",
  },
  { id: "Sensor B", status: "offline", temperature: null, lastUpdate: null },
  {
    id: "Sensor C",
    status: "online",
    temperature: 25,
    lastUpdate: "2024-12-16 14:31",
  },
]);

export const mqttClient = ref(null);
export const isLoading = ref(true)
export const error = ref(null)

export const connectToMQTT = () => {
  const client = mqtt.connect('wss://723caea9a8be41dea7de1d08d4a0c3d0.s1.eu.hivemq.cloud:8884/mqtt', {
    username: 'roott',
    password: 'Root123*',
  });

  mqttClient.value = client;

  client.on('connect', () => {
    console.log('Conectado ao MQTT!');

    client.subscribe('monitoramento/sensores', (err) => {
      if (err) {
        error.value = err
        console.error('Erro ao assinar o tópico:', err);
      } else {
        isLoading.value = false
        console.log('Tópico assinado com sucesso!');
      }
    });
  });

  client.on("message", (topic, message) => {
    try {
      const data = JSON.parse(message.toString());
      console.log("🚀 ~ Mensagem parseada com sucesso:", topic, data);
      updateSensorData(data);
    } catch (err) {
      console.error("Detalhes do erro:", err);
    }
  });
};

const updateSensorData = (data) => {
  const sensor = sensors.value.find((sensor) => sensor.id === data.id);

  
  if (sensor) {
    sensor.status = data.status;
    sensor.temperature = data.temperature;
    sensor.lastUpdate = data.lastUpdate;
  } else {
    sensors.value.push(data);
  }
};

export const publishData = (data) => {
  if (!mqttClient.value) {
    console.error('Cliente MQTT não está conectado');
    return;
  }

  const payload = JSON.stringify(data);
  console.log("🚀 ~ publishData ~ payload:", payload)
  
  mqttClient.value.publish('monitoramento/sensores', payload, (err) => {
    if (err) {
      console.error('Erro ao publicar mensagem:', err);
    } else {
      console.log('Mensagem enviada com sucesso');
    }
  });
};