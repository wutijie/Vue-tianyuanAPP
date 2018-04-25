<template>
	<div class="tuijianpart">
		<div class="dv01">
			<p>
				<slot name="painum"></slot>
				<slot name="tui01spa"></slot>
				<el-rate v-model="value1" disabled :colors="['#9CB3FC', '#9CB3FC', '#9CB3FC']"></el-rate>
			</p>
		</div>
		<div class="dv02">
			<slot name="tui02img"></slot>
			<!--<slot></slot>-->
		</div>
		<div class="dv03">
			<slot name="paip1"></slot>
			<slot name="paip2"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				value1:5
			}
		}
	}
</script>

<style>
	.tuijianpart{
		height: 335px;
		background: #fff;
		margin-top: 10px;
		padding: 0 26px;
	}
	.tuijianpart .dv02{
		height: 250px;
		border-radius: 15px;
		overflow: hidden;
		margin: 0 auto;
	}
	.tuijianpart .dv02 img{
		width: 100%;
		height: 100%;
	}
	.tuijianpart .dv01 p{
		font-size: 28px;
		line-height: 70px;
		margin-left: 32px;
		color: #251a1d;
	}
	.tuijianpart .dv01 p .numimg{
		vertical-align: text-bottom;
		margin-left: -30px;
	}
	.tuijianpart .dv03 .pp01{
		font-size: 22px;
		color: #4c4c4c;
		margin-top: 14px;
		margin-bottom: 8px;
	}
	.tuijianpart .dv03 .pp02{
		font-size: 22px;
		color: rgba(76,76,76,0.5);
	}
	.tuijianpart .dv03 .pp02 img{
		width: 26px;
		height: 26px;
		vertical-align: text-bottom;
	}
	.tuijianpart .el-rate{
		float: right;
	}
	.tuijianpart .el-rate i{
		font-size: 26px;
		line-height: 70px;
	}
</style>