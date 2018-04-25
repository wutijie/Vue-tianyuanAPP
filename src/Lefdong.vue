<template>
	<div id="lefdong">
		<Donglef></Donglef>
	</div>
</template>

<script>
	import Donglef from './components/donglef.vue'
	
	export default {
	 	name: 'Lefdong',
	 	components:{
	 		Donglef
	 	},
	  	mounted:function(){
	  		var lefdong=document.getElementById("lefdong");
			lefdong.style.width=document.documentElement.clientWidth+"px";
			lefdong.style.height=document.documentElement.clientHeight+"px";
	  	}
	}
</script>

<style>
	#lefdong{
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
		background: -webkit-linear-gradient(#9cc5fc,#9cc5fc);
		background: -moz-linear-gradient(#a2a2fc,#9cc5fc);
		background: -ms-linear-gradient(#a2a2fc,#9cc5fc);
		background: -o-linear-gradient(#a2a2fc,#9cc5fc);
		background: linear-gradient(#a2a2fc,#9cc5fc);
	}
</style>