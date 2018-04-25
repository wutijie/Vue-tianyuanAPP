<template>
	<div class='tabbar'>
		<Item style="margin-left: 20px;" txt='首页' mark='home' :sel='selected' @change='getVal'>
			<img src='../assets/imgs/tabbar01_active.png' slot='activeImg' />
			<img src='../assets/imgs/tabbar01_normal.png' slot='normalImg' />
		</Item>
		<Item txt='发现' mark='find' :sel='selected' @change='getVal'>
			<img src='../assets/imgs/tabbar02_active.png' slot='activeImg' />
			<img src='../assets/imgs/tabbar02_normal.png' slot='normalImg' />
		</Item>
		<Item id="tianyuan" mark='tian' :sel='selected' @change='getVal'>
			<img src='../assets/imgs/tabbar00_active.png' slot='activeImg' />
			<img src='../assets/imgs/tabbar00_normal.png' slot='normalImg' />
		</Item>
		<Item txt='购物' mark='shopping' :sel='selected' @change='getVal'>
			<img src='../assets/imgs/tabbar03_active.png' slot='activeImg' />
			<img src='../assets/imgs/tabbar03_normal.png' slot='normalImg' />
		</Item>
		<Item style="margin-right: 20px;" txt='我的' mark='mine' :sel='selected' @change='getVal'>
			<img src='../assets/imgs/tabbar04_active.png' slot='activeImg' />
			<img src='../assets/imgs/tabbar04_normal.png' slot='normalImg' />
		</Item>
	</div>
</template>

<script>
	import Item from './item'

	export default {
		components: {
			Item
		},
		mounted:function(){
//			this.selected=selec;
		},
		data: function() {
			return {
				selected: 'home'
			}
		},
		methods: {
			getVal: function(val) {
				this.selected = val;
			}
		}
	}
</script>

<style>
	.tabbar {
		width: 100%;
		height: 98px;
		position: fixed;
		left: 0;
		bottom: 0;
		background: #fff;
		display: flex;
		justify-content: space-around;
		z-index: 12;
	}
	#tianyuan img{
		width: 97px;
		height: 97px;
		margin-top: -20px;
	}
</style>