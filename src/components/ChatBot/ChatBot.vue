<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Chat Toggle Button - Capa independiente -->
    <div class="absolute bottom-0 right-0 z-0">
      <!-- Mensaje de ayuda flotante -->
      <Transition name="help-message">
        <div
          v-if="!isOpen && showHelpMessage"
          class="absolute bottom-16 right-0 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 whitespace-nowrap"
        >
          <div class="text-sm font-medium">{{ $t('chatbot.helpMessage') }}</div>
          <!-- Flecha apuntando al botón -->
          <div class="absolute -bottom-1 right-4 w-2 h-2 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-600 transform rotate-45"></div>
        </div>
      </Transition>
      
      <Transition name="button-fade" appear>
        <button
          v-if="!isOpen"
          @click="toggleChat"
          class="bg-accent hover:bg-accent/90 text-white dark:text-gray-900 p-2 rounded-full shadow-lg transition-all duration-500 ease-out hover:scale-110 transform"
          :class="{ 'animate-pulse': hasNewMessage }"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 32 32"><g fill="none"><path fill="url(#f2128idd)" d="M22.05 30H9.95C6.66 30 4 27.34 4 24.05V12.03C4 8.7 6.7 6 10.03 6h11.95C25.3 6 28 8.7 28 12.03v12.03c0 3.28-2.66 5.94-5.95 5.94Z"/><path fill="url(#f2128id0)" d="M4 12a6 6 0 0 1 6-6h2v24h-2a6 6 0 0 1-6-6V12Z"/><path fill="url(#f2128id1)" d="M4 24h24a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6Z"/><path fill="url(#f2128ide)" d="M20 6h2a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6h-2V6Z"/><path stroke="url(#f2128id2)" stroke-miterlimit="10" d="M3.5 3.95v9.1"/><path fill="url(#f2128id3)" d="M4 12v11c-1.1 0-2-.9-2-1.998v-7.004C2 12.9 2.9 12 4 12Z"/><path fill="url(#f2128id4)" d="M22.753 18.5H9.247A4.257 4.257 0 0 1 5 14.25A4.257 4.257 0 0 1 9.247 10h13.506A4.257 4.257 0 0 1 27 14.25c0 2.331-1.918 4.25-4.247 4.25Z"/><path fill="url(#f2128id5)" d="M18.528 26h-5.056C12.66 26 12 25.326 12 24.5s.66-1.5 1.472-1.5h5.056c.811 0 1.472.674 1.472 1.5s-.66 1.5-1.472 1.5Z"/><path fill="url(#f2128idf)" d="M3.5 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"/><path stroke="url(#f2128id6)" stroke-miterlimit="10" d="M28.5 4v9.09"/><path fill="url(#f2128idg)" d="M28.5 5.1a1.55 1.55 0 1 0 0-3.1a1.55 1.55 0 0 0 0 3.1Z"/><rect width="4.5" height="6" x="7" y="12" fill="url(#f2128idh)" rx="2"/><rect width="4.5" height="6" x="18.5" y="12" fill="url(#f2128idi)" rx="2"/><rect width="10" height="3" x="11" y="3" fill="url(#f2128id7)" rx="1.5"/><rect width="10" height="3" x="11" y="3" fill="url(#f2128idj)" rx="1.5"/><path fill="url(#f2128id8)" d="M28 22.94V11.93c1.1 0 2 .9 2 2v7.01c0 1.1-.9 2-2 2Z"/><rect width="2.5" height="5" x="9" y="12" fill="url(#f2128id9)" rx="1.25"/><rect width="2.5" height="5" x="9" y="12" fill="url(#f2128idk)" rx="1.25"/><rect width="2.5" height="5" x="20.5" y="12" fill="url(#f2128ida)" rx="1.25"/><rect width="2.5" height="5" x="20.5" y="12" fill="url(#f2128idl)" rx="1.25"/><g filter="url(#f2128idp)"><path stroke="url(#f2128idb)" stroke-width=".25" d="M3.625 5v6"/></g><g filter="url(#f2128idq)"><path stroke="url(#f2128idc)" stroke-width=".25" d="M28.625 5v6"/></g><ellipse cx="29" cy="13.5" fill="url(#f2128idm)" rx="1" ry="1.5"/><ellipse cx="29" cy="16.5" fill="url(#f2128idn)" rx="1" ry="4.5"/><path fill="url(#f2128ido)" fill-rule="evenodd" d="M19.776 3.025a1.501 1.501 0 0 1 1.199 1.2a1 1 0 1 1-1.2-1.2Z" clip-rule="evenodd"/><defs><linearGradient id="f2128id0" x1="12" x2="4" y1="18" y2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#D5B2C0" stop-opacity="0"/><stop offset="1" stop-color="#B4878D"/></linearGradient><linearGradient id="f2128id1" x1="16" x2="16" y1="27" y2="31" gradientUnits="userSpaceOnUse"><stop stop-color="#B17EDB" stop-opacity="0"/><stop offset="1" stop-color="#A56BD6"/></linearGradient><linearGradient id="f2128id2" x1="4" x2="4" y1="3.95" y2="13.05" gradientUnits="userSpaceOnUse"><stop stop-color="#EA248A"/><stop offset="1" stop-color="#DF2232"/></linearGradient><linearGradient id="f2128id3" x1="3" x2="3" y1="12" y2="23" gradientUnits="userSpaceOnUse"><stop stop-color="#E93273"/><stop offset="1" stop-color="#D21844"/></linearGradient><linearGradient id="f2128id4" x1="15.998" x2="15.998" y1="17.701" y2="11.391" gradientUnits="userSpaceOnUse"><stop offset=".006" stop-color="#443E75"/><stop offset="1" stop-color="#2F1A3B"/></linearGradient><linearGradient id="f2128id5" x1="15.998" x2="15.998" y1="25.686" y2="22.889" gradientUnits="userSpaceOnUse"><stop offset=".006" stop-color="#39325E"/><stop offset="1" stop-color="#2B1831"/></linearGradient><linearGradient id="f2128id6" x1="29" x2="29" y1="4" y2="13.09" gradientUnits="userSpaceOnUse"><stop stop-color="#EA248A"/><stop offset="1" stop-color="#DF2232"/></linearGradient><linearGradient id="f2128id7" x1="16" x2="14.5" y1="3" y2="6.5" gradientUnits="userSpaceOnUse"><stop stop-color="#FFCE2B"/><stop offset="1" stop-color="#D9862D"/></linearGradient><linearGradient id="f2128id8" x1="29" x2="29" y1="11.93" y2="22.94" gradientUnits="userSpaceOnUse"><stop stop-color="#FF30AA"/><stop offset="1" stop-color="#FF2353"/></linearGradient><linearGradient id="f2128id9" x1="11.5" x2="9" y1="14" y2="14" gradientUnits="userSpaceOnUse"><stop stop-color="#29B6FE"/><stop offset="1" stop-color="#1769A8"/></linearGradient><linearGradient id="f2128ida" x1="23" x2="20.5" y1="14" y2="14" gradientUnits="userSpaceOnUse"><stop stop-color="#29B6FE"/><stop offset="1" stop-color="#1769A8"/></linearGradient><linearGradient id="f2128idb" x1="3.5" x2="3.5" y1="7" y2="9" gradientUnits="userSpaceOnUse"><stop stop-color="#FF96CB"/><stop offset="1" stop-color="#FF6DB7" stop-opacity="0"/></linearGradient><linearGradient id="f2128idc" x1="28.5" x2="28.5" y1="7" y2="9" gradientUnits="userSpaceOnUse"><stop stop-color="#FF96CB"/><stop offset="1" stop-color="#FF6DB7" stop-opacity="0"/></linearGradient><radialGradient id="f2128idd" cx="0" cy="0" r="1" gradientTransform="rotate(141.911 10.515 10.065) scale(23.5053)" gradientUnits="userSpaceOnUse"><stop stop-color="#EEEBF0"/><stop offset=".493" stop-color="#D1BEE3"/><stop offset="1" stop-color="#D0BCE2"/></radialGradient><radialGradient id="f2128ide" cx="0" cy="0" r="1" gradientTransform="matrix(5 -.5 1.9111 19.11108 25 13.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#F0EAF6"/><stop offset="1" stop-color="#E7E0EF" stop-opacity="0"/></radialGradient><radialGradient id="f2128idf" cx="0" cy="0" r="1" gradientTransform="matrix(-.5 2 -2 -.5 4 3)" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6C82"/><stop offset=".441" stop-color="#FF2455"/><stop offset="1" stop-color="#D9206C"/></radialGradient><radialGradient id="f2128idg" cx="0" cy="0" r="1" gradientTransform="rotate(104.036 13.324 12.844) scale(2.13027)" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6C82"/><stop offset=".441" stop-color="#FF2455"/><stop offset="1" stop-color="#D9206C"/></radialGradient><radialGradient id="f2128idh" cx="0" cy="0" r="1" gradientTransform="matrix(-2.5 .5 -.68428 -3.42136 9.5 15)" gradientUnits="userSpaceOnUse"><stop stop-color="#322649"/><stop offset="1" stop-color="#342950" stop-opacity="0"/></radialGradient><radialGradient id="f2128idi" cx="0" cy="0" r="1" gradientTransform="matrix(-2.5 .5 -.68428 -3.42136 21 15)" gradientUnits="userSpaceOnUse"><stop stop-color="#322649"/><stop offset="1" stop-color="#342950" stop-opacity="0"/></radialGradient><radialGradient id="f2128idj" cx="0" cy="0" r="1" gradientTransform="matrix(0 3 -10 0 16 4)" gradientUnits="userSpaceOnUse"><stop offset=".431" stop-color="#CA7E29" stop-opacity="0"/><stop offset="1" stop-color="#673F13"/></radialGradient><radialGradient id="f2128idk" cx="0" cy="0" r="1" gradientTransform="matrix(0 2.5 -1.14393 0 11 13.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#54C8FF"/><stop offset="1" stop-color="#54C8FF" stop-opacity="0"/></radialGradient><radialGradient id="f2128idl" cx="0" cy="0" r="1" gradientTransform="matrix(0 2.5 -1.14393 0 22.5 13.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#54C8FF"/><stop offset="1" stop-color="#54C8FF" stop-opacity="0"/></radialGradient><radialGradient id="f2128idm" cx="0" cy="0" r="1" gradientTransform="matrix(0 1.5 -1 0 29 13.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#FF72C1"/><stop offset="1" stop-color="#FF6EBF" stop-opacity="0"/></radialGradient><radialGradient id="f2128idn" cx="0" cy="0" r="1" gradientTransform="matrix(0 4.5 -.55944 0 29 16.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#FF4B9C"/><stop offset="1" stop-color="#FF73C1" stop-opacity="0"/></radialGradient><radialGradient id="f2128ido" cx="0" cy="0" r="1" gradientTransform="rotate(90 8 12)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFEA60"/><stop offset="1" stop-color="#FFEF66" stop-opacity="0"/></radialGradient><filter id="f2128idp" width="1.25" height="7" x="3" y="4.5" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_31_1501" stdDeviation=".25"/></filter><filter id="f2128idq" width="1.25" height="7" x="28" y="4.5" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_31_1501" stdDeviation=".25"/></filter></defs></g></svg>
          <!-- <Icon icon="heroicons:face-smile" class="w-6 h-6 transition-transform duration-300" /> -->
        </button>
      </Transition>
    </div>

    <!-- Chat Window - Capa superior independiente -->
    <div class="absolute bottom-0 right-0 z-10">
      <Transition name="chat-window" appear>
        <div
          v-if="isOpen"
          class="bg-primary/95 backdrop-blur-md border border-accent/20 rounded-2xl shadow-2xl w-80 h-96 flex flex-col overflow-hidden transition-all duration-500 ease-out"
          :class="isDark ? 'bg-gray-900/95' : 'bg-white/95'"
        >
        <!-- Header -->
      <div class="bg-accent/10 p-4 border-b border-accent/20 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
            <!-- <Icon icon="heroicons:user-circle" class="w-6 h-6 text-accent" /> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><g fill="none"><path fill="url(#f2128idd)" d="M22.05 30H9.95C6.66 30 4 27.34 4 24.05V12.03C4 8.7 6.7 6 10.03 6h11.95C25.3 6 28 8.7 28 12.03v12.03c0 3.28-2.66 5.94-5.95 5.94Z"/><path fill="url(#f2128id0)" d="M4 12a6 6 0 0 1 6-6h2v24h-2a6 6 0 0 1-6-6V12Z"/><path fill="url(#f2128id1)" d="M4 24h24a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6Z"/><path fill="url(#f2128ide)" d="M20 6h2a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6h-2V6Z"/><path stroke="url(#f2128id2)" stroke-miterlimit="10" d="M3.5 3.95v9.1"/><path fill="url(#f2128id3)" d="M4 12v11c-1.1 0-2-.9-2-1.998v-7.004C2 12.9 2.9 12 4 12Z"/><path fill="url(#f2128id4)" d="M22.753 18.5H9.247A4.257 4.257 0 0 1 5 14.25A4.257 4.257 0 0 1 9.247 10h13.506A4.257 4.257 0 0 1 27 14.25c0 2.331-1.918 4.25-4.247 4.25Z"/><path fill="url(#f2128id5)" d="M18.528 26h-5.056C12.66 26 12 25.326 12 24.5s.66-1.5 1.472-1.5h5.056c.811 0 1.472.674 1.472 1.5s-.66 1.5-1.472 1.5Z"/><path fill="url(#f2128idf)" d="M3.5 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"/><path stroke="url(#f2128id6)" stroke-miterlimit="10" d="M28.5 4v9.09"/><path fill="url(#f2128idg)" d="M28.5 5.1a1.55 1.55 0 1 0 0-3.1a1.55 1.55 0 0 0 0 3.1Z"/><rect width="4.5" height="6" x="7" y="12" fill="url(#f2128idh)" rx="2"/><rect width="4.5" height="6" x="18.5" y="12" fill="url(#f2128idi)" rx="2"/><rect width="10" height="3" x="11" y="3" fill="url(#f2128id7)" rx="1.5"/><rect width="10" height="3" x="11" y="3" fill="url(#f2128idj)" rx="1.5"/><path fill="url(#f2128id8)" d="M28 22.94V11.93c1.1 0 2 .9 2 2v7.01c0 1.1-.9 2-2 2Z"/><rect width="2.5" height="5" x="9" y="12" fill="url(#f2128id9)" rx="1.25"/><rect width="2.5" height="5" x="9" y="12" fill="url(#f2128idk)" rx="1.25"/><rect width="2.5" height="5" x="20.5" y="12" fill="url(#f2128ida)" rx="1.25"/><rect width="2.5" height="5" x="20.5" y="12" fill="url(#f2128idl)" rx="1.25"/><g filter="url(#f2128idp)"><path stroke="url(#f2128idb)" stroke-width=".25" d="M3.625 5v6"/></g><g filter="url(#f2128idq)"><path stroke="url(#f2128idc)" stroke-width=".25" d="M28.625 5v6"/></g><ellipse cx="29" cy="13.5" fill="url(#f2128idm)" rx="1" ry="1.5"/><ellipse cx="29" cy="16.5" fill="url(#f2128idn)" rx="1" ry="4.5"/><path fill="url(#f2128ido)" fill-rule="evenodd" d="M19.776 3.025a1.501 1.501 0 0 1 1.199 1.2a1 1 0 1 1-1.2-1.2Z" clip-rule="evenodd"/><defs><linearGradient id="f2128id0" x1="12" x2="4" y1="18" y2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#D5B2C0" stop-opacity="0"/><stop offset="1" stop-color="#B4878D"/></linearGradient><linearGradient id="f2128id1" x1="16" x2="16" y1="27" y2="31" gradientUnits="userSpaceOnUse"><stop stop-color="#B17EDB" stop-opacity="0"/><stop offset="1" stop-color="#A56BD6"/></linearGradient><linearGradient id="f2128id2" x1="4" x2="4" y1="3.95" y2="13.05" gradientUnits="userSpaceOnUse"><stop stop-color="#EA248A"/><stop offset="1" stop-color="#DF2232"/></linearGradient><linearGradient id="f2128id3" x1="3" x2="3" y1="12" y2="23" gradientUnits="userSpaceOnUse"><stop stop-color="#E93273"/><stop offset="1" stop-color="#D21844"/></linearGradient><linearGradient id="f2128id4" x1="15.998" x2="15.998" y1="17.701" y2="11.391" gradientUnits="userSpaceOnUse"><stop offset=".006" stop-color="#443E75"/><stop offset="1" stop-color="#2F1A3B"/></linearGradient><linearGradient id="f2128id5" x1="15.998" x2="15.998" y1="25.686" y2="22.889" gradientUnits="userSpaceOnUse"><stop offset=".006" stop-color="#39325E"/><stop offset="1" stop-color="#2B1831"/></linearGradient><linearGradient id="f2128id6" x1="29" x2="29" y1="4" y2="13.09" gradientUnits="userSpaceOnUse"><stop stop-color="#EA248A"/><stop offset="1" stop-color="#DF2232"/></linearGradient><linearGradient id="f2128id7" x1="16" x2="14.5" y1="3" y2="6.5" gradientUnits="userSpaceOnUse"><stop stop-color="#FFCE2B"/><stop offset="1" stop-color="#D9862D"/></linearGradient><linearGradient id="f2128id8" x1="29" x2="29" y1="11.93" y2="22.94" gradientUnits="userSpaceOnUse"><stop stop-color="#FF30AA"/><stop offset="1" stop-color="#FF2353"/></linearGradient><linearGradient id="f2128id9" x1="11.5" x2="9" y1="14" y2="14" gradientUnits="userSpaceOnUse"><stop stop-color="#29B6FE"/><stop offset="1" stop-color="#1769A8"/></linearGradient><linearGradient id="f2128ida" x1="23" x2="20.5" y1="14" y2="14" gradientUnits="userSpaceOnUse"><stop stop-color="#29B6FE"/><stop offset="1" stop-color="#1769A8"/></linearGradient><linearGradient id="f2128idb" x1="3.5" x2="3.5" y1="7" y2="9" gradientUnits="userSpaceOnUse"><stop stop-color="#FF96CB"/><stop offset="1" stop-color="#FF6DB7" stop-opacity="0"/></linearGradient><linearGradient id="f2128idc" x1="28.5" x2="28.5" y1="7" y2="9" gradientUnits="userSpaceOnUse"><stop stop-color="#FF96CB"/><stop offset="1" stop-color="#FF6DB7" stop-opacity="0"/></linearGradient><radialGradient id="f2128idd" cx="0" cy="0" r="1" gradientTransform="rotate(141.911 10.515 10.065) scale(23.5053)" gradientUnits="userSpaceOnUse"><stop stop-color="#EEEBF0"/><stop offset=".493" stop-color="#D1BEE3"/><stop offset="1" stop-color="#D0BCE2"/></radialGradient><radialGradient id="f2128ide" cx="0" cy="0" r="1" gradientTransform="matrix(5 -.5 1.9111 19.11108 25 13.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#F0EAF6"/><stop offset="1" stop-color="#E7E0EF" stop-opacity="0"/></radialGradient><radialGradient id="f2128idf" cx="0" cy="0" r="1" gradientTransform="matrix(-.5 2 -2 -.5 4 3)" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6C82"/><stop offset=".441" stop-color="#FF2455"/><stop offset="1" stop-color="#D9206C"/></radialGradient><radialGradient id="f2128idg" cx="0" cy="0" r="1" gradientTransform="rotate(104.036 13.324 12.844) scale(2.13027)" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6C82"/><stop offset=".441" stop-color="#FF2455"/><stop offset="1" stop-color="#D9206C"/></radialGradient><radialGradient id="f2128idh" cx="0" cy="0" r="1" gradientTransform="matrix(-2.5 .5 -.68428 -3.42136 9.5 15)" gradientUnits="userSpaceOnUse"><stop stop-color="#322649"/><stop offset="1" stop-color="#342950" stop-opacity="0"/></radialGradient><radialGradient id="f2128idi" cx="0" cy="0" r="1" gradientTransform="matrix(-2.5 .5 -.68428 -3.42136 21 15)" gradientUnits="userSpaceOnUse"><stop stop-color="#322649"/><stop offset="1" stop-color="#342950" stop-opacity="0"/></radialGradient><radialGradient id="f2128idj" cx="0" cy="0" r="1" gradientTransform="matrix(0 3 -10 0 16 4)" gradientUnits="userSpaceOnUse"><stop offset=".431" stop-color="#CA7E29" stop-opacity="0"/><stop offset="1" stop-color="#673F13"/></radialGradient><radialGradient id="f2128idk" cx="0" cy="0" r="1" gradientTransform="matrix(0 2.5 -1.14393 0 11 13.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#54C8FF"/><stop offset="1" stop-color="#54C8FF" stop-opacity="0"/></radialGradient><radialGradient id="f2128idl" cx="0" cy="0" r="1" gradientTransform="matrix(0 2.5 -1.14393 0 22.5 13.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#54C8FF"/><stop offset="1" stop-color="#54C8FF" stop-opacity="0"/></radialGradient><radialGradient id="f2128idm" cx="0" cy="0" r="1" gradientTransform="matrix(0 1.5 -1 0 29 13.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#FF72C1"/><stop offset="1" stop-color="#FF6EBF" stop-opacity="0"/></radialGradient><radialGradient id="f2128idn" cx="0" cy="0" r="1" gradientTransform="matrix(0 4.5 -.55944 0 29 16.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#FF4B9C"/><stop offset="1" stop-color="#FF73C1" stop-opacity="0"/></radialGradient><radialGradient id="f2128ido" cx="0" cy="0" r="1" gradientTransform="rotate(90 8 12)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFEA60"/><stop offset="1" stop-color="#FFEF66" stop-opacity="0"/></radialGradient><filter id="f2128idp" width="1.25" height="7" x="3" y="4.5" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_31_1501" stdDeviation=".25"/></filter><filter id="f2128idq" width="1.25" height="7" x="28" y="4.5" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_31_1501" stdDeviation=".25"/></filter></defs></g></svg>

          </div>
          <div>
            <h3 class="font-semibold text-sm text-accent">{{ $t('chatbot.title') }}</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t('chatbot.subtitle') }}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="clearConversation"
            class="p-1 bg-gray-100/10 hover:bg-red-400/20 text-gray-400 hover:text-red-500 rounded-full transition-colors duration-200"
            :title="$t('chatbot.clearChat')"
          >
            <Icon icon="heroicons:trash" class="w-5 h-5" />
          </button>
          <button
            @click="toggleChat"
            class="p-1 bg-gray-100/10 hover:bg-red-400/20 text-gray-400 hover:text-red-500 rounded-full transition-colors duration-200"
          >
            <Icon icon="heroicons:x-mark" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Messages Container -->
      <div
        ref="messagesContainer"
        class="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent"
      >
        <!-- Welcome Message -->
        <div v-if="messages.length === 0" class="space-y-4">
          <div class="text-center">
            <Icon icon="heroicons:chat-bubble-left-right" class="w-12 h-12 text-accent mx-auto mb-3" />
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
              {{ $t('chatbot.welcome') }}
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              {{ $t('chatbot.welcomeSubtitle') }}
            </p>
          </div>
          
          <!-- Quick Actions for Welcome State -->
          <div class="flex flex-wrap gap-2 justify-center">
            <button
              v-for="action in quickActions"
              :key="action.key"
              @click="handleQuickAction(action.key)"
              class="px-4 py-2 text-sm bg-accent/10 hover:bg-accent/20 text-accent rounded-full transition-colors duration-200 border border-accent/20 hover:border-accent/30"
            >
              {{ $t(`chatbot.quickActions.${action.key}`) }}
            </button>
          </div>
        </div>

        <!-- Messages -->
        <div
          v-for="message in messages"
          :key="message.id"
          class="flex"
          :class="message.type === 'user' ? 'text-right justify-end' : 'text-left justify-start'"
        >
          <div
            class="max-w-[85%] p-3 rounded-2xl"
            :class="
              message.type === 'user'
                ? 'bg-gradient-to-r from-accent/50 to-accent text-white dark:text-gray-900'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            "
          >
            <div 
              class="text-sm leading-relaxed"
              :class="message.type === 'bot' ? 'markdown-content' : 'whitespace-pre-wrap'"
              v-html="message.content"
            ></div>
            <!-- <div class="text-xs opacity-70 mt-2">{{ formatTime(message.timestamp) }}</div> -->
          </div>
        </div>

        <!-- Typing Indicator -->
        <div v-if="isTyping" class="flex justify-start">
          <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl">
            <div class="flex space-x-1">
              <div class="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
              <div class="w-2 h-2 bg-accent rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
              <div class="w-2 h-2 bg-accent rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Input Area -->
      <div class="p-4 border-t border-accent/20">
        <div class="flex gap-2">
          <input
            v-model="currentMessage"
            @keypress.enter="sendMessage"
            :placeholder="$t('chatbot.placeholder')"
            class="flex-1 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors duration-200"
            :disabled="isTyping"
          />
          <button
            @click="sendMessage"
            :disabled="!currentMessage.trim() || isTyping"
            class="p-2 bg-accent hover:bg-accent/70 disabled:bg-accent/30 disabled:cursor-not-allowed text-gray-900 text-gray-100 dark:text-gray-900 rounded-full transition-colors duration-200"
          >
            <Icon icon="heroicons:paper-airplane" class="w-4 h-4" />
          </button>
        </div>
      </div>
      </div>
    </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, inject, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import { chatbotService } from './chatbotService.js'

const { locale } = useI18n()
const isDark = inject('isDark', ref(true))

const isOpen = ref(false)
const currentMessage = ref('')
const messages = ref([])
const isTyping = ref(false)
const hasNewMessage = ref(false)
const messagesContainer = ref(null)
const showHelpMessage = ref(false)

// Timer para mostrar el mensaje de ayuda
let helpMessageTimer = null

const startHelpMessageTimer = () => {
  // Limpiar timer anterior si existe
  if (helpMessageTimer) {
    clearTimeout(helpMessageTimer)
  }
  
  // Mostrar mensaje después de 5 segundos de inactividad
  helpMessageTimer = setTimeout(() => {
    if (!isOpen.value) {
      showHelpMessage.value = true
      // Ocultar mensaje después de 3 segundos
      setTimeout(() => {
        showHelpMessage.value = false
        // Reiniciar el ciclo después de 15 segundos
        setTimeout(startHelpMessageTimer, 15000)
      }, 3000)
    }
  }, 5000)
}

// Iniciar el timer cuando el componente se monta
startHelpMessageTimer()

const quickActions = [
  { key: 'experience' },
  { key: 'skills' },
  { key: 'projects' },
  { key: 'contact' }
]

const toggleChat = () => {
  isOpen.value = !isOpen.value
  showHelpMessage.value = false // Ocultar mensaje cuando se abre el chat
  
  if (isOpen.value) {
    hasNewMessage.value = false
    // Limpiar timer cuando se abre el chat
    if (helpMessageTimer) {
      clearTimeout(helpMessageTimer)
    }
  } else {
    // Reiniciar timer cuando se cierra el chat
    startHelpMessageTimer()
  }
}

const clearConversation = () => {
  messages.value = []
  currentMessage.value = ''
  isTyping.value = false
}

const handleQuickAction = (action) => {
  const questions = {
    experience: {
      es: '¿Cuál es la experiencia profesional de Israel?',
      en: 'What is Israel\'s professional experience?'
    },
    skills: {
      es: '¿Qué habilidades técnicas tiene Israel?',
      en: 'What technical skills does Israel have?'
    },
    projects: {
      es: '¿Cuáles son los proyectos más destacados de Israel?',
      en: 'What are Israel\'s most notable projects?'
    },
    contact: {
      es: '¿Cómo puedo contactar con Israel?',
      en: 'How can I contact Israel?'
    }
  }

  const question = questions[action][locale.value] || questions[action].es
  currentMessage.value = question
  sendMessage()
}

const sendMessage = async () => {
  if (!currentMessage.value.trim() || isTyping.value) return

  const userMessage = {
    id: Date.now(),
    type: 'user',
    content: currentMessage.value,
    timestamp: new Date()
  }

  messages.value.push(userMessage)
  const userInput = currentMessage.value
  currentMessage.value = ''
  
  isTyping.value = true
  await scrollToBottom()

  try {
    const response = await chatbotService.getResponse(userInput, locale.value)
    
    setTimeout(async () => {
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: response,
        timestamp: new Date()
      }
      
      messages.value.push(botMessage)
      isTyping.value = false
      
      if (!isOpen.value) {
        hasNewMessage.value = true
      }
      
      await scrollToBottom()
    }, 800 + Math.random() * 1000)
  } catch (error) {
    const errorMessage = {
      id: Date.now() + 1,
      type: 'bot',
      content: locale.value === 'es' 
        ? 'Disculpa, ha ocurrido un error. ¿Puedes reformular tu pregunta?'
        : 'Sorry, an error occurred. Could you rephrase your question?',
      timestamp: new Date()
    }
    
    messages.value.push(errorMessage)
    isTyping.value = false
    await scrollToBottom()
  }
}

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const formatTime = (timestamp) => {
  return timestamp.toLocaleTimeString('es-ES', { 
    hour: '2-digit', 
    minute: '2-digit' 
  })
}

// Limpiar timer al desmontar el componente
onUnmounted(() => {
  if (helpMessageTimer) {
    clearTimeout(helpMessageTimer)
  }
})
</script>

<style scoped>
.scrollbar-thin::-webkit-scrollbar {
  width: 4px;
}

.scrollbar-thumb-accent\/20::-webkit-scrollbar-thumb {
  background-color: rgb(var(--color-accent) / 0.2);
  border-radius: 2px;
}

.scrollbar-track-transparent::-webkit-scrollbar-track {
  background: transparent;
}

/* Animación de entrada del chat - Más fluida y lenta */
.chat-window-enter-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: bottom right;
}

.chat-window-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.6, 1);
  transform-origin: bottom right;
}

.chat-window-enter-from {
  opacity: 0;
  transform: translateY(30px) translateX(20px) scale(0.8) rotateX(-10deg);
  filter: blur(4px);
}

.chat-window-leave-to {
  opacity: 0;
  transform: translateY(20px) translateX(10px) scale(0.9);
  filter: blur(2px);
}

/* Animación adicional para elementos internos */
.chat-window-enter-active .bg-accent\/10,
.chat-window-enter-active .flex-1 {
  animation: slideInContent 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}

@keyframes slideInContent {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animación para el botón - en su propia capa */
.button-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.6s; /* Espera a que termine completamente el cierre */
}

.button-fade-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}

.button-fade-enter-from {
  opacity: 0;
  transform: translateY(80px) scale(0.4); /* Entrada más suave desde abajo */
}

.button-fade-leave-to {
  opacity: 0;
  transform: scale(0.8); /* Salida simple */
}

/* Animación para el mensaje de ayuda */
.help-message-enter-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.help-message-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.6, 1);
}

.help-message-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

.help-message-leave-to {
  opacity: 0;
  transform: translateY(-5px) scale(0.98);
}

:deep(.markdown-content) {
  line-height: 1.6;
}

:deep(.markdown-content strong) {
  font-weight: 600;
  color: rgb(var(--color-accent));
}

:deep(.markdown-content br) {
  line-height: 2;
}

:deep(.markdown-content a) {
  color: rgb(var(--color-accent));
  text-decoration: underline;
  transition: color 0.2s ease;
}

:deep(.markdown-content a:hover) {
  color: rgb(var(--color-accent) / 0.8);
}

:deep(.markdown-content p) {
  margin-bottom: 0.5rem;
}

:deep(.markdown-content ul) {
  margin: 0.5rem 0;
  padding-left: 1rem;
}

:deep(.markdown-content li) {
  margin-bottom: 0.25rem;
}

:deep(.markdown-content) {
  font-feature-settings: "liga" on, "calt" on;
}

.dark :deep(.markdown-content strong) {
  color: rgb(var(--color-accent) / 0.9);
}

.light :deep(.markdown-content strong) {
  color: rgb(var(--color-accent) / 1);
}
</style>
