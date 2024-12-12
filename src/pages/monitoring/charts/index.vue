<template>  
    <div class="relative bg-[#1A1A1A] flex flex-col min-h-screen overflow-hidden">  
      <div class="flex flex-col sm:flex-row justify-between bg-[#91091E] w-full h-20 items-center px-4">  
        <div>  
          <a href="/" class="sm:text-sm md:text-lg lg:text-2xl text-[#C39E5C] font-bold">RC TANK F-4</a>   
        </div>  
  
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
  
      <div class="flex flex-col items-center flex-grow mt-4">  
        <div data-aos="fade-left" data-aos-duration="2000" class="sensor-card mb-8">  
          <h2 class="sensor-title">MQ135 Sensor Data</h2>  
          <div class="chart-container">  
            <canvas id="mq135Chart"></canvas>  
          </div>  
        </div>  
  
        <div data-aos="fade-right" data-aos-duration="2000" class="sensor-card mb-8">  
          <h2 class="sensor-title">DHT22 Temperature Data</h2>  
          <div class="chart-container">  
            <canvas id="dht22TempChart"></canvas>  
          </div>  
        </div>  
  
        <div data-aos="fade-left" data-aos-duration="2000" class="sensor-card mb-8">  
          <h2 class="sensor-title">DHT22 Humidity Data</h2>  
          <div class="chart-container">  
            <canvas id="dht22HumChart"></canvas>  
          </div>  
        </div>  
  
        <div data-aos="fade-right" data-aos-duration="2000" class="sensor-card mb-8">  
          <h2 class="sensor-title">Piezo Sensor Data</h2>  
          <div class="chart-container">  
            <canvas id="piezoChart"></canvas>  
          </div>  
        </div>  
      </div>  
  
      <footer class="bg-[#91091E] w-full h-20 flex items-center justify-center">  
        <p class="text-[#C39E5C] text-sm sm:text-base">© 2025 RC TANK F-4. All rights reserved.</p>  
      </footer>  
    </div>  
  </template>  
  
  <script setup>  
  import { ref, onMounted } from 'vue';  
  import Chart from 'chart.js/auto';  
  
  const mq135Chart = ref(null);  
  const dht22TempChart = ref(null);  
  const dht22HumChart = ref(null);  
  const piezoChart = ref(null);  
  
  const fetchSensorData = async () => {  
    try {  
      const response = await fetch('https://your-vercel-api-endpoint.com/sensor-data');  
      const data = await response.json();  
  
      updateChart(mq135Chart.value, [data.mq135]);  
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
    const mq135Ctx = document.getElementById('mq135Chart').getContext('2d');  
    const dht22TempCtx = document.getElementById('dht22TempChart').getContext('2d');  
    const dht22HumCtx = document.getElementById('dht22HumChart').getContext('2d');  
    const piezoCtx = document.getElementById('piezoChart').getContext('2d');  
  
    mq135Chart.value = createChart(mq135Ctx, ['MQ135'], 'MQ135 Data');  
    dht22TempChart.value = createChart(dht22TempCtx, ['Temperature'], 'DHT22 Temperature Data');  
    dht22HumChart.value = createChart(dht22HumCtx, ['Humidity'], 'DHT22 Humidity Data');  
    piezoChart.value = createChart(piezoCtx, ['Piezo'], 'Piezo Data');  
  
    fetchSensorData();  
  
    // Fetch data periodically every 5 seconds  
    setInterval(fetchSensorData, 5000);  
  });  
  </script>  
  
  <style scoped>  
  html, body {  
    margin: 0;  
    padding: 0;  
    overflow-x: hidden;  
  }  
  
  .sensor-card {  
    background-color: #C39E5C;  
    border-radius: 1.5rem;  
    padding: 2rem;  
    width: 90%;  
    max-width: 600px;  
    box-sizing: border-box;  
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  
    text-align: center;  
  }  
  
  .sensor-title {  
    color: #91091E;  
    font-weight: bold;  
    font-size: 1.5rem;  
    margin-bottom: 1rem;  
  }  
  
  .chart-container {  
    display: flex;  
    justify-content: center;  
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