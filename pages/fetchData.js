// function for creating table
createTable = (data) => {
  let table = document.querySelector("#table");
  table.innerHTML = "";

  data.forEach((ele) => {
    if(isInDropDown(ele) && isInDate(ele)) {
      
    let row = document.createElement("tr");
    table.appendChild(row);

    let column = document.createElement("td");
    column.innerHTML = ele.title;
    row.appendChild(column);

    let column2 = document.createElement("td");
    column2.innerHTML = ele.url;
    row.appendChild(column2);

    let column3 = document.createElement("td");
    const date = new Date(ele.date).toLocaleDateString('de');
    column3.innerHTML = date;
    row.appendChild(column3);
    }
  });
};

//fetching the data
const getData = async () => {
  let response = await fetch("https://www.scorebat.com/video-api/v1/");
  let data = await response.json();
  console.log(data);
  return data;
};



const isInDropDown = (ele) => {
    let dropDown = document.querySelector("#football").value;
    return ele.competition.name === dropDown || dropDown === 'All' ? true : false;
};


const isInDate = (ele) => {
    let calender = document.querySelector("#date").value;
    return new Date(ele.date).setHours(0,0,0,0) === new Date(calender).setHours(0,0,0,0) || !calender ? true : false;
}

//function to filter the data
const filterData = (data) => {
  let currentValue = document.querySelector("#football").value;
  console.log(currentValue)
  if(currentValue === 'default') {
      data.sort((a, b) => new Date(a) < new Date(b) ? 1: -1);
      createTable(data)
  }else{
    let filteredArr = data.filter((ele) => {
        return ele.competition.name === currentValue;
      });
      createTable(filteredArr);
  }
  
  //createTable(filteredArr);
};



//function to filter the data
const setEventListener = (data) => {
  const selectBox = document
    .querySelector("#football")
    .addEventListener("change", (e) => {
      //console.log(e)
      //filterData(data);
      createTable(data)
    });

    document.querySelector('#date').addEventListener('change', (event) => {
        console.log(event);
        createTable(data)
    })
};

//function to remove the duplicate name
const addDropDown = (data) => {
  let arr = [];
  data.map((item) => {
    if (!arr.includes(item.competition.name)) {
      arr.push(item.competition.name);

      let a = document.querySelector("#football");

      let option = document.createElement("option");
      option.innerHTML = item.competition.name;
      option.value = item.competition.name;
      a.appendChild(option);
    };
  });
  return arr;
};

//controller function to wait for the fetch data then excute the other functions
const controller = async () => {
  const data = await getData();
  console.log(data);
  createTable(data);
  filterData(data);
  addDropDown(data);
  setEventListener(data);
 
};
controller();
