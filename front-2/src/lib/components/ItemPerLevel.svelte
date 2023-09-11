<!-- COMPONENT LOGIC -->

<!--  En fonction de la category de l'item et de la tranche de niveau je vais faire un fetch différent pour afficher les items correspondants -->

<script>
	export let level = null;
	export let category = null;

	const items = [
		'Coiffe du Roissingue',
		'Coiffe Bouftou',
		'Le Kim',
		'Coiffe du Roissingue',
		'Coiffe Bouftou',
		'Le Kim',
		'Coiffe du Roissingue',
		'Coiffe Bouftou',
		'Le Kim'
	];
</script>

<ul class=" h-52 overflow-auto hide-scrollbar">
	{#each items as item}
		<li class="lg:w-[10rem]">
			<a href="/"><span class="flex-auto lg:whitespace-normal">{item}</span></a>
		</li>
	{/each}
</ul>

<style></style>
