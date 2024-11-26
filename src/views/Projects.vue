<template>
  <div class="min-h-[calc(100vh-6rem)] pb-20 flex flex-col items-center justify-center px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-accent mb-4">{{ $t('projects.title') }}</h2>
      <p class="text-xl text-gray-400 mb-2">{{ $t('projects.experience') }}</p>
      <p class="text-lg text-gray-400">{{ $t('projects.description') }}</p>
    </div>

    <!-- MacBook Pro Container -->
    <div class="relative w-full max-w-4xl mx-auto perspective">
      <!-- MacBook Body -->
      <div class="macbook">
        <!-- Screen -->
        <div class="screen-container">
          <!-- Camera and Notch -->
          <div class="notch">
            <div class="camera"></div>
          </div>
          <!-- Screen Content -->
          <div class="screen">
            <!-- Terminal Window -->
            <div class="terminal">
              <!-- Terminal Header -->
              <div class="terminal-header">
                <div class="terminal-buttons">
                  <div class="close"></div>
                  <div class="minimize"></div>
                  <div class="maximize"></div>
                </div>
                <div class="terminal-title">portfolio ~ projects</div>
              </div>
              <!-- Terminal Content -->
              <div class="terminal-content">
                <!-- Professional Experience -->
                <div class="command-block">
                  <div class="command">
                    <span class="prompt">$</span>
                    <span class="typing-text">ls professional-experience/</span>
                  </div>
                  <div class="output">{{ $t('projects.professionalWork') }}</div>
                </div>
                <!-- Personal Projects -->
                <div class="command-block">
                  <div class="command">
                    <span class="prompt">$</span>
                    <span class="typing-text-2">ls personal-projects/</span>
                  </div>
                  <div class="output">{{ $t('projects.personalProjects') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Base -->
        <div class="base">
          <div class="base-top"></div>
          <div class="base-bottom"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Animación del MacBook
  gsap.from('.macbook', {
    rotateX: 45,
    duration: 1.5,
    ease: 'power2.out'
  })

  // Animaciones de typing
  gsap.from('.typing-text', {
    width: 0,
    duration: 1.5,
    ease: 'steps(25)',
    delay: 1
  })

  gsap.from('.typing-text-2', {
    width: 0,
    duration: 1.5,
    ease: 'steps(20)',
    delay: 2.5
  })
})
</script>

<style scoped>
.perspective {
  perspective: 1000px;
}

.macbook {
  @apply relative w-full aspect-[16/10];
  transform-style: preserve-3d;
  transform: rotateX(5deg);
}

.screen-container {
  @apply relative w-full h-full bg-gray-800 rounded-[20px] p-[2%] shadow-2xl;
  border: 2px solid #2a2a2a;
  background: linear-gradient(to bottom, #424242, #363636);
}

.notch {
  @apply absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-[20px] bg-gray-800 rounded-b-lg z-10;
  border: 2px solid #2a2a2a;
  border-top: none;
  background: linear-gradient(to bottom, #363636, #2a2a2a);
}

.camera {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full;
  background: #1a1a1a;
  box-shadow: inset 0 0 2px rgba(255,255,255,0.2);
}

.screen {
  @apply w-full h-full bg-gray-950 rounded-[10px] overflow-hidden;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
}

.terminal {
  @apply h-full flex flex-col;
}

.terminal-header {
  @apply flex items-center px-4 py-2 bg-gray-900 border-b border-gray-800;
  background: linear-gradient(to bottom, #363636, #2a2a2a);
}

.terminal-buttons {
  @apply flex gap-2;
}

.terminal-buttons > div {
  @apply w-3 h-3 rounded-full;
  box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
}

.close { 
  @apply bg-red-500;
  background: linear-gradient(to bottom, #ff5f57, #ff3b30);
}

.minimize { 
  @apply bg-yellow-500;
  background: linear-gradient(to bottom, #ffbd2e, #f7b529);
}

.maximize { 
  @apply bg-green-500;
  background: linear-gradient(to bottom, #28c940, #24b238);
}

.terminal-title {
  @apply flex-1 text-center text-sm text-gray-400 font-mono;
}

.terminal-content {
  @apply p-4 font-mono text-sm space-y-4 flex-1;
}

.command-block {
  @apply space-y-2;
}

.command {
  @apply flex items-center text-accent;
}

.prompt {
  @apply mr-2;
}

.output {
  @apply text-gray-400 pl-4;
}

.typing-text, .typing-text-2 {
  @apply inline-block overflow-hidden border-r-2 whitespace-nowrap;
  animation: blink 0.75s step-end infinite;
}

.base {
  @apply absolute -bottom-3 left-1/2 transform -translate-x-1/2;
  width: 120%;
}

.base-top {
  @apply h-3 bg-gray-800 rounded-b-lg;
  border: 2px solid #2a2a2a;
  border-top: none;
  background: linear-gradient(to bottom, #363636, #2a2a2a);
}

.base-bottom {
  @apply h-1 bg-gray-700 rounded-lg mx-auto;
  width: 20%;
  background: linear-gradient(to bottom, #2a2a2a, #1a1a1a);
}

@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: currentColor }
}
</style>