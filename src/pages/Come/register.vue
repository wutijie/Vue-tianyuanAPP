<template>
	<div class="register">
		<img class="bac" src="../../assets/imgs/back.jpg"/>
		<Header bol="true">
			<img @click="fang" slot="left" class="leftImg" src="../../assets/imgs/fanhuide.png"/>
		</Header>
		<div class="di">
			<h3>注册</h3>
			<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
				<el-form-item prop="phone">
					<el-input placeholder="请输入手机号码" type="text" v-model="ruleForm2.phone" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item prop="pass">
					<el-input placeholder="请输入密码" type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item prop="checkPass">
					<el-input placeholder="请确认密码" type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item class="bian" prop="yanzhengma">
					<el-input placeholder="验证码" type="text" v-model="ruleForm2.yanzhengma" auto-complete="off"></el-input>
					<span class="yzm" @click="btnma">获取验证码</span>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm2')">立即注册</el-button>
				</el-form-item>
				<el-form-item>
					<el-button class="deng" @click="denglu">已有账户，直接登录</el-button>
				</el-form-item>
			</el-form>
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
			var bac=document.getElementsByClassName("bac")[0];
			bac.style.width=document.documentElement.clientWidth+'px';
			bac.style.height=document.documentElement.clientHeight+'px';
		},
		data() {
			var validatePass1 = (rule, value, callback) => {
				console.log(value)
				var re1=/^1[3|4|5|8][0-9]\d{8}$/;
				if(value === '') {
					callback(new Error('请输入手机号码'));
				} else if(!re1.test(value)){
					callback(new Error('请填写正确的手机号码'));
				}else {
					callback();
					this.keys=value;
				}
			};
			var validatePass = (rule, value, callback) => {
				var re1=/^[\x21-\x7E]{6,20}$/;
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {
					if(this.ruleForm2.checkPass !== '') {
						this.$refs.ruleForm2.validateField('checkPass');
					}else if(!re1.test(value)){
						callback(new Error('6-20个大小写英文字母、符号或数字的组合'));
					}
					callback();
					this.values=value;
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.ruleForm2.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			var validatePass3 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入验证码'));
				} else if(value!=this.yzma) {
					callback(new Error('验证码错误'));
				} else {
					callback();
				}
			};
			return {
				ruleForm2: {
					phone:'',
					pass: '',
					checkPass: '',
					yanzhengma:''
				},
				rules2: {
					phone: [{
						validator: validatePass1,
						trigger: 'blur'
					}],
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					yanzhengma: [{
						validator: validatePass3,
						trigger: 'blur'
					}]
				},
				yzma:'',
				keys:'',
				values:''
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						sessionStorage.setItem(this.keys,this.values);
						zhanghao.push(
							{username:this.keys,passwords:this.values}
						);
						this.$notify.success({
					        title: 'tianyuan！',
					        message: '注册成功',
					        showClose: false
				        });
						this.$router.push('/login');
						console.log(zhanghao);
//						this.$router.params.k=this.keys;
//						this.$router.params.v=this.values;
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			denglu(){
				this.$router.push('/login');
			},
			fang(){
				this.$router.push('/home');
			},
			btnma(){
				var btna=document.querySelector(".bian span");
				var numb=0;
				var timers;
				if(btna.innerHTML=='获取验证码'){
					clearInterval(timers);
					var numc=30;
					numb=parseInt(Math.round(Math.random()*8999)+1000);
					this.$notify.success({
				        title: '验证码',
				        message: numb,
				        showClose: true,
				        duration:6000
			        });
					console.log(numb);
					this.yzma=numb;
					timers=setInterval(function(){
						numc--;
						if(numc<0){
							btna.innerHTML='获取验证码';
							return;
						}
						btna.innerHTML=numc+'s';
					},1000);
				}
			}
		}
	}
</script>

<style>
	.register .bac{
		position: fixed;
		top: 0;
		z-index: -1;
	}
	.register{
		width: 100%;
		padding: 88px 0;
		position: relative;
		z-index: 99;
		/*background-image: url(../../assets/imgs/back.jpg)!important;*/
	}
	.register .di{
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
	.register .di h3{
		font-size: 38px;
		font-weight: normal;
		text-align: center;
		margin-top: 85px;
	}
	.register .el-form{
		text-align: center;
		margin-top: 35px;
	}
	.register .el-input{
		width: 535px;
	}
	.register .el-input input{
		height: 70px;
		border: none;
		border-bottom: 1px solid #e5e5e5;
		font-size: 24px;
		border-radius: 0;
		background: none;
		margin-top: 32px;
	}
	.register .el-form-item__error{
		font-size: 18px;
		padding-left: 60px;
	}
	.register .el-input__suffix{
		font-size: 30px;
		height: 70px;
		margin-top: 32px;
	}
	.register .el-input__suffix i{
		line-height: 70px;
	}
	.register .yzm{
		display: inline-block;
		width: 142px;
		height: 56px;
		border: 1px solid #e5e5e5;
		border-radius: 50px;
		font-size: 24px;
		color: rgba(0,0,0,0.3);
		text-align: center;
		line-height: 56px;
		float: right;
		position: absolute;
		bottom: 4px;
		right: 60px;
	}
	.register .bian{
		text-align: left;
		margin-left: 60px;
	}
	.register .bian .el-form-item__error{
		padding-left: 0;
	}
	.register .bian .el-input__suffix{
		left: -110px;
	}
	.register .bian input{
		width: 226px;
	}
	.register .el-form-item__content button{
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
	.register .deng{
		margin-top: 24px!important;
		background: #fff!important;
		color: rgba(0,0,0,0.6)!important;
		border: 1px solid #b2b2b2!important;
	}
	.el-notification h2,
	.el-notification p{
		font-size: 24px;
	}
	/*.register .el-notification{
		width: 80%;
	}
	.register .el-notification.right{
		left: 50%;
		margin-left: -40%;
	}*/
</style>