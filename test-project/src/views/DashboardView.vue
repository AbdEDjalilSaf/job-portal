<template>
  <main class="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
    <div class="container mx-auto px-6">
      <!-- Responsive text size -->
      <h1 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">My Candidatures</h1>
      
      <div class="space-y-4">
        <!-- Dummy Candidature Card 1 -->
        <div class="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md">
          <!-- Flexbox changes: stack on mobile, side-by-side on md+ -->
          <div class="flex flex-col md:flex-row md:justify-between md:items-start">
            <div class="mb-2 md:mb-0">
              <!-- Responsive text size -->
              <h2 class="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">Senior Frontend Developer</h2>
              <p class="text-gray-600 dark:text-gray-400">Tech Innovators Inc.</p>
            </div>
            <span class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-sm font-medium px-3 py-1 rounded-full">Interviewing</span>
          </div>
        </div>

        <!-- Dummy Candidature Card 2 -->
        <div class="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start">
            <div class="mb-2 md:mb-0">
              <h2 class="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">UX/UI Designer</h2>
              <p class="text-gray-600 dark:text-gray-400">Creative Studios LLC</p>
            </div>
            <span class="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 text-sm font-medium px-3 py-1 rounded-full">Applied</span>
          </div>
        </div>

        <!-- Dummy Candidature Card 3 -->
        <div class="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start">
            <div class="mb-2 md:mb-0">
              <h2 class="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">Project Manager</h2>
              <p class="text-gray-600 dark:text-gray-400">Global Solutions Corp.</p>
            </div>
            <span class="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 text-sm font-medium px-3 py-1 rounded-full">Not Selected</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'CandidaturesPage',
};
</script>