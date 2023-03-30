
 /*Marrim te gjitha sekondat */
 function getSecondsSinceStartOfDay() {
  return new Date().getSeconds() + 
    new Date().getMinutes() * 60 + 
    new Date().getHours() * 3600;
}



/* Marrim kendin per akrepin e sekondave*/
getSecondsAngle=(s)=>{
  var h=Math.floor((s/3600))  //oret
  var m=Math.floor((s/60)%60) //minutat
  s=s-(h*3600+m*60)   //sekondat
  return(((360*s)/60)-180)  //kendi i sekondave
}



/* Marrim kendin per akrepin e minutave*/

getMinutesAngle=(s)=>{
  var h=Math.floor((s/3600))  //oret
  var m=Math.floor((s/60)%60); //minutat
  s=s-(h*3600+m*60)   //sekondat
  var h=Math.floor((s/3600))
  m=m+s/60
  return((((360*m)/60)+180)) //kendi i minutave
}

/* Marrim kendin per akrepin e ores*/

getHoursAngle=(s)=>{
  var h=Math.floor((s/3600))
  var m=Math.floor((s/60)%60);
  s=s-(h*3600+m*60)
  h=h+m/60 + s/3600
  return((((360*h)/12)-180)) //kendi i ores

}

var hour=document.getElementById("hour")  
var minutes=document.getElementById("minutes")
var seconds=document.getElementById("seconds")

    
setInterval( function() {
  var time = getSecondsSinceStartOfDay();
  console.log(time);
  seconds=document.getElementById("seconds").style.transform=`rotate(${getSecondsAngle(time)}deg)` // rrotullimi i akrepit te sekondave
  minutes=document.getElementById("minutes").style.transform=`rotate(${getMinutesAngle(time)}deg)` // rrotullimi i akrepit te minutave
  hour=document.getElementById("hour").style.transform=`rotate(${getHoursAngle(time)}deg)` // rrotullimi i akrepit te oreve
  }, 1000);
