//fetching the data
const getData = async () => {
  let response = await fetch("https://www.scorebat.com/video-api/v1/");
  let data = await response.json();
  console.log(data);

  return data;
};

//function to remove the duplicate name
const createDropDown = (data) => {
  let arr = [];
  data.forEach((item) => {
    if (!arr.includes(item.title)) {
      arr.push(item.title);

      let a = document.querySelector("#video");

      let option = document.createElement("option");
      option.innerHTML = item.title;
      option.value = item.title;
      a.appendChild(option);
    }
  });
  return arr;
};



//fuction to add event listener
const setEventListeners = (data) => {
  const selectBox = document
    .querySelector("#video")
    .addEventListener("change", (event) => {
     
      console.log(event);
      const dropdown = event.target.value;

      const filteredVideo = data.filter((item) => {
        return dropdown === item.title;
      });
      console.log(filteredVideo);

      const iframe = document.querySelector("#iframe");

      const videos = filteredVideo[0].videos;
      videos.forEach(
        (video) => (iframe.innerHTML += filteredVideo[0].videos[0].embed)
      );
    });
};

//controller function to wait for the fetch data then excute the other functions
const controller = async () => {
  const data = await getData();

  console.log(data);

  createDropDown(data);
  setEventListeners(data);
};

controller();
