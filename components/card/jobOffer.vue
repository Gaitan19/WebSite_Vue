<template>
	<article class="card-offer" :class="customClass">
		<div class="card-offer__wrapper">
			<div class="card-offer__info">
				<h4 class="card-offer__title">{{ card.title }}</h4>
				<p class="card-offer__description">{{ card.description }}</p>
			</div>

			<div class="card-offer__details">
				<p class="card-offer__location">
					<Icon name="fa6-solid:location-dot" />
					{{ card.location }}
				</p>
				<p class="card-offer__experience">
					<Icon name="fa6-solid:calendar" />
					{{ card.experience }}
				</p>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	props: {
		customClass: { type: String },
		card: {
			type: Object,
			default: () => ({
				id: { type: number },
				description: { type: String },
				experience: { type: String },
				location: { type: String },
				position: { type: String },
				title: { type: String },
			}),
		},
	},
};
</script>
