
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bike } from "./bike.js";


$(document).ready(function() {
    $('#random').submit(function() {
      event.preventDefault();
      let location = $("#location").val();
      let miles = $("#miles").val();

      let bike = new Bike();
      let promise = bike.getBikeInfo(location,miles);
      // console.log(bike);

      promise.then(function(response) {
       
      let body = JSON.parse(response);
      console.log(body);
      for(let i=0 ; i< 25; i++){
        $('#output').append("<li>  " + `${body.bikes[i].manufacturer_name}` + "</li>");
      }
      })
    });
   
  });