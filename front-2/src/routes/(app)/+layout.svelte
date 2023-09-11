<script>
	import { AppShell, AppBar, AppRailTile, AppRailAnchor, AppRail } from '@skeletonlabs/skeleton';

	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';

	import { Modal, modalStore } from '@skeletonlabs/skeleton';

	import ModalUser from '../../lib/components/ModalUser.svelte';

	import Footer from '../../lib/components/Footer.svelte';

	import SideBarLeft from '../../lib/components/SideBarLeft.svelte';

	const modalComponent = {
		// Pass a reference to your custom component
		ref: ModalUser
	};

	// Provide the modal settings
	const modal = {
		type: 'component',
		// Pass the component directly:
		component: modalComponent
	};

	// Trigger the modal:
	const triggerModal = () => {
		modalStore.trigger(modal);
	};

	import DrawerContent from '$lib/components/DrawerContent.svelte';
	import NavBar from '../../lib/components/NavBar.svelte';

	// Open the drawer:
	function drawerOpen() {
		drawerStore.open();
	}
</script>

<!-- <AppShell>...</AppShell> -->

<Modal />

<Drawer>
	<DrawerContent />
</Drawer>

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
