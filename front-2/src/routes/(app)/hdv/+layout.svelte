<script>
	import { AppShell, AppBar, AppRailTile, AppRailAnchor, AppRail } from '@skeletonlabs/skeleton';

	import SidebarRight from '$lib/components/sidebarRight.svelte';
</script>

<AppShell>
	<!-- <svelte:fragment slot="header">
		<NavBar on:openModal={triggerModal} on:openDrawer={drawerOpen} />
	</svelte:fragment> -->

	<svelte:fragment slot="sidebarRight"><SidebarRight /></svelte:fragment>

	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->

	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- <svelte:fragment slot="pageFooter"><Footer /></svelte:fragment> -->
</AppShell>
