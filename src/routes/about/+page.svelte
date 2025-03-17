<script>
    import { onMount } from 'svelte';
    
    onMount(() => {
      const skillBars = document.querySelectorAll('.skill-bar');

      setTimeout(() => {
        skillBars.forEach(bar => {
          bar.style.width = bar.dataset.level;
        });
      }, 300);
    });
    
    const skills = [
      { name: 'HTML5/CSS3', level: '95%', category: 'Intégration' },
      { name: 'JavaScript', level: '90%', category: 'Langages' },
      { name: 'TypeScript', level: '85%', category: 'Langages' },
      { name: 'ReactJS', level: '90%', category: 'Frameworks' },
      { name: 'VueJS', level: '80%', category: 'Frameworks' },
      { name: 'NextJS/Gatsby', level: '75%', category: 'Frameworks' },
      { name: 'Design System', level: '85%', category: 'Design' },
      { name: 'Tests Unitaires', level: '80%', category: 'Qualité' },
      { name: 'Accessibilité RGAA', level: '85%', category: 'Qualité' },
      { name: 'Git/CI-CD', level: '85%', category: 'Outils' },
    ];
    
    const skillsByCategory = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {});
    
    const categories = Object.keys(skillsByCategory);
  </script>
  

<div class="pt-8 px-8 pb-8">
  <h1 class="text-3xl font-bold text-gray-800">Thibault DUFOREST</h1>
  <div class="mt-2 flex flex-wrap gap-4">
    <div class="flex items-center text-gray-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span>37 ans</span>
    </div>
    
    <div class="flex items-center text-gray-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span>Valenton, Val-de-Marne, France</span>
    </div>
    
    <div class="flex items-center text-gray-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <span>13 ans d'expérience</span>
    </div>
  </div>
  
  <!-- Introduction -->
  <div class="mt-8">
    <h2 class="text-xl font-semibold text-indigo-600 mb-4">Profil</h2>
    <div class="text-gray-700 space-y-3">
      <p>Développeur Front-End depuis 2011, j'accompagne les entreprises en freelance pour concevoir et optimiser des interfaces web modernes, performantes et accessibles.</p>
      <p>J'intègre des applications en HTML/CSS dans le respect des bonnes pratiques d'accessibilité et je possède également de l'expérience en Design System et Design Tokens, permettant de garantir la cohérence visuelle et technique des interfaces.</p>
      <p>Fort d'une expertise approfondie en JavaScript et TypeScript, j'interviens sur le développement d'applications complexes (ReactJS, VueJS). Sensible aux enjeux de qualité et d'automatisation, j'intègre des stratégies de tests unitaires pour assurer la robustesse et la maintenabilité des projets.</p>
    </div>
  </div>
  
  <!-- Skills -->
  <div class="mt-10">
    <h2 class="text-xl font-semibold text-indigo-600 mb-6">Compétences</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each categories as category}
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="font-medium text-gray-800 mb-3">{category}</h3>
          <div class="space-y-3">
            {#each skillsByCategory[category] as skill}
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-700">{skill.name}</span>
                  <span class="text-sm font-medium text-gray-500">{skill.level}</span>
                </div>
                <div class="h-2 bg-gray-200 rounded-full">
                  <div 
                    class="skill-bar h-2 rounded-full bg-indigo-500 transition-all duration-1000 ease-out" 
                    style="width: 0%"
                    data-level={skill.level}>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  <!-- Education & Languages -->
  <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Education -->
    <div>
      <h2 class="text-xl font-semibold text-indigo-600 mb-4">Formation</h2>
      <div class="space-y-3">
        <div class="border-l-2 border-indigo-200 pl-4">
          <p class="text-gray-500 text-sm">2010 - 2012</p>
          <p class="font-medium text-gray-800">Technicien du Web</p>
          <p class="text-gray-600">CIFACOM, Montreuil</p>
        </div>
        <div class="border-l-2 border-indigo-200 pl-4">
          <p class="text-gray-500 text-sm">2006 - 2009</p>
          <p class="font-medium text-gray-800">DUT Techniques de commercialisation</p>
          <p class="text-gray-600">UIT de Roubaix, Roubaix</p>
        </div>
      </div>
    </div>
    
    <!-- Languages -->
    <div>
      <h2 class="text-xl font-semibold text-indigo-600 mb-4">Langues</h2>
      <div class="space-y-3">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-800">FR</span>
          </div>
          <div class="ml-3">
            <p class="font-medium text-gray-800">Français</p>
            <p class="text-gray-600 text-sm">Langue maternelle</p>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-800">EN</span>
          </div>
          <div class="ml-3">
            <p class="font-medium text-gray-800">Anglais</p>
            <p class="text-gray-600 text-sm">Courant</p>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-800">ES</span>
          </div>
          <div class="ml-3">
            <p class="font-medium text-gray-800">Espagnol</p>
            <p class="text-gray-600 text-sm">Niveau lycée</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>