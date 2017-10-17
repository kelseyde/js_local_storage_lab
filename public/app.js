var init = function () {
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  populate(todosArray);
}

// var populate = function (todos) {
//   for (todo of todos) {
//     addItem(todo);
//   }
// }

var populate = function() {
  var selectItem = document.querySelector("#dropdown");
  var selectOption = selectItem.options[selectItem.selectedIndex].value;
  var todoLists = document.getElementsByClassName("option");
  var todoListToDisplay = null;
  for (todoList in todoLists) {
    if(Object.keys(todoList)[0] === selectOption) {
      todoListToDisplay = todoList;
    }
  }
  for (todo of todoListToDisplay[1]) {
    addItem(todo);
  }
}



var addItem = function (item) {
  var selectItem = document.querySelector("#dropdown")
  var selectOption = selectItem.value;


  var ul = document.querySelector("#"+selectOption);
  var li = document.createElement("li");
  li.innerText = item.value;
  ul.appendChild(li);
}

var handleButtonClick = function () {
  var input = document.querySelector("#new-item");
  addItem(input);
  save(input);
  // this function needs to:
  // - get hold of the input box's value
  // - append it to the "todo-list" ul by invoking addItem()
  // - add it to local storage by invoking save()
}

var save = function (newItem) {
  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  todosArray.push(newItem);
  var jsonArrayStringThing = JSON.stringify(todosArray);
  localStorage.setItem("todo", jsonArrayStringThing);
  // this function needs to:
  // - get the data back from local storage and parse to an array
  // - add the newItem to the array
  // - stringify the updated array
  // - save it back to localstoage
}

window.addEventListener('load', init);
