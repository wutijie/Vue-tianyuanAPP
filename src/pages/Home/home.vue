<template>
	<div class="home">
		<Header>
			<img @click="dong" slot="left" class="leftImg" src="../../assets/imgs/headerleft01.png"/>
			<div slot="search" class="search">
				<div class="searchBig">
					<input type="text" @click="sou" placeholder="请输入要搜索的内容" />
					<img class="searchImg" slot="right" src="../../assets/imgs/search.png"/>
				</div>
			</div>
			<img @click="musics" slot="right" class="rightImg" src="../../assets/imgs/headerrig01.png"/>
		</Header>
		<div class="top"></div>
		<router-view></router-view>
		<Banner swiperid="go">
			<div slot="swiper-con" class="swiper-slide">
				<img src="../../assets/imgs/banner01.gif"/>
			</div>
			<div slot="swiper-con" class="swiper-slide">
				<img src="../../assets/imgs/banner02.gif"/>
			</div>
			<div slot="swiper-con" class="swiper-slide">
				<img src="../../assets/imgs/banner03.gif"/>
			</div>
		</Banner>
		<div class="fenlei">
			<div @click="homego1">
				<img src="../../assets/imgs/tuijian.png"/>
				<p>甜品推荐</p>
			</div>
			<div @click="homego2">
				<img src="../../assets/imgs/paihang.png"/>
				<p>餐厅排行</p>
			</div>
			<div @click="homego3">
				<img src="../../assets/imgs/youhui.png"/>
				<p>热门优惠</p>
			</div>
			<div @click="homego4">
				<img src="../../assets/imgs/dianping.png"/>
				<p>吃货点评</p>
			</div>
			<div>
				<img src="../../assets/imgs/allfenlei.png"/>
				<p>全部分类</p>
			</div>
		</div>
		<div class="fuli">
			<h3>每日福利</h3>
			<Zhuanlunbo swiperid="lunbo">
				<div @click="fu1" slot="swiper-con" class="swiper-slide">
					<img src="../../assets/imgs/lunbo01.gif"/>
					<p class="p1">甜美优惠，拓美生活</p>
					<p class="p2">甜美优惠，拓美生活甜美优惠，拓美生活</p>
				</div>
				<div @click="fu2" slot="swiper-con" class="swiper-slide">
					<img src="../../assets/imgs/lunbo02.gif"/>
					<p class="p1">甜美优惠，拓美生活</p>
					<p class="p2">甜美优惠，拓美生活甜美优惠，拓美生活</p>
				</div>
				<div @click="fu3" slot="swiper-con" class="swiper-slide">
					<img src="../../assets/imgs/lunbo03.jpg"/>
					<p class="p1">甜美优惠，拓美生活</p>
					<p class="p2">甜美优惠，拓美生活甜美优惠，拓美生活</p>
				</div>
			</Zhuanlunbo>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/header'
	import Banner from './banner.vue'
	import Zhuanlunbo from './zhuanlunbo.vue'
	
	export default {
		components:{
			Header,
			Banner,
			Zhuanlunbo
		},
		mounted:function(){
			var bac=document.getElementsByClassName("home")[0];
			bac.style.width=document.documentElement.clientWidth+'px';
			bac.style.height=document.documentElement.clientHeight+'px';
		},
		methods:{
			dong(){
				cebian=!cebian;
				var lefdong=document.getElementById("cedv");
				var app=document.getElementById("app");
				if(cebian){
					lefdong.style.left="0";
					document.body.style.background="none";
					document.body.style.left="70%";
					document.body.style.overflow="hidden";
					app.style.transform="scale(0.8)";
					app.style.marginTop="3%";
					lefdong.style.transition=document.body.style.transition=app.style.transition="1s";
				}else{
					lefdong.style.left="-100%";
					document.body.style.background="#F5F8FF";
					document.body.style.left="0";
					document.body.style.overflow="inherit";
					app.style.transform="none";
					app.style.marginTop="0";
					lefdong.style.transition=document.body.style.transition=app.style.transition="1s";
				}
			},
			sou(){
				this.$router.push('/search');
				this.$router.params="home";
			},
			musics(){
				this.$router.push('/home/music');
			},
			homego1(){
				this.$router.push('/home/tuijian');
			},
			homego2(){
				this.$router.push('/home/canpaihang');
			},
			homego3(){
				this.$router.push('/home/youhui');
			},
			homego4(){
				this.$router.push('/home/dianping');
			},
			fu1(){
				this.$router.push('/home/fupart1');
				this.$router.params="home";
			},
			fu2(){
				this.$router.push('/home/fupart2');
				this.$router.params="home";
			},
			fu3(){
				this.$router.push('/home/fupart3');
				this.$router.params="home";
			}
		}
	}
</script>

<style>
	.home{
		position: relative;
		background: #F5F8FF;
	}
	.home .fenlei{
		text-align: center;
		position: relative;
		z-index: 11;
		width: 697px;
		height: 158px;
		padding: 0 10px;
		border-radius: 15px;
		font-size: 20px;
		color: #333;
		background: #FFFFFF;
		margin: 0 auto;
		margin-top: -60px;
		display: flex;
		justify-content: space-around;
		box-shadow: 0 8px 20px rgba(156,179,252,0.4);
	}
	.home .fenlei div{
		margin-top: 22px;
	}
	.home .fenlei div img{
		margin-bottom: 4px;
	}
	.home .fuli{
		text-align: center;
	}
	.home .fuli h3{
		font-size: 32px;
		font-weight: normal;
		line-height: 94px;
	}
</style>