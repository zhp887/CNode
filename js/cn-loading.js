Vue.component('cn-loading',{
	props:{
		show:{
			type:Boolean,
			required:false,
			default:false
		}
	},
	template:`
	<div class='loading' v-if='show'>
		<img src='./images/loading.gif' alt='加载中'/>
	</div>
	`
})