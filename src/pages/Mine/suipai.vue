<template>
	<div class="suipai">
		<div class="dv">
			<div>
				<img class="ims" src="../../assets/imgs/sanfu09.jpg"/>
				<p>
					<span><img src="../../assets/imgs/minezan.png"/>55</span>
					<span><img src="../../assets/imgs/minexing.png"/>99</span>
					<span><img src="../../assets/imgs/minepinglun.png"/>66</span>
				</p>
			</div>
			<div>
				<img class="ims" src="../../assets/imgs/sanfu08.jpg"/>
				<p>
					<span><img src="../../assets/imgs/minezan.png"/>68</span>
					<span><img src="../../assets/imgs/minexing.png"/>49</span>
					<span><img src="../../assets/imgs/minepinglun.png"/>78</span>
				</p>
			</div>
		</div>
		<div class="dv">
			<div>
				<img class="ims" src="../../assets/imgs/sanfu07.jpg"/>
				<p>
					<span><img src="../../assets/imgs/minezan.png"/>64</span>
					<span><img src="../../assets/imgs/minexing.png"/>79</span>
					<span><img src="../../assets/imgs/minepinglun.png"/>95</span>
				</p>
			</div>
			<div>
				<img class="ims" src="../../assets/imgs/sanfu09.jpg"/>
				<p>
					<span><img src="../../assets/imgs/minezan.png"/>16</span>
					<span><img src="../../assets/imgs/minexing.png"/>46</span>
					<span><img src="../../assets/imgs/minepinglun.png"/>32</span>
				</p>
			</div>
		</div>
		<!--<div style="height: 98px;"></div>-->
	</div>
</template>

<script>
</script>

<style>
	.suipai .dv{
		padding: 0 25px;
		display: flex;
		justify-content: space-around;
		background: #F5F8FF;
	}
	.suipai .dv div{
		margin: 12px 25px;
		width: 100%;
		height: 360px;
		background: #fff;
		border-radius: 15px;
		overflow: hidden;
		text-align: center;
	}
	.suipai .dv div .ims{
		width: 100%;
		height: 300px;
	}
	.suipai .dv div span{
		padding: 0 16px;
		line-height: 60px;
	}
	.suipai .dv div span img{
		margin-right: 10px;
	}
</style>