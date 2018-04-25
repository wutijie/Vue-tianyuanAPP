<template>
	<div class="goodfriends">
		<Header txt="甜缘好友">
			<img @click="fanghui" slot="left" class="leftImg" src="../../assets/imgs/fanhuide.png"/>
			<img slot="right" class="rightImg" src="../../assets/imgs/headerrig01.png"/>
		</Header>
		<div class="top"></div>
		<div v-show="clo" class="kongfriend">
			<p class="p1">好友还是空空如也</p>
			<p class="p2">快去关注好友</p>
			<span @click="fried">去关注</span>
		</div>
		<div v-for="(item,index) in gofrien" class="goodsf">
			<img :src="item.srcs"/>
			<span>已关注</span>
			<p class="p01p">{{item.tit}}</p>
			<p class="p02p">{{item.cont}}</p>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/header'
	
	export default {
		data:function(){
			return {
				gofrien:[],
				clo:true
			}
		},
		components:{
			Header
		},
		methods:{
			fanghui(){
				this.$router.push(this.$router.params);
			},
			fried(){
				this.$router.push('/find/friends');
			}
		},
		mounted:function(){
			this.gofrien=friends;
			console.log(this.gofrien);
			console.log(document.documentElement.clientHeight);
			var bac=document.getElementsByClassName("goodfriends")[0];
			bac.style.width=document.documentElement.clientWidth+'px';
			bac.style.height=document.documentElement.clientHeight+'px';
			if(this.gofrien.length>0){
				this.clo=false;
			}
		}
	}
</script>

<style>
	.goodfriends{
		background: #F5F8FF;
	}
	.goodfriends .top{
		margin-bottom: 44px;
	}
	.goodfriends .kongfriend{
		text-align: center;
		padding-top: 400px;
	}
	.goodfriends .kongfriend .p1{
		font-size: 32px;
		color: #acb0ff;
	}
	.goodfriends .kongfriend .p2{
		font-size: 20px;
		color: rgba(123,131,254,0.5);
		line-height: 60px;
	}
	.goodfriends .kongfriend span{
		display: block;
		width: 145px;
		height: 60px;
		border: 1px solid #5281ed;
		border-radius: 6px;
		font-size: 20px;
		color: #7b83fe;
		margin: 0 auto;
		line-height: 60px;
		margin-top: 26px;
	}
	.goodfriends .goodsf{
		padding: 16px 20px;
		width: 655px;
		height: 83px;
		border-radius: 15px;
		background: #fff;
		margin: 0 auto;
		box-shadow: 0 8px 20px rgba(156,179,252,0.4);
		margin-bottom: 24px;
	}
	.goodfriends .goodsf img{
		width: 74px;
		height: 74px;
		border: 6px solid #d2ddfe;
		border-radius: 74px;
		float: left;
		margin-right: 26px;
	}
	.goodfriends .goodsf span{
		display: inline-block;
		background: #9eb9fc;
		border-radius: 10px;
		float: right;
		width: 92px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		color: #fff;
		font-size: 16px;
		margin-top: 22px;
	}
	.goodfriends .goodsf .p01p{
		font-size: 24px;
		margin-top: 16px;
	}
	.goodfriends .goodsf .p02p{
		font-size: 16px;
		line-height: 30px;
	}
</style>