<template>
	<div class="rizhi">
		<div @click="farizhi" class="jia">
			<img src="../../assets/imgs/jiahao.png"/>
			<p>添加日志</p>
		</div>
		<div v-for="(item,index) in zhis" class="conrizhi">
			<h3>甜缘时刻 : {{item.titles}}</h3>
			<p>{{item.contes}}</p>
			<span>{{item.time}}</span>
		</div>
		<div style="height: 98px;"></div>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				zhis:[]
			}
		},
		methods:{
			farizhi(){
				this.$router.push('/farizhi');
			}
		},
		mounted:function(){
			this.zhis=rizhis;
		}
	}
</script>

<style>
	.rizhi{
		padding: 0 50px;
		margin-top: 30px;
		background: #F5F8FF;
		padding-bottom: 500px;
	}
	.rizhi .jia{
		height: 145px;
		background: #fff;
		margin: 0 auto;
		text-align: center;
		border-radius: 15px;
		box-shadow: 0 8px 20px rgba(156,179,252,0.4);
		color: rgba(0,0,0,0.6);
	}
	.rizhi .jia img{
		width: 50px;
		margin-top: 34px;
	}
	.rizhi .conrizhi{
		padding: 30px;
		background: #fff;
		margin: 0 auto;
		border-radius: 15px;
		box-shadow: 0 8px 20px rgba(156,179,252,0.4);
		color: rgba(0,0,0,0.6);
		margin-top: 20px;
		word-break: break-word;
	}
	.rizhi .conrizhi:active{
		content: '';
		display: block;
		clear: both;
	}
	.rizhi .conrizhi h3{
		line-height: 60px;
		border-bottom: 1px solid rgba(0,0,0,0.2);
		margin-bottom: 20px;
	}
	.rizhi .conrizhi p{
		text-indent: 2em;
		line-height: 40px;
	}
	.rizhi .conrizhi span{
		float: right;
		font-size: 16px;
	}
</style>