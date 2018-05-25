<template>
	<div class="redact">
		<div class="left">
			<i>{{ name[0] }}</i>
		</div>
		<div class="right">
			<label>
				<span>名称:</span><input type="text" name="" v-model="name" />
			</label>
			<label>
				<span>号码:</span><input type="number" name="" v-model="tel" />
			</label>
		</div>
		<div class="btns">
			<span class="close" @click="cancel">
				取消
			</span>
			<span class="" @click="preserve">
				保存
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'redact',
		data(){
			return {
				id:0,
				item:"",
				name:"",
				tel:""
			}
		},
		methods:{
			preserve(){
				if(this.id != 0){
					this.$store.state.dataList.forEach(i=>{
						if(i.id == this.id){
							i.name = this.name;
							i.tel = this.tel;
							setTimeout(()=>{
								alert('保存成功')
								window.history.go(-1);
							},500)
						}
					})
				}else{
					if(this.name == ""){
						alert('请输入名称')
						return;
					}else if(this.tel == ""){
						alert('请输入电话号码')
						return;
					}else{
						this.$store.state.dataList.push({
							id:this.$store.state.dataList[this.$store.state.dataList.length - 1].id + 1,
							name: this.name,
							tel: this.tel
						})
						setTimeout(()=>{
							alert('添加成功')
							window.history.go(-1);
						},500)
					}
				}
			},
			cancel(){
				window.history.go(-1)
			}
		},
		mounted(){
			this.id = this.$route.query.id || 0;
			if(this.id != 0){
				this.item = this.$store.state.dataList.filter(item=>item.id == this.id);
				this.name = this.item[0].name;
				this.tel = this.item[0].tel;
			}
		},
		created(){
			this.$store.state.pageStatus = ++this.$store.state.pageStatus;
		}
	}
</script>

<style scoped>
	.redact{ padding: 0.3rem; display: flex; flex-direction: row; align-items: center; align-content: center; flex-wrap: wrap; }
	.redact .left{ width: 2rem; }
	.redact .left i{ display: block; margin: 0.3rem auto; width: 1rem; height: 1rem; border: 1px solid #ddd; border-radius: 50%; text-align: center; line-height: 1rem; font-style: normal; font-size: 0.5rem; }
	.redact .right{ width: 4.9rem; }
	.redact .right label{ display: block; width: 100%; margin-bottom: 0.3rem; border-bottom: 1px solid #ddd; }
	.redact .right label:last-child{ margin-bottom: 0; }
	.redact .right span{ font-size: 0.3rem; color: #999; margin-right: 0.2rem; }
	.redact .right input{ padding: 0.15rem 0.2rem; border: none; outline: none; color: #666; }
	.redact .btns{ width: 100%; font-size: 0; text-align: center; padding-top: 0.5rem; }
	.redact .btns span{ display: inline-block; font-size: 0.28rem; width: 1.5rem; height: 0.66rem; line-height: 0.66rem; border: 1px solid #ddd; border-radius: 0.1rem; margin: 0 0.2rem; color: #666; }
	.redact .btns a{ color: #666; }
</style>
