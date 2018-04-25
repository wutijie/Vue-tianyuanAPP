<template>
	<div class="friendslunbo">
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
	
	.friendslunbo{
		position: relative;
		text-align: center;
	}
	.friendslunbo .fdslunbo .swiper-wrapper .swiper-slide{
		width: 583px!important;
		height: 942px!important;
		border-radius: 20px;
		background: #fff;
		margin: 0 17px;
		margin-top: 14%;
	}
	.friendslunbo .fdslunbo .swiper-wrapper .swiper-slide .touxiang{
		width: 158px;
		height: 158px;
		border-radius: 100px;
		border: 6px solid #d2ddfe;
		margin-top: 100px;
		margin-bottom: 10px;
	}
	.friendslunbo .fdslunbo .swiper-wrapper .swiper-slide .p1{
		font-size: 32px;
		color: #000000;
	}
	.friendslunbo .fdslunbo .swiper-wrapper .swiper-slide .p2{
		font-size: 18px;
		color: #000000;
	}
	.friendslunbo .fdslunbo .swiper-wrapper .swiper-slide .p3{
		font-size: 28px;
		color: #000000;
		line-height: 46px;
	}
	.friendslunbo .fdslunbo .swiper-wrapper .swiper-slide .p4{
		font-size: 22px;
		color: #000000;
	}
	.friendslunbo .fdslunbo .swiper-wrapper .swiper-slide .dv{
		display: flex;
		justify-content: space-around;
		margin-top: 38px;
		margin-bottom: 50px;
		padding: 0 30px;
	}
	.friendslunbo .fdslunbo .swiper-wrapper .swiper-slide .dvimg img{
		width: 212px;
		height: 273px;
		margin: 0 13px;
	}
	.friendslunbo .fdslunbo .swiper-wrapper .swiper-slide button{
		width: 126px;
		height: 63px;
		background: #9CB3FC;
		color: #fff;
		font-size: 22px;
		border: none;
		padding: 0;
		outline: 0;
		border-radius: 10px;
		margin-top: 40px;
	}
	.friendslunbo .fdslunbo .swiper-wrapper .swiper-slide-prev{
		/*transform: scale(0.92);*/
		/*height: 905px!important;*/
		/*margin-top: 16%;*/
	}
	/*.friendslunbo .fdslunbo .swiper-wrapper .swiper-slide-prev img{
		height: 314px;
	}*/
	.friendslunbo .fdslunbo .swiper-wrapper .swiper-slide-next{
		/*transform: scale(0.92);*/
		/*height: 905px!important;*/
		/*margin-top: 106px;*/
	}
	/*.friendslunbo .fdslunbo .swiper-wrapper .swiper-slide-next img{
		height: 314px;
	}*/
</style>