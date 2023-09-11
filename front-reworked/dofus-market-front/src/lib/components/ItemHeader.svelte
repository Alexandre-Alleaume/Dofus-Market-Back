<script>
	export let item;
	export let status;
	const { id, name } = item;
</script>

<div class="hdv__profil__item__header">
	<a class="item__name" href="/hdv/{id}">{name}</a>

	<!-- Here we diplayed the button depending of the status of the user currently visting the page. If he is the owner (modify, validate and delete button), if he is a simple visitor (nothing), if he is connected (favoris) -->

	{#if status === 'owner'}
		<!-- Here if the status is owner (meaning the user is on its own profile he can Modify, validate the modification of delete the e-mail) -->

		<!-- I should create a button component and pass it the text and depending of the text the logic behind -->
		<div class="hdv__profil__item__header__boutons">
			<button type="button" class="bouton__update__from__hdv"> Modifier </button>
			<button type="submit" class="bouton__validate__update__from__hdv hidden"> Valider </button>

			<button type="button" class="bouton__delete__from__hdv">X</button>
			<button type="button" class="bouton__stop__update__from__hdv hidden"> Annuler </button>
		</div>
	{/if}
</div>

<style>
	.hdv__profil__item__header {
		grid-column: span 2;
		background-color: rgb(80, 74, 62);
		border-radius: 5px 5px 0 0;
		width: 100%;
		padding: 0.15em;
		text-decoration: none;
		font-weight: bold;
		display: flex;
		align-items: center;
	}

	.hdv__profil__item__header__boutons {
		display: flex;
		column-gap: 0.5rem;
	}
</style>
