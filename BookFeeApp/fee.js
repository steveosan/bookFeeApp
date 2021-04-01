$(document).ready(function () {
  $("button").on("click", calculate);
});

function calculate()
{
  //Gather all input

  let totalBooks = parseFloat( $("#books").val() );
  let totalMovies = parseFloat( $("#movies").val() );


  //Math...
  let totalBookFee = totalBooks * .25;
  let totalMovieFee = totalMovies * .50;

  // OUTPUT!
  $("span#bookfee").text(totalBookFee.toFixed(2));
  $("span#moviefee").text(totalMovieFee.toFixed(2));

  $(".output").show();
}

