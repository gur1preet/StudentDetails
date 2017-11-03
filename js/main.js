let nameN = [];
let rollNo = [];
let passoutYear = [];
let stream = [];
let index=0;

function submitDetails(){
    nameN.push(document.getElementById("formName").value);
    rollNo.push(document.getElementById("formRollNO").value);
    passoutYear.push(document.getElementById("formPassoutYear").value);
    stream.push(document.getElementById("formStream").value);


    let tableBody = document.getElementById("tableBody");

    let nodeCheck = document.createElement("input");
    nodeCheck.id = "checkbox" + index;
    nodeCheck.type = "checkbox";
    nodeCheck.classname = "checkBox";

    let tdSN = document.createElement("td");
    let tdName = document.createElement("td");
    let tdRollNO = document.createElement("td");
    let tdStream = document.createElement("td");
    let tdPassoutYear = document.createElement("td");;
    let tdSelect = document.createElement("td");
    var tr = document.createElement("tr");
    tr.classname = "rowData";

    tdSN.appendChild(document.createTextNode(index+1));
    tr.appendChild(tdSN);
    tdName.appendChild(document.createTextNode(nameN[index]));
    tr.appendChild(tdName);
    tdRollNO.appendChild(document.createTextNode(rollNo[index]));
    tr.appendChild(tdRollNO);
    tdStream.appendChild(document.createTextNode(stream[index]));
    tr.appendChild(tdStream);
    tdPassoutYear.appendChild(document.createTextNode(passoutYear[index]));
    tr.appendChild(tdPassoutYear);
    tdSelect.appendChild(nodeCheck);
    tr.appendChild(tdSelect);
    tableBody.appendChild(tr);
    index++;
}

function editDetails(){

}

function deleteDetails() {
    let tableBody = document.getElementById("tableBody");
    let tr = document.getElementsByClassName("rowData");
    let ch = document.getElementsByClassName("checkBox");
    let count = 0;

    for (let x=0;x<ch.length; x++){
        if(ch[x].checked){
            tableBody.removeChild(tr[x],1);
            nameN.splice(x,1);
            rollNo.splice(x,1);
            passoutYear.splice(x,1);
            stream.splice(x,1);
            x=-1;
            count++;
        }
    }
}

function validate() {

}
