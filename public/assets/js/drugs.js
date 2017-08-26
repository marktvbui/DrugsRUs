// var type = 'brand_name:' //change this to either brand_name or generic_name depending on the searchto be performed.
var med = 'Tylenol'; //this is the term (brand or generic) to be searched
// var queryURL = "https://api.fda.gov/drug/label.json?api_key=KyKEcTqedZfpcgwkn5LpZryaZBCkRWJaU9215u08&search=" + type + med;
//
// // console.log(queryURL);
// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).done(function(response) {
//   // console.log(response);
//   console.log("Brand: " + response.results[0].openfda.brand_name[0]);
//   console.log("Generic: " + response.results[0].openfda.generic_name[0]);
//   console.log("Description: " + response.results[0].description[0]);
//   // console.log("Interactions: " + response.results[0].drug_interactions[0]);
//   console.log("Indication: " + response.results[0].indications_and_usage[0]);
// });

//input drug #1 into search bar and append API info to first column
$('#drug-submit').on("click", function(event){
  event.preventDefault();
  // var queryURL = "https://api.fda.gov/drug/label.json?api_key=KyKEcTqedZfpcgwkn5LpZryaZBCkRWJaU9215u08&search=" + type + med;
  var type = 'brand_name:';
  // console.log(queryURL);
  var input = $('#drug');
  var searchTerm = $(input).val();
  var med = searchTerm;
  var queryURL = "https://api.fda.gov/drug/label.json?api_key=KyKEcTqedZfpcgwkn5LpZryaZBCkRWJaU9215u08&search=" + type + med;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    // console.log(response);
    console.log("Brand: " + response.results[0].openfda.brand_name[0]);
    console.log("Generic: " + response.results[0].openfda.generic_name[0]);
    // console.log("Description: " + response.results[0].description[0]);
    // console.log("Interactions: " + response.results[0].drug_interactions[0]);
    console.log("Indication: " + response.results[0].indications_and_usage[0]);
  });
  // var text = "";
  // var input = $('#drug');
  // var textLocation = $(input).val();

  var div1 = $('<div class="test2 col-md-6">');
  div1.append("<h2>" + med + "</h2>");
  div1.append($('</div>'));
  $('.test1').append(div1);
  $("#drug").val();
});

//input drug #1 into search bar and append API info to first column
$('#drug-submit').one("click", function(event){
  event.preventDefault();

  // var text = "";
  var input = $('#drug');
  var textLocation = $(input).val().indexOf(text);

  if(textLocation === -1){
    $(input).val( $(input).val());
  }else{
    $(input).val( $(input).val().substr(0, textLocation));
  }
    $("#druginfo").show();
    $("#drugChoice").show();
    // $("#druginput1").append($("#drug").val());
    $("#druginput2").append($("#drug").val());
    $("<p>SIGN IN THROUGH GOOGLE TO COMPARE YOUR DRUG TO YOUR PRESCRIPTION!</p>").appendTo("#Content");
});

//on-click of compare button, will show interactions between the 2 drugs
$('#drugChoice').on("click", function(event){
  event.preventDefault();

  // var text = "";
  var input = $('#drug');
  var textLocation = $(input).val().indexOf(text);

  if(textLocation === -1){
    $(input).val( $(input).val());
  }else{
    $(input).val( $(input).val().substr(0, textLocation));
  }
    $("#druginfo").show();
    // $("#drugChoice").show();
    // $("#druginteractions").append($(#interaction))
});

// $("#drug-submit").
