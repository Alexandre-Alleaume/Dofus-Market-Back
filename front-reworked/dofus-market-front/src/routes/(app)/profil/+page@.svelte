<script>
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import ProfilDetails from '../../../lib/components/ProfilDetails.svelte';
	import ProfilHdv from '../../../lib/components/ProfilHdv.svelte';
	import ProfilFav from '../../../lib/components/ProfilFav.svelte';

	let tabSet = 0;
</script>

<div class=" flex flex-col mx-auto lg:flex-row p-5">
	<div class="card variant-soft-surface border-r lg:w-1/6 flex flex-col justify-center">
		<ProfilDetails />
	</div>

	<div class="card variant-soft-surface lg:w-5/6">
		<div>
			<TabGroup>
				<Tab bind:group={tabSet} name="tab1" value={0}>
					<span>Hôtel de Vente</span>
				</Tab>
				<Tab bind:group={tabSet} name="tab2" value={1}>Favoris</Tab>

				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					{#if tabSet === 0}
						<ProfilHdv />
					{:else if tabSet === 1}
						<ProfilFav />
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>
