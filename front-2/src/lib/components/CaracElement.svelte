<script>
	export let carac;
	export let value;
	export let index;
	export let cardType;

	let name = '';
	let degatsArray = [];

	let imgLink = '';

	let caracDegats = [
		'degats_neutre',
		'degats_neutre_secondaire',
		'degats_terre',
		'degats_terre_secondaire',
		'degats_feu',
		'degats_feu_secondaire',
		'degats_air',
		'degats_air_secondaire',
		'degats_eau',
		'degats_eau_secondaire'
	];

	const degatsToName = {
		degats_neutre: 'neutre',
		degats_neutre_secondaire: 'neutre',
		degats_terre: 'terre',
		degats_terre_secondaire: 'terre',
		degats_feu: 'feu',
		degats_feu_secondaire: 'feu',
		degats_air: 'air',
		degats_air_secondaire: 'air',
		degats_eau: 'eau',
		degats_eau_secondaire: 'eau'
	};

	const degatsImage = {
		degats_neutre_secondaire: 'icons/icon_degats_neutre.svg',
		degats_terre_secondaire: 'icons/icon_degats_terre.svg',
		degats_feu_secondaire: 'icons/icon_degats_feu.svg',
		degats_air_secondaire: 'icons/icon_degats_air.svg',
		degats_eau_secondaire: 'icons/icon_degats_eau.svg'
	};

	if (carac in degatsToName) {
		name = degatsToName[carac];
	}

	if (carac in degatsImage) {
		imgLink = degatsImage[carac];
	}

	const caracVol = ['vol_neutre', 'vol_terre', 'vol_feu', 'vol_air', 'vol_eau'];

	const volToName = {
		vol_neutre: 'neutre',
		vol_terre: 'terre',
		vol_feu: 'feu',
		vol_air: 'air',
		vol_eau: 'eau'
	};

	if (carac in volToName) {
		name = degatsToName[carac];
	}

	const caracElementWithImage = [
		'PA',
		'PM',
		'agilite',
		'force',
		'chance',
		'intelligence',
		'sagesse',
		'vitalite',
		'initiative',
		'res_eau_pourcent',
		'res_terre_pourcent',
		'res_feu_pourcent',
		'res_air_pourcent',
		'res_neutre_pourcent',
		'prospection'
	];

	const caracElementNoImage = [
		'PO',
		'coup_critique',
		'pieges_fixe',
		'pieges_pourcent',
		'res_eau_fixe',
		'res_terre_fixe',
		'res_feu_fixe',
		'res_air_fixe',
		'res_neutre_fixe',
		'dommage',
		'soins',
		'invo',
		'echec_critique'
	];

	const caracToName = {
		PA: 'PA',
		PO: 'PM',
		PO: 'à la portée',
		agilite: 'en agilité',
		force: 'en force',
		chance: 'à la chance',
		intelligence: 'en intelligence',
		sagesse: 'en sagesse',
		vitalite: 'en vitalité',
		initiative: 'en initiative',
		dommage_pourcent: ' en intelligence',
		coup_critique: 'aux coups critiques',
		pieges_fixe: 'de dommages aux pièges',
		pieges_pourcent: '% de dommages aux pièges',
		res_eau_fixe: "de résistance à l'eau",
		res_eau_pourcent: "% de résistance à l'eau",
		res_terre_fixe: 'de résistance à la terre',
		res_terre_pourcent: '% de résistance à la terre',
		res_feu_fixe: 'de résistance au feu',
		res_feu_pourcent: '% de résistance au feu',
		res_air_fixe: "de résistance à l'air",
		res_air_pourcent: "% de résistance à l'air",
		res_neutre_fixe: 'de résistance neutre',
		res_neutre_pourcent: '% de résistance neutre',
		prospection: 'en prospection',
		dommage: 'dommages',
		soins: 'aux soins',
		invo: 'créatures invocables',
		echec_critique: 'aux échecs critiques'
	};

	const caracImage = {
		PA: 'icons/icon_PA.svg',
		PM: 'icons/icon_PM.svg',
		agilite: 'icons/icon_agilite.svg',
		chance: 'icons/icon_chance.svg',
		force: 'icons/icon_force.svg',
		intelligence: 'icons/icon_intelligence.svg',
		sagesse: 'icons/icon_sagesse.svg',
		initiative: 'icons/icon_initiative.svg',
		vitalite: 'icons/icon_vitalite.svg',
		res_eau_pourcent: 'icons/icon_res_eau.svg',
		res_air_pourcent: 'icons/icon_res_air.svg',
		res_feu_pourcent: 'icons/icon_res_feu.svg',
		res_terre_pourcent: 'icons/icon_res_terre.svg',
		res_neutre_pourcent: 'icons/icon_res_neutre.svg',
		prospection: 'icons/icon_prospection.svg'
	};

	if (carac in caracToName) {
		name = caracToName[carac];
	}

	if (carac in caracImage) {
		imgLink = caracImage[carac];
	}
</script>

{#if cardType === 'generic'}
	{#if caracDegats.includes(carac)}
		<div class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}" data-category={carac}>
			<div class="grid__carac__value">
				<div>
					{value}
				</div>
				<div>
					<img src="icons/icon_{carac}.svg" alt="icone_{carac}" class="icone_carac" />
				</div>
			</div>
		</div>
	{/if}

	{#if caracVol.includes(carac)}
		<div class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}" data-category={carac}>
			<div class="grid__carac__value">
				<div>
					{value}
				</div>
			</div>
		</div>
	{/if}

	{#if caracElementWithImage.includes(carac)}
		<div class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}" data-category={carac}>
			<div class="grid__carac__value">
				<div>{value}</div>
				<div>
					<img src={imgLink} alt="icone_carac_{carac}" class="icone_carac" />
				</div>
			</div>
		</div>
	{/if}

	{#if caracElementNoImage.includes(carac)}
		<div class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}" data-category={carac}>
			<div class="grid__carac__value">
				<div>{value}</div>
			</div>
		</div>
	{/if}

	{#if carac == 'dommage_pourcent'}
		<div
			class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}"
			data-category="dommage_pourcent"
		>
			<div class="grid__carac__value">
				<div>{value}</div>
			</div>
		</div>
	{/if}

	{#if carac == 'pods'}
		<div
			class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}"
			data-category="initiative"
		>
			<div class="grid__carac__value">
				<div>{value}</div>
			</div>
		</div>
	{/if}

	{#if carac == 'renvoi_dommage'}
		<div
			class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}"
			data-category="initiative"
		>
			<div class="grid__carac__value">
				<div>{value}</div>
			</div>
		</div>
	{/if}

	{#if carac == 'chasse'}
		<div class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}" data-category="chasse">
			<div>{value}</div>
		</div>
	{/if}

	{#if carac == 'vole_or'}
		<div class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}" data-category="vole_or">
			<div>{value}</div>
		</div>
	{/if}
{:else}
	{#if caracDegats.includes(carac)}
		<div class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}" data-category={carac}>
			<div class="grid__carac__value">
				<div>
					Dommages: {value[0]} à {value[1]} ({name})
				</div>
				<div>
					<img src="icons/icon_{carac}.svg" alt="icone_{carac}" class="icone_carac" />
				</div>
			</div>

			<div class=" grid__carac__input hidden" data-category={carac}>
				<div>
					Dommages:
					<input
						type="text"
						placeholder="?"
						class="pop__up__carac"
						id="{carac}_before"
						name="{carac}_before"
					/>
					à
					<input
						type="text"
						placeholder="?"
						class="pop__up__carac"
						id="{carac}_after"
						name="{carac}_after"
					/>
					({name})
				</div>
				<div>
					<img src="icons/icon_{carac}.svg" alt="icone_{carac}" class="icone_carac" />
				</div>
			</div>
		</div>
	{/if}

	{#if caracVol.includes(carac)}
		<div class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}" data-category={carac}>
			<div class="grid__carac__value">
				<div>
					Vole {value[0]} à
					{value[1]} ({name})
				</div>
			</div>

			<div class=" grid__carac__input hidden" data-category={carac}>
				<div>
					Vole
					<input
						type="text"
						placeholder="?"
						class="pop__up__carac"
						id="{carac}_before"
						name="{carac}_before"
					/>
					à
					<input
						type="text"
						placeholder="?"
						class="pop__up__carac"
						id="{carac}_after"
						name="{carac}_after"
					/>
					({name})
				</div>
			</div>
		</div>
	{/if}

	{#if caracElementWithImage.includes(carac)}
		<div class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}" data-category={carac}>
			<div class="grid__carac__value">
				<div>+ {value} {name}</div>
				<div>
					<img src={imgLink} alt="icone_carac_{carac}" class="icone_carac" />
				</div>
			</div>

			<div class=" grid__carac__input hidden" data-category={carac}>
				<div>
					+<input
						type="text"
						placeholder="?"
						class="pop__up__carac"
						id={carac}
						name={carac}
					/>{name}
				</div>
				<div>
					<img src={imgLink} alt="icone_carac_{carac}" class="icone_carac" />
				</div>
			</div>
		</div>
	{/if}

	{#if caracElementNoImage.includes(carac)}
		<div class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}" data-category={carac}>
			<div class="grid__carac__value">
				<div>+ {value} {name}</div>
			</div>

			<div class=" grid__carac__input hidden" data-category={carac}>
				<div>
					+<input
						type="text"
						placeholder="?"
						class="pop__up__carac"
						id={carac}
						name={carac}
					/>{name}
				</div>
			</div>
		</div>
	{/if}

	{#if carac == 'dommage_pourcent'}
		<div
			class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}"
			data-category="dommage_pourcent"
		>
			<div class="grid__carac__value">
				<div>Augmente les dommages de {value}%</div>
			</div>
			<div class=" grid__carac__input hidden" data-category="dommage_pourcent">
				<div>
					Augmente les dommages de
					<input
						type="text"
						placeholder="?"
						class="pop__up__carac"
						id="dommage_pourcent"
						name="dommage_pourcent"
					/>%
				</div>
			</div>
		</div>
	{/if}

	{#if carac == 'pods'}
		<div
			class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}"
			data-category="initiative"
		>
			<div class="grid__carac__value">
				<div>Augmente le poids portable de {value}</div>
			</div>

			<div class=" grid__carac__input hidden" data-category={carac}>
				<div>
					+<input
						type="text"
						placeholder="?"
						class="pop__up__carac"
						id={carac}
						name={carac}
					/>{name}
				</div>
			</div>
		</div>
	{/if}

	{#if carac == 'renvoi_dommage'}
		<div
			class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}"
			data-category="initiative"
		>
			<div class="grid__carac__value">
				<div>Renvoie {value} dommages</div>
			</div>

			<div class=" grid__carac__input hidden" data-category={carac}>
				<div>
					+<input
						type="text"
						placeholder="?"
						class="pop__up__carac"
						id={carac}
						name={carac}
					/>{name}
				</div>
			</div>
		</div>
	{/if}

	{#if carac == 'chasse'}
		<div class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}" data-category="chasse">
			<div>Arme de Chasse</div>
		</div>
	{/if}

	{#if carac == 'vole_or'}
		<div class=" carac_flex {index % 2 === 0 ? 'dark-row' : 'light-row'}" data-category="vole_or">
			<div>{value}</div>
		</div>
	{/if}
{/if}

<style>
	.dark-row {
		background-color: rgb(179, 172, 144);
	}

	.light-row {
		background-color: rgb(199, 191, 161);
	}

	.carac_flex,
	.grid__carac__value,
	.grid__carac__input {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 0.1rem;
		padding-bottom: 0.1rem;
		padding-left: 0.2rem;
		padding-right: 0.2rem;
	}

	.grid__carac__value,
	.grid__carac__input {
		width: 100%;
	}

	.icone_carac {
		width: 1.3rem;
	}

	.hidden {
		display: none;
	}
</style>
