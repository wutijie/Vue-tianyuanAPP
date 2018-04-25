<template>
	<div class="minepart">
		<div class="imgdv">
			<slot name="lefimg"></slot>
		</div>
		<div class="rigdv">
			<slot name="rigp1"></slot>
			<slot name="rigp2"></slot>
			<slot name="rigp3"></slot>
			<p slot="rigp4" class="p4">
				<span><span><img src="../assets/imgs/minezan.png"/></span><slot name="rigp4i1"></slot></span>
				<span><span><img src="../assets/imgs/minexing.png"/></span><slot name="rigp4i2"></slot></span>
				<span><span><img src="../assets/imgs/minepinglun.png"/></span><slot name="rigp4i3"></slot></span>
			</p>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.minepart{
		width: 100%;
		height: 224px;
		background: #fff;
		padding: 20px 0;
		margin-top: 10px;
	}
	.minepart .imgdv{
		width: 250px;
		height: 225px;
		border-radius: 15px;
		overflow: hidden;
		float: left;
		margin-left: 50px;
		margin-right: 26px;
	}
	.minepart .imgdv img{
		width: 100%;
		height: 100%;
	}
	.minepart .rigdv{
		width: 55%;
		float: left;
	}
	.minepart .rigdv .p1{
		font-size: 24px;
		color: rgba(0,0,0,0.9);
		margin-top: 20px;
	}
	.minepart .rigdv .p2{
		font-size: 20px;
		line-height: 46px;
	}
	.minepart .rigdv .p3{
		font-size: 22px;
		color: rgba(0,0,0,0.7);
	}
	.minepart .rigdv .p4{
		font-size: 16px;
		margin-top: 30px;
		color: rgba(0,0,0,0.7);
	}
	.minepart .rigdv .p4 span span{
		margin-right: 5px;
	}
	.minepart .rigdv .p4 span i{
		margin-right: 40px;
	}
</style>