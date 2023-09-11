<!-- COMPONENT LOGIC -->

<!-- This component is an autocmplete search bar. It aims at providing an other way than the right side bar to find items. Basically all the items of the games are in the Options. Tehn when the user select the options it displayed the hdv related to  the object selected -->

<!-- This compoenent will be feed by a getAllItems sql request -->

<script>
	import { popup } from '@skeletonlabs/skeleton';

	import { Autocomplete } from '@skeletonlabs/skeleton';

	let inputSearchBar = '';

	let popupSettings = {
		event: 'focus-click',
		target: 'popupAutocomplete',
		placement: 'bottom'
	};

	/* Correspond to all the items available as options in the searchBar */

	/* label=itemName  / value=id /keyword=categorie */
	const itemsOptions = [
		{ label: 'Coiffe Bouftou ', value: '1', keywords: 'chapeau' },
		{ label: 'Coiffe Prespic', value: '2', keywords: 'chapeau' },
		{ label: 'Dora', value: '3', keywords: 'chapeau' },
		{ label: 'Gelano', value: '4', keywords: 'anneau' },
		{ label: 'Anolamour', value: '5', keywords: 'anneau' },
		{ label: 'Cape Bouftou', value: '6', keywords: 'cape' },
		{ label: 'Cape Itaineflam', value: '7', keywords: 'cape' },
		{ label: 'Razielle', value: '8', keywords: 'épée' }
	];

	/* This function should trigger a goto using the id of the item selected */
	function onFlavorSelection(event) {
		inputSearchBar = event.detail.label;
	}

	$: console.log(inputSearchBar);
</script>

<input
	class="input autocomplete"
	type="search"
	name="autocomplete-search"
	bind:value={inputSearchBar}
	placeholder="Search..."
	use:popup={popupSettings}
/>

<div data-popup="popupAutocomplete">
	<Autocomplete
		bind:input={inputSearchBar}
		options={itemsOptions}
		on:selection={onFlavorSelection}
		class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto"
	/>
</div>
