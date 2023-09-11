<!-- This Component represents the user who wrotes the post (profile picture, name, Serveur, role) -->

<script>
	const pseudo = 'Pumalicieux';
	const serveur = 'Galgarion';
	const role = 'Admin';
</script>

<div class="flex flex-row flex-col p-5 items-center">
	<div class="placeholder-circle w-16 animate-pulse" />
	<div class="space-y-2 pt-1 flex flex-col items-center">
		<p class="font-bold">{pseudo}</p>
		<!-- <p>{serveur}</p>
		<p>{role}</p> -->
	</div>
</div>
