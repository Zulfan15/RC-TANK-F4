<template>  
    <section class="w-full flex flex-col bg-[#1A1A1A] text-white min-h-screen overflow-hidden">  
        <!-- Navbar -->  
        <div class="bg-[#91091E] w-full h-20 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 shadow-lg">  
            <div data-aos="zoom-out-right" data-aos-duration="2000">
                <a href="/" class="text-[#C39E5C] font-bold text-2xl">RC TANK F-4</a>  
            </div>

            <div data-aos="zoom-out-left" data-aos-duration="2000" class="bg-[#C39E5C] rounded-full px-4 py-2">  
                <a class="text-[#91091E] font-medium" href="/data">To Monitoring</a>  
            </div>  
        </div>  

        <!-- Main Content -->  
        <div class="flex flex-grow justify-center items-center relative">  
            <div class="relative w-full max-w-[90%] mb-16 mt-8">  
                <img  
                    class="w-full h-auto opacity-40 rounded-3xl"  
                    src="@/assets/img1.png"  
                    alt="img1"  
                >  
            </div>  

            <!-- Text Overlay -->  
            <div class="absolute inset-0 flex flex-col justify-center items-center text-center p-4">  
                <h1 data-aos="zoom-in" data-aos-duration="2000" class="font-bold text-[#C39E5C] tracking-wide mb-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">  
                    With Great Intelligence  
                </h1>  
                <h2 data-aos="zoom-in" data-aos-duration="2000" class="font-light text-[#C39E5C] mt-2 tracking-wider text-lg sm:text-xl md:text-2xl lg:text-3xl">  
                    Comes a Great Many Tasks  
                </h2>  

            </div>  
        </div>  

        <!-- Footer -->  
        <footer class="bg-[#91091E] w-full h-20 flex items-center justify-center">  
            <p class="text-[#C39E5C] text-sm sm:text-base">© 2025 RC TANK F-4. All rights reserved.</p>  
        </footer>  
    </section>  
</template>  

<script setup>  
</script>