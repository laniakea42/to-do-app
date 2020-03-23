new Vue({
	el: '#app',
	data: {
		currentTask: '',
		editValue: '', 
		targeted: null,
		tasks: [
			{
				text: 'find a workhorse',
				isCompleted: false,
				isEditing: false
			},
			{
				text: 'pet all goggies',
				isCompleted: true,
				isEditing: false
			},
			{
				text: 'leave a comment',
				isCompleted: true,
				isEditing: false
			},
			{
				text: 'learn Vue.js',
				isCompleted: true,
				isEditing: false
			}
		]
	},
	methods: {
		addTask: function() {
			this.tasks.push({
				text: this.currentTask,
				isCompleted: false,
				isEditing: false
			}),
			this.currentTask = '';
		},

		removeTask: function() {
			targeted.parentNode.remove();

		},


		editOnChange: function() {
			this.editValue = targeted.innerText;
			this.tasks.map(task => {
				if (task.text === targeted.innerText) {
		 			task.isEditing = !task.isEditing;
		 		};
	 		return task;
	 		})
			
		},



		editTask: function() {
			targeted.isEditing = !targeted.isEditing;
			targeted.innerText = this.editValue;
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

