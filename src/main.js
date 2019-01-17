
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bike } from "./bike.js";


$(document).ready(function() {
    $('#random').submit(function() {
      event.preventDefault();
      $('#output').empty();
      let location = $("#location").val();
      let miles = $("#miles").val();

      let bike = new Bike();
      let promise = bike.getBikeInfo(location,miles);
      // console.log(bike);

      promise.then(function(response) {
       
      let body = JSON.parse(response);
      console.log(body);
      for(let i=0 ; i< 25; i++){
        $('#output').append("<li>  " + `Name: ${body.bikes[i].manufacturer_name}` +  `, Bike Color: ${body.bikes[i].frame_colors}` + "</li>");
      }
      })
    });

    $('#bikeColor').submit(function() {
      event.preventDefault();
      $('#colorOutput').empty();
      let colors = $("#color").val();

      let bike = new Bike();
      let promise = bike.searchByColor(colors);
      // console.log(bike);

      promise.then(function(response) {
       
      let body = JSON.parse(response);
      console.log(body);
      for(let i=0 ; i< 25; i++){
        $('#colorOutput').append("<li>  " + `Title: ${body.bikes[i].title}` + `, Bike Color: ${body.bikes[i].frame_colors}` + "</li>");
      }
      })
    });
   
  });