<template>
	<div class="canpaihang">
		<Header bol="true">
			<img @click="tuifan" slot="left" class="leftImg" src="../../assets/imgs/fanhuide.png"/>
		</Header>
		<div class="tuiban">
			<img src="../../assets/imgs/home_cpaihan.jpg"/>
		</div>
		<Tuijianpart>
			<img class="numimg" slot="painum" src="../../assets/imgs/painum01.png"/>
			<span slot="tui01spa">甜缘甜品</span>
			<img slot="tui02img" src="../../assets/imgs/home_pai01.jpg"/>
			<p slot="paip1" class="pp01">主要经营甜品，用餐环境干净舒适，浓浓的复古气息，非常有格调！</p>
			<p slot="paip2" class="pp02">
				<img src="../../assets/imgs/dizhi.png"/>
				<span>七二区德化市</span>
			</p>
		</Tuijianpart>
		<Tuijianpart>
			<img class="numimg" slot="painum" src="../../assets/imgs/painum02.png"/>
			<span slot="tui01spa">格林餐厅</span>
			<img slot="tui02img" src="../../assets/imgs/home_pai02.jpg"/>
			<p slot="paip1" class="pp01">主要经营甜品，用餐环境干净舒适，浓浓的复古气息，非常有格调！</p>
			<p slot="paip2" class="pp02">
				<img src="../../assets/imgs/dizhi.png"/>
				<span>七二区德化市</span>
			</p>
		</Tuijianpart>
		<Tuijianpart>
			<img class="numimg" slot="painum" src="../../assets/imgs/painum03.png"/>
			<span slot="tui01spa">格林餐厅</span>
			<img slot="tui02img" src="../../assets/imgs/home_tui04.jpg"/>
			<p slot="paip1" class="pp01">主要经营甜品，用餐环境干净舒适，浓浓的复古气息，非常有格调！</p>
			<p slot="paip2" class="pp02">
				<img src="../../assets/imgs/dizhi.png"/>
				<span>七二区德化市</span>
			</p>
		</Tuijianpart>
	</div>
</template>

<script>
	import Header from '../../components/header'
	import Tuijianpart from '../../components/tuijianpart'
	
	export default {
		components:{
			Header,
			Tuijianpart
		},
		methods:{
			tuifan(){
				this.$router.push('/home');
			}
		}
	}
</script>

<style>
	.canpaihang{
		height: 1294px;
		position: relative;
		z-index: 99;
		background: #F5F8FF;
	}
	.canpaihang .tuiban{
		width: 100%;
		height: 243px;
	}
	.canpaihang .tuiban img{
		width: 100%;
		height: 100%;
	}
	.canpaihang .tuijianpart{
		height: 422px;
	}
</style>