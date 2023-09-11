<!-- PAGE LOGIC -->

<!-- This page aims at allowing the user to subscribe. There are XX files: pseudo, profile picture, email, password, password confirmation -->

<!-- INPUT ERROR class : .input-error -->

<script>
	let display = 'hidden';
	const displayWarning = () => {
		display = 'block';
	};

	import { fade } from 'svelte/transition';
	let visible = true;
</script>

<form id="signup__form" class="w-1/3 card p-5 variant-soft-surface mx-auto my-5 space-y-4">
	<label class="label" for="pseudo">
		<span>Pseudo</span>
		<input class="input" type="text" id="pseudo" name="pseudo" placeholder="Pseudo" />
	</label>

	<label class="label" for="profil_image">
		<span>Avatar</span>

		<select class="input" id="profil_image" name="class_id">
			<option value="">Choisir un avatar</option>
			<optgroup label="Avatar Féminin">
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
			</optgroup>
			<optgroup label="Avatar Masculin">
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
			</optgroup>
			<optgroup label="Classe Miniature">
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
			</optgroup>
		</select>
	</label>

	<label class="label" for="email">
		<span>E-mail</span>
		<input class="input" type="email" id="email" name="email" placeholder="E-mail" />
	</label>

	<label class="label">
		<span>Mot de Passe </span>
		<!-- prettier-ignore -->
		<input
			class="input"
			type="password"
			id="password"
			placeholder="Mot de passe"
			pattern="^\d+$"
      title="Only Numbers"
      required
		/>
	</label>
	<label class="label">
		<span>Confirmation du mot de passe</span>
		<!-- prettier-ignore -->
		<input
			class="input"
			type="password"
			id="password_confirmation"
			placeholder="Mot de passe"
			pattern="^\d+$"
      title="Only Numbers"
      required
		/>
	</label>
	<div class="flex flex-col items-center space-y-4">
		<button type="submit" class="btn variant-filled-primary w-fit md:w-full">S'inscrire</button>
	</div>
</form>
