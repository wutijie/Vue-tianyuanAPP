<template>
	<div class="toutu">
		<Header txt="选取图片">
			<img @click="fan" slot="left" class="leftImg" src="../../assets/imgs/fanhuide.png"/>
		</Header>
		<div class="top"></div>
		<div class="big">
			<table>
				<tr>
					<td :class="{activeimg:nowIndex==0}" @click='nowIndex=0'><img src="../../assets/imgs/sanfu01.jpg"/></td>
					<td :class="{activeimg:nowIndex==1}" @click='nowIndex=1'><img src="../../assets/imgs/sanfu02.jpg"/></td>
					<td :class="{activeimg:nowIndex==2}" @click='nowIndex=2'><img src="../../assets/imgs/sanfu03.jpg"/></td>
					<td :class="{activeimg:nowIndex==3}" @click='nowIndex=3'><img src="../../assets/imgs/sanfu04.jpg"/></td>
				</tr>
				<tr>
					<td :class="{activeimg:nowIndex==4}" @click='nowIndex=4'><img src="../../assets/imgs/sanfu05.jpg"/></td>
					<td :class="{activeimg:nowIndex==5}" @click='nowIndex=5'><img src="../../assets/imgs/sanfu06.jpg"/></td>
					<td :class="{activeimg:nowIndex==6}" @click='nowIndex=6'><img src="../../assets/imgs/sanfu08.jpg"/></td>
					<td :class="{activeimg:nowIndex==7}" @click='nowIndex=7'><img src="../../assets/imgs/sanfu09.jpg"/></td>
				</tr>
				<tr>
					<td :class="{activeimg:nowIndex==8}" @click='nowIndex=8'><img src="../../assets/imgs/sanfu10.jpg"/></td>
					<td :class="{activeimg:nowIndex==9}" @click='nowIndex=9'><img src="../../assets/imgs/sanfu11.jpg"/></td>
					<td :class="{activeimg:nowIndex==10}" @click='nowIndex=10'><img src="../../assets/imgs/sanfu01.jpg"/></td>
					<td :class="{activeimg:nowIndex==11}" @click='nowIndex=11'><img src="../../assets/imgs/sanfu02.jpg"/></td>
				</tr>
				<tr>
					<td :class="{activeimg:nowIndex==12}" @click='nowIndex=12'><img src="../../assets/imgs/sanfu03.jpg"/></td>
					<td :class="{activeimg:nowIndex==13}" @click='nowIndex=13'><img src="../../assets/imgs/sanfu04.jpg"/></td>
					<td :class="{activeimg:nowIndex==14}" @click='nowIndex=14'><img src="../../assets/imgs/sanfu05.jpg"/></td>
					<td :class="{activeimg:nowIndex==15}" @click='nowIndex=15'><img src="../../assets/imgs/sanfu06.jpg"/></td>
				</tr>
			</table>
			<div @click="sure($event)" class="qued">确定</div>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/header'
	
	export default {
		components:{
			Header
		},
		data:function(){
			return {
				nowIndex:0
			}
		},
		mounted:function(){
			var bac=document.getElementsByClassName("toutu")[0];
			bac.style.width=document.documentElement.clientWidth-20+'px';
			bac.style.height=document.documentElement.clientHeight-20+'px';
		},
		methods:{
			fan(){
				this.$router.push('/'+this.$router.params);
				if(this.$router.params=='home'){
					cebian=true;
					var lefdong=document.getElementById("cedv");
					var app=document.getElementById("app");
					lefdong.style.left="0";
					document.body.style.background="none";
					document.body.style.left="70%";
					document.body.style.overflow="hidden";
					app.style.transform="scale(0.8)";
					app.style.marginTop="3%";
					lefdong.style.transition=document.body.style.transition=app.style.transition="1s";
				}
			},
			sure(ev){
				this.$notify.success({
			        title: 'tianyuan！',
			        message: '更换成功!',
			        showClose: false
		        });
				var act=document.querySelector(".activeimg img");
				srctx=act.src;
				if(this.$router.params=='home'){
					cebian=true;
					var lefdong=document.getElementById("cedv");
					var app=document.getElementById("app");
					lefdong.style.left="0";
					document.body.style.background="none";
					document.body.style.left="70%";
					document.body.style.overflow="hidden";
					app.style.transform="scale(0.8)";
					app.style.marginTop="3%";
					lefdong.style.transition=document.body.style.transition=app.style.transition="1s";
				}
				var d=document.getElementById("huant");
				console.log(d);
				d.src=act.src;
				this.$router.push('/'+this.$router.params);
			}
		}
	}
</script>

<style>
	.toutu{
		background: #F5F8FF;
		padding: 10px;
	}
	.toutu .big tr{
		display: flex;
		justify-content: space-around;
	}
	.toutu .big tr td{
		margin: 10px;
		padding: 5px;
		border: 4px solid #E0E6E6;
	}
	.toutu .big tr .activeimg{
		border: 4px solid #9CC5FC;
	}
	.toutu .big tr img{
		width: 100%;
		height: 100%;
	}
	.toutu .qued{
		height: 80px;
		line-height: 80px;
		background: #a2a2fc;
		margin: 0 auto;
		border-radius: 15px;
		box-shadow: 0 8px 20px rgba(156,179,252,0.4);
		color: rgba(0,0,0,0.6);
		margin: 0 10px;
		margin-top: 40px;
		font-size: 30px;
		color: #fff;
		text-align: center;
	}
	.toutu .qued:hover{
		background: #9CB3FC;
	}
</style>