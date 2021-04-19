function mySearch(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("meetName");
    filter = input.value.toUpperCase();
    table = document.getElementById("meetingTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        console.log(td);
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}
function searchBetween(){
    var from, to, input, td, tr, i, table;
    input =document.getElementById("meetName");
    table= document.getElementById("meetingTable");
    tr=table.getElementsByTagName("tr");
    from = document.getElementById("from");
    to=document.getElementById("to");
    from=from.value;
    to=to.value;
    from= new Date(from[0]+from[1]+from[2]+from[3],from[5]+from[6],from[8]+from[9]);
    to= new Date(to[0]+to[1]+to[2]+to[3],to[5]+to[6],to[8]+to[9]);
    for(i=0;i<tr.length;i++){
        td=tr[i].getElementsByTagName("td")[3];
        if(td){
            td=td.textContent||td.innerText;
            var d=new Date(td[6]+td[7]+td[8]+td[9],td[3]+td[4],td[0]+td[1]);
            if(d>from&&d<to)
                tr[i].style.display="";
            else
                tr[i].style.display = "none";
        }
    }
}

function addRow(){
    var table = document.getElementById("meetingTable").getElementsByTagName('tr')[0];;
    let newRow = table.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    let tr=table.getElementsByTagName("tr");
    cell1.innerHTML = tr.length;
    cell2.innerHTML = document.getElementById("name").value;
    cell3.innerHTML = document.getElementById("people").value;
    cell4.innerHTML = document.getElementById("date").value;
    cell5.innerHTML = document.getElementById("start").value;
    cell6.innerHTML = document.getElementById("end").value;
    cell7.innerHTML = <img onclick="deleteRow(this)" src="img/remove.svg"></img>;
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("meetingTable").deleteRow(i);
}