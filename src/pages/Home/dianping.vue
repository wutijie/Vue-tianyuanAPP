<template>
	<div class="dianping">
		<Header bol="true">
			<img @click="tuifan" slot="left" class="leftImg" src="../../assets/imgs/fanhuide.png"/>
		</Header>
		<div class="tuiban">
			<img src="../../assets/imgs/home_dian01.jpg"/>
		</div>
		<Pingpart>
			<img slot="pingimg" src="../../assets/imgs/home_dian02.jpg"/>
			<p slot="pingp1" class="p1">东方厨师点餐</p>
			<p slot="pingp3" class="p3">这家餐厅的甜点特别好吃，而且价格实惠，服务态度好!</p>
		</Pingpart>
		<Pingpart>
			<img slot="pingimg" src="../../assets/imgs/home_dian03.jpg"/>
			<p slot="pingp1" class="p1">东方厨师点餐</p>
			<p slot="pingp3" class="p3">这家餐厅的甜点特别好吃，而且价格实惠，服务态度好!</p>
		</Pingpart>
		<Pingpart>
			<img slot="pingimg" src="../../assets/imgs/home_dian04.jpg"/>
			<p slot="pingp1" class="p1">东方厨师点餐</p>
			<p slot="pingp3" class="p3">这家餐厅的甜点特别好吃，而且价格实惠，服务态度好!</p>
		</Pingpart>
		<Pingpart>
			<img slot="pingimg" src="../../assets/imgs/home_dian05.jpg"/>
			<p slot="pingp1" class="p1">东方厨师点餐</p>
			<p slot="pingp3" class="p3">这家餐厅的甜点特别好吃，而且价格实惠，服务态度好!</p>
		</Pingpart>
		<Pingpart>
			<img slot="pingimg" src="../../assets/imgs/sanfu10.jpg"/>
			<p slot="pingp1" class="p1">东方厨师点餐</p>
			<p slot="pingp3" class="p3">这家餐厅的甜点特别好吃，而且价格实惠，服务态度好!</p>
		</Pingpart>
	</div>
</template>

<script>
	import Header from '../../components/header'
	import Pingpart from '../../components/pingpart'
	
	export default {
		components:{
			Header,
			Pingpart
		},
		methods:{
			tuifan(){
				this.$router.push('/home');
			}
		}
	}
</script>

<style>
	.dianping{
		position: relative;
		z-index: 99;
		background: #F5F8FF;
	}
	.dianping .tuiban{
		width: 100%;
		height: 243px;
	}
	.dianping .tuiban img{
		width: 100%;
		height: 100%;
	}
</style>