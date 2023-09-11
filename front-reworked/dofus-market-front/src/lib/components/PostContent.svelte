<!-- Component Logic -->

<!-- This component aims at representing the different post (header, content and footer). The post could be found in the database. Only the admins are able to post -->

<script>
	const title = 'Bienvenue sur Dofus Market';
	const date = '17 Janvier 2023 ';
	const content =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores iusto maxime repellendus possimus dolores nam ipsa molestias? Molestiae tempora numquam optio vero ipsa rem ab commodi eos sit sed!';
</script>

<div class="card variant-soft-surface space-y-2 items-center">
	<header class="card-header text-2xl flex flex-col lg:flex-row items-center justify-between">
		<h2 class="text-xl">{title}</h2>

		<p class="text-sm">Posté le <span>{date}</span></p>
	</header>
	<hr />
	<section class="p-4 text-justify">{content}</section>
	<footer class="card-footer">(footer)</footer>
</div>
