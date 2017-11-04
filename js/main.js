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
    nodeCheck.type = "checkbox";
    nodeCheck.classname = "ch";
    nodeCheck.name = "box"

    let tdName = document.createElement("td");
    let tdRollNO = document.createElement("td");
    let tdStream = document.createElement("td");
    let tdPassoutYear = document.createElement("td");;
    let tdSelect = document.createElement("td");
    let tr = document.createElement("tr");
    tr.ClassName = "tr";

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
    let table_Body = document.getElementById("tableBody");
    let tr = document.getElementsByClassName("tr");
    let ch = document.getElementsByName('box');
    let count = 0;

    for (let x=0;x<ch.length; x++){
        console.log("in loop");
        if(ch[x].checked){
            table_Body.deleteRow(x);
            nameN.splice(x,1);
            rollNo.splice(x,1);
            passoutYear.splice(x,1);
            stream.splice(x,1);
            x=-1;
            count++;
        }
        a++;
    }
    index -= count;
}

function validate() {

}
