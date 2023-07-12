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
        console.log("Такой статут есть")
    } else {
        list[nameTask] = status
    }
}

addTask("write a post", "da")

changeStatus("make a bead", "no")

console.log(list)


// changeStatus("write a post", "Done")
// addTask('have a walk')
// deleteTask('have a walk')
// showList()