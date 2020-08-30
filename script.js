// ==UserScript==
// @name         Fiverr Auto Refresh
// @namespace    http://tampermonkey.net/
// @version      V1.0
// @description  this script can refresh web page with random timing, its usually used for remaing online on different platforms like Fiverr, UpWork
// @author       Talha Rafique
// @contact      rafique.talha@outlook.com
// @match        
// @exampleLink  
// ==/UserScript==


var maxMinutes = 5;
var startTime ;
var totalTime;
var currentTime;
var remainingTime;


totalTime = Math.floor(Math.random() * maxMinutes *60*1000);
startTime = new Date().getTime() + totalTime;

//Page refresh APi
setTimeout (function(){location.reload();},totalTime );

//convert time into minute and seconds
function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

//make div on page where display remaining time. 
var div = document.createElement("div");
div.setAttribute("id", "timerId");
div.setAttribute("class", "timerClass");

// style, set position and style to display 
var style = document.createElement("STYLE");
var value = document.createTextNode("#timerId {position: fixed;  top: 85px;  left: 0px; color: red; font-weight: bold;} .timerClass { width: 200px; height: 70px; padding-left: 20px;}");
style.appendChild(value);
document.head.appendChild(style);

//calculate time and refresh time
window.setInterval(function(){
        currentTime = new Date().getTime();
        remainingTime =startTime- currentTime;
div.innerHTML = "Auto Refresh In= " + millisToMinutesAndSeconds(remainingTime) + " ";
document.body.append(div);
}, 1000);
