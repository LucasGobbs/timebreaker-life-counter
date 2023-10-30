<script>
  import TailwindCss from './lib/TailwindCSS.svelte';
  import KingData from './lib/King/King.svelte'
  import Turn from './lib/Turn.svelte'
  import Energy from './lib/Energy.svelte'

  let updateEnergy;
  function onUpdateTurn(data){
    // console.log(data)
    updateEnergy(data.detail.energy)
  }
  // let turno = 1;
  // $: energia = (turno * 2) < 10 ? turno * 2 : 10;
  // function handlePlus(){ 
  //   turno += 1; 
  // }

  // function handleMinus(){ 
  //   turno -= 1; 
  //   if(turno < 1) turno = 1
  // }
  
</script>
<TailwindCss/>
<img class="w-full h-full bg- absolute -z-20 bg-cover"
    src="./images/WALLPAPER---NEW-LOGO---V2.png" alt="Background">

<!-- <img class="absolute w-96 h-1/3 m-auto left-0 right-0 -z-10"
    src="./images/Sem-Título-3.png" alt="Logo">
     -->
<main class="font-lemon text-white overflow-hidden h-screen w-screen -z-20">
  
  <div class="flex flex-col sm:flex-row md:flex-column space-x-10 w-full h-full justify-center items-center align-middle">
  
    <KingData />
    
    <div class="sm:space-y-10 h-full flex flex-col justify-center items-center">
      <Turn on:turn_change={onUpdateTurn}/>
      <Energy bind:updateEnergy={updateEnergy} />
    </div>
    
    <KingData />
  </div>

  
</main>

<style>
  .border-5 {
    border-width: 5px;
  }
</style>
