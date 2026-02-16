<template>
  <header class="bg-white dark:bg-gray-800 shadow-md relative">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo/Brand -->
      <div class="text-2xl font-bold text-gray-800 dark:text-white">
        <router-link to="/">JobPortal</router-link>
      </div>

      <!-- Desktop Navigation & Dark Mode Toggle -->
      <div class="hidden md:flex items-center space-x-6">
        <router-link
          to="/"
          class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          active-class="text-blue-600 dark:text-blue-400 font-semibold"
        >
          Home
        </router-link>
        <router-link
          to="/candidatures"
          class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          active-class="text-blue-600 dark:text-blue-400 font-semibold"
        >
          Candidatures
        </router-link>
       
      </div>

      <!-- Mobile Menu Button (Hamburger) -->
      <button @click="toggleMobileMenu" class="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none">
        <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-50">
      <div class="flex flex-col p-4 space-y-4">
        <router-link
          @click="toggleMobileMenu"
          to="/"
          class="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
        >
          Home
        </router-link>
        <router-link
          @click="toggleMobileMenu"
          to="/candidatures"
          class="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
        >
          Candidatures
        </router-link>
        
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState(['isMobileMenuOpen']),
  },
  methods: {
    ...mapActions(['toggleMobileMenu']),
  },
};
</script>