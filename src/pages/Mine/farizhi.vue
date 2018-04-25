<template>
	<div class="farizhi">
		<div class="dvdv">
			<Header txt="发表日志">
				<img @click="fang" slot="left" class="leftImg" src="../../assets/imgs/fanhuide.png"/>
			</Header>
			<div class="top"></div>
			<div class="title">
				<span>标题 : </span>
				<input type="text" />
			</div>
			<div class="contents">
				<span>内容 : </span>
				<textarea></textarea>
			</div>
			<div @click="fabiao($event)" class="submit">发表</div>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/header'
	
	export default {
		components:{
			Header
		},
		mounted:function(){
			var bac=document.getElementsByClassName("farizhi")[0];
			bac.style.width=document.documentElement.clientWidth+'px';
			bac.style.height=document.documentElement.clientHeight+'px';
		},
		methods:{
			fang(){
				this.$router.push('/mine/rizhi');
			},
			fabiao(ev){
				console.log(ev.path);
				console.log(ev.path[1].children[2].lastChild.value);
				console.log(ev.path[1].children[3].lastChild.value);
				var titles=ev.path[1].children[2].lastChild.value;
				var contes=ev.path[1].children[3].lastChild.value;
				var d=new Date();
				var time=d.getFullYear()+' - '
						+format(d.getMonth()+1)+' - '
						+format(d.getDay())+' 星期 '
						+formatWeek(d.getDay())+' '
						+format(d.getHours())+':'
						+format(d.getMinutes())+':'
						+format(d.getSeconds());
//				var time=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
				console.log(time);
				function format(v){
					return v<10?'0'+v:v;
				}
				function formatWeek(v){
					return ['日','一','二','三','四','五','六'][v];
				}
				if(!titles=="" && !contes==""){
					rizhis.unshift(
						{titles:titles,contes:contes,time:time}
					);
					console.log(rizhis);
					this.$notify.success({
				        title: 'tianyuan！',
				        message: '发表成功',
				        showClose: false
			        });
					this.$router.push('/mine/rizhi');
				}else{
					if(titles==""){
						this.$notify({
				        	title: 'NO！',
				        	type: 'warning',
					        message: '请输入标题',
					        showClose: false
				        });
					}else{
						this.$notify({
				        	title: 'NO！',
				        	type: 'warning',
					        message: '请输入内容',
					        showClose: false
				        });
					}
				}
			}
		}
	}
</script>

<style>
	.farizhi{
		background: #F5F8FF;
		position: relative;
		z-index: 14;
	}
	.farizhi .dvdv{
		padding: 0 50px;
	}
	.farizhi .title{
		height: 80px;
		line-height: 80px;
		background: #fff;
		margin: 0 auto;
		border-radius: 15px;
		box-shadow: 0 8px 20px rgba(156,179,252,0.4);
		color: rgba(0,0,0,0.6);
		margin-top: 20px;
		position: relative;
		font-size: 28px;
	}
	.farizhi .title span{
		position: absolute;
		left: 5%;
	}
	.farizhi .title input{
		width: 100%;
		height: 100%;
		outline: 0;
		font-size: 28px;
		border: none;
		text-indent: 4em;
	}
	.farizhi .contents{
		height: 400px;
		line-height: 80px;
		background: #fff;
		margin: 0 auto;
		border-radius: 15px;
		box-shadow: 0 8px 20px rgba(156,179,252,0.4);
		color: rgba(0,0,0,0.6);
		margin-top: 20px;
		position: relative;
		font-size: 28px;
	}
	.farizhi .contents span{
		position: absolute;
		left: 5%;
		top: 10px;
		line-height: 50px;
	}
	.farizhi .contents textarea{
		width: 90%;
		height: 80%;
		outline: 0;
		border: none;
		font-size: 28px;
		padding: 5%;
		padding-top: 8%;
		text-indent: 2em;
		line-height: 50px;
	}
	.farizhi .submit{
		height: 80px;
		line-height: 80px;
		background: #a2a2fc;
		margin: 0 auto;
		border-radius: 15px;
		box-shadow: 0 8px 20px rgba(156,179,252,0.4);
		color: rgba(0,0,0,0.6);
		margin-top: 40px;
		font-size: 30px;
		color: #fff;
		text-align: center;
	}
	.farizhi .submit:hover{
		background: #9CB3FC;
	}
</style>