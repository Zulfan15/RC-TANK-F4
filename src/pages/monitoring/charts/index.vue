<template>
  <div class="relative bg-white flex min-h-screen overflow-hidden">
    <!-- Main Content -->
    <div class="flex-grow flex flex-col">
      <!-- Navbar -->
      <div class="bg-white shadow-sm w-full h-20 gap-4 flex items-center px-4 sm:px-6 md:px-8 lg:px-10 shadow-lg">
        <div class="bg-red-500 rounded-full w-12 h-12"></div>
        <div class="bg-yellow-500 rounded-full w-12 h-12"></div>
        <div class="bg-green-500 rounded-full w-12 h-12"></div>
      </div>

      <!-- Sidebar and Content -->
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

        <!-- Main Content Area -->
        <div class="flex-grow p-6">
          <div class="text-center mt-8">
            <h1 class="text-[#91091E] font-bold text-4xl">Sensor Data</h1>
          </div>

          <div class="grid-container mt-4">
            <!-- DHT22 Temperature Chart -->
            <div data-aos="fade-left" data-aos-duration="2000" class="sensor-card">
              <h2 class="sensor-title">DHT22 Temperature Data</h2>
              <div class="chart-container">
                <canvas id="dht22TempChart"></canvas>
              </div>
            </div>

            <!-- DHT22 Humidity Chart -->
            <div data-aos="fade-right" data-aos-duration="2000" class="sensor-card">
              <h2 class="sensor-title">DHT22 Humidity Data</h2>
              <div class="chart-container">
                <canvas id="dht22HumChart"></canvas>
              </div>
            </div>

            <!-- Piezo Sensor Chart -->
            <div data-aos="fade-left" data-aos-duration="2000" class="sensor-card">
              <h2 class="sensor-title">Piezo Sensor Data</h2>
              <div class="chart-container">
                <canvas id="piezoChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

const dht22TempChart = ref(null);
const dht22HumChart = ref(null);
const piezoChart = ref(null);

const fetchSensorData = async () => {
  try {
    const response = await fetch('https://your-vercel-api-endpoint.com/sensor-data');
    const data = await response.json();

    updateChart(dht22TempChart.value, [data.dht22.temperature]);
    updateChart(dht22HumChart.value, [data.dht22.humidity]);
    updateChart(piezoChart.value, [data.piezo]);
  } catch (error) {
    console.error('Error fetching sensor data:', error);
  }
};

const createChart = (ctx, labels, label) => {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label,
          data: [],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

const updateChart = (chart, data) => {
  chart.data.datasets[0].data = data;
  chart.update();
};

onMounted(() => {
  const dht22TempCtx = document.getElementById('dht22TempChart').getContext('2d');
  const dht22HumCtx = document.getElementById('dht22HumChart').getContext('2d');
  const piezoCtx = document.getElementById('piezoChart').getContext('2d');

  dht22TempChart.value = createChart(dht22TempCtx, ['Temperature'], 'DHT22 Temperature Data');
  dht22HumChart.value = createChart(dht22HumCtx, ['Humidity'], 'DHT22 Humidity Data');
  piezoChart.value = createChart(piezoCtx, ['Piezo'], 'Piezo Data');

  fetchSensorData();

  // Fetch data periodically every 5 seconds
  setInterval(fetchSensorData, 5000);
});
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.sensor-card {
  background-color: #c39e5c;
  border-radius: 1.5rem;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  box-sizing: border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.sensor-title {
  color: #91091e;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.chart-container {
  display: flex;
  justify-content: center;
}

.footer {
  background-color: #91091e;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-text {
  color: #c39e5c;
  font-weight: bold;
  font-size: 1.25rem;
}

.grid-container {
  display: grid;
  gap: 1.5rem;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
