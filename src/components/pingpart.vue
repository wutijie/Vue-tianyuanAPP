<template>
	<div class="pingpart">
		<div class="dvimg">
			<slot name="pingimg"></slot>
		</div>
		<div class="dvrig">
			<slot name="pingp1"></slot>
			<p class="p2">用户点评 :</p>
			<slot name="pingp3"></slot>
			<p class="p4"><span>评价 : </span><el-rate v-model="value1" :colors="['#9CB3FC', '#9CB3FC', '#9CB3FC']"></el-rate></p>
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
	.pingpart{
		height: 228px;
		background: #fff;
		padding: 12px 30px;
		margin-top: 10px;
	}
	.pingpart .dvimg{
		width: 294px;
		height: 230px;
		border-radius: 15px;
		overflow: hidden;
		margin-right: 22px;
		float: left;
	}
	.pingpart .dvimg img{
		width: 100%;
		height: 100%;
	}
	.pingpart .dvrig{
		width: 54%;
		float: left;
	}
	.pingpart .dvrig .p1{
		font-size: 28px;
		color: #251a1d;
		margin-bottom: 20px;
		margin-top: 4px;
	}
	.pingpart .dvrig .p2{
		font-size: 28px;
		color: rgba(37,36,39,0.5);
		line-height: 40px;
	}
	.pingpart .dvrig .p3{
		font-size: 24px;
		color: rgba(37,36,39,0.5);
	}
	.pingpart .dvrig .p4{
		font-size: 28px;
		color: #251a1d;
		margin-top: 20px;
		height: 38px;
	}
	.pingpart .dvrig .p4 span{
		float: left;
		line-height: 38px;
	}
	.pingpart .el-rate{
		float: left;
		margin-left: 10px;
	}
	.pingpart .el-rate i{
		font-size: 26px;
		line-height: 38px;
	}
</style>