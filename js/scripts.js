$(document).ready(function() {
  $("#button").click(function() {
    displayPics();
  });
});

function displayPics(){

  let imagesArray = new Array();

  imagesArray = ['delivery.png', 'taproom.png'];

  let randomNum = Math.floor(Math.random()*imagesArray.length);
  let img = imagesArray[randomNum];

  $('#myImages').attr('src', 'images/'+img);
}
