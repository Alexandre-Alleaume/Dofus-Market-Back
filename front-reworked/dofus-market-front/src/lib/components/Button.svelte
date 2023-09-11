<script>
	export let title = 'Press-me';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	const onClick = () => {
		dispatch('showGeneric');
	};
</script>

<button type="button" class="bouton" on:click={onClick}>
	{title}
</button>

<style>
	.bouton {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgb(237, 108, 45);
		color: white;
		font-weight: bold;
		border-top: outset rgba(255, 255, 255, 0.6) 0.05px;
		border-left: outset rgba(255, 255, 255, 0.6) 0.05px;
		border-bottom: outset rgba(0, 0, 0, 0.6) 0.05px;
		border-right: outset rgba(0, 0, 0, 0.6) 0.05px;
		text-align: center;
		font-size: 0.6rem;
		padding: 2px;
		width: fit-content;
		height: 1.5rem;
	}

	.bouton:active {
		background-color: rgba(175, 154, 136, 1);
		border-bottom: outset rgba(255, 255, 255, 0.6) 0.05px;
		border-right: outset rgba(255, 255, 255, 0.6) 0.05px;
		border-top: outset rgba(0, 0, 0, 0.6) 0.05px;
		border-left: outset rgba(0, 0, 0, 0.6) 0.05px;
	}
</style>
