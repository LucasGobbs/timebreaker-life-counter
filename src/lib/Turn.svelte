<script>
  import { createEventDispatcher } from 'svelte';
  import Empty from './Utils/Empty.svelte'
  const dispatch = createEventDispatcher();
  
  let turn = 1;
  const calculateEnergy = () => ((turn * 2) < 10 ? turn * 2 : 10)
  const dispatchEnergy = () => dispatch('turn_change', {turn, energy: calculateEnergy()})
  
  function handlePlus(){  
    turn += 1;  

    dispatchEnergy()
  }

  function handleMinus(){ 
    if(turn === 1) return;
    turn -= 1; 

    dispatchEnergy()
  }
</script>

<div>
  <div class="text-center md:text-4xl">turn</div>
  <div class="flex flex-row space-x-2 items-center">
    {#if turn>1}
      <button on:click={handleMinus}> - </button>
    {:else}
      <Empty classValues={"w-6 h-6"} />
    {/if}
    
    <div class="border-5 rounded-full text-center items-center justify-center w-14 h-14 md:w-24 md:h-24
     flex p-3 relative
    border-yellow-500 text-2xl font-bold text-3xl md:text-6xl">
        {turn}
    </div>
    <button on:click={handlePlus}>  +  </button>
  </div>
</div>

<style lang="scss">
  button {
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    color: white
  }


  .border-5 {
    border-width: 5px;
  }
</style>