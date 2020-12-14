//info page
//console.log(data);

const cardList = document.querySelector("#card-list");
const selectBox = document.querySelector("#football").addEventListener("change", filter);


// function for creating table
function createTable(data) {
  let table = document.querySelector("#table");
  table.innerHTML = ""
/*   let th = document.createElement('th');
  let th1 = document.createElement('th');
  let th2 = document.createElement('th'); */
  
   /*  th1.innerHTML = 'url'
    th2.innerHTML = 'date' */
    /* row.appendChild(th);
    row.appendChild(th1);
    row.appendChild(th2); */

  for (let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");
    table.appendChild(row);
    
    let column = document.createElement("td");
    column.innerHTML = data[i].title;
    row.appendChild(column);
  
    let column2 = document.createElement("td");
    column2.innerHTML = data[i].url;
    row.appendChild(column2);

    let column3 = document.createElement("td");
    column3.innerHTML = data[i].date;
    row.appendChild(column3);
  };
};
createTable(data);


//function to remove the duplicate name
function remove_duplicates_name(data) {
  let seen = {};
  let array = [];
  for (var i = 0; i < data.length; i++) {
    if (!(data[i].competition.name in seen)) {
      array.push(data[i].competition.name);
      seen[data[i].competition.name] = true;

      let a = document.querySelector("#football");

      let option = document.createElement("option");
      option.innerHTML = data[i].competition.name;
      option.value = data[i].competition.name;

      a.appendChild(option);
    }
  }
  return array;
}
console.log(remove_duplicates_name(data));



//function to filter the data
function filter() {
  let newArray = [];
  let currentValue = document.querySelector("#football").value;
 
  for (var i = 0; i < data.length; i++) {
    if (data[i].competition.name === currentValue) {
      newArray.push(data[i]);
    };
    console.log(newArray);
    createTable(newArray);
  };
};



