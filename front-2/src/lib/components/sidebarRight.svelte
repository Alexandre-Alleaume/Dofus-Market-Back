<script>
	import { AppRail } from '@skeletonlabs/skeleton';

	import MenuSelector from './MenuSelector.svelte';
	import FilterSelector from './FilterSelector.svelte';

	let title = 'Filtrer';

	let display = 'hidden';

	let value = 15;

	const test = () => {
		if (display === 'hidden') {
			display = 'block';
		} else {
			display = 'hidden';
		}
	};
</script>

<div
	class="grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token lg:grid overflow-hidden max-w-sm"
>
	<div class="{display} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-fit">
		<FilterSelector />
	</div>
	<AppRail>
		<MenuSelector {title} on:openFilter={test} />
	</AppRail>
</div>
