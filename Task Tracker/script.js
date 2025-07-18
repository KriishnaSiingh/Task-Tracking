let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function saveTasks() 
{
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}
function addTask() 
{
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
    if (taskText) 
        {
    tasks.push({ text: taskText, completed: false });
    input.value = "";
    saveTasks();
        }
}
function toggleComplete(index) 
{
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
}
function deleteTask(index) 
{
  tasks.splice(index, 1);
  saveTasks();
}
function displayTasks() 
{
  const todoList = document.getElementById("todoList");
  const completedList = document.getElementById("completedList");
  todoList.innerHTML = "";
  completedList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task.text;
    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";
    const completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "↩️ Undo" : "✅ Done";
    completeBtn.className = "complete-btn";
    completeBtn.onclick = () => toggleComplete(index);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.onclick = () => deleteTask(index);
    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(btnGroup);
    if (task.completed) 
        {
      completedList.appendChild(li);
        } 
    else 
    {
      todoList.appendChild(li);
    }
  });
}
window.onload = displayTasks;