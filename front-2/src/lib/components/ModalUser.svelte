<script>
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	/* To be fixed */
	const triggerModal = () => {
		console.log('Hello');
		dispatch('closeModal');
	};
</script>

<nav class="list-nav border border-surface-500 p-4 rounded-container-token {cBase}">
	<!-- (optionally you can provide a label here) -->
	<ul>
		<li>
			<a href="/login" on:click={triggerModal}>
				<span class="flex-auto">Se Connecter</span>
			</a>
		</li>
		<li>
			<a href="/subscribe" on:click={triggerModal}>
				<span class="flex-auto">S'inscrire</span>
			</a>
		</li>
		<li>
			<a href="" on:click={triggerModal}>
				<span class="flex-auto">Se déconnecter</span>
			</a>
		</li>
		<!-- ... -->
	</ul>
</nav>
