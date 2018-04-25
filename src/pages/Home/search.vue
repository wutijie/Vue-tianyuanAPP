<template>
	<div class="searchtop searchtop1">
		<Header>
			<img @click="fang" slot="left" class="leftImg" src="../../assets/imgs/fanhuide.png"/>
			<div slot="search" class="search">
				<div class="searchBig">
					<!--<input type="text" placeholder="请输入要搜索的内容" />-->
					<el-autocomplete v-model="state4" :fetch-suggestions="querySearchAsync" placeholder="请输入要搜索的内容" @select="handleSelect"></el-autocomplete>
					<img class="searchImg" slot="right" src="../../assets/imgs/search.png"/>
				</div>
			</div>
		</Header>
		<div class="top"></div>
		<div class="searhist">
			<p class="p1">搜索历史记录</p>
			<span>马卡龙</span>
			<span>甜品无敌大蛋糕</span>
			<span>草莓松仁千层饼</span>
			<span>冰淇淋</span>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/header'
	
	export default {
		data:function(){
			return {
				restaurants: [],
				state4: '',
				timeout: null,
			}
		},
		components:{
			Header
		},
		methods:{
			fang(){
				this.$router.push('/'+this.$router.params);
			},
			loadAll() {
				return [{
						"value": "辣椒披萨",
						"address": "长宁区新渔路144号",
						"paths": "/home/tuijian"
					},
					{
						"value": "英式炒饭",
						"address": "上海市长宁区淞虹路661号",
						"paths": "/home/canpaihang"
					},
					{
						"value": "清蒸龙虾",
						"address": "上海市普陀区真北路988号创邑金沙谷6号楼113",
						"paths": "/home/tuijian"
					},
					{
						"value": "奶油蛋糕",
						"address": "天山西路438号",
						"paths": "/home/dianping"
					},
					{
						"value": "牛奶曲奇",
						"address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101",
						"paths": "/home/canpaihang"
					},
					{
						"value": "水果沙拉",
						"address": "上海市长宁区金钟路633号",
						"paths": "/home/dianping"
					},
					{
						"value": "青椒小肉",
						"address": "上海市嘉定区曹安公路曹安路1685号",
						"paths": "/home/canpaihang"
					},
					{
						"value": "蜜汁豆饼",
						"address": "上海市普陀区同普路1435号",
						"paths": "/home/canpaihang"
					},
					{
						"value": "拼盘水果",
						"address": "上海市北翟路1444弄81号B幢-107",
						"paths": "/home/canpaihang"
					},
					{
						"value": "香橙小冰",
						"address": "上海市嘉定区新郁路817号",
						"paths": "/home/youhui"
					},
					{
						"value": "花生肉片",
						"address": "嘉定区曹安路1611号",
						"paths": "/home/youhui"
					},
					{
						"value": "玩吃蔬菜",
						"address": "嘉定区曹安公路2383弄55号",
						"paths": "/home/youhui"
					},
					{
						"value": "樱桃蛋糕",
						"address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F",
						"paths": "/home/youhui"
					},
					{
						"value": "红枣菠萝",
						"address": "上海长宁区金钟路968号9号楼地下一层",
						"paths": "/home/dianping"
					},
					{
						"value": "秘制牛肉",
						"address": "上海市长宁区天山西路119号",
						"paths": "/home/dianping"
					},
					{
						"value": "草莓牛奶",
						"address": "上海市长宁区仙霞西路",
						"paths": "/home/dianping"
					}
				];
			},
			querySearchAsync(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

				clearTimeout(this.timeout);
				this.timeout = setTimeout(() => {
					cb(results);
				}, 3000 * Math.random());
			},
			createStateFilter(queryString) {
				return(state) => {
					return(state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
			handleSelect(item) {
//				console.log(item.paths);
				this.$router.push(item.paths);
			}
		},
		mounted() {
			this.restaurants = this.loadAll();
			var bac=document.getElementsByClassName("searchtop1")[0];
			bac.style.height=document.documentElement.clientHeight+'px';
		}
	}
</script>

<style>
	.searchtop{
		padding-left: 100px;
		background: #F5F8FF;
		position: relative;
		z-index: 14;
	}
	.searchtop .searhist .p1{
		margin-top: 50px;
		margin-bottom: 30px;
		font-size: 22px;
		color: rgba(0,0,0,0.4);
	}
	.searchtop .searhist span{
		display: inline-block;
		padding: 8px 20px;
		border-radius: 12px;
		margin: 15px 10px;
		color: rgba(0,0,0,0.6);
		/*background: #9CB3FC;*/
		border: 1px solid rgba(0,0,0,0.4);
		font-size: 24px;
	}
	.searchtop .el-autocomplete{
		width: 100%;
	}
	.el-autocomplete-suggestion__wrap{
		max-height: 380px;
	}
	.el-autocomplete-suggestion__list li{
		line-height: 60px;
		font-size: 24px;
	}
</style>