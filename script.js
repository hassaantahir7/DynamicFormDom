document.getElementById("addEvent").onclick = function(x)
{

    var eventName = document.getElementById("eventName").value;
    var mail = document.getElementById("mail").value;
    var fee = document.getElementById("fee").value;
    var studentName= document.getElementById("studentName").value;
    var contact = document.getElementById("contact").value;
                


    var table = document.getElementById("myTable");
    var row = table.insertRow();
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = eventName;
    cell2.innerHTML = mail;
    cell3.innerHTML = fee;
    cell4.innerHTML = studentName;
    cell5.innerHTML = contact;
    cell6.innerHTML = ` <a onclick="onRemove(this)" style = "text-decoration: underline; color:red; cursor:pointer;" >Remove</a> `;
}

function onRemove(t) {
    var row = t.parentElement.parentElement;
    document.getElementById("myTable").deleteRow(row.rowIndex);
    }

document.getElementById("submit").onclick = function(x)
{
    document.location.reload();
    alert("Submitted!");
}

document.getElementById("clear").onclick = function(x)
{
    document.location.reload();
}