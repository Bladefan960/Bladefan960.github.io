namespace homeworkTask{
    let tblContact = document.querySelector("#tblContact") as HTMLTableElement;
    let frmContact = document.querySelector("#frmContact") as HTMLFormElement;
    let txtFirstName = document.querySelector("#txtFirstName") as HTMLInputElement;
    let txtLastName = document.querySelector("#txtLastName") as HTMLInputElement;
    let txtEmail = document.querySelector("#txtEmail") as HTMLInputElement;
    let txtPhone = document.querySelector("#txtPhone") as HTMLInputElement;
    let txtAddress = document.querySelector("#txtAddress") as HTMLInputElement;
    let txtState = document.querySelector("#txtState") as HTMLInputElement;
    


    frmContact.onsubmit = () =>{
        let firstName = txtFirstName.value;
        let lastName = txtLastName.value;
        let email = txtEmail.value;
        let phone = txtPhone.value;
        let address = txtAddress.value;
        let state = txtState.value;
        
        let row = tblContact.insertRow()
        let cell = row.insertCell();
        cell.innerHTML = firstName;
        cell = row.insertCell();
        cell.innerHTML = lastName;
        cell = row.insertCell();
        cell.innerHTML = email;
        cell = row.insertCell();
        cell.innerHTML = phone;
        cell = row.insertCell();
        cell.innerHTML = address;
        cell = row.insertCell();
        cell.innerHTML = state;

        firstName = "";
        lastName = "";
        email = "";
        phone = "";
        address = "";
        state = "";

        txtFirstName.focus();
        txtLastName.focus();
        txtEmail.focus();
        txtPhone.focus();
        txtAddress.focus();
        txtState.focus();
        return false;
    }
}