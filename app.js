const list = {
    "create a new practice task": "In Progress", 
	"make a bed": "Done",
	"write a post": "To Do",
}

function changeStatus(nameTask, status){
    if (nameTask in list) {
        list[nameTask] = status
    } else {
        console.log("Такого статуса нету")
    }
}

function addTask (nameTask, status) {
    if (nameTask in list) {
        console.log("Такая задача есть")
    } else {
        list[nameTask] = status
    }
}

function deleteTask (nameTask) {
    if (nameTask in list) {
        delete list[nameTask]
    }
}

console.log(list)


