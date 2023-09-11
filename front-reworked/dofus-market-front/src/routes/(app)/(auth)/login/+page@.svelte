<!-- PAGE LOGIC -->

<!-- This component is the connection form. There are two fields the pseudo, and the password. And two links, one to subscribe if it's not the case yet another to retrieve the password -->

<script>
	let validation;

	const handleInvalid = () => {
		validation = 'input-warning';
	};

	const resetValidation = () => {
		validation = '';
	};
</script>

<form class="w-1/3 card p-5 variant-soft-surface mx-auto my-5 space-y-4">
	<label class="label">
		<span>Pseudo</span>
		<input class="input" type="text" placeholder="Xx-Dark-Sasuke-xX" required />
	</label>

	<label class="label">
		<span>Mot de Passe</span>
		<!-- prettier-ignore -->
		<input
			class="input {validation}"
			type="password"
			placeholder="Mot de passe"
			pattern="^\d+$"
			required
			on:invalid={handleInvalid}
			on:click={resetValidation}
		/>
	</label>
	<div class="flex flex-col items-center space-y-4">
		<button type="submit" class="btn variant-filled-primary w-fit md:w-full">Se connecter</button>
		<p>Toujours pas de compte ? <a href="/subscribe" class="anchor no-underline">Inscris-toi</a></p>
	</div>
</form>
