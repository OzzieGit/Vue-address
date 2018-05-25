<template>
	<div class="list">
		<dl>
			<div v-for="item in list" :key='item.key'>
				<dt>{{ item.key }}</dt>
				<dd>
					<router-link v-for="i in item.nameList" :to="'./detail?key='+item.key+'&id='+i.id" :key="i.id" ><i>{{ i.name[0] }}</i><span>{{ i.name }}</span></router-link>
				</dd>
			</div>
		</dl>
		<div class="right_menu">
			<a href="" v-for="item in list" :key="item.key">{{ item.key }}</a>
		</div>
	</div>
</template>

<script>
	import Unicode from './../assets/data/unicode.json'
	export default {
		name: 'list',
		data(){
			return {
				list:[]
			}
		},
		methods:{
			operateList(){
				let key = "";
				let listItem = "";
				this.$store.state.dataList.forEach(i=>{
					if(/[a-zA-Z]/.test(i.name[0])){
						key = i.name[0].toUpperCase();
						listItem = this.list.filter(i=>i.key == key);
					}else if(/[\u4e00-\u9fa5]/.test(i.name[0])){
						let code = "\\u" + parseInt(i.name[0].charCodeAt(0),10).toString(16);
						key = Unicode.data.filter(i=>i.unicode.indexOf(code) != -1)[0].key[0].toUpperCase();
						listItem = this.list.filter(i=>i.key == key);
					}
					if(listItem.length == 0){
						this.list.push({
							"key":key,
							"nameList":[{
								"id":i.id,
								"name": i.name,
								"tel":i.tel
							}]
						})
					}else{
						for(let j = 0; j < this.list.length; j++){
							if(this.list[j].key == key){
								this.list[j].nameList.push({
									"id":i.id,
									"name": i.name,
									"tel":i.tel
								})
							}
						}
					}
					this.list.sort((a,b)=>{return a.key.localeCompare(b.key)}) //先字母排序
					this.list.forEach(i=>{
						i.nameList.sort((a,b)=>{return a.name.localeCompare(b.name)}) //名字排序
					})
				})
			}
		},
		created(){
			this.$store.state.pageStatus = 1;
			this.operateList()
		}
	}
</script>

<style scoped>
.list dt{ display: block; padding: 0.2rem 0.3rem; background-color: #eee; font-size: 0.32rem; }
.list dd a{ padding: 0 0.3rem; border-bottom: 1px solid #eee; display: flex; flex-direction: row; align-items: center; align-content: center; }
.list dd i{ font-style: normal; display: inline-block; width: 0.6rem; height: 0.6rem; border: 1px solid #ddd; border-radius: 50%; text-align: center; line-height: 0.6rem; margin-right: 0.2rem; background-color: #ddd; color: #666; }
.list dd span{ line-height: 0.98rem; color: #666; }
.right_menu{ width: 0.4rem; position: fixed; top: 0.98rem; right: 0; bottom: 0; z-index: 2; background-color: #fff; border-left: 1px solid #eee; display: -webkit-box; display: -webkit-flex; display: -moz-box; display: -ms-flexbox; display: flex;-webkit-box-pack: center;-webkit-justify-content: center;-moz-box-pack: center;-ms-flex-pack: center;justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -moz-box-align: center; -ms-flex-align: center; align-items: center; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -moz-box-orient: horizontal; -moz-box-direction: normal; -ms-flex-direction: row; flex-direction: row; }
.right_menu a{ width: 100%; text-align: center; margin-bottom: 0.1rem; color: #999; font-family: "黑体" }
.right_menu a:last-child{ margin-bottom: 0; }
</style>
