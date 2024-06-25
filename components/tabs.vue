<template>
	<div class="tabs" :class="customClass">
		<div class="tabs__wrapper">
			<template v-for="tab in tabs" :key="tab">
				<button
					class="tabs__button"
					type="button"
					:class="{ active: selectedTab === tab }"
					@click="selectPosition(tab)">
					{{ tab }}
				</button>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		customClass: { type: String },
		tabs: {
			type: Array,
			default: () => [''],
		},
	},
	data() {
		return {
			selectedTab: useState('currentTab', () => this.tabs[0]),
			offersPage: useState('offersPage'),
		};
	},
	methods: {
		selectPosition(position) {
			this.selectedTab = position;
			this.offersPage = 1;
		},
	},
};
</script>
