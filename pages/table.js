function createTable(data) {
    let table = document.getElementById("property-table");
    table.innerHTML = "";
    let tBody = document.createElement("tBody");
    let th;
    let td;
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    th = document.createElement("th");
    th.innerHTML = "Neighborhood";
    tr.appendChild(th);
  
    th = document.createElement("th");
    th.innerHTML = "Year";
    tr.appendChild(th);
  
    th = document.createElement("th");
    th.innerHTML = "Amount";
    tr.appendChild(th);
  
    thead.appendChild(tr);
    table.appendChild(thead);
  
    data.forEach((item) => {
      tr = document.createElement("tr");
      td1 = document.createElement("td");
      td1.innerHTML = item.neighborhood;
      tr.appendChild(td1);
  
      td2 = document.createElement("td");
      td2.innerHTML = item.year;
      tr.appendChild(td2);
  
      td3 = document.createElement("td");
      td3.innerHTML = item.amount;
      tr.appendChild(td3);
  
      tBody.appendChild(tr);
    });
    table.appendChild(tBody);
  }