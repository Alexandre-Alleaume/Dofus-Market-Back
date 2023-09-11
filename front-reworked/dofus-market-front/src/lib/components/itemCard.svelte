<!-- COMPONENT LOGIC  -->

<!-- This component represents the item card which going to be filled with the item name, image, chracteristics, price and the seller information (pseudo in-game, discord). An important feature of this card is the alternative colors of each chracteristic line to be consistent with the game design. -->
<script>
	import CaracElement from './CaracElement.svelte';
	import ItemDetails from './ItemDetails.svelte';

	import CaracList from './CaracList.svelte';
	import ItemImage from './ItemImage.svelte';
	import ItemHeader from './ItemHeader.svelte';
	export let item;

	export let cardType = 'hdv';

	for (const key in item) {
		if (!item[key]) {
			delete item[key];
		}
	}

	let degatsObject = {};

	if (item.type === 'arme') {
		const typesDegats = [
			'neutre',
			'neutre_secondaire',
			'terre',
			'terre_secondaire',
			'feu',
			'feu_secondaire',
			'air',
			'air_secondaire',
			'eau',
			'eau_secondaire'
		];

		typesDegats.forEach((typeDegat) => {
			const degatBeforeKey = `degats_${typeDegat}_before`;
			const degatAfterKey = `degats_${typeDegat}_after`;
			const degatKey = `degats_${typeDegat}`;

			if (item[degatBeforeKey]) {
				const degat = [item[degatBeforeKey], item[degatAfterKey]];
				delete item[degatBeforeKey];
				delete item[degatAfterKey];
				degatsObject[degatKey] = degat;
			} else {
				delete item[degatBeforeKey];
				delete item[degatAfterKey];
			}
		});
	}

	/* Reorganisation of the object in order to have the damage first and then the characteristics */

	const { user_weapon_id, weaponid, user_id, name, type, categorie, niveau, ...rest } = item;

	const itemCarac = { ...degatsObject, ...rest };

	item = { ...degatsObject, ...item };

	let status;
</script>

<form class="item_container_main" data-item-id={item.id}>
	<!-- Header de l'item card -->

	<ItemHeader {item} />

	<!-- Container of the item image, I should make it a component -->

	<ItemImage {item} />

	<!-- Container of the characteristics maybe make a component  -->
	<div class="carac hide-scrollbar">
		{#each Object.entries(itemCarac) as [carac, value], index}
			<CaracElement {carac} {value} {index} {cardType} />
		{/each}
	</div>

	<!-- Container of the bottom part of the item card, containing price, contacts or description for generic item -->

	<ItemDetails {item} {cardType} />
</form>

<style>
	.item_container_main {
		font-size: 0.9rem;
		color: black;
		max-width: 20rem;
		margin: auto;
		display: grid;
		grid-template-columns: 1fr 3fr;
	}

	.carac {
		height: 7rem;
		/* width: 15rem; */
		display: grid;
		grid-template-rows: repeat(6, 1fr);
		overflow: scroll;
		font-size: 0.85rem;
	}
</style>
