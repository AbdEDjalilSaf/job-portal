<template>
  <main class="flex-grow bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 md:py-20">
      <div class="container mx-auto px-6 text-center">
        <!-- Responsive text size -->
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Find Your Dream Job</h1>
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Discover exciting career opportunities and manage your job applications all in one place. Your next big move starts here.
        </p>
        <router-link
          to="/candidatures"
          class="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
        >
          View Candidatures
        </router-link>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-6">
        <!-- Responsive text size -->
        <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Why Choose Us?</h2>
        <!-- Grid is already responsive: 1 column on mobile, 3 on md+ -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-md text-center">
            <div class="text-blue-500 mb-4">
              <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h-.5a1 1 0 000-2H8a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clip-rule="evenodd"></path></svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">Easy Applications</h3>
            <p class="text-gray-600 dark:text-gray-400">Apply to multiple jobs with a single, streamlined profile.</p>
          </div>
          <!-- Feature 2 -->
          <div class="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-md text-center">
            <div class="text-purple-500 mb-4">
              <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">Track Progress</h3>
            <p class="text-gray-600 dark:text-gray-400">Stay updated on the status of all your applications in real-time.</p>
          </div>
          <!-- Feature 3 -->
          <div class="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-md text-center">
            <div class="text-green-500 mb-4">
              <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">Connect with Recruiters</h3>
            <p class="text-gray-600 dark:text-gray-400">Get noticed by top companies looking for talented individuals like you.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>