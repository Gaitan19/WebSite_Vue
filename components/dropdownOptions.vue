<template>
	<div class="dropdownOptions" :class="customClass">
		<ul class="dropdownOptions__list">
			<li>
				<input id="submenu" type="checkbox" name="submenu" class="dropdownOptions__check" />

				<label for="submenu" class="dropdownOptions__active" @click="() => (submenuOpen = true)">
					{{ selectedOption }}
					<Icon name="fa6-solid:chevron-down" />
				</label>
				<ul class="dropdownOptions__submenu">
					<li
						v-for="(item, idx) in options"
						:key="idx"
						@click="
							() => {
								(submenuOpen = false), uncheckCheckbox();
							}
						">
						<button v-if="item != selectedOption" class="dropdownOptions__button" @click="selectPosition(item)">
							{{ item }}
						</button>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		options: {
			type: Array,
			required: true,
		},
		customClass: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			submenuOpen: false,
			selectedOption: useState('currentTab'),
			offersPage: useState('offersPage'),
		};
	},
	methods: {
		selectPosition(position) {
			this.selectedOption = position;
			this.offersPage = 1;
		},

		uncheckCheckbox() {
			document.querySelector('.dropdownOptions__check').checked = false;
		},
	},
};
</script>
