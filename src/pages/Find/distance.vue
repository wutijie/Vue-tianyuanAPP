<template>
	<div class="distance">
		<div class="ditu">
			<div style="width:100%;height:480px;" id="dituContent"></div>
			<!--<img src="../../assets/imgs/find001.jpg"/>-->
		</div>
		<h3>甜缘周边</h3>
		<Dislunbo swiperid="disbo">
			<div slot="swiper-con" class="swiper-slide">
				<div class="ddv">
					<div class="dv">
						<img src="../../assets/imgs/find002.jpg"/>
						<p class="p1">小丑蛋糕店<span>23公里</span></p>
						<p class="p2">地址 : 东星时代广场</p>
					</div>
					<div class="dv">
						<img src="../../assets/imgs/fing003.jpg"/>
						<p class="p1">小丑蛋糕店<span>23公里</span></p>
						<p class="p2">地址 : 东星时代广场</p>
					</div>
				</div>
			</div>
			<!--<div slot="swiper-con" class="swiper-slide">
				<img src="../../assets/imgs/fing003.jpg"/>
				<p class="p1">小丑蛋糕店<span>23公里</span></p>
				<p class="p2">地址 : 东星时代广场</p>
			</div>
			<div slot="swiper-con" class="swiper-slide">
				<img src="../../assets/imgs/fing003.jpg"/>
				<p class="p1">小丑蛋糕店<span>23公里</span></p>
				<p class="p2">地址 : 东星时代广场</p>
			</div>-->
		</Dislunbo>
	</div>
</template>

<script>
	import Dislunbo from './dislunbo.vue'
	
	export default {
		components:{
			Dislunbo
		},
		mounted:function(){
			//创建和初始化地图函数：
		    function initMap(){
		        createMap();//创建地图
		        setMapEvent();//设置地图事件
		        addMapControl();//向地图添加控件
		    }
		    
		    //创建地图函数：
		    function createMap(){
		        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
		        var point = new BMap.Point(111.018369,35.027658);//定义一个中心点坐标
		        map.centerAndZoom(point,18);//设定地图的中心点和坐标并将地图显示在地图容器中
		        window.map = map;//将map变量存储在全局
		    }
		    
		    //地图事件设置函数：
		    function setMapEvent(){
		        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
		        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
		        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
		        map.enableKeyboard();//启用键盘上下左右键移动地图
		    }
		    
		    //地图控件添加函数：
		    function addMapControl(){
		        //向地图中添加缩放控件
			var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
			map.addControl(ctrl_nav);
		        //向地图中添加缩略图控件
			var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
			map.addControl(ctrl_ove);
		        //向地图中添加比例尺控件
			var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
			map.addControl(ctrl_sca);
		    }
		    
		    
		    initMap();//创建和初始化地图
		}
	}
</script>

<style>
	.distance .ditu{
		width: 100%;
		height: 480px;
		padding-bottom: 10px;
		background: #fff;
	}
	.distance .ditu img{
		width: 100%;
		height: 100%;
	}
	.distance h3{
		height: 70px;
		background: #ebf2fe;
		font-weight: normal;
		font-size: 30px;
		color: #659cff;
		line-height: 70px;
		text-align: center;
		letter-spacing: 2px;
	}
	.distance .anchorBL a,.distance .BMap_cpyCtrl{
		display: none;
	}
</style>