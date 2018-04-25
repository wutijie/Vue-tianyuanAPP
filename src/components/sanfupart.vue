<template>
	<div class="sanfupart">
		<div class="baotu">
			<div class="imsm">
				<img src="../assets/imgs/fenfenxiang.png"/>
				<img @click="close" src="../assets/imgs/fanghuihui.png"/>
			</div>
			<div class="datu">
				<slot name="bigtu"></slot>
			</div>
			<div class="fucont">
				<slot name="tit"></slot>
				<p class="pp11">
					<span class="spaa1">
						<!--<span>￥</span>-->
						<slot name="jiage"></slot>
					</span>
					<slot name="dazhe"></slot>
					<span class="spaa4">每单限1份优惠</span>
					<span class="spaa5"><img @click="zouni($event)" src="../assets/imgs/jiahao.png"/></span>
				</p>
				<p class="pp22">全套餐，享受全程派送</p>
				<h3>商品评价</h3>
				<hr />
				<slot name="pingjia"></slot>
			</div>
			<div class="fubot">
				新用户下单立减7元
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted:function(){
			var bac=document.getElementsByClassName("sanfupart")[0];
			bac.style.width=document.documentElement.clientWidth+'px';
			bac.style.height=document.documentElement.clientHeight+'px';
		},
		methods:{
			zouni(ev){
				console.log(ev.path);
				console.log(ev.path[4].children[1].firstChild.src);
				console.log(ev.path[4].children[2].firstChild.innerHTML);
				console.log(ev.path[4].children[2].children[1].firstChild.lastChild.innerHTML);
				var imgs=ev.path[4].children[1].firstChild.src;
				var names=ev.path[4].children[2].firstChild.innerHTML;
				var jiage=ev.path[4].children[2].children[1].firstChild.lastChild.innerHTML;
				var n=shoppings.length;
				shoppings.push(
					{imgs:imgs,names:names,jiage:jiage,num:0,ids:n}
				);
				this.$notify.success({
			        title: 'OK！',
			        message: '成功加入购物车',
			        showClose: false,
			        duration: 2000,
			        position:'top-left'
		        });
			},
			close(){
				this.$router.push('/'+this.$router.params);
			}
		}
	}
</script>

<style>
	.sanfupart{
		position: relative;
		z-index: 14;
		background: #F5F8FF;
		border-bottom: none;
	}
	.sanfupart .baotu{
		width: 100%;
		height: 730px;
		background: #fff;
		border: 1px solid transparent;
		position: relative;
		margin-bottom: 10px;
	}
	.sanfupart .baotu .imsm{
		position: absolute;
		right: 60px;
		top: 40px;
	}
	.sanfupart .baotu .imsm img{
		width: 52px;
		height: 52px;
		margin: 0 5px;
	}
	.sanfupart .baotu .datu{
		width: 94%;
		height: 94%;
		border-radius: 15px;
		overflow: hidden;
		margin: 0 auto;
		margin-top: 10px;
	}
	.sanfupart .baotu .datu img{
		width: 100%;
		height: 100%;
		border-radius: 15px;
	}
	.sanfupart .fucont{
		background: #fff;
		padding: 20px;
		margin-top: 30px;
	}
	.sanfupart .fucont h3{
		font-size: 32px;
		color: #383838;
		letter-spacing: 2px;
		font-weight: normal;
		margin-bottom: 26px;
	}
	.sanfupart .fucont .pp11 .spaa1{
		font-size: 32px;
		color: #ea2828;
	}
	.sanfupart .fucont .pp11 .spaa2{
		font-size: 20px;
		color: #adadad;
		text-decoration: line-through;
		margin: 0 15px;
	}
	.sanfupart .fucont .pp11 .spaa3{
		display: inline-block;
		width: 64px;
		height: 21px;
		border: 1px solid #e0e6e6;
		text-align: center;
		line-height: 24px;
		font-size: 16px;
		color: #f77272;
		margin: 0 10px;
		margin-left: 0;
		vertical-align: text-bottom;
	}
	.sanfupart .fucont .pp11 .spaa4{
		font-size: 16px;
		color: #f77272;
	}
	.sanfupart .fucont .pp11 .spaa5 img{
		vertical-align: middle;
		float: right;
		margin-right: 40px;
	}
	.sanfupart .fucont .pp22{
		font-size: 20px;
		color: #5a5a5a;
		margin-top: 40px;
		margin-bottom: 80px;
	}
	.sanfupart .fucont .pp33{
		font-size: 22px;
		color: #a1a1a1;
		margin-top: 30px;
	}
	.sanfupart hr{
		border-color: #e0e6e6;
	}
	.sanfupart .fubot{
		width: 100%;
		height: 98px;
		position: fixed;
		bottom: 0;
		color: #fff;
		line-height: 98px;
		font-size: 32px;
		background: #c8d5ff;
		letter-spacing: 2px;
		text-align: center;
	}
	.el-notification h2,
	.el-notification p{
		font-size: 24px;
	}
</style>