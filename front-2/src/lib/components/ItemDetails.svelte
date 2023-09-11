<script>
	export let item;
	export let cardType;

	let description;
	let discord;
	let pseudo_ig;
	let price;
	let user_id;
	let pseudo;

	if (cardType === 'generic') {
		description = item.description;
	} else {
		discord = item.discord;
		pseudo_ig = item.pseudo_ig;
		price = item.price;
		user_id = item.user_id;
		pseudo = item.pseudo;
	}

	console.log(description);
</script>

<div class="details_container hide-scrollbar">
	{#if cardType === 'generic'}
		<h4>Description</h4>
		<p>{description}</p>
	{:else}
		<div>
			<h4>Coordonnnées et Prix :</h4>
		</div>
		<div class="details__container__bottom">
			<div class="detaisl__container__contact">
				<div class="details__container__field">
					<img
						src="icons/icon_discord.svg"
						alt="icon_discord"
						class="details__container__field__icon"
					/>

					{#if discord}
						<p>: {discord}</p>
					{:else}
						<p>: Discord non renseigné</p>
					{/if}
				</div>

				<div class="details__container__field">
					{#if pseudo_ig}
						<a
							class="pop__up__infos item__container__bottom__link"
							href="/profil/{user_id}/{pseudo}">In-Game: {pseudo_ig}</a
						>
					{:else}
						<p>In-Game: Pseudo IG non renseigné</p>
					{/if}
				</div>
			</div>
			<div class="details__container__price">
				<div class="details__container__field">
					<p class="pop__up__infos">{price}</p>
					<img
						src="icons/icon_kamas.webp"
						alt="icon_kamas"
						class="details__container__icon__kamas"
					/>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.details_container {
		grid-column: span 2;
	}

	.details__container__field {
		margin-top: 0;
	}

	.details_container {
		background-color: rgb(237, 235, 221);
		border-radius: 0 0 5px 5px;
		padding: 3px;
		font-size: 0.75rem;
		overflow: scroll;
		height: 3.5rem;
	}

	h4 {
		text-decoration: underline;
	}

	.details__container__bottom {
		display: flex;
		justify-content: space-between;
		flex-grow: 1;
	}

	.details__container__field {
		display: flex;
		margin-top: 0.5rem;
		align-items: center;
	}

	.details__container__price {
		display: flex;
		align-items: flex-end;
	}

	.details__container__icon__kamas {
		width: 1rem;
		margin-left: 0.1rem;
	}

	.details__container__field__icon {
		width: 1rem;
	}
</style>
