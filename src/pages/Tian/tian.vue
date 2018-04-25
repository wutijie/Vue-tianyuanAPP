<template>
	<div class="tian">
		<Header bol="true">
			<img @click="dong()" slot="left" class="leftImg" src="../../assets/imgs/headerleft01.png"/>
			<div slot="search" class="search">
				<div class="searchBig">
					<input type="text" @click="sou" placeholder="请输入要搜索的内容" />
					<img class="searchImg" slot="right" src="../../assets/imgs/search.png"/>
				</div>
			</div>
			<!--<img slot="right" class="rightImg" src="../../assets/imgs/headerrig01.png"/>-->
		</Header>
		<div class="tianban">
			<img src="../../assets/imgs/tianbanner.jpg"/>
		</div>
		<div class="tiandv">
			<div>
				<img @click="tian1" src="../../assets/imgs/tian01.jpg"/>
			</div>
			<div>
				<img @click="tian2" src="../../assets/imgs/tian02.jpg"/>
			</div>
			<div>
				<img @click="tian3" src="../../assets/imgs/tian03.jpg"/>
			</div>
		</div>
		<div class="tianbot">
			<h3>甜缘秒杀<span>8点场</span></h3>
			<div class="tianbotdv">
				<div>
					<img src="../../assets/imgs/tian04.jpg"/>
					<p class="p1">Prelate full</p>
					<i><img @click="zouni($event)" src="../../assets/imgs/jiahao.png"/></i>
					<p class="p2"><span>￥ 19.9</span><span class="spaa">￥ 39.9</span></p>
				</div>
				<div>
					<img src="../../assets/imgs/tian05.jpg"/>
					<p class="p1">Banana Almond</p>
					<i><img @click="zouni($event)" src="../../assets/imgs/jiahao.png"/></i>
					<p class="p2"><span>￥ 19.9</span><span class="spaa">￥ 39.9</span></p>
				</div>
				<div>
					<img src="../../assets/imgs/tian06.jpg"/>
					<p class="p1">Mango cake</p>
					<i><img @click="zouni($event)" src="../../assets/imgs/jiahao.png"/></i>
					<p class="p2"><span>￥ 19.9</span><span class="spaa">￥ 39.9</span></p>
				</div>
			</div>
		</div>
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
			var bac=document.getElementsByClassName("tian")[0];
			bac.style.width=document.documentElement.clientWidth+'px';
			bac.style.height=document.documentElement.clientHeight+'px';
		},
		methods:{
			sou(){
				this.$router.push('/search');
				this.$router.params="tian";
			},
			zouni(ev){
				console.log(ev.path);
				console.log(ev.path[2].firstChild.src);
				console.log(ev.path[2].children[1].innerHTML);
				console.log(ev.path[2].lastChild.firstChild.innerHTML);
				var imgs=ev.path[2].firstChild.src;
				var names=ev.path[2].children[1].innerHTML;
				var jiage=ev.path[2].lastChild.firstChild.innerHTML;
				var n=shoppings.length;
				shoppings.push(
					{imgs:imgs,names:names,jiage:jiage,num:0,ids:n,danjia:jiage}
				);
				this.$notify.success({
			        title: 'tianyuan！',
			        message: '成功加入购物车',
			        showClose: false
		        });
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
			},
			tian1(){
				this.$router.push('/tian/tian1');
				this.$router.params="tian";
			},
			tian2(){
				this.$router.push('/tian/tian2');
				this.$router.params="tian";
			},
			tian3(){
				this.$router.push('/tian/tian3');
				this.$router.params="tian";
			}
		}
	}
</script>

<style>
	.tian{
		position: relative;
		background: #F5F8FF;
	}
	.tian .tianban{
		width: 100%;
	}
	.tian .tianban img{
		width: 100%;
		height: 100%;
	}
	.tian .tiandv{
		height: 222px;
		display: flex;
		justify-content: space-around;
		padding: 14px 10px;
		margin-bottom: 10px;
		background: #fff;
	}
	.tian .tiandv img{
		border-radius: 15px;
	}
	.tian .tianbot{
		width: 100%;
		height: 405px;
		background: #fff;
	}
	.tian .tianbot h3{
		font-weight: normal;
		font-size: 30px;
		color: #4d78ff;
		text-align: center;
		line-height: 70px;
	}
	.tian .tianbot h3 span{
		font-size: 24px;
		color: #a296ae;
		margin-left: 25px;
	}
	.tian .tianbot .tianbotdv{
		display: flex;
		justify-content: space-around;
	}
	.tian .tianbot .tianbotdv img{
		height: 250px;
		border-radius: 15px;
		margin-bottom: 6px;
	}
	.tian .tianbot .tianbotdv i img{
		border-radius: none;
		margin: 5px;
		margin-top: 0;
		width: 32px;
		height: 32px;
		float: right;
	}
	.tian .tianbot .tianbotdv .p1,
	.tian .tianbot .tianbotdv .p2{
		font-size: 24px;
	}
	.tian .tianbot .tianbotdv .p2 .spaa{
		font-size: 18px;
		color: #a0a0a0;
		text-decoration: line-through;
	}
	.el-notification h2,
	.el-notification p{
		font-size: 24px;
	}
</style>