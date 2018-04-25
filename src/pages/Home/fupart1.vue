<template>
	<div class="fupart1">
		<Fupart>
			<img slot="bigtu" src="../../assets/imgs/sanfu02.jpg"/>
			<h3 slot="tit">三明治套餐A</h3>
			<span slot="jiage">￥ 416.54</span>
			<span slot="dazhe">
				<span class="spaa2">￥500</span>
				<span class="spaa3">8.9折</span>
			</span>
			<p slot="pingjia" class="pp33">1.此商品不说好吃不好吃   首先能吃饱！！~</p>
		</Fupart>
	</div>
</template>

<script>
	import Fupart from '../../components/sanfupart.vue';
	
	export default {
		components:{
			Fupart
		}
	}
</script>

<style>
</style>