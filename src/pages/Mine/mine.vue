<template>
	<div class="mine">
		<Header txt="甜缘主页" bol="true">
			<img slot="left" class="leftImg" src="../../assets/imgs/headerleft01.png"/>
			<img slot="right" class="rightImg" src="../../assets/imgs/headerrig01.png"/>
		</Header>
		<div class="minetop">
			<div @click="huantou" class="xiang">
				<img v-show="xing" src="../../assets/imgs/jiahao.png"/>
				<img v-show="!xing" :src="srcxiang"/>
			</div>
			<div v-show="!tou">
				<p class="p1">Diamonds</p>
				<p class="p2">Let the sweet fate to knot!</p>
			</div>
			<div v-show="tou">
				<p class="p1"><span @click="deng">登录</span></p>
			</div>
			<div class="dvd">
				<div>
					<p class="p3">{{guangood}}</p>
					<p @click="zhuanzhu" class="p2">关注</p>
				</div>
				<div>
					<p class="p3">0</p>
					<p class="p2">粉丝</p>
				</div>
				<div>
					<p class="p3">0</p>
					<p class="p2">访问量</p>
				</div>
			</div>
		</div>
		<div style="padding: 0 50px;">
			<div class="minefenlei">
				<router-link to="/mine/mytianshi">
					<div :class="{activep:nowIndex==0}" @click='nowIndex=0'>
						<img src="../../assets/imgs/mine01.png"/>
						<p>我的甜食</p>
					</div>
				</router-link>
				<router-link to="/mine/myshoucang">
					<div :class="{activep:nowIndex==1}" @click='nowIndex=1'>
						<img src="../../assets/imgs/mine02.png"/>
						<p>我的收藏</p>
					</div>
				</router-link>
				<router-link to="/mine/suipai">
					<div :class="{activep:nowIndex==2}" @click='nowIndex=2'>
						<img src="../../assets/imgs/mine03.png"/>
						<p>随拍</p>
					</div>
				</router-link>
				<router-link to="/mine/rizhi">
					<div :class="{activep:nowIndex==3}" @click='nowIndex=3'>
						<img src="../../assets/imgs/mine04.png"/>
						<p>日志</p>
					</div>
				</router-link>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import Header from '../../components/header'
	
	export default {
		components:{
			Header
		},
		mounted:function(){
			console.log(zhanghao)
			if(zhanghao.length!=0){
				this.tou=false;
			}
			this.srcxiang=srctx;
			this.guangood=friends.length;
			if(this.srcxiang!=''){
				this.xing=false;
			}
			console.log(window.screen.width,window.screen.height)
			console.log(document.documentElement.clientWidth,document.documentElement.clientHeight)
			var bac=document.getElementsByClassName("mine")[0];
//			bac.style.width=window.screen.width+'px';
//			bac.style.height=window.screen.height+'px';
//			bac.style.width=document.documentElement.clientWidth+'px';
//			bac.style.height=document.documentElement.clientHeight+'px';
		},
		data:function(){
			return {
				nowIndex:0,
				guangood:0,
				tou:true,
				xing:true,
				srcxiang:''
			}
		},
		methods:{
			deng(){
				this.$router.push('/login');
			},
			zhuce(){
				this.$router.push('/register');
			},
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
					this.$router.params="mine";
				}
			},
			zhuanzhu(){
				this.$router.push('/goodfriends');
				this.$router.params="/mine";
			},
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
			}
		}
	}
</script>

<style>
	.mine{
		background: #F5F8FF;
		padding-bottom: 100px;
	}
	.mine .minetop{
		/*height: 560px;*/
		background: -webkit-linear-gradient(#a2a2fc,#9cc5fc);
		background: -moz-linear-gradient(#a2a2fc,#9cc5fc);
		background: -ms-linear-gradient(#a2a2fc,#9cc5fc);
		background: -o-linear-gradient(#a2a2fc,#9cc5fc);
		background: linear-gradient(#a2a2fc,#9cc5fc);
		border: 1px solid transparent;
		color: #fff;
		text-align: center;
	}
	.mine .minetop .xiang{
		width: 122px;
		height: 122px;
		border: 1px solid #fff;
		border-radius: 50%;
		padding: 5px;
		overflow: hidden;
		margin: 0 auto;
		margin-top: 115px;
		margin-bottom: 45px;
	}
	.mine .minetop .xiang img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.mine .minetop .p1{
		font-size: 28px;
		margin-bottom: 2px;
	}
	.mine .minetop .p2{
		font-size: 20px;
	}
	.mine .minetop .dvd{
		margin-top: 48px;
		display: flex;
		justify-content: space-around;
		margin-bottom: 14%;
		padding: 0 10%;
	}
	.mine .minetop .dvd .p3{
		font-size: 28px;
	}
	.mine .minefenlei{
		height: 145px;
		display: flex;
		justify-content: space-around;
		background: #fff;
		margin: 0 auto;
		text-align: center;
		border-radius: 15px;
		margin-top: -70px;
		box-shadow: 0 8px 20px rgba(156,179,252,0.4);
	}
	.mine .minefenlei img{
		width: 76px;
		height: 76px;
		margin-top: 18px ;
		margin-bottom: 6px;
	}
	.mine .minefenlei .activep{
		color: #9CB3FC;
	}
</style>