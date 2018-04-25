<template>
	<div class="youhui">
		<Header bol="true">
			<img @click="tuifan" slot="left" class="leftImg" src="../../assets/imgs/fanhuide.png"/>
		</Header>
		<div class="tuiban">
			<img src="../../assets/imgs/home_re01.jpg"/>
		</div>
		<div class="dvi1">
			<Youhuipart>
				<img slot="youimg" src="../../assets/imgs/home_re02.jpg"/>
				<span slot="yousp1" class="sp1">甜缘时刻</span>
				<span slot="yousp2" class="sp2">剩余36张</span>
				<p slot="youp1" class="p1">10元/人</p>
			</Youhuipart>
			<Youhuipart>
				<img slot="youimg" src="../../assets/imgs/home_re03.jpg"/>
				<span slot="yousp1" class="sp1">青肠粉蛋</span>
				<span slot="yousp2" class="sp2">剩余27张</span>
				<p slot="youp1" class="p1">20元/人</p>
			</Youhuipart>
		</div>
		<div class="dvi1">
			<Youhuipart>
				<img slot="youimg" src="../../assets/imgs/home_re04.jpg"/>
				<span slot="yousp1" class="sp1">巧克饼干</span>
				<span slot="yousp2" class="sp2">剩余36张</span>
				<p slot="youp1" class="p1">13.8元/人</p>
			</Youhuipart>
			<Youhuipart>
				<img slot="youimg" src="../../assets/imgs/home_re05.jpg"/>
				<span slot="yousp1" class="sp1">糕点沙拉</span>
				<span slot="yousp2" class="sp2">剩余10张</span>
				<p slot="youp1" class="p1">50.9元/人</p>
			</Youhuipart>
		</div>
		<div class="dvi1">
			<Youhuipart>
				<img slot="youimg" src="../../assets/imgs/home_re06.jpg"/>
				<span slot="yousp1" class="sp1">松软蛋糕</span>
				<span slot="yousp2" class="sp2">剩余24张</span>
				<p slot="youp1" class="p1">43.1元/人</p>
			</Youhuipart>
			<Youhuipart>
				<img slot="youimg" src="../../assets/imgs/home_re07.jpg"/>
				<span slot="yousp1" class="sp1">可爱点心</span>
				<span slot="yousp2" class="sp2">剩余54张</span>
				<p slot="youp1" class="p1">26.4元/人</p>
			</Youhuipart>
		</div>
		<div class="dvi1">
			<Youhuipart>
				<img slot="youimg" src="../../assets/imgs/sanfu01.jpg"/>
				<span slot="yousp1" class="sp1">伞岑面包</span>
				<span slot="yousp2" class="sp2">剩余13张</span>
				<p slot="youp1" class="p1">10.8元/人</p>
			</Youhuipart>
			<Youhuipart>
				<img slot="youimg" src="../../assets/imgs/sanfu03.jpg"/>
				<span slot="yousp1" class="sp1">彩虹蛋糕</span>
				<span slot="yousp2" class="sp2">剩余5张</span>
				<p slot="youp1" class="p1">7.8元/人</p>
			</Youhuipart>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/header'
	import Youhuipart from '../../components/youhuipart'
	
	export default {
		components:{
			Header,
			Youhuipart
		},
		methods:{
			tuifan(){
				this.$router.push('/home');
			}
		}
	}
</script>

<style>
	.youhui{
		position: relative;
		z-index: 99;
		background: #fff;
	}
	.youhui .tuiban{
		width: 100%;
		height: 243px;
		margin-bottom: 20px;
	}
	.youhui .tuiban img{
		width: 100%;
		height: 100%;
	}
	.youhui .dvi1{
		padding: 0 20px;
		display: flex;
		justify-content: space-around;
	}
</style>