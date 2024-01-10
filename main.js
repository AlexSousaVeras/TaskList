function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');

  if (taskInput.value !== '') {
    var li = document.createElement('li');
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = '';

    // Limpar o campo de entrada
    taskInput.value = "";

    // Adicionar um botão de exclusão para cada tarefa
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Finalizada"));
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };
    li.appendChild(deleteButton);
  }
}


