<template>
  <div class="relative bg-white flex min-h-screen flex-col">
    <!-- Header (Navbar) -->
    <div class="flex-grow flex flex-col">
      <div class="bg-white shadow-sm w-full h-20 flex items-center gap-4 px-4 sm:px-6 md:px-8 lg:px-10 shadow-lg">
        <div class="bg-red-500 rounded-full w-12 h-12"></div>
        <div class="bg-yellow-500 rounded-full w-12 h-12"></div>
        <div class="bg-green-500 rounded-full w-12 h-12"></div>
      </div>

      <div class="flex flex-grow">
        <!-- Sidebar -->
        <aside class="w-24 bg-white/30 backdrop-blur-md border-r border-white/20 flex flex-col items-center py-24 space-y-6 shadow-lg">
          <!-- Logo -->
          <div class="mb-4 transition-transform hover:scale-110 duration-300">
            <div class="w-16 h-16 bg-[#91091E] rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
              <a href="/">
                <img src="@/assets/tank.png" alt="Logo" />
              </a>
            </div>
          </div>

                    <!-- Navigation -->
                    <nav class="space-y-6">
            <a href="/data" class="w-fit h-14 flex items-center justify-center rounded-xl bg-[#91091E] hover:bg-teal-400 hover:text-white transition-all duration-300 group shadow-md">
              <img class="w-14 h-14 p-2 group-hover:scale-110 transition-transform duration-300" src="@/assets/angkadata.png" alt="Data Monitoring" />
            </a>
            <a href="/charts" class="w-fit h-14 flex items-center justify-center rounded-xl bg-[#91091E] hover:bg-teal-400 hover:text-white transition-all duration-300 group shadow-md">
              <img class="w-14 h-14 p-2 group-hover:scale-110 transition-transform duration-300" src="@/assets/charts.png" alt="Charts" />
            </a>
            <a href="/history" class="w-14 h-14 flex items-center justify-center rounded-xl bg-[#91091E] hover:bg-teal-400 hover:text-white transition-all duration-300 group shadow-md">
              <img class="w-14 h-14 p-2 group-hover:scale-110 transition-transform duration-300" src="@/assets/history.png" alt="History" />
            </a>
          </nav>
        </aside>

        <!-- Main Content -->
        <div class="flex-grow flex flex-col p-4">
          <div class="text-center mt-8">
            <h1 class="text-[#91091E] font-bold text-4xl">Sensor Data</h1>
          </div>

          <div data-aos="fade-up" data-aos-duration="2000" class="flex flex-col items-center flex-grow mt-4">
            <!-- Piezo Sensor Data -->
            <div class="sensor-card mb-2">
              <h2 class="sensor-title">Piezo Sensor</h2>
              <p class="sensor-value">Value: {{ piezoValue }}</p>
            </div>

            <!-- DHT22 Sensor Data -->
            <div class="sensor-card mb-2">
              <h2 class="sensor-title">DHT22</h2>
              <p class="sensor-value">Temperature: {{ dht22Temperature }}°C</p>
              <p class="sensor-value">Humidity: {{ dht22Humidity }}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const piezoValue = ref(0);
const dht22Temperature = ref(0);
const dht22Humidity = ref(0);

const fetchSensorData = async () => {
  try {
    const response = await fetch('https://your-vercel-api-endpoint.com/sensor-data');
    const data = await response.json();

    piezoValue.value = data.piezo;
    dht22Temperature.value = data.dht22.temperature;
    dht22Humidity.value = data.dht22.humidity;
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
</style>