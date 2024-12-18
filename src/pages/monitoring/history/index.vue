<template>
  <div class="relative bg-[#FCFAEE] flex min-h-screen flex-col">
    <!-- Navbar -->
    <div class="bg-[#FCFAEE] backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-sm w-full h-12 sm:h-12 md:h-12 lg:h-12 fixed top-0 z-50 flex items-center gap-4 px-4 sm:px-6 md:px-8 lg:px-10 shadow-lg">
      <div class="bg-red-500 sm:ml-4 md:ml-6 lg:ml-6 rounded-full w-10 h-10 sm:w-12 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10"></div>
      <div class="bg-yellow-500 rounded-full w-10 h-10 sm:w-12 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10"></div>
      <div class="bg-green-500 rounded-full w-10 h-10 sm:w-12 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10"></div>
    </div>

    <div class="flex flex-grow flex-col md:flex-row mt-20">
      <!-- Sidebar -->
      <aside class="w-14 sm:w-14 md:w-14 lg:w-14 h-screen fixed top-11 left-0 px-4 bg-[#91091E] flex flex-col items-center py-2 space-y-6 shadow-lg flex-shrink-0">
        <!-- Logo -->
        <div class="mb-2 mt-4 transition-transform hover:scale-110 duration-300">
          <div class="w-12 sm:w-12 md:w-12 lg:w-12 sm:h-12 md:h-12 lg:h-12 bg-[#FFF0D1] rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
            <a href="/">
              <img class="w-fit h-fit p-2 group-hover:scale-110 transition-transform duration-300"
                src="@/assets/tank.png" alt="Logo" />
            </a>
          </div>
        </div>
        <!-- Navigation -->
        <nav class="flex flex-col gap-6">
          <div class="w-12 sm:w-12 md:w-12 lg:w-12 sm:h-12 md:h-12 lg:h-12">
            <a href="/data" class="flex items-center justify-center rounded-xl bg-[#FFF0D1] shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
              <img class="w-12 h-12 md:w-14 md:h-12 p-2 group-hover:scale-110 transition-transform duration-300" src="@/assets/angkadata.png" alt="Data" />
            </a>
          </div>

          <a href="/charts" class="flex items-center justify-center rounded-xl bg-[#FFF0D1] shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
            <img class="w-12 h-12 md:w-12 md:h-12 p-2 group-hover:scale-110 transition-transform duration-300" src="@/assets/charts.png" alt="Charts" />
          </a>
          <a href="/history" class="flex items-center justify-center rounded-xl bg-[#FFF0D1] shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
            <img class="w-12 h-12 sm:w-12 sm:h-12 md:w-12 md:h-12 p-2 group-hover:scale-110 transition-transform duration-300" src="@/assets/history.png" alt="History" />
          </a>
        </nav>
      </aside>

      <!-- Main Content -->
      <div class="flex-grow flex flex-col p-4 ml-14">
        <div class="text-center mt-8">
          <h1 class="text-[#91091E] font-bold text-4xl">History</h1>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" class="flex flex-col items-center flex-grow mt-4">
          <!-- History Data Table -->
          <div class="history-container mt-4 w-full max-w-7xl overflow-y-auto overflow-x-auto">
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
                <tr v-if="sensorHistory.length === 0">
                  <td colspan="4">No data available</td>
                </tr>
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
</template>

<script setup>
import { ref, onMounted } from 'vue';

const sensorHistory = ref([]);

// Helper function to normalize timestamp (removing milliseconds)
const normalizeTimestamp = (timestamp) => {
  return new Date(timestamp).toISOString().split('.')[0]; // Trim milliseconds
};

const fetchSensorHistory = async () => {
  try {
    console.log('Fetching data...');

    // Fetch Piezo data
    const piezoResponse = await fetch('https://backend-tank.vercel.app/api/piezzo');
    const piezoData = await piezoResponse.json();

    // Fetch DHT22 data
    const dhtResponse = await fetch('https://backend-tank.vercel.app/api/dht22');
    const dhtData = await dhtResponse.json();

    console.log('Piezo Data:', piezoData);
    console.log('DHT22 Data:', dhtData);

    // Combine data based on normalized timestamp
    sensorHistory.value = piezoData.data.map(piezoEntry => {
      // Normalize the timestamp for comparison
      const normalizedPiezoTimestamp = normalizeTimestamp(piezoEntry.timestamp);

      // Find the corresponding DHT22 entry by normalized timestamp
      const dhtEntry = dhtData.data.find(dht => normalizeTimestamp(dht.timestamp) === normalizedPiezoTimestamp);

      // Log to debug the matching process
      console.log(`Matching Piezo Timestamp: ${normalizedPiezoTimestamp}`);
      if (dhtEntry) {
        console.log(`Found matching DHT entry:`, dhtEntry);
      } else {
        console.log(`No matching DHT entry for timestamp: ${normalizedPiezoTimestamp}`);
      }

      return {
        timestamp: piezoEntry.timestamp,
        piezo: piezoEntry.vibrationLevel,
        temperature: dhtEntry ? dhtEntry.temperature : null,
        humidity: dhtEntry ? dhtEntry.humidity : null,
      };
    });

    console.log('Combined Sensor History:', sensorHistory.value);
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
  max-width: 100%;
}

.history-table {
  width: 100%;
  border-collapse: collapse;
}

.history-table th {
  border: 1px solid #91091E;
  padding: 0.5rem;
  text-align: center;
}

.history-table td {
  border-top: 1px solid #91091E;
  border-bottom: 1px solid #91091E;
  padding: 0.5rem;
  text-align: left;
}
</style>
