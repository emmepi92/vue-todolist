Vue.config.devtools = true;
  
const add = new Vue (
    {
        el: '#app',
        data: {
            taskList: ['fare la spesa','prelevare al bancomat', 'comprare pappe a Pupi'],
            newTask: ''
        },
        mounted () {
            this.getFocus();
        },
        methods: {
            addTask: function () {
                if (this.newTask !== '') {
                    this.taskList.push(this.newTask);
                }
                this.newTask = '';
                this.getFocus();
            },
            deleteTask: function(index) {
                this.taskList.splice(index,1);
            },
            getFocus: function() {
                const element = document.getElementById('input-task');
                element.focus();
            }

        }
    }
)