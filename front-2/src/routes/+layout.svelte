<script>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-vintage.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { AppShell, AppBar, AppRailTile, AppRailAnchor, AppRail } from '@skeletonlabs/skeleton';

	import DrawerContent from '$lib/components/DrawerContent.svelte';
	import NavBar from '$lib/components/NavBar.svelte';

	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';

	import { Modal, modalStore } from '@skeletonlabs/skeleton';

	import ModalUser from '$lib/components/ModalUser.svelte';

	import Footer from '$lib/components/Footer.svelte';

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

	// Close the modal:
	function closeModal() {
		console.log('Hello');
		modalStore.close(modal);
	}

	// Open the drawer:
	function drawerOpen() {
		drawerStore.open();
	}
</script>

<Modal on:closeModal={closeModal} />

<Drawer>
	<DrawerContent />
</Drawer>

<AppShell>
	<svelte:fragment slot="header">
		<NavBar on:openModal={triggerModal} on:openDrawer={drawerOpen} />
	</svelte:fragment>

	<!-- 	<svelte:fragment slot="sidebarLeft">
		<SideBarLeft />
	</svelte:fragment> -->

	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->

	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
