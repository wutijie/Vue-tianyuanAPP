<template>
	<div class="banner">
		<div class="swiper-container" :class="swiperid">
			<div class="swiper-wrapper">
				<slot name="swiper-con"></slot>
			</div>
			<div :class="{'swiper-pagination' : paginationshow}" :style="{'text-align' : paginationdesition}"></div>
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
			},
			paginationshow:{
				type:Boolean,
				default:true
			},
			paginationdesition:{
				type:String,
				default:'center'
			},
			paginationType:{
				type:String,
				default:'bullets'
			},
			autoplay:{
				type:Boolean,
				default:true
			},
			loop:{
				type:Boolean,
				default:true
			},
			dierction:{
				type:String,
				default:'horizontal'
			},
			effect:{
				type:String,
				default:'slide'
			}
		},
		mounted:function(){
			var That=this;
			new Swiper('.'+That.swiperid,{
				initialSlide :1,
				dierction:That.dierction,
				loop:That.loop,
				pagination:{
					el:'.swiper-pagination'
				},
				paginationType:That.paginationType,
				autoplay:That.autoplay,
				effect:That.effect
			})
		}
	}
	
</script>

<style>
	@import '../../../static/libs/swiper/css/swiper.css';
	
	.banner{
		width: 100%;
		/*height: 387px;*/
		/*overflow: hidden;*/
		position: relative;
	}
	.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
		bottom: 70px!important;
	}
	.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
		margin: 0 28px!important;
	}
	.banner{
		width: 100%!important;
	}
	.banner .swiper-wrapper{
		width: 100%!important;
	}
	.banner .swiper-container .swiper-slide{
		width: 100%!important;
	}
	.banner .swiper-container .swiper-slide img{
		width: 100%!important;
	}
	.swiper-slide,.swiper-slide-duplicate,.swiper-slide-duplicate-active{
		width: 100%!important;
	}
	.banner .swiper-pagination-bullet{
		width: 16px;
		height: 16px;
		background: #fff;
		opacity: 1;
	}
	.banner .swiper-pagination-bullet-active{
		background: #9CB3FC;
	}
</style>