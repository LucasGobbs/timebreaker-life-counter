<script>
  let energy = 10
  export function updateEnergy(energyValue) {
    energy = energyValue
  }
</script>

<div class="flex flex-col justify-center items-center space-y-28">

  <div class="text-center md:text-5xl">Energia</div>
  <div class="glow light">
    <div class="radial 
      rounded-full 
      text-center items-center justify-center w-20 h-20 md:w-40 md:h-40
      border-2 border-blue-400 shadow-sm shadow-blue-900  flex text-2xl font-bold">
      <p class="absolute text-4xl md:text-6xl text-shadow shadow-blue-900">
        {energy}
      </p>
      <!-- <img class="absolute opacity-90 w-34"
        src="./images/ENERGIA_3.png" alt="Energia">   -->
      <img class="object-fill"
          src="./images/ENERGIADEF.png" alt="Energia"> 

    </div>
  </div>
  
</div>

<style>

  .radial {
    background: radial-gradient(circle at center, #acbbec 0, rgb(22, 21, 104), rgb(28, 5, 83) 100%)
  }
/* diamond shape */
.glow {

	/* transform: rotate(45deg); */
	background: #C0FFE4;
	box-shadow: 1px 1px 0 #6480df, 0 0 20px 5px #C0FFE4, inset 2px 2px 0 #D3FFEC;
	animation: glow 2s infinite ease;
}
.glow:before,
.glow:after {
	content: '';
	display: block;
	position: absolute;
}
.glow:before {
	width: 22px;
	height: 22px;
	top: 11px;
	left: 11px;
	background: rgba(255,255,255,0.25);
	border: 2px solid rgba(255,255,255,0.5);
	box-shadow: 0 0 2px 3px #B3F6D9;
	box-shadow: 1px 1px 0 #A2E6C9, 0 0 20px 5px #C0FFE4, inset 2px 2px 0 #D3FFEC;
}
.glow:after {
	left: 0;
	width: 4px;
	height: 48px;
	background: #fff;
	z-index: 5;
	animation: sheen 5s infinite;
}

/* animates box shadow glow effect */
@keyframes glow {
	0%,100% {
		box-shadow: 1px 1px #6163f3, 0 0 20px 5px rgb(172, 154, 212), inset 2px 2px #D3FFEC;
	}
	50% {
		box-shadow: 1px 1px #6163f3, 0 0 16px 8px rgb(172, 154, 212), inset 2px 2px #D3FFEC;
	}
}
/* animates light across diamond */
@keyframes sheen {
	0%,100% {
		left: 0;
		opacity: 0;
	}
	1% {
		opacity: 1;
	}
	10% {
		left: calc(100% - 4px);
	}
	11%,98% {
		left: 100%;
		opacity: 60;
	}
}

/* glass orb */
.orb {
	position: relative;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	margin: 0 5em;
	background: #C0FFE4;
	background-image: radial-gradient(farthest-corner at 34px 14px, #A2E6C9 25%, #1D8758 35%,  #D3FFEC 100%);
	box-shadow: 0 0 20px 5px #C0FFE4;
	animation: orb 1.8s infinite;
}
.orb:before {
	content: '';
	display: block;
	position: absolute;
	width: 44px;
	height: 44px;
	top: 2px;
	left: 2px;
	background-image: radial-gradient(farthest-corner at 14px 14px, #fff 15%, #C0FFE4 50%, rgba(192,255,228,0) 100%);
	border-radius: 50%;
}
/* star shaped shine pattern */
.shine {
	position: absolute;
	top: 3px;
	left: 6px;

	background: #fff;
	transform: rotate(15deg);
	box-shadow: 0 0 8px rgba(255,255,255,0.75);
	animation: shine 10s infinite;
}
.shine:before, .shine:after {
	content:'';
	display: block;
	position: absolute;
}
.shine:before {
	top: 2px;
	left: -2px;
	width: 1px;
	height: 16px;
	background: #fff;
	transform: rotate(-90deg);
	box-shadow: 0 0 8px rgba(255,255,255,0.75);
}
.shine:after {
	top: 6px;
	left: -2px;
	width: 5px;
	height: 5px;
	background: #fff;
	transform: rotate(45deg);
	box-shadow: 0 0 8px 5px rgba(255,255,255,0.75);
}
/* reflective line */
.light {
	position: absolute;

	border-radius: 100%;
	overflow: hidden;
}
.light:before {
	content:'';
	display: block;
	position: absolute;
	width: 2px;
	height: 80px;
	top: -75%;
	left: 0;
	transform: rotate(45deg);
	background: rgba(255,255,255,0.5);
	animation: sheen2 7s infinite;
}
/* animates orb glow */
@keyframes orb {
	0%,100% {
		box-shadow: 0 0 5px 2px #8FFFCF;
	}
	50% {
		box-shadow: 0 0 24px 4px #8FFFCF;
	}
}
/* rotates shine */
@keyframes shine {
	0% {
		opacity: 0;
	}
	34% {
		opacity: 0;
		transform: rotate(15deg);
	}
	40% {
		opacity: 0.6;
		transform: rotate(620deg);
	}
	48%,100% {
		opacity: 0;
		transform: rotate(635deg);
	}
}
/* moves light reflection */
@keyframes sheen2 {
	0%,100% {
		top: -75%;
		left: 15%;
		opacity: 0;
		width: 2px;
	}
	1% {
		opacity: 1;
	}
	10% {
		width: 24px;
	}
	11%,18% {
		top: 75%;
		left: 50%;
		width: 2px;
		opacity: 0;
	}
	20% {
		top: -75%;
		left: 15%;
		opacity: 0;
		width: 1px;
	}
	21% {
		opacity: 0.75;
	}
	30% {
		width: 6px;
	}
	31%,98% {
		top: 75%;
		left: 50%;
		width: 2px;
		opacity: 0;
	}
}
</style>