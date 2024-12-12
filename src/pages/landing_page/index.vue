<template>
    <section class="w-full flex bg-white text-white min-h-screen overflow-hidden flex-col">
        <!-- Navbar -->
        <div class="bg-white shadow-sm w-full h-20 flex items-center gap-4 px-4 sm:px-6 md:px-8 lg:px-10 shadow-lg">
            <div class="bg-red-500 rounded-full w-12 h-12"></div>
            <div class="bg-yellow-500 rounded-full w-12 h-12"></div>
            <div class="bg-green-500 rounded-full w-12 h-12"></div>
        </div>

        <div class="flex flex-grow">
            <!-- Sidebar -->
            <aside class="w-24 h-screen px-4 bg-[white/30] backdrop-blur-md border-r border-white/20 flex flex-col items-center py-24 space-y-6 shadow-lg">
                <!-- Logo -->
                <div class="mb-4 transition-transform hover:scale-110 duration-300">
                    <div class="w-16 h-16 bg-[#91091E] rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                        <a href="/">
                            <img src="@/assets/tank.png" alt="">
                        </a>
                    </div>
                </div>

                <!-- Navigation -->
                <nav class="space-y-6">
                    <a href="/data" class="w-fit h-14 flex items-center justify-center rounded-xl bg-[#91091E] hover:bg-teal-400 hover:text-white transition-all duration-300 group shadow-md">
                        <img class="w-14 h-14 p-2 group-hover:scale-110 transition-transform duration-300" 
                        src="@/assets/angkadata.png" alt="">
                    </a>
                    <a href="/charts" class="w-fit h-14 flex items-center justify-center rounded-xl bg-[#91091E] hover:bg-teal-400 hover:text-white transition-all duration-300 group shadow-md">
                        <img class="w-14 h-14 p-2 group-hover:scale-110 transition-transform duration-300" 
                        src="@/assets/charts.png" alt="">
                    </a>
                    <a href="/history" class="w-14 h-14 flex items-center justify-center rounded-xl bg-[#91091E] hover:bg-teal-400 hover:text-white transition-all duration-300 group shadow-md">
                        <img class="w-14 h-14 p-2 group-hover:scale-110 transition-transform duration-300" 
                        src="@/assets/history.png" alt="">
                    </a>
                </nav>
            </aside>

            <!-- Main Section -->
            <div class="flex-grow flex flex-col">
                <!-- Main Section with Background Image and Text -->
                <div class="relative flex-grow flex justify-center items-center">
                    <div class="relative w-full max-w-[90%] mb-16 mt-8">
                        <img
                            class="w-full h-auto opacity-70 rounded-3xl"
                            src="@/assets/img1.png"
                            alt="img1"
                        />
                    </div>

                    <!-- Text Overlay -->
                    <div class="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                        <h1
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                            class="font-bold text-[#91091E] tracking-wide mb-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            With Great Intelligence
                        </h1>
                        <h2
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                            class="font-semibold text-[#91091E] mt-2 tracking-wider text-lg sm:text-xl md:text-2xl lg:text-3xl"
                        >
                            Comes a Great Many Tasks
                        </h2>
                    </div>
                </div>

            </div></div>
      <div>
        <h1 class="text-[#91091E] font-bold text-4xl text-center">Member</h1>
      </div>
      <!-- Card Section 1 -->
      <div class="flex justify-around items-center mt-12">
        <!-- Card 1 -->
        <div class="relative group duration-500 cursor-pointer mb-12 overflow-hidden text-gray-50 h-80 w-96 rounded-2xl hover:duration-700">
          <div class="w-96 h-96  bg-lime-400 text-gray-800">
            <div class="flex flex-row justify-between">
                <div class="w-96">
                    <img src="@/assets/davin.png" alt="anggota1">
                </div>

            </div>
          </div>
          <div class="absolute bg-gray-50 -bottom-24 w-96 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span class="text-[#91091E] font-bold text-xs">Mechatronic, Web, Wiring</span>
            <span class="text-gray-800 font-bold text-3xl">Muhammad Davin PPA</span>
            <p class="text-neutral-800">Saya Mahasiswa Teknologi Informasi di Universitas Islam Negeri Sultan Syarifuddin.</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="relative group duration-500 cursor-pointer mb-12 overflow-hidden text-gray-50 h-80 w-96 rounded-2xl hover:duration-700">
          <div class="w-96 h-96  bg-lime-400 text-gray-800">
            <div class="flex flex-row justify-between">
                <div class="w-96 mt-[-10rem]">
                    <img src="@/assets/agung.png" alt="anggota2">
                </div>

            </div>
          </div>
          <div class="absolute bg-gray-50 -bottom-24 w-96 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span class="text-[#91091E] font-bold text-xs">Mechatronic, Mobile, Wiring, IoT, Presiden, Gubernur, Perdana Menteri, Haji, Umum</span>
            <span class="text-gray-800 font-bold text-3xl">Agung Suryana</span>
            <p class="text-neutral-800">Saya Mahasiswa Teknologi Informasi di Universitas Islam Negeri Sultan Syarifuddin.</p>
          </div>
          
          <!-- Card 3 -->
        </div>
        <div class="relative group duration-500 cursor-pointer mb-12 overflow-hidden text-gray-50 h-80 w-96 rounded-2xl hover:duration-700">
          <div class="w-96 h-96  bg-lime-400 text-gray-800">
            <div class="flex flex-row justify-between">
                <div class="w-96 mt-[-3rem]">
                    <img src="@/assets/rakha.png" alt="anggota3">
                </div>
            </div>
          </div>

          <div class="absolute bg-gray-50 -bottom-24 w-96 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span class="text-[#91091E] font-bold text-xs">Mechatronic, Web, Wiring</span>
            <span class="text-gray-800 font-bold text-3xl">Rakha Dwi Pradifa</span>
            <p class="text-neutral-800">Saya Mahasiswa Teknologi Informasi di Universitas Islam Negeri Sultan Syarifuddin.</p>
          </div>
        </div>
      </div>

            <!-- Card Section 2 -->
            <div class="flex justify-around items-center mt-8">
        <!-- Card 1 -->
        <div class="relative group duration-500 cursor-pointer mb-12 overflow-hidden text-gray-50 h-80 w-96 rounded-2xl hover:duration-700">
          <div class="w-96 h-96  bg-lime-400 text-gray-800">
            <div class="flex flex-row justify-between">
                <div class="w-96 h-96">
                    <img src="" alt="anggota4">
                </div>

            </div>
          </div>
          <div class="absolute bg-gray-50 -bottom-24 w-96 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span class="text-[#91091E] font-bold text-xs">Mechatronic</span>
            <span class="text-gray-800 font-bold text-3xl">Muhammad Davin PPA</span>
            <p class="text-neutral-800">Saya Mahasiswa Teknologi Informasi di Universitas Islam Negeri Sultan Syarifuddin.</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="relative group duration-500 cursor-pointer mb-12 overflow-hidden text-gray-50 h-80 w-96 rounded-2xl hover:duration-700">
          <div class="w-96 h-96  bg-lime-400 text-gray-800">
            <div class="flex flex-row justify-between">
                <div class="w-96 h-96">
                    <img src="" alt="anggota5">
                </div>

            </div>
          </div>
          <div class="absolute bg-gray-50 -bottom-24 w-96 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span class="text-[#91091E] font-bold text-xs">Mechatronic, Mobile, Wiring, IoT, Presiden, Gubernur, Perdana Menteri, Haji, Umum</span>
            <span class="text-gray-800 font-bold text-3xl">Agung Suryana</span>
            <p class="text-neutral-800">Saya Mahasiswa Teknologi Informasi di Universitas Islam Negeri Sultan Syarifuddin.</p>
          </div>
          
          <!-- Card 3 -->
        </div>
        <div class="relative group duration-500 cursor-pointer mb-12 overflow-hidden text-gray-50 h-80 w-96 rounded-2xl hover:duration-700">
          <div class="w-96 h-96  bg-lime-400 text-gray-800">
            <div class="flex flex-row justify-between">
                <div class="w-96 h-96">
                    <img src="" alt="anggota6">
                </div>
            </div>
          </div>

          <div class="absolute bg-gray-50 -bottom-24 w-96 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span class="text-[#91091E] font-bold text-xs">Mechatronic</span>
            <span class="text-gray-800 font-bold text-3xl">Muhammad Davin PPA</span>
            <p class="text-neutral-800">Saya Mahasiswa Teknologi Informasi di Universitas Islam Negeri Sultan Syarifuddin.</p>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
// Script setup remains ready for future logic if needed
</script>
