renderFromJson('employees', 'listEmployees');
renderFromJson('projects', 'listProjects');

function renderFromJson(file, selector) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        jsonList = JSON.parse(xhttp.response);
        console.log('response ', jsonList);
        renderTable(jsonList, selector);
        var spinner = document.getElementsByClassName('spinner-donut')
        if (spinner.length > 0)
            {
                spinner[0].className = '';
            }
    }
  };
  xhttp.open("GET", "http://localhost:6060/api/" + file + ".json", true);
  xhttp.send();
}

function renderTable(jsonList, selector) {
    var tr, td;
    var table = document.getElementById(selector);
    for(i=0; i < jsonList.length; i++) {
        tr = document.createElement('tr');
        if(i%2 == 1){
            tr.className = "pure-table-odd";
        }
        for(var key in jsonList[i]) {
            td = document.createElement('td');
            td.innerText = jsonList[i][key]; 
            tr.appendChild(td);
        }
        td = document.createElement('td');
        td.innerHTML = '<button><i class="fa fa-plus-circle" aria-hidden="true"></i></button><button><i class="fa fa-trash" aria-hidden="true"></i></button>';
        tr.appendChild(td);
        table.appendChild(tr);
    }
}


function showModal(){
    var modal = document.getElementById('modal-toggle');
    modal.checked = true;
}
