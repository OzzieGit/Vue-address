let dataList = [
	{
		"id":1,
		"name":"张三",
		"tel":"1359493599"
	},{
		"id":3,
		"name":"王麻子",
		"tel":"1359493599"
	},{
		"id":30,
		"name":"杨洋",
		"tel":"1359493599"
	},{
		"id":4,
		"name":"刘波",
		"tel":"1359493599"
	},{
		"id":2,
		"name":"李啊",
		"tel":"1359493599"
	},{
		"id":5,
		"name":"赵四",
		"tel":"1359493599"
	},{
		"id":6,
		"name":"阿猫",
		"tel":"1359493599"
	},{
		"id":7,
		"name":"小黑",
		"tel":"1359493599"
	}
];
dataList = dataList.sort((a,b)=>{
	return parseInt(a.id)-parseInt(b.id)
})
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		dataList: dataList,
		pageStatus: 1
	},
	mutations:{
		sortDataList(state){
			state.dataList.sort((a,b)=>{
				return parseInt(a.id)-parseInt(b.id)
			})
		}
	}
});
export default store;