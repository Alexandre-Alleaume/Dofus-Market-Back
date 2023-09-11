<script>
	export let item;
	const { lien_image, name } = item;
</script>

<div class="image_container">
	<figure>
		<img
			src={lien_image}
			alt={name}
			title={name}
			width="216"
			height="234"
			class="item_card_image"
		/>
	</figure>
</div>

<style>
	.image_container {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(217, 214, 187);
	}

	.item_card_image {
		width: 4rem;
		height: 4rem;
	}
</style>
