<script>
	import { AppShell, AppBar, AppRailTile, AppRailAnchor, AppRail } from '@skeletonlabs/skeleton';

	import SideBarLeft from '../../lib/components/SideBarLeft.svelte';
</script>

<!-- <AppShell>...</AppShell> -->

<!-- App Shell -->

<AppShell>
	<!-- <svelte:fragment slot="header">
		<NavBar on:openModal={triggerModal} on:openDrawer={drawerOpen} />
	</svelte:fragment> -->

	<svelte:fragment slot="sidebarLeft">
		<SideBarLeft />
	</svelte:fragment>

	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->

	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- <svelte:fragment slot="pageFooter"><Footer /></svelte:fragment> -->
</AppShell>
