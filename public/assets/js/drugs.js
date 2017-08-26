//input drug #1 into search bar and append API info to first column
var searchArray = [];

$('#drug-submit').on("click", function(event){
  event.preventDefault();
  var type = 'brand_name:';
  var input = $('#drug');
  var med = $(input).val();
  var queryURL = "https://api.fda.gov/drug/label.json?api_key=KyKEcTqedZfpcgwkn5LpZryaZBCkRWJaU9215u08&search=" + type + med;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
      var brand = response.results[0].openfda.brand_name[0];
      var generic = response.results[0].openfda.generic_name[0];
      var Indication = response.results[0].indications_and_usage[0];
      searchArray.push({'brand': brand, 'generic': generic, 'Indication': Indication});
      displayInfo();
      $("#drug").val('');
  });
    $("#drugChoice").show();
    // displayInfo();

});

$('#drugChoice').on("click", function(event){
  console.log('you clicked me');

  event.preventDefault();
  $.ajax({
    // data: {data:"med1_name=" + searchArray[0].brand + "med2_name=" + searchArray[1].brand},
    url: '/interactions?med1_name=' + searchArray[0].brand + "&med2_name=" + searchArray[1].brand,
     // url: '/interactions',
    method: "GET",
    cache: false,
    // async: true,
    error : function(request,error)
    {
      alert("Request: "+JSON.stringify(request));
    }
  }).done(function(resp){
    console.log(resp);
    $('.drugInteractions').empty();
    var divInteractions = $('<div class="drugInteractions container ">');
    divInteractions.html("<h3>Interactions: "+ resp + "</h3");
    divInteractions.append('</div>');
    $('.InteractionsResults').append(divInteractions);
  });
});

function displayInfo() {
  $('.test1').empty();

  var last = searchArray.length - 1;
  var next = searchArray.length -2;

  var div1 = $('<div class="test2 col-md-6">');
  div1.append("<h2>Brand Name: " + searchArray[last].brand + "</h2>");
  div1.append("<h4>Generic Name: " + searchArray[last].generic + "</h4>");
  div1.append("<h4>Indications: " + searchArray[last].Indication + "</h4>");
  // div1.append("<h2>" + brand + "</h2> <br>");s
  div1.append($('</div>'));
  $("#drug").val('');
  $('.test1').append(div1);

  var div1 = $('<div class="test2 col-md-6">');
  div1.append("<h2>Brand Name: " + searchArray[next].brand + "</h2>");
  div1.append("<h4>Generic Name: " + searchArray[next].generic + "</h4>");
  div1.append("<h4>Indications: " + searchArray[next].Indication + "</h4>");
  // div1.append("<h2>" + brand + "</h2> <br>");s
  div1.append($('</div>'));
  $('.test1').append(div1);
  $("#drug").val('');
};
