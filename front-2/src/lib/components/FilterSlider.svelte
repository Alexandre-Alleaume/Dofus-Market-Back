<script>
	export let carac;
	let sliderValue = 0;
	let valueSide = 'isRight';
	let minSliderValue = 0; // Set the minimum value
	let maxSliderValue = 100; // Set the maximum value

	const changeSide = () => {
		console.log(sliderValue);
		if (sliderValue > maxSliderValue / 2) {
			valueSide = 'isLeft';
		} else {
			valueSide = 'isRight';
		}
	};

	const caracRanges = {
		PA: { min: 0, max: 1 },
		PM: { min: 0, max: 1 },
		PO: { min: 0, max: 2 },
		vitalite: { min: 0, max: 450 },
		agilite: { min: 0, max: 100 },
		chance: { min: 0, max: 100 },
		force: { min: 0, max: 100 },
		intelligence: { min: 0, max: 100 },
		sagesse: { min: 0, max: 140 },
		dommage: { min: 0, max: 15 },
		cri: { min: 0, max: 10 },
		prospection: { min: 0, max: 33 },
		invo: { min: 0, max: 4 },
		initiative: { min: 0, max: 2000 },
		soins: { min: 0, max: 10 },
		degats_air: { min: 0, max: 60 },
		degats_eau: { min: 0, max: 60 },
		degats_terre: { min: 0, max: 60 },
		degats_feu: { min: 0, max: 60 },
		degats_neutre: { min: 0, max: 60 },
		res_air: { min: 0, max: 15 },
		res_eau: { min: 0, max: 15 },
		res_terre: { min: 0, max: 15 },
		res_feu: { min: 0, max: 15 },
		res_neutre: { min: 0, max: 15 },
		do_piege_pourcent: { min: 0, max: 50 },
		dommage_pourcent: { min: 0, max: 50 }
	};

	const range = caracRanges[carac] || { min: 0, max: 0 };
	minSliderValue = range.min;
	maxSliderValue = range.max;
</script>

<div class="slider">
	<label for="filter_{carac}" class="slider-label {valueSide}">{sliderValue}</label>
	<input
		type="range"
		bind:value={sliderValue}
		min={minSliderValue}
		max={maxSliderValue}
		class="slider-input slider-input-{carac}"
		on:input={changeSide}
	/>
</div>

<style>
	.slider {
		position: relative;
		display: inline-block;
		margin: -4px 6px 0 0;
	}

	.slider-label {
		position: absolute;
		z-index: 1;
		top: 1px;
		left: 2px;
		font-size: 11px;
		color: white;
		pointer-events: none;
		transition: transform 0.2s cubic-bezier(0.26, 0.08, 0.15, 1), color 0.6s 0.6s ease-out;
	}

	.slider-input {
		width: 100%;
		appearance: none;
		height: fit-content;
		vertical-align: middle;
		background: rgba(175, 154, 136, 0.7);
		border: 2px solid rgba(108, 68, 26);
		border-radius: 20px;
		box-shadow: inset 0 1px 2px hsla(32, 100%, 48%, 0.4);
		transition: border-width 0.2s cubic-bezier(0.26, 0.08, 0.15, 1);
	}

	.slider-input::-webkit-slider-thumb {
		appearance: none;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		cursor: pointer;
		position: relative;
	}

	.isRight {
		right: 50%;
		margin-right: -20px;
		left: auto;
		transform: translateX(20px);
	}
	.isLeft {
		right: auto;
		margin-left: -20px;
		left: 50%;
		transform: translate(-20px);
	}

	.slider-input-agilite::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_agilite.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-chance::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_chance.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-intelligence::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_intelligence.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-force::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_force.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-sagesse::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_sagesse.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-PA::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_PA.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-PM::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_PM.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-vitalite::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_vitalite.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-prospection::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_prospection.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-PO::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_PO.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-invo::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_invo.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-cri::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_cri.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 70%;
	}

	.slider-input-dommage::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_dommage.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-dommage_pourcent::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_dommage_pourcent.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-soins::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_soins.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-do_piege_pourcent::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_do_piege_pourcent.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-res_neutre::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_res_neutre.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-res_terre::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_res_terre.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-res_air::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_res_air.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-res_feu::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_res_feu.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-res_eau::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_res_eau.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}
	.slider-input-degats_neutre::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_degats_neutre.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-degats_terre::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_degats_terre.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-degats_air::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_degats_air.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-degats_feu::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_degats_feu.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-degats_eau::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_degats_eau.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.slider-input-initiative::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background-image: url(icons/icon_initiative.svg);
		background-size: cover;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}
</style>
