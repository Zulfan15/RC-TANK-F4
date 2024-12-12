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
              <h1 class="text-[#91091E] font-bold text-4xl">History</h1>
            </div>
  
            <div data-aos="fade-up" data-aos-duration="2000" class="flex flex-col items-center flex-grow mt-4">
              <!-- History Data Table -->
              <div class="history-container mt-4 w-11/12 max-w-4xl">
                <table class="history-table w-full text-center border-collapse">
                  <thead>
                    <tr class="bg-[#C39E5C] text-[#91091E]">
                      <th class="p-2">Timestamp</th>
                      <th class="p-2">Piezo Value</th>
                      <th class="p-2">Temperature (°C)</th>
                      <th class="p-2">Humidity (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(entry, index) in sensorHistory" :key="index" class="bg-[#F3E4C9] text-[#91091E]">
                      <td class="p-2">{{ entry.timestamp }}</td>
                      <td class="p-2">{{ entry.piezo }}</td>
                      <td class="p-2">{{ entry.temperature }}</td>
                      <td class="p-2">{{ entry.humidity }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const sensorHistory = ref([]);
  
  const fetchSensorHistory = async () => {
    try {
      const response = await fetch('https://your-vercel-api-endpoint.com/sensor-history');
      const data = await response.json();
  
      sensorHistory.value = data.history;
    } catch (error) {
      console.error('Error fetching sensor history:', error);
    }
  };
  
  onMounted(() => {
    fetchSensorHistory();
  });
  </script>
  
  <style scoped>
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
  </style>
  