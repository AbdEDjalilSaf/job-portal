

<script>
import { mapState } from 'vuex';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapState(['isDarkMode']),
  },
  mounted() {
    // On app load, check localStorage for dark mode preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.$store.state.isDarkMode = true;
    }
    // Update class and localStorage whenever the state changes
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'TOGGLE_DARK_MODE') {
        localStorage.setItem('theme', state.isDarkMode ? 'dark' : 'light');
      }
    });
  },
};
</script>


<template>
  <div id="app" :class="{ 'dark': isDarkMode }">
    <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>


<style>
/* You can add global styles here if needed */
</style>