<template>
	<div class="detail">
		<div v-for="i in item" :key="i.id">
			<div class="name">
				<i>{{ i.name[0] }}</i><span>{{ i.name }}</span>
			</div>
			<div class="tel">
				<a :href="'tel:' + i.tel">{{ i.tel }}</a>
			</div>
		</div>
		<div class="btns">
			<span><router-link :to="'./redact?id=' + id">编辑</router-link></span>
			<span @click='del'>删除</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'detail',
		data(){
			return {
				id:0,
				item:""
			}
		},
		methods:{
			del(){
				if(confirm('确定要删除？')){
					this.$store.state.dataList = this.$store.state.dataList.filter(i=>{
						return i.id != this.id
					})
					setTimeout(()=>{
						alert('删除成功')
						window.history.go(-1);
					},500)
				}
			}
		},
		mounted(){
			this.id = this.$route.query.id;
			this.item = this.$store.state.dataList.filter(item=>item.id == this.id);
		},
		created(){
			this.$store.state.pageStatus = ++this.$store.state.pageStatus;
			// console.log(this.$store.state.pageStatus)
		}
	}
</script>

<style scoped>
.detail{ width: 100%; }
.name{ padding: 3rem 0.4rem 0.5rem; text-align: center; background: url(../assets/bg.jpg); background-size: 100% 100%; color: #fff; display: flex; flex-direction: row; align-items: center; align-content: center; }
.name i{ width: 0.8rem; height: 0.8rem; border: 3px solid #fff; border-radius: 50%; line-height: 0.8rem; font-style: normal; font-size: 0.4rem; margin-right: 0.2rem; }
.name span{ font-size: 0.4rem; }
.tel{ font-size: 0.4rem; padding: 0.3rem; border-bottom: 1px solid #ddd;  }
.tel a{ display: block; color: #666; }
.btns{ font-size: 0; text-align: center; padding-top: 0.8rem; }
.btns span{ display: inline-block; font-size: 0.28rem; width: 1.5rem; height: 0.66rem; line-height: 0.66rem; border: 1px solid #ddd; border-radius: 0.1rem; margin: 0 0.2rem; color: #666; }
.btns a{ color: #666; }
</style>
