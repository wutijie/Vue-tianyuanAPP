<template>
	<transition name="musicmove">
		<div class="music">
			<ul>
				<li @click="fangfang">
					<i v-show="!fang">
						<img src="../../assets/imgs/bofang.png"/>
						<audio preload="true">
							<source src="../../assets/videos/TheFatRatWindfall.mp3"></source>
							不支持
						</audio>
					</i>
					<i v-show="fang">
						<img src="../../assets/imgs/zanting.png"/>
					</i>
					Dont want too long<span>Madeleine Peyroux</span>
				</li>
				<li @click="fangfang1">
					<i v-show="!fang1">
						<img src="../../assets/imgs/bofang.png"/>
						<audio preload="true">
							<source src="../../assets/videos/RADWIMPS.mp3"></source>
							不支持
						</audio>
					</i>
					<i v-show="fang1">
						<img src="../../assets/imgs/zanting.png"/>
					</i>
					Temptation<span>Dianakrall</span>
				</li>
				<li @click="fangfang2">
					<i v-show="!fang2">
						<img src="../../assets/imgs/bofang.png"/>
						<audio preload="true">
							<source src="../../assets/videos/Various.mp3"></source>
							不支持
						</audio>
					</i>
					<i v-show="fang2">
						<img src="../../assets/imgs/zanting.png"/>
					</i>
					Califomia Rain<span>Madeleine Peyroux</span>
				</li>
				<li @click="fangfang3">
					<i v-show="!fang3">
						<img src="../../assets/imgs/bofang.png"/>
						<audio preload="true">
							<source src="../../assets/videos/TheFatRatWindfall.mp3"></source>
							不支持
						</audio>
					</i>
					<i v-show="fang3">
						<img src="../../assets/imgs/zanting.png"/>
					</i>
					You are too beautifull<span>Johnny hartman</span>
				</li>
				<li @click="fangfang4">
					<i v-show="!fang4">
						<img src="../../assets/imgs/bofang.png"/>
						<audio preload="true">
							<source src="../../assets/videos/TheFatRatWindfall.mp3"></source>
							不支持
						</audio>
					</i>
					<i v-show="fang4">
						<img src="../../assets/imgs/zanting.png"/>
					</i>
					Dont want too long<span>Madeleine Peyroux</span>
				</li>
			</ul>
			<div @click="mushui" class="musicbot">
				<p style="opacity: 0.1;"><i class="el-icon-arrow-up"></i></p>
				<p style="opacity: 0.2;"><i class="el-icon-arrow-up"></i></p>
				<p style="opacity: 0.3;"><i class="el-icon-arrow-up"></i></p>
				<p style="opacity: 0.4;"><i class="el-icon-arrow-up"></i></p>
				<p style="opacity: 0.6;"><i class="el-icon-arrow-up"></i></p>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		data:function(){
			return {
				fang:false,
				fang1:false,
				fang2:false,
				fang3:false,
				fang4:false,
			}
		},
		methods:{
			mushui(){
				this.$router.push('/home');
			},
			fangfang(){
				this.fang=!this.fang;
				this.fang1=false;
				this.fang2=false;
				this.fang3=false;
				this.fang4=false;
				console.log(this._vnode.elm.firstChild.children[1].children[0].children[1])
				console.log(this._vnode.elm.firstChild.firstChild.firstChild.lastChild)
				var f=this._vnode.elm.firstChild.firstChild.firstChild.lastChild;
				if(this.fang){
					f.play();
				}else{
					f.pause();
				}
			},
			fangfang1(){
				this.fang1=!this.fang1;
				this.fang=false;
				this.fang2=false;
				this.fang3=false;
				this.fang4=false;
				console.log(this._vnode.elm.firstChild.firstChild.firstChild.lastChild)
				var f=this._vnode.elm.firstChild.children[1].children[0].children[1];
				if(this.fang1){
					f.play();
				}else{
					f.pause();
				}
			},
			fangfang2(){
				this.fang2=!this.fang2;
				this.fang1=false;
				this.fang=false;
				this.fang3=false;
				this.fang4=false;
				console.log(this._vnode.elm.firstChild.firstChild.firstChild.lastChild)
				var f=this._vnode.elm.firstChild.children[2].children[0].children[1];
				if(this.fang2){
					f.play();
				}else{
					f.pause();
				}
			},
			fangfang3(){
				this.fang3=!this.fang3;
				this.fang1=false;
				this.fang2=false;
				this.fang=false;
				this.fang4=false;
				console.log(this._vnode.elm.firstChild.firstChild.firstChild.lastChild)
				var f=this._vnode.elm.firstChild.children[3].children[0].children[1];
				if(this.fang3){
					f.play();
				}else{
					f.pause();
				}
			},
			fangfang4(){
				this.fang4=!this.fang4;
				this.fang1=false;
				this.fang2=false;
				this.fang3=false;
				this.fang=false;
				console.log(this._vnode.elm.firstChild.firstChild.firstChild.lastChild)
				var f=this._vnode.elm.firstChild.children[4].children[0].children[1];
				if(this.fang4){
					f.play();
				}else{
					f.pause();
				}
			},
		}
	}
</script>

<style>
	.music{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 88px;
		z-index: 12;
		background: rgba(0,0,0,0.7);
	}
	.music ul{
		margin-top: 32px;
		list-style: none;
	}
	.music ul li{
		color: #fff;
		font-size: 20px;
		line-height: 58px;
		padding: 0 10%;
		padding-left: 6%;
		font-weight: 100;
	}
	.music ul li img{
		margin-right: 10px;
	}
	.music ul li span{
		float: right;
		color: rgba(255,255,255,0.4);
		font-size: 14px;
		line-height: 58px;
	}
	.musicmove-enter-active,.musicmove-leave-active{
		transition: top 1.5s;
	}
	.musicmove-enter,.musicmove-leave-to{
		top: -100%;
	}
	.music .musicbot{
		text-align: center;
		color: #fff;
		font-size: 50px;
		position: absolute;
		bottom: 240px;
		left: 50%;
		margin-left: -25px;
	}
	.music .musicbot p{
		height: 36px;
	}
</style>