<script>
  import { fade } from 'svelte/transition';
  let lifeValue = 25;

  const defaultOperator = '-'
  const ops = ['AC', '+', '-', '=']
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, null]

  let value = '';
  let operator = defaultOperator
  $: displayedOperator = value.length ? operator : ''
  $: displayedValue = value.length ? value : ''

  function onNumberClick(digit) { value += digit }
  function onOperatorClick(operatorClicked) {
    const handler = {
      '+': () => { operator = '+'; },
      '-': () => { operator = '-'; },
      'AC': () => { value = ''; },
      '=': () => { 
        let currentLife = parseFloat(lifeValue);
        const life = parseFloat(value || 0);

        if(operator === '+') currentLife += life;
        if(operator === '-') currentLife -= life;

        lifeValue = currentLife;
        value = ''; 
        operator = defaultOperator;
        
      },
    }
    const callback = handler[operatorClicked];
    callback()

  }
</script>
<div class="space-y-2">
  <div class="flex-row space-y-3 border-2 bg-gray-800 border-yellow-600 rounded-lg py-2">
    <div class="text-center text-4xl ">
      {lifeValue}
      {#if displayedOperator}
        <span in:fade={{  delay: 75, duration: 75 }} 
        class="text-gray-400">
        {displayedOperator} {displayedValue}
      </span>
      {/if}
    </div>
  </div>
  <div class="flex flex-row w-full space-x-2">
    <!-- Operations -->
    <div class="flex flex-col justify-between border-2 rounded-lg border-yellow-600 p-1 bg-gray-700">
      {#each ops as op}
        <button on:click={() => onOperatorClick(op)}>
          {op}
        </button>
      {/each}
    </div>
    
    <!-- Digits -->
    <div class="w-full grid grid-cols-3 gap-1">
      {#each digits as digit}
        {#if digit !== null}
        <div class=
          "justify-center align-middle flex p-0.5 rounded-full w-9 h-9
          transition ease-in-out delay-75 hover:scale-110 bg-gradient-to-t from-amber-200 to-amber-600
          ">
          <button 
            on:click={() => onNumberClick(digit)}
            class="bg-gray-700 w-8 h-8 rounded-full w-8 h-8 
            transition ease-in-out delay-75  hover:bg-gray-800">
              {digit}
          </button>
        </div>
          
          
        {:else}
          <div></div>
        {/if}
        
      {/each}
    </div>
  </div>
</div>

<style>

</style>