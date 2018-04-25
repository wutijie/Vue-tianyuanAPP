<template>
	<div class="shopping">
		<Header txt="我的购物车">
			<img @click="dong" slot="left" class="leftImg" src="../../assets/imgs/headerleft01.png"/>
		</Header>
		<div v-show="views" class="shopkong">
			<div class="dv101">
				<img src="../../assets/imgs/kong  gouwuche.png"/>
			</div>
			<p class="p1">购物车还是空的</p>
			<p class="p2">去看看秒杀商品吧~</p>
			<span @click="miao">去秒杀</span>
		</div>
		<div v-show="!views" class="haveshop">
			<p class="p1">山西甜缘甜食有限公司</p>
			<div v-for="(item,index) in shop" class="cendv">
				<div class="lefdvd">
					<input :checked="kongde.indexOf(item.ids)>=0" @click="onlycho(item.ids)" type="checkbox" />
					<img :src="item.imgs"/>
				</div>
				<div @mousedown="dels($event,item.ids)" class="rigdvd">
					<p class="p1">{{item.names}}</p>
					<p class="p2">浓味朱古力杯{{item.danjia}}<span class="p3">{{item.jiage}}</span></p>
					<p class="jiajian">
						<span @click="jianqu(item.jiage,item.ids)" class="spa1">-</span>
						<span class="spa2">{{item.num}}</span>
						<span @click="zengjia(item.jiage,item.ids)" class="spa3">+</span>
					</p>
				</div>
				<div @click="remove(item.ids)" class="cangdel">删除</div>
			</div>
			<div class="shopbot">
				<input id="allcho" @click="allsel" :checked="kongde.length===shop.length" type="checkbox" />
				<label for="allcho" class="sppa1">全选</label>
				<p class="p01">
					<span class="sppa2">合计 : <span>￥</span><span>{{heji}}</span></span>
					<span class="sppa3">去结算</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/header'
	
	export default {
		components:{
			Header,
		},
		data:function(){
			return {
				views:true,
				shop:[],
				heji:0,
				kongde:[],
				isCheckedAll:false,
				fo:false
			}
		},
		mounted:function(){
//			console.log(shoppings);
			this.shop=shoppings;
			console.log(this.shop);
			if(this.shop.length>0){
				this.views=false;
			}
			var bac=document.getElementsByClassName("shopping")[0];
			bac.style.width=document.documentElement.clientWidth+'px';
			bac.style.height=document.documentElement.clientHeight+'px';
		},
		methods:{
			miao(){
				this.$router.push('/home/youhui');
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
			dels(ev,val){
				this.fo=!this.fo;
				if(this.fo){
	//				console.log(ev,val);
	//				console.log(ev.path[2].style);
	//				console.log(ev.clientX);
	//				console.log(ev.view.innerWidth);
					ev.path[2].style.left="-120px";
	//				document.onmousemove=function(eve){
	//					console.log(ev.clientX);
	//					console.log(eve.clientX);
	//					console.log(eve.clientX-ev.clientX)
	//					ev.path[2].style.left=-(eve.clientX-ev.clientX)+"px";
	//				}
	//				document.onmouseup=function(){
	//					document.onmousemove=null;
	//				}
				}else{
					ev.path[2].style.left="0";
				}
			},
			remove(val){
				this.shop.splice(val,1);
				console.log(val)
				console.log(this.shop.length)
				if(this.shop.length==0){
					this.views=true;
				}
			},
			allsel(){
				this.isCheckedAll = !this.isCheckedAll
			    if (this.isCheckedAll) {
			        // 全选时
			        this.kongde = [];
			        this.shop.forEach(function (val) {
			        	this.kongde.push(val.ids)
			        	console.log(this.kongde)
			        }, this)
			    } else {
			        this.kongde = [];
			    }
			},
			onlycho(aid){
				var idIndex = this.kongde.indexOf(aid)
		        if (idIndex >= 0) {
		          // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
		          this.kongde.splice(idIndex, 1)
		        } else {
		          // 选中该checkbox
		          this.kongde.push(aid);
		          console.log(this.kongde);
		        }
			},
			zengjia(val,nums){
				this.shop[nums].num++;
//				var a=this.shop[nums].danjia.split("￥")[1];
//				this.shop[nums].jiage="￥"+parseFloat(a*this.shop[nums].num).toFixed(2);
//				console.log(a)
//				console.log(val)
			},
			jianqu(val,nums){
				this.shop[nums].num--;
//				var a=this.shop[nums].danjia.split("￥")[1];
//				this.shop[nums].jiage="￥"+parseFloat(a*this.shop[nums].num).toFixed(2);
//				console.log(a)
//				console.log(val)
				if(this.shop[nums].num<=0){
					this.shop[nums].num=0;
				}
			}
		}
	}
</script>

<style>
	.shopping{
		/*height: 900px;*/
		position: relative;
		background: #F5F8FF;
	}
	.shopping .shopkong{
		border: 1px solid transparent;
		border-top: none;
		border-bottom: none;
	}
	.shopping .shopkong .dv101{
		width: 187px;
		height: 187px;
		margin: 0 auto;
		margin-bottom: 85px;
		padding-top: 300px;
	}
	.shopping .shopkong .dv101 img{
		width: 100%;
		height: 100%;
	}
	.shopping .shopkong{
		text-align: center;
		width: 100%;
		height: 100%;
	}
	.shopping .shopkong .p1{
		font-size: 32px;
		color: #acb0ff;
	}
	.shopping .shopkong .p2{
		font-size: 20px;
		color: rgba(123,131,254,0.5);
		line-height: 60px;
	}
	.shopping .shopkong span{
		display: block;
		width: 145px;
		height: 60px;
		border: 1px solid #5281ed;
		border-radius: 6px;
		font-size: 20px;
		color: #7b83fe;
		margin: 0 auto;
		line-height: 60px;
		margin-top: 26px;
	}
	.shopping .haveshop{
		margin-top: 88px;
		margin-bottom: 192px;
		overflow: hidden;
	}
	.shopping .haveshop .p1{
		font-size: 20px;
		color: rgba(0,0,0,0.7);
		text-align: center;
		line-height: 100px;
	}
	.shopping .haveshop .cendv{
		height: 126px;
		padding: 17px 0;
		padding-left: 55px;
		background: #fff;
		margin-bottom: 20px;
		position: relative;
		left: 0;
	}
	.shopping .haveshop .cendv .lefdvd{
		position: relative;
		float: left;
		margin-right: 15px;
	}
	.shopping .haveshop .cendv .lefdvd input{
		position: absolute;
		top: 50%;
		margin-top: -12px;
		width: 24px;
		height: 24px;
	}
	.shopping .haveshop .cendv .lefdvd img{
		width: 163px;
		height: 122px;
		border: 2px solid rgba(49,20,4,0.1);
		margin-left: 40px;
	}
	.shopping .haveshop .cendv .rigdvd{
		width: 66%;
		float: left;
	}
	.shopping .haveshop .cendv .rigdvd .p1{
		font-size: 24px;
		line-height: 38px;
		text-align: left;
	}
	.shopping .haveshop .cendv .rigdvd .p2{
		font-size: 18px;
		line-height: 38px;
	}
	.shopping .haveshop .cendv .rigdvd .p3{
		font-size: 32px;
		float: right;
		margin-right: 30px;
	}
	.shopping .haveshop .cendv .rigdvd .jiajian{
		width: 116px;
		height: 32px;
		border: 1px solid #707070;
		border-radius: 10px;
		text-align: center;
		line-height: 32px;
		font-size: 24px;
		margin-top: 14px;
	}
	.shopping .haveshop .cendv .rigdvd .jiajian .spa1{
		display: inline-block;
		width: 30px;
		height: 32px;
		border-right: 1px solid #707070;
		float: left;
		line-height: 28px;
	}
	.shopping .haveshop .cendv .rigdvd .jiajian .spa3{
		display: inline-block;
		width: 30px;
		height: 32px;
		border-left: 1px solid #707070;
		float: right;
	}
	.shopping .haveshop .shopbot{
		width: 100%;
		position: fixed;
		bottom: 97px;
		height: 94px;
		background: #f5f8ff;
		line-height: 98px;
	}
	.shopping .haveshop .shopbot input{
		margin-left: 55px;
		margin-right: 15px;
		width: 24px;
		height: 24px;
		vertical-align: text-bottom;
	}
	.shopping .haveshop .shopbot .p01{
		float: right;
	}
	.shopping .haveshop .shopbot .sppa1{
		font-size: 26px;
	}
	.shopping .haveshop .shopbot .sppa2{
		font-size: 24px;
	}
	.shopping .haveshop .shopbot .sppa2 span{
		font-size: 32px;
	}
	.shopping .haveshop .cangdel{
		width: 120px;
		height: 160px;
		background: #9CB3FC;
		position: absolute;
		top: 0;
		right: -120px;
		text-align: center;
		line-height: 160px;
		color: #fff;
		font-size: 30px;
	}
	.shopping .haveshop .shopbot .sppa3{
		display: inline-block;
		margin-left: 16px;
		font-size: 30px;
		color: #fff;
		width: 183px;
		height: 94px;
		text-align: center;
		background: -webkit-linear-gradient(#9cc5fc,#9cc5fc);
		background: -moz-linear-gradient(#a2a2fc,#9cc5fc);
		background: -ms-linear-gradient(#a2a2fc,#9cc5fc);
		background: -o-linear-gradient(#a2a2fc,#9cc5fc);
		background: linear-gradient(#a2a2fc,#9cc5fc);
	}
</style>