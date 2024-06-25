<template>
	<div class="pagination">
		<button class="pagination__btn--left" :disabled="currentPage === 1" @click="prevPage">
			<Icon class="pagination__icon" name="fa6-solid:chevron-left" />
		</button>
		<button class="pagination__btn--right" :disabled="currentPage === totalPages" @click="nextPage">
			<Icon class="pagination__icon" name="fa6-solid:chevron-right" />
		</button>
	</div>
</template>

<script>
export default {
	props: {
		itemsPerPage: {
			type: Number,
			required: true,
			default: 1,
		},
		totalItems: {
			type: Number,
			required: true,
			default: 1,
		},
	},
	data() {
		return {
			currentPage: useState('offersPage'),
		};
	},
	computed: {
		totalPages() {
			const pages = Math.ceil(this.totalItems / this.itemsPerPage);
			return pages;
		},
	},
	methods: {
		prevPage() {
			if (this.currentPage > 1) {
				this.$emit('change-page', this.currentPage - 1);
			}
		},
		nextPage() {
			if (this.currentPage < this.totalPages) {
				this.$emit('change-page', this.currentPage + 1);
			}
		},
	},
};
</script>
