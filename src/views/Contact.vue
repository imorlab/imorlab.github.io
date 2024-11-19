<template>
  <div class="section-container min-h-screen py-20">
    <h2 class="text-3xl font-bold mb-8 text-accent">Contacto</h2>
    <div class="max-w-2xl mx-auto">
      <p class="text-gray-300 mb-8">
        ¿Interesado en trabajar juntos? Ponte en contacto conmigo a través del siguiente formulario
        o mediante mis redes sociales.
      </p>
      
      <form class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-md focus:outline-none focus:border-accent text-white"
            required
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-md focus:outline-none focus:border-accent text-white"
            required
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            class="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-md focus:outline-none focus:border-accent text-white"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="btn-primary w-full"
        >
          Enviar mensaje
        </button>
      </form>

      <div class="mt-12">
        <h3 class="text-xl font-semibold mb-4 text-accent">Redes Sociales</h3>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-300 hover:text-accent transition-colors duration-300">
            LinkedIn
          </a>
          <a href="#" class="text-gray-300 hover:text-accent transition-colors duration-300">
            GitHub
          </a>
          <a href="#" class="text-gray-300 hover:text-accent transition-colors duration-300">
            Twitter
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
