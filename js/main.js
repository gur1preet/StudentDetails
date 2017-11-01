var nameN = ["Gurpreet Singh", "Anchit Chawla"];
var rollNo = ["1510991223", "1510991223"];
var passoutYear = ["2019", "2019"];
var stream = ["CSE", "CSE"];
var index=0;

function submitDetails(){
    nameN.push(document.getElementById("formName").value);
    rollNo.push(document.getElementById("formRollNO").value);
    passoutYear.push(document.getElementById("formPassoutYear").value);
    stream.push(document.getElementById("formStream").value);
    Display();
}

function Display() {
    var nodeCheck = document.createElement("input");
    nodeCheck.id = "checkbox" + index;
    nodeCheck.type = "checkbox";
    nodeCheck.value = index;

    var tableBody = document.getElementById("tableBody");

    var tdSN = document.createElement("td");
    var tdName = document.createElement("td");
    var tdRollNO = document.createElement("td");
    var tdStream = document.createElement("td");
    var tdPassoutYear = document.createElement("td");;
    var tdSelect = document.createElement("td");
    var tr = document.createElement("tr");

    tdSN.appendChild(document.createTextNode(index+1));
    tdName.appendChild(document.createTextNode(nameN[index]));
    tdRollNO.appendChild(document.createTextNode(rollNo[index]));
    tdStream.appendChild(document.createTextNode(stream[index]));
    tdPassoutYear.appendChild(document.createTextNode(passoutYear[index]));
    tdSelect.appendChild(nodeCheck);

    tr.appendChild(tdSN);
    tr.appendChild(tdName);
    tr.appendChild(tdRollNO);
    tr.appendChild(tdPassoutYear);
    tr.appendChild(tdStream);
    tr.appendChild(tdSelect);

    tableBody.appendChild(tr);
    index++;
}

function editDetails(){

}

function deleteDetails() {

}

function validate() {

}
