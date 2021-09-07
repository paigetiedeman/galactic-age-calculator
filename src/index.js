import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/Age.js';

//WIP
$(document).ready(function() {
  $("age-form").submit(function(event) {
    event.preventDefault();
    const ageInput = $("#age").val();
    const age = new Age(inputAge, lifeExpect);
    $(".earth").html(ageInput);
  })
})