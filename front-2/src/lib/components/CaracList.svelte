<!-- COMPONENT LOGIC -->

<!-- This component aims at displaying the characterisctic of the item. It should have an alternative color pattern in order to respect the design of the game  -->

<!-- This component also contains the form field displayed if the user wants to modify the item in its profile -->

<script>
	export let item;
</script>

<!-- Maybe I should make the line a component which is filled with the data. Anyway the principle is the following: if the item contains the characteristic it is displayed otherwise an empty div is displayed  -->

{#if item.degats_neutre_before}
	<div class=" carac_flex" data-category="degats_neutre">
		<div class="grid__carac__value">
			<div>
				Dommages: {item.degats_neutre_before} à
				{item.degats_neutre_after} (neutre)
			</div>
			<div>
				<img src="icons/icon_degats_neutre.svg" alt="icone_carac_neutre" class="icone_carac" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="degats_neutre">
			<div>
				Dommages:
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_neutre_before"
					name="degats_neutre_before"
				/>
				à
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_neutre_after"
					name="degats_neutre_after"
				/>
				(neutre)
			</div>
			<div>
				<img src="icons/icon_degats_neutre.svg" alt="icone_carac_neutre" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.degats_neutre_secondaire_before}
	<div class=" carac_flex" data-category="degats_neutre_secondaire">
		<div class="grid__carac__value">
			<div>
				Dommages: {item.degats_neutre_secondaire_before} à
				{item.degats_neutre_secondaire_after} (neutre)
			</div>

			<div>
				<img src="icons/icon_degats_neutre.svg" alt="icone_carac_neutre" class="icone_carac" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="degats_neutre_secondaire">
			<div>
				Dommages:
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_neutre_secondaire_before"
					name="degats_neutre_secondaire_before"
				/>
				à
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_neutre_secondaire_after"
					name="degats_neutre_secondaire_after"
				/>
				(neutre)
			</div>
			<div>
				<img src="icons/icon_degats_neutre.svg" alt="icone_carac_neutre" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.degats_terre_before}
	<div class=" carac_flex" data-category="degats_terre">
		<div class="grid__carac__value">
			<div>
				Dommages: {item.degats_terre_before} à
				{item.degats_terre_after} (terre)
			</div>
			<div>
				<img src="icons/icon_degats_terre.svg" alt="icone_carac_terre" class="icone_carac" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="degats_terre">
			<div>
				Dommages:
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_terre_before"
					name="degats_terre_before"
				/>
				à
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_terre_after"
					name="degats_terre_after"
				/>
				(terre)
			</div>
			<div>
				<img src="icons/icon_degats_terre.svg" alt="icone_carac_terre" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.degats_terre_secondaire_before}
	<div class=" carac_flex" data-category="degats_terre_secondaire">
		<div class="grid__carac__value">
			<div>
				Dommages: {item.degats_terre_secondaire_before} à
				{item.degats_terre_secondaire_after} (terre)
			</div>
			<div>
				<img src="icons/icon_degats_terre.svg" alt="icone_carac_terre" class="icone_carac" />
			</div>
		</div>
	</div>

	<div class=" grid__carac__input hidden" data-category="degats_terre_secondaire">
		<div>
			Dommages:
			<input
				type="text"
				placeholder="?"
				class="pop__up__carac"
				id="degats_terre_secondaire_before"
				name="degats_terre_secondaire_before"
			/>
			à
			<input
				type="text"
				placeholder="?"
				class="pop__up__carac"
				id="degats_terre_secondaire_after"
				name="degats_terre_secondaire_after"
			/>
			(terre)
		</div>
		<div>
			<img src="icons/icon_degats_terre.svg" alt="icone_carac_terre" class="icone_carac" />
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.degats_feu_before}
	<div class=" carac_flex" data-category="degats_feu">
		<div class="grid__carac__value">
			<div>
				Dommages: {item.degats_feu_before} à
				{item.degats_feu_after} (feu)
			</div>
			<div>
				<img src="icons/icon_degats_feu.svg" alt="icone_carac_feu" class="icone_carac" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="degats_feu">
			<div>
				Dommages:
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_feu_before"
					name="degats_feu_before"
				/>
				à
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_feu_after"
					name="degats_feu_after"
				/>
				(feu)
			</div>
			<div>
				<img src="icons/icon_degats_feu.svg" alt="icone_carac_feu" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.degats_feu_secondaire_before}
	<div class=" carac_flex" data-category="degats_feu_secondaire">
		<div class="grid__carac__value">
			<div>
				Dommages: {item.degats_feu_secondaire_before} à
				{item.degats_feu_secondaire_after} (feu)
			</div>
			<div>
				<img src="icons/icon_degats_feu.svg" alt="icone_carac_feu" class="icone_carac" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="degats_feu_secondaire">
			<div>
				Dommages:
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_feu_secondaire_before"
					name="degats_feu_secondaire_before"
				/>
				à
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_feu_secondaire_after"
					name="degats_feu_secondaire_after"
				/>
				(feu)
			</div>
			<div>
				<img src="icons/icon_degats_feu.svg" alt="icone_carac_feu" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.degats_air_before}
	<div class=" carac_flex" data-category="degats_air">
		<div class="grid__carac__value">
			<div>
				Dommages: {item.degats_air_before} à
				{item.degats_air_after} (air)
			</div>
			<div>
				<img src="icons/icon_degats_air.svg" alt="icone_carac_air" class="icone_carac" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="degats_air">
			<div>
				Dommages:
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_air_before"
					name="degats_air_before"
				/>
				à
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_air_after"
					name="degats_air_after"
				/>
				(air)
			</div>
			<div>
				<img src="icons/icon_degats_air.svg" alt="icone_carac_air" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.degats_air_secondaire_before}
	<div class=" carac_flex" data-category="degats_air_secondaire">
		<div class="grid__carac__value">
			<div>
				Dommages: {item.degats_air_secondaire_before} à
				{item.degats_air_secondaire_after} (air)
			</div>
			<div>
				<img src="icons/icon_degats_air.svg" alt="icone_carac_air" class="icone_carac" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="degats_air_secondaire">
			<div>
				Dommages:
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_air_secondaire_before"
					name="degats_air_secondaire_before"
				/>
				à
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_air_secondaire_after"
					name="degats_air_secondaire_after"
				/>
				(air)
			</div>
			<div>
				<img src="icons/icon_degats_air.svg" alt="icone_carac_air" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.degats_eau_before}
	<div class=" carac_flex" data-category="degats_eau">
		<div class="grid__carac__value">
			<div>
				Dommages: {item.degats_eau_before} à
				{item.degats_eau_after} (eau)
			</div>
			<div>
				<img src="icons/icon_degats_eau.svg" alt="icone_carac_eau" class="icone_carac" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="degats_eau">
			<div>
				Dommages:
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_eau_before"
					name="degats_eau_before"
				/>
				à
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_eau_after"
					name="degats_eau_after"
				/>
				(eau)
			</div>
			<div>
				<img src="icons/icon_degats_eau.svg" alt="icone_carac_eau" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.degats_eau_secondaire_before}
	<div class=" carac_flex" data-category="degats_eau_secondaire">
		<div class="grid__carac__value">
			<div>
				Dommages: {item.degats_eau_secondaire_before} à
				{item.degats_eau_secondaire_after} (eau)
			</div>
			<div>
				<img src="icons/icon_degats_eau.svg" alt="icone_carac_eau" class="icone_carac" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="degats_eau_secondaire">
			<div>
				Dommages:
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_eau_secondaire_before"
					name="degats_eau_secondaire_before"
				/>
				à
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="degats_eau_secondaire_after"
					name="degats_eau_secondaire_after"
				/>
				(eau)
			</div>
			<div>
				<img src="icons/icon_degats_eau.svg" alt="icone_carac_eau" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.vol_neutre_before}
	<div class=" carac_flex" data-category="vol_neutre">
		<div class="grid__carac__value">
			<div>
				Vole {item.vol_neutre_before} à
				{item.vol_neutre_after} (neutre)
			</div>
		</div>
		<div class=" grid__carac__input hidden" data-category="vol_neutre">
			<div>
				Vole
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="vol_neutre_before"
					name="vol_neutre_before"
				/>
				à
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="vol_neutre_after"
					name="vol_neutre_after"
				/>
				(neutre)
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.vol_terre_before}
	<div class=" carac_flex" data-category="vol_terre">
		<div class="grid__carac__value">
			<div>
				Vole {item.vol_terre_before} à
				{item.vol_terre_after} (terre)
			</div>
		</div>
		<div class=" grid__carac__input hidden" data-category="vol_terre">
			<div>
				Vole
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="vol_terre_before"
					name="vol_terre_before"
				/>
				à
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="vol_terre_after"
					name="vol_terre_after"
				/>
				(terre)
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.vol_feu_before}
	<div class=" carac_flex" data-category="vol_feu">
		<div class="grid__carac__value">
			<div>
				Vole {item.vol_feu_before} à
				{item.vol_feu_after} (feu)
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="vol_feu">
			<div>
				Vole
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="vol_feu_before"
					name="vol_feu_before"
				/>
				à
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="vol_feu_after"
					name="vol_feu_after"
				/>
				(feu)
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.vol_air_before}
	<div class=" carac_flex" data-category="vol_air">
		<div class="grid__carac__value">
			<div>
				Vole {item.vol_air_before} à
				{item.vol_air_after} (air)
			</div>
		</div>
		<div class=" grid__carac__input hidden" data-category="vol_air">
			<div>
				Vole
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="vol_air_before"
					name="vol_air_before"
				/>
				à
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="vol_air_after"
					name="vol_air_after"
				/>
				(air)
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.vol_eau_before}
	<div class=" carac_flex" data-category="vol_eau">
		<div class="grid__carac__value">
			<div>
				Vole {item.vol_eau_before} à
				{item.vol_eau_after} (eau)
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="vol_eau">
			<div>
				Vole
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="vol_eau_before"
					name="vol_eau_before"
				/>
				à
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="vol_eau_after"
					name="vol_eau_after"
				/>
				(eau)
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.PA}
	<div class=" carac_flex" data-category="PA">
		<div class="grid__carac__value">
			<div>+ {item.PA} PA</div>
			<div>
				<img src="icons/icon_PA.svg" alt="icone_carac_PA" class="icone_carac" />
			</div>
		</div>
		<div class=" grid__carac__input hidden" data-category="PA">
			<div>
				+<input type="text" placeholder="?" class="pop__up__carac" id="PA" name="PA" />PA
			</div>
			<div>
				<img src="icons/icon_PA.svg" alt="icone_carac_PA" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.PM}
	<div class=" carac_flex" data-category="PM">
		<div class="grid__carac__value">
			<div>+ {item.PM} PM</div>
			<div>
				<img src="icons/icon_PM.svg" alt="icone_carac_PM" class="icone_carac" />
			</div>
		</div>
		<div class=" grid__carac__input hidden" data-category="PM">
			<div>
				+<input type="text" placeholder="?" class="pop__up__carac" id="PM" name="PM" />PM
			</div>
			<div>
				<img src="icons/icon_PM.svg" alt="icone_carac_PM" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.agilite}
	<div class=" carac_flex" data-category="agilite">
		<div class="grid__carac__value">
			<div>+ {item.agilite} Agilité</div>
			<div>
				<img src="icons/icon_agilite.svg" alt="icone_carac_agilite" class="icone_carac" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="agilite">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="agilite"
					name="agilite"
				/>Agilité
			</div>
			<div>
				<img src="icons/icon_agilite.svg" alt="icone_carac_agilite" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.force}
	<div class=" carac_flex" data-category="force">
		<div class="grid__carac__value">
			<div>+ {item.force} Force</div>
			<div>
				<img src="icons/icon_force.svg" alt="icone_carac_force" class="icone_carac" />
			</div>
		</div>
		<div class=" grid__carac__input hidden" data-category="force">
			<div>
				+<input type="text" placeholder="?" class="pop__up__carac" id="force" name="force" />Force
			</div>
			<div>
				<img src="icons/icon_force.svg" alt="icone_carac_force" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.chance}
	<div class=" carac_flex" data-category="chance">
		<div class="grid__carac__value">
			<div>+ {item.chance} Chance</div>
			<div>
				<img src="icons/icon_chance.svg" alt="icone_carac_chance" class="icone_carac" />
			</div>
		</div>
		<div class=" grid__carac__input hidden" data-category="chance">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="chance"
					name="chance"
				/>Chance
			</div>
			<div>
				<img src="icons/icon_chance.svg" alt="icone_carac_chance" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.intelligence}
	<div class="light__ carac_flex" data-category="intelligence">
		<div class="grid__carac__value">
			<div>+ {item.intelligence} Intelligence</div>
			<div>
				<img src="icons/icon_intelligence.svg" alt="icone_carac_intelligence" class="icone_carac" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="intelligence">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="intelligence"
					name="intelligence"
				/>Intelligence
			</div>
			<div>
				<img src="icons/icon_intelligence.svg" alt="icone_carac_intelligence" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.sagesse}
	<div class=" carac_flex" data-category="sagesse">
		<div class="grid__carac__value">
			<div>+ {item.sagesse} Sagesse</div>
			<div>
				<img src="icons/icon_sagesse.svg" alt="icone_carac_sagesse" class="icone_carac" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="sagesse">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="sagesse"
					name="sagesse"
				/>Sagesse
			</div>
			<div>
				<img src="icons/icon_sagesse.svg" alt="icone_carac_sagesse" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.vitalite}
	<div class="light__ carac_flex" data-category="vitalite">
		<div class="grid__carac__value">
			<div>+ {item.vitalite} Vitalité</div>
			<div>
				<img src="icons/icon_vitalite.svg" alt="icone_carac_vita" class="icone_carac" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="vitalite">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="vitalite"
					name="vitalite"
				/>Vitalité
			</div>
			<div>
				<img src="icons/icon_vitalite.svg" alt="icone_carac_vita" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.initiative}
	<div class=" carac_flex" data-category="initiative">
		<div class="grid__carac__value">
			<div>+ {item.initiative} Initiative</div>
			<div>
				<img src="icons/icon_initiative.svg" alt="icone_carac_ini" class="icone_carac" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="initiative">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="initiative"
					name="initiative"
				/>Initiative
			</div>
			<div>
				<img src="icons/icon_initiative.svg" alt="icone_carac_initiative" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.dommage_pourcent}
	<div class="light__ carac_flex" data-category="dommage_pourcent">
		<div class="grid__carac__value">
			<div>Augmente les dommages de {item.dommage_pourcent}%</div>
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
{:else}
	<div />
{/if}

{#if item.coup_critique}
	<div class="light__ carac_flex" data-category="coup_critique">
		<div class="grid__carac__value">
			<div>+ {item.coup_critique} aux coups critiques</div>
		</div>
		<div class=" grid__carac__input hidden" data-category="coup_critique">
			<div>
				+
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="coup_critique"
					name="coup_critique"
				/>aux coups critiques
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.portée}
	<div class="light__ carac_flex" data-category="portée">
		<div class="grid__carac__value">
			<div>+ {item.portée} à la portée</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="portée">
			<div>
				+
				<input type="text" placeholder="?" class="pop__up__carac" id="portée" name="portée" />à la
				portée
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.pieges_fixe}
	<div class="light__ carac_flex" data-category="pieges_fixe">
		<div class="grid__carac__value">
			<div>+ {item.pieges_fixe} de dommages aux pièges</div>
		</div>
		<div class=" grid__carac__input hidden" data-category="pieges_fixe">
			<div>
				+
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="pieges_fixe"
					name="pieges_fixe"
				/>de dommages aux pièges
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.pieges_pourcent}
	<div class="light__ carac_flex" data-category="pieges_pourcent">
		<div class="grid__carac__value">
			<div>
				+ {item.pieges_pourcent} % de dommages aux pièges
			</div>
		</div>
		<div class=" grid__carac__input hidden" data-category="pieges_pourcent">
			<div>
				+
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="pieges_pourcent"
					name="pieges_pourcent"
				/>% de dommages aux pièges
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.res_eau_fixe}
	<div class=" carac_flex" data-category="res_eau_fixe">
		<div class="grid__carac__value">
			<div>+ {item.res_eau_fixe} de résistance à l'eau</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="res_eau_fixe">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="res_eau_fixe"
					name="res_eau_fixe"
				/>de résistance à l'eau
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.res_eau_pourcent}
	<div class=" carac_flex" data-category="res_eau_pourcent">
		<div class="grid__carac__value">
			<div>+ {item.res_eau_pourcent} % de résistance à l'eau</div>
			<div>
				<img src="icons/icon_res_eau.svg" alt="icone_res_eau" class="icone_res" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="res_eau_pourcent">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="res_eau_pourcent"
					name="res_eau_pourcent"
				/>% de résistance à l'eau
			</div>
			<div>
				<img src="icons/icon_res_eau.svg" alt="icone_res_eau" class="icone_res" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.res_terre_fixe}
	<div class=" carac_flex" data-category="res_terre_fixe">
		<div class="grid__carac__value">
			<div>+ {item.res_terre_fixe} de résistance à la terre</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="res_terre_fixe">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="res_terre_fixe"
					name="res_terre_fixe"
				/>de résistance à la terre
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.res_terre_pourcent}
	<div class=" carac_flex" data-category="res_terre_pourcent">
		<div class="grid__carac__value">
			<div>
				+ {item.res_terre_pourcent} % de résistance à la terre
			</div>
			<div>
				<img src="icons/icon_res_terre.svg" alt="icone_res_terre" class="icone_res" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="res_terre_pourcent">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="res_terre_pourcent"
					name="res_terre_pourcent"
				/>% de résistance à la terre
			</div>
			<div>
				<img src="icons/icon_res_terre.svg" alt="icone_res_terre" class="icone_res" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.res_feu_fixe}
	<div class=" carac_flex" data-category="res_feu_fixe">
		<div class="grid__carac__value">
			<div>+ {item.res_feu_fixe} de résistance au feu</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="res_feu_fixe">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="res_feu_fixe"
					name="res_feu_fixe"
				/>de résistance au feu
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.res_feu_pourcent}
	<div class=" carac_flex" data-category="res_feu_pourcent">
		<div class="grid__carac__value">
			<div>+ {item.res_feu_pourcent}% de résistance au feu</div>
			<div>
				<img src="icons/icon_res_feu.svg" alt="icone_res_feu" class="icone_res" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="res_feu_pourcent">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="res_feu_pourcent"
					name="res_feu_pourcent"
				/>% de résistance au feu
			</div>
			<div>
				<img src="icons/icon_res_feu.svg" alt="icone_res_feu" class="icone_res" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.res_air_fixe}
	<div class=" carac_flex" data-category="res_air_fixe">
		<div class="grid__carac__value">
			<div>+ {item.res_air_fixe} de résistance à l'air</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="res_air_fixe">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="res_air_fixe"
					name="res_air_fixe"
				/>de résistance à l'air
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.res_air_pourcent}
	<div class=" carac_flex" data-category="res_air_pourcent">
		<div class="grid__carac__value">
			<div>+ {item.res_air_pourcent}% de résistance à l'air</div>
			<div>
				<img src="icons/icon_res_air.svg" alt="icone_res_air" class="icone_res" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="res_air_pourcent">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="res_air_pourcent"
					name="res_air_pourcent"
				/>% de résistance à l'air
			</div>
			<div>
				<img src="icons/icon_res_air.svg" alt="icone_res_air" class="icone_res" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.res_neutre_fixe}
	<div class="light__ carac_flex" data-category="res_neutre_fixe">
		<div class="grid__carac__value">
			<div>+ {item.res_neutre_fixe} de résistance neutre</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="res_neutre_fixe">
			<div>
				+
				<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="res_neutre_fixe"
					name="res_neutre_fixe"
				/>de résistance neutre
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.res_neutre_pourcent}
	<div class=" carac_flex" data-category="res_neutre_pourcent">
		<div class="grid__carac__value">
			<div>
				+ {item.res_neutre_pourcent}% de résistance neutre
			</div>
			<div>
				<img src="icons/icon_res_neutre.svg" alt="icone_res_neutre" class="icone_res" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="res_neutre_pourcent">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="res_neutre_pourcent"
					name="res_neutre_pourcent"
				/>% de résistance neutre
			</div>
			<div>
				<img src="icons/icon_res_neutre.svg" alt="icone_res_neutre" class="icone_res" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.prospection}
	<div class="light__ carac_flex" data-category="prospection">
		<div class="grid__carac__value">
			<div>+ {item.prospection} Prospection</div>
			<div>
				<img src="icons/icon_prospection.svg" alt="icone_carac_prospection" class="icone_carac" />
			</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="prospection">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="prospection"
					name="prospection"
				/>Prospection
			</div>
			<div>
				<img src="icons/icon_prospection.svg" alt="icone_carac_prospection" class="icone_carac" />
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.dommage}
	<div class="light__ carac_flex" data-category="dommage">
		<div class="grid__carac__value">
			<div>+ {item.dommage} dommages</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="dommage">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="dommage"
					name="dommage"
				/>dommages
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.soins}
	<div class=" carac_flex" data-category="soins">
		<div class="grid__carac__value">
			<div>+ {item.soins} de soins</div>
		</div>
		<div class=" grid__carac__input hidden" data-category="soins">
			<div>
				+<input type="text" placeholder="?" class="pop__up__carac" id="soins" name="soins" />de
				soins
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.invo}
	<div class="light__ carac_flex" data-category="invo">
		<div class="grid__carac__value">
			<div>+ {item.invo} créatures invocables</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="invo">
			<div>
				+<input type="text" placeholder="?" class="pop__up__carac" id="invo" name="invo" />créatures
				invocables
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.pods}
	<div class="light__ carac_flex" data-category="pods">
		<div class="grid__carac__value">
			<div>Augmente le poids portable de {item.pods}</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="pods">
			<div>
				Augmente le poids portable de<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="pods"
					name="pods"
				/>
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.renvoi_dommage}
	<div class="light__ carac_flex" data-category="renvoi_dommage">
		<div class="grid__carac__value">
			<div>Renvoie {item.renvoi_dommage} dommages</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="renvoi_dommage">
			<div>
				Renvoie<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="renvoi_dommage"
					name="renvoi_dommage"
				/>dommages
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.echec_critique}
	<div class="light__ carac_flex" data-category="echec_critique">
		<div class="grid__carac__value">
			<div>+ {item.echec_critique} aux échecs critiques</div>
		</div>

		<div class=" grid__carac__input hidden" data-category="echec_critique">
			<div>
				+<input
					type="text"
					placeholder="?"
					class="pop__up__carac"
					id="echec_critique"
					name="echec_critique"
				/>aux échecs critiques
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

{#if item.chasse}
	<div class="light__ carac_flex" data-category="chasse">
		<div>Arme de Chasse</div>
	</div>
{:else}
	<div />
{/if}

{#if item.vole_or}
	<div class="light__ carac_flex" data-category="vole_or">
		<div>{item.vole_or}</div>
	</div>
{:else}
	<div />
{/if}

<style>
	/* ITEM CONTAINER */

	.item_container_main {
		font-size: 0.9rem;
		color: black;
		width: 20rem;
		margin: auto;
		display: grid;
		grid-template-columns: 1fr 3fr;
	}

	#list > .item_container_main {
		font-size: 0.9rem;
		color: black;
		width: 18rem;
		margin: auto;
		display: grid;
		grid-template-columns: 1fr 3fr;
	}

	.item__name,
	.details_container {
		grid-column: span 2;
	}

	.item__name,
	.pop_up_header_name {
		background-color: rgb(80, 74, 62);
		/* border: 2px solid black; */
		border-radius: 5px 5px 0 0;
		width: 100%;
		padding: 0.15em;
		text-decoration: none;
		color: black;
		font-weight: bold;
	}

	.hdv__profil__item__header {
		grid-column: span 2;
		background-color: rgb(80, 74, 62);
		/* border: 2px solid black; */
		border-radius: 5px 5px 0 0;
		width: 100%;
		padding: 0.15em;
		text-decoration: none;
		color: black;
		font-weight: bold;
		display: flex;
		align-items: center;
	}

	.hdv__profil__item__header__boutons {
		display: flex;
		column-gap: 0.5rem;
	}

	.item__name__link {
		text-decoration: none;
		color: black;
	}

	.item__name__link:hover,
	.item__name:hover,
	.pop_up_header_name:hover {
		color: #fff3d4;
	}

	.image_container {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(217, 214, 187);
	}

	.form__upload {
		display: flex;
		align-items: center;
	}

	.form__upload .details__container__field {
		margin-top: 0;
	}

	.anneau_qutan {
		width: 50px;
		height: 50px;
	}

	.carac {
		/* border-right: 2px solid black; */
		height: 7rem;
		/* display: flex;
  flex-direction: column; */
		display: grid;
		grid-template-rows: repeat(6, 1fr);
		overflow: scroll;
		font-size: 0.85rem;
	}

	h4 {
		overflow-wrap: normal;
	}

	.details_container {
		background-color: rgb(237, 235, 221);
		/* border: 2px solid black; */
		border-radius: 0 0 5px 5px;
		padding: 3px;
		font-size: 0.75rem;
		overflow: scroll;
		height: 4rem;
	}

	.details_container > h4 {
		text-decoration: underline;
	}

	.icone_res {
		width: 1rem;
		display: flex;
		align-items: center;
	}

	/* POP UP */

	.item_list_generic_header {
		display: flex;
		justify-content: space-between;
		margin: 0.8rem;
		padding: 0.3rem;
		background-color: rgba(175, 154, 136, 0.7);
	}

	.item_list_generic_header h2,
	.item_list_sales_header h2 {
		font-size: 1.2rem;
	}

	.invisible {
		display: none;
	}

	.block {
		display: block;
	}

	.margin_left {
		margin-left: 10px;
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

	.flex {
		display: flex;
		flex-wrap: wrap;
		overflow: scroll;
		gap: 10px;
	}

	.test_grid li {
		list-style-type: none;
	}

	.hidden {
		display: none;
	}
</style>
