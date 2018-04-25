<template>
  	<div id="cedv" class="cedv">
		<div @click="huantou" class="toxing">
			<img src="../assets/imgs/jiahao.png" id="huant">
		</div>
		<p class="p1">森明亮璐</p>
		<p class="p2">全世界最好吃的都在这里</p>
		<p class="p3">
			<img src="../assets/imgs/libao.png"/>甜缘征集互动来开启啦！~~~
		</p>
		<ul>
			<li @click="zhong1">账户设置<span><img src="../assets/imgs/fanhuide.png"/></span></li>
			<li @click="zhong2">甜食收藏<span><img src="../assets/imgs/fanhuide.png"/></span></li>
			<li @click="zhong3">甜食分享<span><img src="../assets/imgs/fanhuide.png"/></span></li>
			<li @click="zhong4">甜食推荐<span><img src="../assets/imgs/fanhuide.png"/></span></li>
			<li @click="zhong5">甜缘好友<span><img src="../assets/imgs/fanhuide.png"/></span></li>
		</ul>
	</div>
</template>

<script>
	export default {
	 	name: 'Lefdong',
	  	mounted:function(){
	  		var lefdong=document.getElementById("lefdong");
			lefdong.style.width=document.documentElement.clientWidth+"px";
			lefdong.style.height=document.documentElement.clientHeight+"px";
	  	},
	  	methods:{
	  		huantou(){
				if(zhanghao.length==0){
					this.$notify({
				        title: 'NO！',
				        type: 'warning',
				        message: '您还没有登录!',
				        showClose: false,
				        position:'top-left'
			        });
				}else{
					this.$router.push('/toutu');
					this.$router.params="home";
					var lefdong=document.getElementById("cedv");
					var app=document.getElementById("app");
		  			lefdong.style.left="-100%";
					document.body.style.background="#F5F8FF";
					document.body.style.left="0";
					document.body.style.overflow="inherit";
					app.style.transform="none";
					app.style.marginTop="0";
					lefdong.style.transition=document.body.style.transition=app.style.transition="1s";
				}
			},
	  		zhong1(){
	  			selec="mine";
	  			cebian=false;
	  			this.$router.push('/mine');
	  			var lefdong=document.getElementById("cedv");
				var app=document.getElementById("app");
	  			lefdong.style.left="-100%";
				document.body.style.background="#F5F8FF";
				document.body.style.left="0";
				document.body.style.overflow="inherit";
				app.style.transform="none";
				app.style.marginTop="0";
				lefdong.style.transition=document.body.style.transition=app.style.transition="1s";
	  		},
	  		zhong2(){
	  			selec="mine";
	  			cebian=false;
	  			this.$router.push('/mine/myshoucang');
	  			var lefdong=document.getElementById("cedv");
				var app=document.getElementById("app");
	  			lefdong.style.left="-100%";
				document.body.style.background="#F5F8FF";
				document.body.style.left="0";
				document.body.style.overflow="inherit";
				app.style.transform="none";
				app.style.marginTop="0";
				lefdong.style.transition=document.body.style.transition=app.style.transition="1s";
	  		},
	  		zhong3(){
	  			selec="mine";
	  			cebian=false;
	  			this.$router.push('/farizhi');
	  			var lefdong=document.getElementById("cedv");
				var app=document.getElementById("app");
	  			lefdong.style.left="-100%";
				document.body.style.background="#F5F8FF";
				document.body.style.left="0";
				document.body.style.overflow="inherit";
				app.style.transform="none";
				app.style.marginTop="0";
				lefdong.style.transition=document.body.style.transition=app.style.transition="1s";
	  		},
	  		zhong4(){
	  			selec="home";
	  			cebian=false;
	  			this.$router.push('/home/tuijian');
	  			var lefdong=document.getElementById("cedv");
				var app=document.getElementById("app");
	  			lefdong.style.left="-100%";
				document.body.style.background="#F5F8FF";
				document.body.style.left="0";
				document.body.style.overflow="inherit";
				app.style.transform="none";
				app.style.marginTop="0";
				lefdong.style.transition=document.body.style.transition=app.style.transition="1s";
	  		},
	  		zhong5(){
	  			cebian=false;
	  			this.$router.push('/goodfriends');
	  			var lefdong=document.getElementById("cedv");
				var app=document.getElementById("app");
	  			lefdong.style.left="-100%";
				document.body.style.background="#F5F8FF";
				document.body.style.left="0";
				document.body.style.overflow="inherit";
				app.style.transform="none";
				app.style.marginTop="0";
				lefdong.style.transition=document.body.style.transition=app.style.transition="1s";
	  		}
	  	}
	}
</script>

<style>
	#lefdong{
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
		background: -webkit-linear-gradient(#9cc5fc,#9cc5fc);
		background: -moz-linear-gradient(#a2a2fc,#9cc5fc);
		background: -ms-linear-gradient(#a2a2fc,#9cc5fc);
		background: -o-linear-gradient(#a2a2fc,#9cc5fc);
		background: linear-gradient(#a2a2fc,#9cc5fc);
	}
	.cedv{
		position: relative;
		left: -100%;
		width: 75%;
		height: 100%;
		color: #fff;
	}
	.cedv .toxing{
		width: 161px;
		height: 161px;
		border-radius: 100px;
		margin: 0 auto;
		margin-top: 100px;
		border: 4px solid #fff;
	}
	.cedv .toxing img{
		width: 161px;
		height: 161px;
		border-radius: 100px;
	}
	.cedv .p1{
		font-size: 32px;
		text-align: center;
		margin-top: 30px;
	}
	.cedv .p2{
		font-size: 18px;
		text-align: center;
		line-height: 20px;
		margin-bottom: 15px;
	}
	.cedv .p3{
		width: 200%;
		height: 82px;
		background: #f5f8ff;
		font-size: 24px;
		line-height: 82px;
		color: #6e93ff;
		padding-left: 40px;
	}
	.cedv .p3 img{
		vertical-align: text-bottom;
		margin-right: 30px;
	}
	.cedv ul{
		margin-top: 30px;
	}
	.cedv ul li{
		list-style: none;
		height: 90px;
		line-height: 90px;
		font-size: 30px;
	}
	.cedv ul li span{
		vertical-align: middle;
		float: right;
	}
	.cedv ul li span img{
		transform: rotate(180deg);
	}
</style>