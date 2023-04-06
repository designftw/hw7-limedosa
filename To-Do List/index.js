export const dom = {
    tasksList: document.querySelector("#tasks_list"),
    taskTemplate: document.querySelector("#task_template"),
    doneCount: document.querySelector("#done_count"),
    totalCount: document.querySelector("#total_count"),
  };
  
  // Initialize data
  if (localStorage.tasks) {
    let tasks = JSON.parse(localStorage.tasks);
    for (let task of tasks) {
      addItem(task);
    }
  } else {
    // Add empty task bar to start 
    addItem();
  }
  
  dom.tasksList.addEventListener("keydown", (e) => {
    if (!e.target.matches("input.title")) {
      return;
    }
  
    let li = e.target.closest("li");
  
    if (e.key === "Enter" && !e.repeat) {
      addItem();
    } else if (
      e.key === "Backspace" &&
      e.target.value.length === 0 &&
      !e.repeat
    ) {
      const previousSibling = li.previousElementSibling;
      li.querySelector(".delete").click();
      focusTask(previousSibling ?? dom.tasksList.firstElementChild);
      e.preventDefault(); // prevent data corruption
    }
  });
  

  export function addItem(data = { done: false, title: "" }) {
      dom.tasksList.insertAdjacentHTML("beforeend", dom.taskTemplate.innerHTML);
    
      let element = dom.tasksList.lastElementChild;
    
      element.querySelector(".title").value = data.title;
    
      let done = element.querySelector(".done");
      done.checked = data.done;
    
      updateCounts();
      updateTotalCount(); // Add this line
      focusTask(element);
    }
    
  export function clearCompleted() {
      const doneTasks = dom.tasksList.querySelectorAll(".done:checked");
    
      for (let i = 0; i < doneTasks.length; i++) {
        const task = doneTasks[i].closest("li");
        task.parentNode.removeChild(task);
      }
    

      const tasks = getData().filter((task) => !task.done);
      localStorage.tasks = JSON.stringify(tasks);
    
      updateCounts();
      updateTotalCount();
    }
    
  dom.tasksList.addEventListener("click", (e) => {
    if (e.target.matches(".delete")) {
      const task = e.target.closest("li");
      task.remove();
      updateCounts();
    }
  });
  

  export function focusTask(element) {
    element?.closest("li")?.querySelector("input.title").focus();
  }
  
  export function getData() {
    return Array.from(dom.tasksList.children).map((element) => ({
      title: element.querySelector(".title").value,
      done: element.querySelector(".done").checked,
    }));
  }
  

  
  function updateDoneCount() {
    const doneCount = document.getElementById("done_count");
    const completedTasks = document.querySelectorAll("#tasks_list .done:checked").length;
    doneCount.innerText = completedTasks;
  }
  
  

  function updateTotalCount() {
      const totalCount = document.getElementById("total_count");
      const taskCount = document.querySelectorAll("#tasks_list li").length;
      totalCount.innerText = taskCount;
    }
    
    
    
  
  function updateCounts() {
      updateDoneCount();
      updateTotalCount();
    }
    
  
  const tasksList = document.querySelector("#tasks_list");
  let draggedTask = null;
  
  tasksList.addEventListener("dragstart", (e) => {
    draggedTask = e.target.closest("li");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", "");
  });
  
  tasksList.addEventListener("dragover", (e) => {
    e.preventDefault();
    const targetTask = e.target.closest("li");
    if (targetTask && targetTask !== draggedTask) {
      const rect = targetTask.getBoundingClientRect();
      const next = (e.clientY - rect.top) / (rect.bottom - rect.top) > 0.5;
      tasksList.insertBefore(
        draggedTask,
        next ? targetTask.nextElementSibling : targetTask
      );
    }
  });
  

  tasksList.addEventListener("dragend", () => {
    draggedTask = null;
  });
  
  //Make tasks dragabble
  tasksList.querySelectorAll("li").forEach((task) => {
    task.setAttribute("draggable", true);
  });
  
  // not deleting it in local storage-- and clear completed button and add
  