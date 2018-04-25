<template>
	<div class="youhuipart">
		<p class="p1">
			<slot name="youimg"></slot>
			<slot name="yousp1"></slot>
			<slot name="yousp2"></slot>
		</p>
		<img @click="zouni($event)" style="width: 30px;height: 30px;float: right;" src="../assets/imgs/jiahao.png"/>
		<slot name="youp1"></slot>
	</div>
</template>

<script>
	export default {
		methods:{
			zouni(ev){
//				console.log(ev);
//				console.log(ev.path);
//				console.log(ev.path[1].firstChild.firstChild.src);
//				console.log(ev.path[1].firstChild.children[1].innerHTML);
//				console.log(ev.path[1].lastChild.innerHTML);
				var imgs=ev.path[1].firstChild.firstChild.src
				var names=ev.path[1].firstChild.children[1].innerHTML
				var jiage=ev.path[1].lastChild.innerHTML
				var n=shoppings.length;
				shoppings.push(
					{imgs:imgs,names:names,jiage:jiage,num:0,ids:n}
				);
//				console.log(shoppings);
//				Event.$emit('comshop',this.shop);
				this.$notify.success({
			        title: 'tianyuan！',
			        message: '成功加入购物车',
			        showClose: false
		        });
			}
		}
	}
</script>

<style>
	.youhuipart{
		margin: 0 20px;
		margin-bottom: 3px;
	}
	.youhuipart img{
		width: 100%;
		height: 250px;
		border-radius: 15px;
	}
	.youhuipart .p1{
		line-height: 38px;
	}
	.youhuipart .sp1{
		font-size: 28px;
		color: #251a1d;
	}
	.youhuipart .sp2{
		font-size: 20px;
		color: rgba(37,26,29,0.6);
		float: right;
	}
	.youhuipart .p2{
		font-size: 22px;
		color: rgba(37,26,29,0.7);
	}
</style>