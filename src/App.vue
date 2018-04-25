<template>
  <div id="app">
	  <router-view/>
	  <Tabbar></Tabbar>
  </div>
</template>

<script>
	import Tabbar from './components/tabbar.vue'
	
	export default {
	  name: 'App',
	  components: {
				Tabbar
		},
	  beforeCreate: function(){
	    this.$router.push('/register');
//	    var _this=this;
//	    setTimeout(function(){
//	    	_this.$router.push('/register');
//	    },3000)
	  }
	}
</script>

<style>
*{
	margin: 0;
	padding: ;
}
body,html{
	position: relative;
	left: 0;
}
body{
	background: #F5F8FF;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  width: 100%;
  height: 100%;
  background: #F5F8FF;
}
::-webkit-scrollbar{
	display: none;
}
input{
	padding: 0;
	margin: 0;
}
.top{
	width: 100%;
	height: 88px;
}
a{
	text-decoration: none;
	color: #000000;
}
</style>
