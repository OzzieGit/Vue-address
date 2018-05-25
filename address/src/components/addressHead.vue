<template>
	<div class="addressHead">
		<div class="back" v-if="pageStatus > 1">
			<span @click="back">返回</span>
		</div>
		<div class="title">通讯录</div>
		<div class="add" v-if="pageStatus == 1">
			<router-link to="./redact">添加</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'addressHead',
		computed:{
			pageStatus(){
				return this.$store.state.pageStatus;
			}
		},
		methods:{
			back(){
				window.history.go(-1);
			}
		}
	}
</script>

<style scoped>
	.addressHead{ width: 6.9rem; height: 0.98rem; line-height: 0.98rem; padding: 0 0.3rem; position: fixed; top: 0; left: 50%; margin-left: -3.75rem; background-color: #444; color: #fff;  }
	.addressHead .back{ float: left; }
	.addressHead .back span{ display: block; color: #fff; }
	.addressHead .title{ width: 4rem; font-size: 0.32rem; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; text-align: center; }
	.addressHead .add{ float: right; }
	.addressHead .add a{ display: block; color: #fff; }
</style>
