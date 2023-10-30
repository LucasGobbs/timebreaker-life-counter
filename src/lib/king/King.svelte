<script>
  // import TailwindCss from './lib/TailwindCSS.svelte';
  import Calculator from './Calculator.svelte'
  import Life from './Life.svelte'
  
</script>

<div class="md:w-1/4 flex flex-col space-y-1 font-lemon justify-center items-center align-middle">
  <input type="text" class= 
    "bg-gray-800 space-y-3 border-2 border-yellow-600 rounded-lg text-xs text-center
     p-2 w-6/12"/>
  <!-- <Life /> -->
  <Calculator />
</div>

