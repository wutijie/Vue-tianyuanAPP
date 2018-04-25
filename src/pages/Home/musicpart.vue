<template>
	<li @click='fnn'>
		<i v-show="!fang">
			<img src="../../assets/imgs/bofang.png"/>
		</i>
		<i v-show="fang">
			<slot name="mus"></slot>
			<img src="../../assets/imgs/zanting.png"/>
		</i>
		<slot name="zi"></slot>
	</li>
</template>

<script>
	export default {
		props: ['mark', 'sel'],
		computed: {
			fang: function() {
				if(this.mark == this.sel) {
					return true;
				}
				return false;
			}
		},
		methods: {
			fnn: function() {
				this.$emit('change', this.mark);
			}
		}
	}
</script>

<style>
	audio{
		width: 100px;
		background: transparent;
	}
</style>