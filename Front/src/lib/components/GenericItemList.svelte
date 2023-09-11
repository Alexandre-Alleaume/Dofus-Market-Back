<script>
	// @ts-ignore

	// @ts-ignore
	export let categories;

	/* const categories = ['Chapeau', 'Cape', 'Amulette', 'Anneau', 'Ceinture', 'Bottes']; */
	const tranches = ['Niv.1 à 50', 'Niv.51 à 100', 'Niv.101 à 150', 'Niv.151 à 200'];

	/* 	const selectCategorie = (type) => {
		console.log(type);
		if (type == 'arme') {
			categories = ['Arc', 'Baguette', 'Bâton', 'Dagues', 'Epée', 'Hache', 'Marteau', 'Pelle'];
		} else if (type == 'item') {
			categories = ['Chapeau', 'Cape', 'Amulette', 'Anneau', 'Ceinture', 'Bottes'];
		}
		console.log(categories);
	};
	selectCategorie(type); */
</script>

<section class="p-4 pb-20 space-y-4 overflow-y-auto">
	{#if categories}
		{#each categories as categorie}
			<p class="font-bold pl-4 text-2xl">{categorie}</p>
			<nav class="list-nav">
				<ul class="list">
					{#each tranches as tranche}
						<li>
							<a href=""><span class="flex-auto"> {tranche}</span></a>
						</li>
					{/each}
				</ul>
			</nav>
			<hr class="!my-6 opacity-50" />
		{/each}
	{/if}
</section>

<style>
</style>
