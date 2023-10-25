<script>
  import TailwindCss from './lib/TailwindCSS.svelte';
  import KingData from './lib/king/KingData.svelte'
  let turno = 1;
  $: energia = (turno * 2) < 10 ? turno * 2 : 10;
  function handlePlus(){ 
    turno += 1; 
  }

  function handleMinus(){ 
    turno -= 1; 
    if(turno < 1) turno = 1
  }
  
</script>
<TailwindCss/>

<main class="bg-black font-lemon text-white overflow-hidden h-screen w-screen">
  <div class="flex flex-column space-x-10">
  
    <KingData />
    
    <div class="space-y-10">
      <div>
        <div class="text-center">Turno</div>
        <div class="flex flex-row space-x-2 items-center">
          {#if turno>1}
          <button 
            class="border-2 border-yellow-500 w-6 h-6 text-center disabled"
            on:click={handleMinus}> 
            -
          </button>
             <!-- content here -->
          {:else}
          <div
            class="w-6 h-6 ">
            
        </div>
             <!-- else content here -->
          {/if}
          
          <div class="
          rounded-full text-center items-center justify-center w-14 h-14 md:w-40 md:h-40
          border-2 flex p-3 relative
          border-yellow-500 text-2xl font-bold">
              {turno}
          </div>
          <button 
            class="border-2 border-yellow-500 w-6 h-6"
            on:click={handlePlus}> 
            + 
          </button>
        </div>
      </div>
      
      <div class="flex flex-col justify-center items-center">
        <div class="text-center">Energia</div>
        <div class="
        rounded-full bg-gray-800
        text-center items-center justify-center w-20 h-20 md:w-40 md:h-40
        border-2 flex  relative
        border-blue-500 text-2xl font-bold">
        <p class="absolute text-4xl text-shadow shadow-blue-900">{energia}</p>
        <!-- <img class="absolute opacity-60 w-10"
          src="./images/ENERGIA.jpg" alt="Energia">   -->
        <img class="object-fill"
            src="./images/ENERGIA (2).png" alt="Energia">
        </div>
        
        
      </div>
      
    </div>
    

    <KingData />
  </div>

  
</main>
