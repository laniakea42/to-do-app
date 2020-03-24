new Vue({
	el: '#app',
	data: {
		currentTask: '',
		editValue: '', 
		targeted: 0,
		tasks: [
			{
				text: 'click if completed',
				isCompleted: false,
				isEditing: false,
			},
			{
				text: 'pet all the goggies',
				isCompleted: false,
				isEditing: false,
			},
			{
				text: 'right click for menu',
				isCompleted: true,
				isEditing: false,
			},
			{
				text: 'learn Vue.js',
				isCompleted: false,
				isEditing: false,
			}
		]
	},
	methods: {
		addTask: function() {
			this.tasks.push({
				text: this.currentTask,
				isCompleted: false,
				isEditing: false,
			}),
			this.currentTask = '';
		},

		removeTask: function(taskText) {
			if (taskText) {
				this.tasks = this.tasks.filter(task => {
				return task.text !== taskText;	
				})
			} else {
				targeted.parentNode.remove();
				targeted = null;
			}
		},

		tasksGetter: function () {
			return this.tasks;
		},

		changeEditing: function(taskText) {
			if (taskText) {
				this.editValue = taskText;
				this.tasks = this.tasks.map(task => {
					if (task.text === taskText) {
						task.isEditing = !task.isEditing;
					}
					return task;
				})
			} 
		},

		editTask: function(taskText) {
			this.tasks = this.tasks.map(task => {
				if (task.text === taskText) {
					task.isEditing = !task.isEditing;
					task.text = this.editValue;
				}
				return task;
			})
		},

		showContextMenu: function() {
			targeted = event.target;
			event.preventDefault();
			let menu = document.getElementById("context-menu");
			menu.style.visibility = "hidden";
			menu.style.display = "block";
			menu.removeAttribute("style");
			menu.style.left = (event.pageX) + "px";
			menu.style.top = (event.pageY) + 'px';
			menu.classList.add('active');   
		},

		hideContextMenu: () => {
   			document.getElementById("context-menu").classList.remove('active');
		}
	}
})
