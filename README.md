# MQTT Sensor Monitoring Project

This project is a sensor monitoring application that uses the MQTT protocol for real-time communication. The app is built with **Vue.js 3**, uses **MQTT.js** to connect to an MQTT broker over WebSocket, and displays sensor information in an interactive user interface. Additionally, we use the **date-fns** library for date formatting in a simple and effective way.

## Technologies Used

- **Vue.js 3**: A progressive JavaScript framework for building the user interface.
- **MQTT.js**: A library for communicating via MQTT (Message Queuing Telemetry Transport), a lightweight messaging protocol ideal for real-time communication.
- **WebSockets**: Used for bidirectional communication in real-time between the client and server.
- **HiveMQ**: An MQTT broker for managing and sending messages.
- **date-fns**: A library for handling and formatting dates in JavaScript.

## Features

- **Connection to the MQTT broker** via WebSocket.
- **Real-time display of sensor data**.
- **Sending MQTT messages** to update sensor statuses.
- **Receiving data in real-time** via WebSocket.
- **Date formatting** with **date-fns**.
- **Adding new sensors** or updating existing ones.
