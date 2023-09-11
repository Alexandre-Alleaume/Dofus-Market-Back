<script>
	import { AppBar } from '@skeletonlabs/skeleton';
	import { createEventDispatcher } from 'svelte';
	import SearchBar from './SearchBar.svelte';

	const dispatch = createEventDispatcher();

	const triggerModal = () => {
		dispatch('openModal');
	};

	function drawerOpen() {
		dispatch('openDrawer');
	}
</script>

<AppBar padding="p-1.5">
	<svelte:fragment slot="lead"
		><img
			src="/images/header_icon.png"
			alt="icon du site"
			title="perso enutrof"
			class="hidden h-16 -ml-16 lg:block"
			width="200px"
		/>
		<button class="btn-icon btn-icon-sm lg:!hidden" on:click={drawerOpen}>
			<i class="fa-solid fa-bars text-xl" />
		</button>

		<a href="/" class="text-2xl lg:text-3xl lg:-ml-16 pl-2 font-bold">Dofus Market</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<SearchBar />

		<a href="/login"
			><button type="button" class=" hidden lg:btn lg:hover:variant-soft-primary"
				>Se Connecter</button
			></a
		>

		<button type="button" class="btn hover:variant-soft-primary lg:hidden" on:click={triggerModal}>
			<i class="fa-regular fa-user" />
		</button>

		<span class="hidden lg:divider-vertical lg:h-10" />
		<a href="/subscribe">
			<button type="button" class=" hidden lg:btn lg:hover:variant-soft-primary">S'inscrire</button
			></a
		>
	</svelte:fragment>
</AppBar>
