//info page
//console.log(data);

// function for creating table
createTable = (data) => {
  let table = document.querySelector("#table");
  table.innerHTML = "";

  data.forEach((ele) => {
    let row = document.createElement("tr");
    table.appendChild(row);

    let column = document.createElement("td");
    column.innerHTML = ele.title;
    row.appendChild(column);

    let column2 = document.createElement("td");
    column2.innerHTML = ele.url;
    row.appendChild(column2);

    let column3 = document.createElement("td");
    column3.innerHTML = ele.date;
    row.appendChild(column3);
  });
};
createTable(data);



//function to filter the data
const filterData = () => {
  
  let currentValue = document.querySelector("#football").value;
  let file = data.filter((ele) => {
    return ele.competition.name === currentValue;
  });
  
  createTable(file);
};

const cardList = document.querySelector("#card-list");
const selectBox = document.querySelector("#football").addEventListener("change", filterData);



//function to remove the duplicate name
function removeDuplicates(data) {
  let arr = [];
  data.map((x) => {
    if (!arr.includes(x.competition.name)) {
      arr.push(x.competition.name);

      let a = document.querySelector("#football");

      let option = document.createElement("option");
      option.innerHTML = x.competition.name;
      option.value = x.competition.name;
      a.appendChild(option);
    }
  });
  return arr;
}

console.log(removeDuplicates(data));


