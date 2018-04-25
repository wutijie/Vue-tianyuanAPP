<template>
	<div class="friends">
		<Friendslunbo swiperid="fdslunbo">
			<div slot="swiper-con" class="swiper-slide">
				<img class="touxiang" src="../../assets/imgs/mineshou02.jpg"/>
				<p class="p1">我叫土特产</p>
				<p class="p2">快来看我自制的美味！</p>
				<div class="dv">
					<div>
						<p class="p3">303</p>
						<p class="p4">关注</p>
					</div>
					<div>
						<p class="p3">93</p>
						<p class="p4">粉丝</p>
					</div>
					<div>
						<p class="p3">1231</p>
						<p class="p4">浏览量</p>
					</div>
				</div>
				<div class="dvimg">
					<img src="../../assets/imgs/find01.jpg"/>
					<img src="../../assets/imgs/tian04.jpg"/>
				</div>
				<button @click="jiayou($event)">关注</button>
			</div>
			<div slot="swiper-con" class="swiper-slide">
				<img class="touxiang" src="../../assets/imgs/lunbo02.gif"/>
				<p class="p1">森明亮路</p>
				<p class="p2">全世界最好吃的都在这里！~~</p>
				<div class="dv">
					<div>
						<p class="p3">426</p>
						<p class="p4">关注</p>
					</div>
					<div>
						<p class="p3">231</p>
						<p class="p4">粉丝</p>
					</div>
					<div>
						<p class="p3">2034</p>
						<p class="p4">浏览量</p>
					</div>
				</div>
				<div class="dvimg">
					<img src="../../assets/imgs/find01.jpg"/>
					<img src="../../assets/imgs/fing003.jpg"/>
				</div>
				<button @click="jiayou($event)">关注</button>
			</div>
			<div slot="swiper-con" class="swiper-slide">
				<img class="touxiang" src="../../assets/imgs/lunbo03.jpg"/>
				<p class="p1">汝的蛋糕</p>
				<p class="p2">谁敢和我一较糕点</p>
				<div class="dv">
					<div>
						<p class="p3">137</p>
						<p class="p4">关注</p>
					</div>
					<div>
						<p class="p3">59</p>
						<p class="p4">粉丝</p>
					</div>
					<div>
						<p class="p3">834</p>
						<p class="p4">浏览量</p>
					</div>
				</div>
				<div class="dvimg">
					<img src="../../assets/imgs/find002.jpg"/>
					<img src="../../assets/imgs/find02.jpg"/>
				</div>
				<button @click="jiayou($event)">关注</button>
			</div>
		</Friendslunbo>
	</div>
</template>

<script>
	import Friendslunbo from './friendslunbo.vue'
	
	export default {
		components:{
			Friendslunbo
		},
		methods:{
			jiayou(ev){
				console.log(ev.path);
				console.log(ev.path[1].firstChild.src);
				console.log(ev.path[1].children[1].innerHTML);
				console.log(ev.path[1].children[2].innerHTML);
				var srcs=ev.path[1].firstChild.src;
				var tit=ev.path[1].children[1].innerHTML;
				var cont=ev.path[1].children[2].innerHTML;
				friends.push(
					{srcs:srcs,tit:tit,cont:cont}
				);
				this.$notify.success({
			        title: 'OK！',
			        message: '成功关注好友',
			        showClose: false
		        });
			}
		}
	}
</script>

<style>
	.el-notification h2,
	.el-notification p{
		font-size: 24px;
	}
</style>