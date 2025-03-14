<script lang="ts">
    import { fly } from 'svelte/transition';
    import { goto } from '$app/navigation';
  
    export let data;
    
    function navigateToProject(projectId: string) {
      goto(`/portfolio/${projectId}`);
    }
  </script>
  
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center mb-12">Mes Projets</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each data.projects as project (project.id)}
        <button
          type="button" 
          class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg"
          on:click={() => navigateToProject(project.id.toString())}
          in:fly={{ y: 50, duration: 300, delay: 300 }}
        >
          <div class="h-48 overflow-hidden">
            <img src={project.image} alt={project.name} class="w-full h-full object-cover" />
          </div>
          <div class="p-6 flex flex-col items-center text-center">
            <h2 class="text-xl font-semibold mb-2">{project.name}</h2>
            <p class="text-gray-600 mb-3">{project.date}</p>
            <div class="flex flex-wrap justify-center gap-2">
              {#each project.technologies as tech}
                <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">{tech}</span>
              {/each}
            </div>
          </div>
        </button>
      {/each}
    </div>
  </div>
