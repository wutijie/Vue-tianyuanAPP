<template>
	<div class="login">
		<img class="bac" src="../../assets/imgs/back.jpg"/>
		<Header bol="true">
			<img @click="fang" slot="left" class="leftImg" src="../../assets/imgs/fanhuide.png"/>
		</Header>
		<div class="di">
			<h3>登录</h3>
			<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
				<el-form-item prop="phone">
					<el-input placeholder="请输入您的账号" type="text" v-model="ruleForm2.phone" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item prop="pass">
					<el-input placeholder="请输入您的密码" type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
				</el-form-item>
				<p class="p2"><input type="checkbox" />记住密码</p>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm2')">立即登录</el-button>
				</el-form-item>
				<el-form-item>
					<el-button class="deng" @click="zhuce">立即注册</el-button>
				</el-form-item>
			</el-form>
			<p class="p1">第三方登录</p>
			<div class="dv">
				<div>
					<img src="../../assets/imgs/qq.png"/>
					<p>QQ</p>
				</div>
				<div>
					<img src="../../assets/imgs/weibo.png"/>
					<p>微博</p>
				</div>
				<div>
					<img src="../../assets/imgs/weixing.png"/>
					<p>微信</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/header.vue'
	
	export default {
		components:{
			Header
		},
		mounted:function(){
			console.log(document.documentElement.clientWidth);
			var bac=document.getElementsByClassName("bac")[0];
			bac.style.width=document.documentElement.clientWidth+'px';
			bac.style.height=document.documentElement.clientHeight+'px';
			if(zhanghao!=''){
				console.log(zhanghao);
				this.yonghu=zhanghao;
				console.log(this.yonghu);
			}else{
				return;
			}
		},
		data() {
			var validatePass1 = (rule, value, callback) => {
				console.log(value)
				if(value === '') {
					callback(new Error('请输入手机号码'));
				} else if(value!=this.yonghu[0].username){
					callback(new Error('请填写正确的手机号码'));
				}else {
					callback();
				}
				/*if(value === '') {
					callback(new Error('请输入手机号码'));
				} else if(value==sessionStorage.getItem(this.keys)){
					callback(new Error('请填写正确的手机号码'));
				}else {
					callback();
				}*/
			};
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				}else if (value!=this.yonghu[0].passwords){
					callback(new Error('6-20个大小写英文字母、符号或数字的组合'));
				}else{
					callback();
				}
				/*if(value === '') {
					callback(new Error('请输入密码'));
				}else if(value==sessionStorage.getItem(this.values)){
					callback(new Error('6-20个大小写英文字母、符号或数字的组合'));
				}else{
					callback();
				}
				}*/
			};
			return {
				ruleForm2: {
					phone:'',
					pass: ''
				},
				rules2: {
					phone: [{
						validator: validatePass1,
						trigger: 'blur'
					}],
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}]
				},
				keyss:'',
				valuss:'',
				honghu:[]
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						sessionStorage.setItem(this.keys,this.values);
						this.$notify.success({
					        title: 'tianyuan！',
					        message: '欢迎来到甜缘',
					        showClose: false
				        });
						this.$router.push('/home');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			zhuce(){
				this.$router.push('/register');
			},
			fang(){
				this.$router.push('/home');
			}
		}
	}
</script>

<style>
	.login .bac{
		position: fixed;
		top: 0;
		z-index: -1;
	}
	.login{
		width: 100%;
		padding: 88px 0;
		position: relative;
		z-index: 99;
		/*background: url(../../assets/imgs/back.jpg);*/
	}
	.login .di{
		width: 650px;
		height: 1052px;
		background: #fff;
		margin: 0 auto;
		margin-top: 60px;
		margin-bottom: 20px;
		border-radius: 25px;
		border: 1px solid transparent;
		position: fixed;
		left: 50%;
		margin-left: -325px;
	}
	.login .di h3{
		font-size: 38px;
		font-weight: normal;
		text-align: center;
		margin-top: 85px;
	}
	.login .el-form{
		text-align: center;
		margin-top: 35px;
	}
	.login .el-input{
		width: 535px;
	}
	.login .el-input input{
		height: 70px;
		border: none;
		border-bottom: 1px solid #e5e5e5;
		font-size: 24px;
		border-radius: 0;
		background: none;
		margin-top: 32px;
	}
	.login .el-form-item__error{
		font-size: 18px;
		padding-left: 60px;
	}
	.login .el-input__suffix{
		font-size: 30px;
		height: 70px;
		margin-top: 32px;
	}
	.login .el-input__suffix i{
		line-height: 70px;
	}
	.login .el-form-item__content button{
		width: 456px;
		height: 80px;
		border-radius: 80px;
		font-size: 28px;
		color: rgba(255,255,255,0.8);
		text-align: center;
		margin-top: 104px;
		background: -webkit-linear-gradient(right,#9cc5fc,#9cc5fc);
		background: -moz-linear-gradient(right,#a2a2fc,#9cc5fc);
		background: -ms-linear-gradient(right,#a2a2fc,#9cc5fc);
		background: -o-linear-gradient(right,#a2a2fc,#9cc5fc);
		background: linear-gradient(right,#a2a2fc,#9cc5fc);
	}
	.login .deng{
		margin-top: 24px!important;
		background: #fff!important;
		color: rgba(0,0,0,0.6)!important;
		border: 1px solid #b2b2b2!important;
	}
	.login .p2{
		text-align: left;
		margin-left: 60px;
		font-size: 24px;
		color: rgba(0,0,0,0.5);
	}
	.login .p2 input{
		width: 24px;
		height: 24px;
		border-radius: 31px!important;
		outline: 0;
		vertical-align: text-bottom;
		margin-right: 13px;
	}
	.login .p1{
		font-size: 24px;
		color: rgba(0,0,0,0.5);
		text-align: center;
		line-height: 130px;
	}
	.login .dv{
		display: flex;
		justify-content: space-around;
		font-size: 24px;
		color: rgba(0,0,0,0.5);
		padding: 0 60px;
		text-align: center;
	}
</style>