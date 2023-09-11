<script>
	import ItemPerLevel from './ItemPerLevel.svelte';

	import { fade } from 'svelte/transition';

	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	export let type;
	export let categories;

	const tranches = ['Niv.1 à 50', 'Niv.51 à 100', 'Niv.101 à 150', 'Niv.151 à 200'];
	const listDofus = [
		'Dofus Vulbis',
		'Dofus Ocre',
		'Dofus Kaliptus',
		'Dofus Pourpre',
		'Dofus Ebène',
		'Dofus Ivoire',
		'Dofus Emeraude',
		'Dofus Turquoise',
		'Dofus Cawotte'
	];

	const handleClick = (event) => {
		console.log(event.target);
	};
</script>

{#if categories && type != 'dofus'}
	<section class="p-4 pb-20 space-y-4 overflow-y-auto border-r border-surface-500/30 lg:w-[12rem]">
		{#each categories as categorie}
			<p class="font-bold pl-4 text-2xl">{categorie}</p>
			<nav class="list-nav">
				<Accordion>
					{#each tranches as tranche}
						<AccordionItem on:click={handleClick}>
							<svelte:fragment slot="summary">{tranche}</svelte:fragment>
							<svelte:fragment slot="content"><ItemPerLevel /></svelte:fragment>
						</AccordionItem>
					{/each}
				</Accordion>
			</nav>
			<hr class="!my-6 opacity-50" />
		{/each}
	</section>
{/if}
{#if type == 'dofus'}
	<section class="p-4 pb-20 space-y-4 overflow-y-auto border-r border-surface-500/30 lg:w-[16rem]">
		<p class="font-bold pl-4 text-2xl">Dofus</p>
		<nav class="list-nav">
			<ul class="list">
				{#each listDofus as dofus}
					<li>
						<a href="/"><span class="flex-auto">{dofus}</span></a>
					</li>
				{/each}
			</ul>
		</nav>
	</section>
{/if}

<style>
</style>
