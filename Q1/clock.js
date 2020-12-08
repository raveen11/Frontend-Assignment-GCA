 function showTime(){
  var monthsCalc = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


  var date=new Date();
   var hour=date.getHours();
   var minute=date.getMinutes();
   var sec=date.getSeconds();
   var timeAMPM="AM";
   var year=date.getUTCFullYear();
   var month=monthsCalc[date.getUTCMonth()];
   var day=date.getDate();
   var sdays=days[date.getDay()];

   if(hour==0){
     hour=12
   }
   if(hour>12){
     hour=hour-12;
     timeAMPM="PM"
   }

   var displayTime=hour + ":" +minute + ":"+sec + " "+ timeAMPM;
   var displayDate=day + " " +month + " "+year;
   
   document.getElementById("time").innerText=displayTime;
   setTimeout(showTime,1000);

   document.getElementById("date").innerText=displayDate;
   document.getElementById("days").innerText=sdays;
   
  }
  showTime();

 

  