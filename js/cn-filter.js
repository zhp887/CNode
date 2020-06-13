Vue.component('cn-filter',{
	props:{
		list:{
			type:Array,
			required:true
		},
		value:{
			type:String,
			required:false,
			default:''
		}
	},
	template:`
	<div class='content_list'>
		<ul>
			<li
			 v-for='cate in list'
			 :key='cate.id'
			 v-text='cate.title'
			 :class='{"on":cate.tab == value}'
			 @click='$emit("input",cate.tab)'
			>
			</li>
		</ul>
	</div>
	`
})