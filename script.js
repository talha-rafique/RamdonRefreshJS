// ==UserScript==
// @name         Fiverr Auto Refresh
// @namespace    http://tampermonkey.net/
// @version      V1.0
// @description  this version just work on fiverr profile's dashboard page.
// @author       Talha Rafique
// @match        https://www.fiverr.com/users/talharafique462/seller_dashboard
// @exampleLink  https://www.fiverr.com/users/talharafique462/seller_dashboard
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

//calculate time
window.setInterval(function(){
        currentTime = new Date().getTime();
        remainingTime =startTime- currentTime;


//display on Page
   // var elements = document.querySelectorAll('.username-link .text-display-6 ');
   // elements.textContent = "something else";

// document.getElementsByClassName("username-link")[0].innerHTML = "remaining Time: " +millisToMinutesAndSeconds(remainingTime);

console.log("Time Remaining= "+millisToMinutesAndSeconds(remainingTime))
   
}, 1000);
