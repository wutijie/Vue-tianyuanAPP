<template>
	<div class="tuijian">
		<Header bol="true">
			<img @click="tuifan" slot="left" class="leftImg" src="../../assets/imgs/fanhuide.png"/>
		</Header>
		<div class="tuiban">
			<img src="../../assets/imgs/home_tui01.jpg"/>
		</div>
		<Tuijianpart>
			<img class="numimg" slot="painum" src="../../assets/imgs/painum01.png"/>
			<span slot="tui01spa">Lemon egg white tart</span>
			<img slot="tui02img" src="../../assets/imgs/home_tui02.jpg"/>
		</Tuijianpart>
		<Tuijianpart>
			<img class="numimg" slot="painum" src="../../assets/imgs/painum02.png"/>
			<span slot="tui01spa">Tiramisu</span>
			<img slot="tui02img" src="../../assets/imgs/home_tui03.jpg"/>
		</Tuijianpart>
		<Tuijianpart>
			<img class="numimg" slot="painum" src="../../assets/imgs/painum03.png"/>
			<span slot="tui01spa">chocolate almond cake</span>
			<img slot="tui02img" src="../../assets/imgs/home_tui04.jpg"/>
		</Tuijianpart>
		<Tuijianpart>
			<img class="numimg" slot="painum" src="../../assets/imgs/painum04.png"/>
			<span slot="tui01spa">Tiramisu cake</span>
			<img slot="tui02img" src="../../assets/imgs/home_tui02.jpg"/>
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
	.tuijian{
		position: relative;
		z-index: 99;
		background: #F5F8FF;
	}
	.tuijian .tuiban{
		width: 100%;
		height: 243px;
	}
	.tuijian .tuiban img{
		width: 100%;
		height: 100%;
	}
</style>