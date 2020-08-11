"use strict"

// random number gen Math.random();
function numOfGuests(min , max){
  return Math.ceil(Math.random() * (max - min) + min)
}
//Store Hours var nameArr = []
var storeHoursArr = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
//  console.log(storeHoursArr[i], sales(guesttest, 61.2));
//func equation calculate guests multiplied by average cookie sale 
function sales(guestsPerHour, avgCookieSale) {
  return guestsPerHour * avgCookieSale;
} 
function hourlySales(min, max, avgCookieSale){
for (var i = 0; i < 14; i++) {
  var seaCalc = numOfGuests(min, max)
   console.log (sales (seaCalc, avgCookieSale))}}
//cookies purchased each hour by store
var Seattle = {
  min: 23,
  max: 65,
  avgCookieSale: 6.3,
}
function hourlySales(min, max, avgCookieSale){
  for (var i = 0; i < 14; i++) {
    var tokyoCalc = numOfGuests(min, max)
     console.log (sales ( tokyoCalc, avgCookieSale))}}
  //cookies purchased each hour by store
var Tokyo = {
  min: 3,
  max: 24,
  avgCookieSale :1.2,
}
function hourlySales(min, max, avgCookieSale){
  for (var i = 0; i < 14; i++) {
    var dubaiCalc = numOfGuests(min, max)
     console.log (sales ( dubaiCalc, avgCookieSale))}}
var Dubai = {
  min: 11,
  max: 38,
  avgCookieSale: 3.7,
}
function hourlySales(min, max, avgCookieSale){
  for (var i = 0; i < 14; i++) {
    var parisCalc = numOfGuests(min, max)
     console.log (sales ( parisCalc, avgCookieSale))}}
var Paris = {
  min: 20,
  max: 38,
  avgCookieSale: 2.3,
}
function hourlySales(min, max, avgCookieSale){
  for (var i = 0; i < 14; i++) {
    var limaCalc = numOfGuests(min, max)
     console.log (sales ( limaCalc, avgCookieSale))}}
var Lima = {
  min: 2,
  max: 16,
  avgCookieSale: 4.6,
}
