<template>
	<div class="dislunbo">
		<div class="swiper-container" :class="swiperid">
			<div class="swiper-wrapper">
				<slot name="swiper-con"></slot>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from '../../../static/libs/swiper/js/swiper.js'
	export default{
		props:{
			swiperid:{
				type:String,
				default:''
			}
		},
		mounted:function(){
			var That=this;
			new Swiper('.'+That.swiperid,{
				initialSlide :0,
				pagination:{
					el:'.swiper-paginations'
				},
				slidesPerView: 'auto',
			})
		}
	}
	
</script>

<style>
	@import '../../../static/libs/swiper/css/swiper.css';
	
	.dislunbo{
		position: relative;
		background: #fff;
	}
	.dislunbo .disbo .ddv{
		padding-bottom: 50px;
		display: flex;
		justify-content: space-around;
	}
	.dislunbo .disbo .ddv img{
		width: 100%;
		border-radius: 15px;
		margin-top: 50px;
	}
	.dislunbo .disbo .dv .p1{
		font-size: 20px;
		line-height: 40px;
		margin-top: 4px;
	}
	.dislunbo .disbo .dv .p2{
		font-size: 20px;
	}
	.dislunbo .disbo .dv .p1 span{
		float: right;
		font-size: 16px;
		color: rgba(0,0,0,0.5);
	}
	/*.dislunbo .disbo .swiper-wrapper .swiper-slide{
		width: 312px!important;
		height: 600px!important;
		border-radius: 20px;
		margin: 0 35px;
		letter-spacing: 2px;
		margin-top: 50px;
	}
	.dislunbo .disbo .swiper-wrapper .swiper-slide-active img{
		width: 312px!important;
		height: 353px!important;
		border-radius: 15px;
	}
	.dislunbo .disbo .swiper-wrapper .swiper-slide-active{
		width: 312px!important;
		height: 600px!important;
		margin-left: 50px;
	}
	.dislunbo .disbo .swiper-wrapper .swiper-slide-next{
		width: 267px!important;
		height: 600px!important;
	}
	.dislunbo .disbo .swiper-wrapper .swiper-slide-next img{
		width: 267px!important;
		height: 302px!important;
		border-radius: 15px;
	}
	.dislunbo .disbo .swiper-wrapper .swiper-slide .p1{
		font-size: 24px;
		line-height: 50px;
		margin-top: 5px;
	}
	.dislunbo .disbo .swiper-wrapper .swiper-slide .p2{
		font-size: 24px;
	}
	.dislunbo .disbo .swiper-wrapper .swiper-slide .p1 span{
		float: right;
		font-size: 18px;
		color: rgba(0,0,0,0.5);
	}
	.dislunbo .disbo .swiper-wrapper .swiper-slide-next .p1{
		font-size: 20px;
		line-height: 40px;
		margin-top: 4px;
	}
	.dislunbo .disbo .swiper-wrapper .swiper-slide-next .p2{
		font-size: 20px;
	}
	.dislunbo .disbo .swiper-wrapper .swiper-slide-next .p1 span{
		float: right;
		font-size: 16px;
		color: rgba(0,0,0,0.5);
	}*/
</style>