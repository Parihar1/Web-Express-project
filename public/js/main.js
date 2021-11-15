const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const day = document.getElementById('day');
const today_data = document.getElementById('today_data');



const getInfo = async(event) => {
    event.preventDefault();
    let cityVal= cityName.value;
    alert(cityVal);
    if(cityVal==""){
        city_Name.innerText = "Please write the name before you search";
    }else{
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&&appid=fd8549e1a53f0410fac6394c073baf09`;
        //fetch api cll
        const response =await fetch(url);
        const data = await response.json();
        const arrData = [data]

        temp.innerText = arrData[0].main.temp;
        city_name.innerText = arrData[0].name;

        const tempStatus = arrData[0].weather[0].main;
       console.log(arrData[0]);
        if (tempStatus == "Clear") {
            temp_status.innerHTML =
              "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
          } else if (tempStatus == "Clouds") {
            temp_status.innerHTML =
            "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
        } else if (tempStatus == "Rainy") {
            temp_status.innerHTML =
              "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
          } else {
            temp_status.innerHTML =
              "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
          }

        }catch{
            city_Name.innerText = "Please enter city name properly";
        }
        day.innerText =  getCurrentDay();
        today_data.innerText = getCurrentDate();
    }

}

const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
  };

  const getCurrentDate = () => {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    var now = new Date();
    var month = months[now.getMonth() + 1];
    var date = now.getDate();
    var data = date+ " " + month;
    return data;

}
submitBtn.addEventListener('click',getInfo);