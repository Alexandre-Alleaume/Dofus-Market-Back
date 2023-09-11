<script>
	import '../app.postcss';

	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';

	import { Modal, getModalStore } from '@skeletonlabs/skeleton';

	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();

	const modalStore = getModalStore();

	const drawerStore = getDrawerStore();

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { AppShell, AppBar, AppRailTile, AppRailAnchor, AppRail } from '@skeletonlabs/skeleton';

	import DrawerContent from '$lib/components/DrawerContent.svelte';
	import NavBar from '$lib/components/NavBar.svelte';

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
