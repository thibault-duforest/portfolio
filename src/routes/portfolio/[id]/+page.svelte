<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { goto } from '$app/navigation';
    
    export let data;
    
    function goBack() {
      goto('/portfolio');
    }
  </script>
  
  <div class="container mx-auto px-4 py-8" in:fade={{ duration: 300 }}>
    <button
      type="button"
      on:click={goBack}
      class="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Retour aux projets
    </button>
    
    <div class="bg-white rounded-lg shadow-lg overflow-hidden" in:fly={{ y: 50, duration: 400 }}>
      <div class="h-80 overflow-hidden">
        <img src={data.project.image} alt={data.project.name} class="w-full h-full object-cover" />
      </div>
      
      <div class="p-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 class="text-3xl font-bold">{data.project.name}</h1>
          <p class="text-gray-600">{data.project.date}</p>
        </div>
        
        <div class="flex flex-wrap gap-2 mb-6">
          {#each data.project.technologies as tech}
            <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">{tech}</span>
          {/each}
        </div>
        
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Description</h2>
          <p class="text-gray-700">{data.project.description}</p>
        </div>
        
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Fonctionnalités</h2>
          <ul class="list-disc pl-5 space-y-2">
            {#each data.project.features as feature}
              <li class="text-gray-700">{feature}</li>
            {/each}
          </ul>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <a 
            href={data.project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors"
          >
            <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.286-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
            </svg>
            Code source
          </a>
          {#if data.project.liveDemo}
          <a 
            href={data.project.liveDemo} 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Démo en ligne
          </a>
          {/if}
        </div>
      </div>
    </div>
  </div>
