<template>  
  <div class="relative bg-[#1A1A1A] flex flex-col min-h-screen">  
    <div class="flex flex-col sm:flex-row justify-between bg-[#91091E] w-full h-20 items-center px-4 overflow-hidden">  
      <a href="/" class="sm:text-sm md:text-lg lg:text-2xl text-[#C39E5C] font-bold">RC TANK F-4</a>  
  
      <div data-aos="zoom-in" data-aos-duration="2000" class="flex items-center gap-4 mt-2 sm:mt-0 bg-[#C39E5C] rounded-full p-2 overflow-hidden">  
        <a href="/data" class="text-[#91091E] sm:text-base md:text-lg lg:text-xl font-medium">Data Monitoring</a>  
        <a href="/charts" class="text-[#91091E] sm:text-base md:text-lg lg:text-xl font-medium">Charts</a>  
        <div class="p-2">  
          <a class="text-[#91091E] sm:text-base md:text-lg lg:text-xl font-medium" href="/">Back</a>  
        </div>  
      </div>  
    </div>  
  
    <div class="text-center mt-8">  
      <h1 class="text-[#C39E5C] font-bold text-4xl">Sensor Data</h1>  
    </div>  
  
    <div data-aos="fade-up" data-aos-duration="2000" class="flex flex-col items-center flex-grow mt-4">  
      <div class="sensor-card mb-2">  
        <h2 class="sensor-title">MQ135</h2>  
        <p class="sensor-value">Value: {{ mq135Value }}</p>  
      </div>  
  
      <div class="sensor-card mb-2">  
        <h2 class="sensor-title">DHT22</h2>  
        <p class="sensor-value">Temperature: {{ dht22Temperature }}°C</p>  
        <p class="sensor-value">Humidity: {{ dht22Humidity }}%</p>  
      </div>  

      <!-- Riwayat Data -->
      <div class="history-container mt-4 w-11/12 max-w-4xl">  
        <h2 class="text-[#C39E5C] text-center font-bold text-4xl mb-4">History</h2>  
        <table class="history-table w-full text-center border-collapse">  
          <thead>  
            <tr class="bg-[#C39E5C] text-[#91091E]">  
              <th class="p-2">Timestamp</th>  
              <th class="p-2">MQ135 Value</th>  
              <th class="p-2">Temperature (°C)</th>  
              <th class="p-2">Humidity (%)</th>  
            </tr>  
          </thead>  
          <tbody>  
            <tr v-for="(entry, index) in sensorHistory" :key="index" class="bg-[#F3E4C9] text-[#91091E]">  
              <td class="p-2">{{ entry.timestamp }}</td>  
              <td class="p-2">{{ entry.mq135 }}</td>  
              <td class="p-2">{{ entry.temperature }}</td>  
              <td class="p-2">{{ entry.humidity }}</td>  
            </tr>  
          </tbody>  
        </table>  
      </div>  
    </div>  
  
    <footer class="bg-[#91091E] w-full h-20 flex items-center justify-center">  
      <p class="text-[#C39E5C] text-sm sm:text-base">© 2025 RC TANK F-4. All rights reserved.</p>  
    </footer>  
  </div>  
</template>  
  
<script setup>  
import { ref, onMounted } from 'vue';  
  
const mq135Value = ref(0);  
const dht22Temperature = ref(0);  
const dht22Humidity = ref(0);  
const sensorHistory = ref([]);  

const fetchSensorData = async () => {  
  try {  
    const response = await fetch('https://your-vercel-api-endpoint.com/sensor-data');  
    const data = await response.json();  

    mq135Value.value = data.mq135;  
dht22Temperature.value = data.dht22.temperature;  
    dht22Humidity.value = data.dht22.humidity;  

    // Tambahkan data baru ke riwayat dengan timestamp  
    sensorHistory.value.unshift({  
      timestamp: new Date().toLocaleString(),  
      mq135: data.mq135,  
      temperature: data.dht22.temperature,  
      humidity: data.dht22.humidity,  
    });  

    // Batasi riwayat hanya menampilkan 20 entri terakhir  
    if (sensorHistory.value.length > 20) {  
      sensorHistory.value.pop();  
    }  
  } catch (error) {  
    console.error('Error fetching sensor data:', error);  
  }  
};  
  
onMounted(() => {  
  fetchSensorData();  

  // Fetch data periodically every 5 seconds  
  setInterval(fetchSensorData, 5000);  
});  
</script>  
  
<style scoped>  
.relative {  
  display: flex;  
  flex-direction: column;  
  min-height: 100vh;  
}  

.sensor-card {  
  background-color: #C39E5C;  
  border-radius: 1.5rem;  
  padding: 1.5rem;  
  width: 90%;  
  max-width: 600px;  
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  
  text-align: center;  
}  

.sensor-title {  
  color: #91091E;  
  font-weight: bold;  
  font-size: 1.5rem;  
  margin-bottom: 0.25rem;  
}  

.sensor-value {  
  color: #91091E;  
  font-weight: bold;  
  font-size: 1rem;  
  margin: 0.1rem 0;  
}  

.history-container {  
  width: 100%;  
  max-width: 600px;  
}  

.history-table {  
  width: 100%;  
  border-collapse: collapse;  
}  

.history-table th {  
  border: 1px solid #91091E;  
  padding: 0.5rem;  
  text-align: left;  
}  

.history-table td {  
  border-top: 1px solid #91091E;  
  border-bottom: 1px solid #91091E;  
  padding: 0.5rem;  
  text-align: left;  
}  

.footer {  
  background-color: #91091E;  
  height: 5rem;  
  display: flex;  
  justify-content: center;  
  align-items: center;  
}  

.footer-text {  
  color: #C39E5C;  
  font-weight: bold;  
  font-size: 1.25rem;  
}  
</style>
