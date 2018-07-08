var ss06task;
(function (ss06task) {
    var txtTask = document.querySelector("#txtTask");
    var ulTasks = document.querySelector("#ulTasks");
    var frmTask = document.querySelector("#frmTask");
    frmTask.onsubmit = function () {
        var task = txtTask.value;
        var liTask = document.createElement('li');
        liTask.innerHTML = task;
        ulTasks.appendChild(liTask);
        txtTask.value = "";
        txtTask.focus();
        return false;
    };
})(ss06task || (ss06task = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzazEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YXNrMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLFFBQVEsQ0FrQmpCO0FBbEJELFdBQVUsUUFBUTtJQUNkLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFxQixDQUFDO0lBQ3JFLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFxQixDQUFDO0lBQ3JFLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFvQixDQUFDO0lBR3BFLE9BQU8sQ0FBQyxRQUFRLEdBQUc7UUFDZixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRXpCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFeEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU1QixPQUFPLENBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQztRQUNqQixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEIsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQyxDQUFBO0FBQ0wsQ0FBQyxFQWxCUyxRQUFRLEtBQVIsUUFBUSxRQWtCakIifQ==