<template>
	<div>
		<div :class="{headerWrap : true, green : bol}">
			<span>{{ txt }}</span>
			<slot name="left"></slot>
			<slot name="right"></slot>
			<slot name="search"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props:['txt','bol']
	}
	
</script>

<style>
	.headerWrap{
		width: 100%;
		height: 88px;
		text-align: center;
		line-height: 88px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 14;
		background: #9CB3FC;
		font-size: 32px;
		color: #fff;
	}
	.green{
		background: transparent;
	}
	.headerWrap img{
		width: 42px;
		height: 40px;
		position: absolute;
	}
	.headerWrap .rightImg{
		top: 50%;
		margin-top: -20px;
		right: 30px;
	}
	.headerWrap .leftImg{
		top: 50%;
		margin-top: -20px;
		left: 30px;
	}
	.headerWrap .search .searchBig{
		width: 66%;
		position: relative;
		margin: 0 auto;
		border: 1px solid transparent;
		margin-top: -4px;
	}
	.headerWrap .search input{
		width: 100%;
		height: 50px;
		border-radius: 40px;
		border: none;
		text-indent: 8em;
		background: #FFFFFF;
		color: rgba(0,0,0,0.4);
		outline: 0;
		font-size: 20px;
	}
	.headerWrap .search img{
		position: absolute;
		top: 50%;
		/*left: 27%;*/
		left: 130px;
		margin-top: -7px;
		width: 22px;
		height: 22px;
	}
	.headerWrap .search span{
		display: inline-block;
		height: 84px;
		color: #fff;
		font-size: 30px;
		margin: 0 100px;
		letter-spacing: 2px;
	}
	.headerWrap .search .activespan{
		border-bottom: 4px solid #fff;
	}
</style>