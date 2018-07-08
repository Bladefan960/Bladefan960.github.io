namespace ss06task{
    let txtTask = document.querySelector("#txtTask") as HTMLInputElement;
    let ulTasks = document.querySelector("#ulTasks") as HTMLUListElement;
    let frmTask = document.querySelector("#frmTask") as HTMLFormElement;


    frmTask.onsubmit = () =>{
        let task = txtTask.value;

        let liTask = document.createElement('li');
        liTask.innerHTML = task;

        ulTasks.appendChild(liTask);

        txtTask.value="";
        txtTask.focus();
        return false;
    }
}