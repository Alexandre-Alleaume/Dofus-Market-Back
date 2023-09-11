<script>
	import { AppRailTile } from '@skeletonlabs/skeleton';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const openFilter = () => {
		dispatch('openFilter');
	};

	export let title = '';

	let currentTileLeftPanel = 0;
</script>

<AppRailTile bind:group={currentTileLeftPanel} name="item" title="tile-1" on:click={openFilter}>
	<svelte:fragment slot="lead">
		<i class="fa-solid fa-filter" />
	</svelte:fragment>
	<span>{title}</span>
</AppRailTile>
