<template>
	<div class="zhuanlunbo">
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
				initialSlide :1,
				loop:true,
				pagination:{
					el:'.swiper-paginations'
				},
				slidesPerView: 'auto',
      			centeredSlides: true,
      			prevButton: '#investpro-prev',
				nextButton: '#investpro-next'
				/*slidesPerView: 2,
			    spaceBetween: 20,
			    centeredSlides: true*/
			})
		}
	}
	
</script>

<style>
	@import '../../../static/libs/swiper/css/swiper.css';
	
	.zhuanlunbo{
		position: relative;
	}
	.zhuanlunbo .lunbo .swiper-wrapper .swiper-slide{
		padding-top: 5px;
		width: 663px!important;
		height: 510px!important;
		/*border-radius: 20px;*/
		overflow: hidden;
		background: #fff;
		/*margin: 0 10px;*/
	}
	.zhuanlunbo .lunbo .swiper-wrapper .swiper-slide img{
		width: 663px;
		height: 364px;
		border-radius: 20px;
	}
	.zhuanlunbo .lunbo .swiper-wrapper .swiper-slide .p1{
		font-size: 28px;
		line-height: 70px;
	}
	.zhuanlunbo .lunbo .swiper-wrapper .swiper-slide .p2{
		font-size: 24px;
	}
	.zhuanlunbo .lunbo .swiper-wrapper .swiper-slide-prev{
		/*transform: scale(0.96);*/
		/*height: 430px!important;*/
		/*margin-top: 35px;*/
	}
	.zhuanlunbo .lunbo .swiper-wrapper .swiper-slide-prev img,
	.zhuanlunbo .lunbo .swiper-wrapper .swiper-slide-prev p{
		transform: scale(0.92);
		/*height: 314px;*/
	}
	.zhuanlunbo .lunbo .swiper-wrapper .swiper-slide-next{
		/*transform: scale(0.96);*/
		/*height: 430px!important;*/
		/*margin-top: 35px;*/
	}
	.zhuanlunbo .lunbo .swiper-wrapper .swiper-slide-next img,
	.zhuanlunbo .lunbo .swiper-wrapper .swiper-slide-next p{
		transform: scale(0.92);
		/*height: 314px;*/
	}
</style>