<template>
	<div class='itemWrap' @click='fn'>
		<span v-show='bol'><slot name='activeImg'></slot><br/></span>
		<span v-show='!bol'><slot name='normalImg'></slot><br/></span>
		<span :class='{active: bol}'>{{ txt }}</span>
	</div>
</template>

<script>
	export default {
		props: ['txt', 'mark', 'sel'],
		computed: {
			bol: function() {
				if(this.mark == this.sel) {
					return true;
				}
				return false;
			}
		},
		methods: {
			fn: function() {
				this.$emit('change', this.mark);
				this.$router.push('/' + this.mark);
			}
		}
	}
</script>

<style>
	.itemWrap {
		text-align: center;
		font-size: 0;
	}
	.itemWrap img {
		margin-top: 16px;
		width: 42px;
		height: 40px;
	}
	
	.itemWrap span {
		font-size: 20px;
		color: rgba(0,0,0,0.5);
	}
	
	.itemWrap .active {
		color: #9CB3FC;
	}
</style>