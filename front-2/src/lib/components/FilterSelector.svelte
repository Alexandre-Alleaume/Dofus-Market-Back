<script>
	import FilterSlider from './FilterSlider.svelte';

	let selectedCarac = [];

	let caracList = [
		'PA',
		'PM',
		'PO',
		'vitalite',
		'agilite',
		'chance',
		'force',
		'intelligence',
		'sagesse',
		'dommage',
		'cri',
		'prospection',
		'invo',
		'initiative',
		'soins',
		'degats_air',
		'degats_eau',
		'degats_terre',
		'degats_feu',
		'degats_neutre',
		'res_terre',
		'res_neutre',
		'res_feu',
		'res_air',
		'res_eau',
		'do_piege_pourcent',
		'dommage_pourcent'
	];

	const selectCarac = (carac) => {
		console.log(selectedCarac);
		if (selectedCarac.includes(carac)) {
			selectedCarac = selectedCarac.filter((selected) => selected !== carac);
		} else {
			selectedCarac = [...selectedCarac, carac];
		}
	};
</script>

<p
	class="pl-4 text-sm col-span-1 md:col-span-2 lg:col-span-3 border-solid border-surface-500/30 border-b text-center"
>
	Valeur minimum souhaitée
</p>

{#each caracList as carac}
	<div class="flex flex-col pl-2">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="md:w-20 md:h-20 btn" on:click={() => selectCarac(carac)}>
			<img src="icons/icon_{carac}.svg" alt="carac {carac}" />
		</div>

		{#if selectedCarac.includes(carac)}
			<div>
				<FilterSlider {carac} />
			</div>
		{/if}
	</div>
{/each}
