Vue.component('cn-article',{
	props:{
		article:{
			type:Object,
			required:true
		}
	},
	computed:{
		label: function(){
			var cates = [
				{id:1,title:'全部',tab:''},
				{id:2,title:'精华',tab:'good'},
				{id:3,title:'分享',tab:'share'},
				{id:4,title:'问答',tab:'ask'},
				{id:5,title:'招聘',tab:'job'}
			]
			var ele = cates.find(ele=>ele.tab == this.article.tab)
			return ele ? ele.title : '置顶'
		},
		time:function(){
			var t = Math.round((Date.now() - Date.parse(this.article.last_reply_at)) / (1000*60*60*24))
			if (t == 0) {
				return Math.round((Date.now() - Date.parse(this.article.last_reply_at)) / (1000*60*60)) + '小时前'
			} else{
				return Math.round((Date.now() - Date.parse(this.article.last_reply_at)) / (1000*60*60*24)) + '天前'
			}
		}
	},
	template:`
	<div class="content_text clear_fix">
		<h2><a :href='"https://cnodejs.org/user/"+article.author.loginname'><img :src='article.author.avatar_url' :title='article.author.loginname' /></a></h2>
		<h3>
			<span v-text='article.reply_count'></span>/
			<em v-text='article.visit_count'></em>
		</h3>
		<h4><a v-text='label'></a></h4>
		<h5><a :href='"https://cnodejs.org/topic/"+article.id' v-text='article.title'></a></h5>
		<h6><a href='#'><img :src='article.author.avatar_url'></a><span v-text='time'></span></h6>
	</div>
	`,
})