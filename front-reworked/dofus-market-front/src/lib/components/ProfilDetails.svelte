<!-- COMPONENT LOGIC -->

<!-- This component represents the user details on its ProfilDetails. It should contain the avatar selected, the pseudo in-game, the discord pseudo, the pseudo on the platform and the server on which the user play -->

<script>
	import { FileButton } from '@skeletonlabs/skeleton';

	const pseudo = 'Pumalicieux';
	const pseudoInGame = 'Pumalicieux';
	const discord = 'Mayuji';
	const server = 'Galgarion';
	const role = 'Admin';
</script>

<div class="flex flex-row flex-col p-5 items-center">
	<div class="placeholder-circle w-16 animate-pulse" />
	<div class="space-y-2 pt-1 flex flex-col items-center">
		<p class="font-bold">{pseudo}</p>
		<p>Serveur: {server}</p>
		<div>
			<p><i class="fa-brands fa-discord" />: {discord}</p>
		</div>
		<FileButton name="files" button="variant-soft-primary" multiple>Ajouter via screen</FileButton>
	</div>
</div>
