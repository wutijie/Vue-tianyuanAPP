<template>
	<div class="myshoucang">
		<Minepart>
			<img slot="lefimg" src="../../assets/imgs/home_dian03.jpg"/>
			<p slot="rigp1" class="p1">甜缘甜品</p>
			<p slot="rigp2" class="p2">Black Forest Cake</p>
			<p slot="rigp3" class="p3">这款简单朴实的甜点，除了时常作为下午茶的点心良伴...</p>
			<i slot="rigp4i1">555</i>
			<i slot="rigp4i2">99</i>
			<i slot="rigp4i3">119</i>
		</Minepart>
		<Minepart>
			<img slot="lefimg" src="../../assets/imgs/home_re06.jpg"/>
			<p slot="rigp1" class="p1">提拉米苏</p>
			<p slot="rigp2" class="p2">Coffee Mike Shake</p>
			<p slot="rigp3" class="p3">好吃的提拉米苏有着吃一口就令人神魂颠倒的魔力！</p>
			<i slot="rigp4i1">243</i>
			<i slot="rigp4i2">86</i>
			<i slot="rigp4i3">576</i>
		</Minepart>
	</div>
</template>

<script>
	import Minepart from '../../components/minepart'
	
	export default {
		components:{
			Minepart
		}
	}
</script>

<style>
</style>