<template>
	<div class="find">
		<Header>
			<img @click="dong" slot="left" class="leftImg" src="../../assets/imgs/headerleft01.png"/>
			<div slot="search" class="search">
				<router-link to="/find/friends">
					<span :class="{activespan:nowIndex==0}" @click='nowIndex=0'>甜缘好友</span>
				</router-link>
				<router-link to="/find/distance">
					<span :class="{activespan:nowIndex==1}" @click='nowIndex=1'>离我最近</span>
				</router-link>
			</div>
			<img @click="fends" slot="right" class="rightImg" src="../../assets/imgs/haoyou.png"/>
		</Header>
		<div class="top"></div>
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
			console.log(document.documentElement.clientWidth);
			var bac=document.getElementsByClassName("find")[0];
			bac.style.width=document.documentElement.clientWidth+'px';
			bac.style.height=document.documentElement.clientHeight+'px';
		},
		data:function(){
			return {
				nowIndex:0
			}
		},
		methods:{
			fends(){
				this.$router.push('/goodfriends');
				this.$router.params="/find/friends";
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
	.find{
		position: relative;
		background: #F5F8FF;
	}
</style>