<template>
  <div class="min-h-screen relative">
    <!-- PixelBlast Background -->
    <div class="fixed inset-0 z-0">
      <PixelBlast
        :variant="selectedVariant"
        :pixel-size="pixelSize"
        :color="color"
        :pattern-scale="patternScale"
        :pattern-density="patternDensity"
        :liquid="liquid"
        :liquid-strength="liquidStrength"
        :liquid-radius="liquidRadius"
        :enable-ripples="enableRipples"
        :ripple-intensity-scale="rippleIntensity"
        :ripple-speed="rippleSpeed"
        :speed="speed"
        :edge-fade="edgeFade"
        :transparent="true"
      />
    </div>

    <!-- Controls Panel -->
    <div class="relative z-10 p-8">
      <div class=" mx-auto">
        <div class="bg-primary/80 backdrop-blur-md rounded-lg p-6 border border-accent/20 shadow-2xl">
          <h1 class="text-3xl font-bold text-accent mb-6">PixelBlast Demo</h1>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Variant Selection -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Shape Variant</label>
              <select 
                v-model="selectedVariant" 
                class="w-full bg-secondary border border-accent/20 rounded px-3 py-2 text-gray-300"
              >
                <option value="square">Square</option>
                <option value="circle">Circle</option>
                <option value="triangle">Triangle</option>
                <option value="diamond">Diamond</option>
              </select>
            </div>

            <!-- Color Picker -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Color</label>
              <input 
                v-model="color" 
                type="color" 
                class="w-full h-10 bg-secondary border border-accent/20 rounded cursor-pointer"
              />
            </div>

            <!-- Pixel Size -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">
                Pixel Size: {{ pixelSize }}
              </label>
              <input 
                v-model.number="pixelSize" 
                type="range" 
                min="1" 
                max="10" 
                step="0.5"
                class="w-full"
              />
            </div>

            <!-- Pattern Scale -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">
                Pattern Scale: {{ patternScale }}
              </label>
              <input 
                v-model.number="patternScale" 
                type="range" 
                min="0.5" 
                max="5" 
                step="0.1"
                class="w-full"
              />
            </div>

            <!-- Pattern Density -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">
                Pattern Density: {{ patternDensity.toFixed(2) }}
              </label>
              <input 
                v-model.number="patternDensity" 
                type="range" 
                min="0" 
                max="2" 
                step="0.1"
                class="w-full"
              />
            </div>

            <!-- Speed -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">
                Animation Speed: {{ speed }}
              </label>
              <input 
                v-model.number="speed" 
                type="range" 
                min="0" 
                max="2" 
                step="0.1"
                class="w-full"
              />
            </div>

            <!-- Edge Fade -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">
                Edge Fade: {{ edgeFade.toFixed(2) }}
              </label>
              <input 
                v-model.number="edgeFade" 
                type="range" 
                min="0" 
                max="1" 
                step="0.05"
                class="w-full"
              />
            </div>

            <!-- Ripple Speed -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">
                Ripple Speed: {{ rippleSpeed.toFixed(2) }}
              </label>
              <input 
                v-model.number="rippleSpeed" 
                type="range" 
                min="0.1" 
                max="1" 
                step="0.05"
                class="w-full"
              />
            </div>

            <!-- Ripple Intensity -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">
                Ripple Intensity: {{ rippleIntensity }}
              </label>
              <input 
                v-model.number="rippleIntensity" 
                type="range" 
                min="0" 
                max="3" 
                step="0.1"
                class="w-full"
              />
            </div>
          </div>

          <!-- Toggles -->
          <div class="mt-6 space-y-3">
            <label class="flex items-center gap-3 cursor-pointer">
              <input 
                v-model="enableRipples" 
                type="checkbox" 
                class="w-5 h-5 text-accent bg-secondary border-accent/20 rounded focus:ring-accent"
              />
              <span class="text-gray-300">Enable Ripples (Click to create ripples)</span>
            </label>

            <label class="flex items-center gap-3 cursor-pointer">
              <input 
                v-model="liquid" 
                type="checkbox" 
                class="w-5 h-5 text-accent bg-secondary border-accent/20 rounded focus:ring-accent"
              />
              <span class="text-gray-300">Enable Liquid Effect (Move mouse to distort)</span>
            </label>
          </div>

          <!-- Liquid Controls (shown only when liquid is enabled) -->
          <div v-if="liquid" class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-accent/20">
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">
                Liquid Strength: {{ liquidStrength.toFixed(2) }}
              </label>
              <input 
                v-model.number="liquidStrength" 
                type="range" 
                min="0" 
                max="0.5" 
                step="0.01"
                class="w-full"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">
                Liquid Radius: {{ liquidRadius.toFixed(1) }}
              </label>
              <input 
                v-model.number="liquidRadius" 
                type="range" 
                min="0.5" 
                max="3" 
                step="0.1"
                class="w-full"
              />
            </div>
          </div>

          <!-- Instructions -->
          <div class="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <h3 class="text-sm font-semibold text-accent mb-2">Instrucciones:</h3>
            <ul class="text-sm text-gray-300 space-y-1">
              <li>• Haz clic en el fondo para crear ondas (si Ripples está activado)</li>
              <li>• Mueve el ratón para ver el efecto líquido (si Liquid está activado)</li>
              <li>• Ajusta los controles para personalizar el efecto</li>
            </ul>
          </div>

          <!-- Reset Button -->
          <div class="mt-6">
            <button 
              @click="resetToDefaults"
              class="w-full bg-accent hover:bg-accent/80 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Reset to Defaults
            </button>
          </div>
        </div>

        <!-- Sample Content -->
        <div class="mt-8 bg-primary/60 backdrop-blur-md rounded-lg p-8 border border-accent/20">
          <h2 class="text-2xl font-bold text-accent mb-4">Sample Content</h2>
          <p class="text-gray-300 mb-4">
            Este es un ejemplo de cómo se vería el contenido sobre el fondo PixelBlast.
            El efecto es completamente interactivo y se puede personalizar con los controles de arriba.
          </p>
          <p class="text-gray-300">
            Puedes usar este componente como fondo en cualquier vista de tu portfolio.
            Es perfecto para añadir un toque moderno y dinámico a tu sitio web.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PixelBlast from '../components/PixelBlast.vue';

// Default values
const defaults = {
  variant: 'circle',
  pixelSize: 3,
  color: '#B19EEF',
  patternScale: 2,
  patternDensity: 1,
  liquid: true,
  liquidStrength: 0.1,
  liquidRadius: 1,
  enableRipples: true,
  rippleIntensity: 1,
  rippleSpeed: 0.3,
  speed: 0.5,
  edgeFade: 0.5
};

// Reactive state
const selectedVariant = ref(defaults.variant);
const pixelSize = ref(defaults.pixelSize);
const color = ref(defaults.color);
const patternScale = ref(defaults.patternScale);
const patternDensity = ref(defaults.patternDensity);
const liquid = ref(defaults.liquid);
const liquidStrength = ref(defaults.liquidStrength);
const liquidRadius = ref(defaults.liquidRadius);
const enableRipples = ref(defaults.enableRipples);
const rippleIntensity = ref(defaults.rippleIntensity);
const rippleSpeed = ref(defaults.rippleSpeed);
const speed = ref(defaults.speed);
const edgeFade = ref(defaults.edgeFade);

const resetToDefaults = () => {
  selectedVariant.value = defaults.variant;
  pixelSize.value = defaults.pixelSize;
  color.value = defaults.color;
  patternScale.value = defaults.patternScale;
  patternDensity.value = defaults.patternDensity;
  liquid.value = defaults.liquid;
  liquidStrength.value = defaults.liquidStrength;
  liquidRadius.value = defaults.liquidRadius;
  enableRipples.value = defaults.enableRipples;
  rippleIntensity.value = defaults.rippleIntensity;
  rippleSpeed.value = defaults.rippleSpeed;
  speed.value = defaults.speed;
  edgeFade.value = defaults.edgeFade;
};
</script>

<style scoped>
input[type="range"] {
  accent-color: rgb(var(--color-accent));
}
</style>
