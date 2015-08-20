//创建一个对象
var app = app || {};
//给当前这个对象添加一个属性
app.Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false

	}
});
