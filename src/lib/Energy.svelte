<script>
  let energy = 2
  export function updateEnergy(energyValue) {
    energy = energyValue
  }
</script>

<div class="flex flex-col justify-center items-center">
  <div class="text-center md:text-4xl">Energia</div>
  <div class="
  rounded-full bg-gray-800
  text-center items-center justify-center w-20 h-20 md:w-40 md:h-40
  border-4 flex  relative shadow- text-2xl font-bold">
  <p class="absolute text-3xl md:text-6xl text-shadow shadow-blue-900">
    {energy}
  </p>
  <!-- <img class="absolute opacity-90 w-34"
    src="./images/ENERGIA_3.png" alt="Energia">   -->
  <img class="object-fill"
      src="./images/ENERGIADEF.png" alt="Energia"> 
  </div>
</div>