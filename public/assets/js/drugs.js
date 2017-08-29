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
  });
    $("#drugChoice").show();

});

$('#drugChoice').on("click", function(event){
  console.log('you clicked me');
  var last = searchArray.length - 1;
  var next = searchArray.length -2;
  event.preventDefault();
  $('.drugInteractions').empty();
  $.ajax({
    // data: {data:"med1_name=" + searchArray[0].brand + "med2_name=" + searchArray[1].brand},
    url: '/interactions?med1_name=' + searchArray[last].brand + "&med2_name=" + searchArray[next].brand,
    method: "GET",
    cache: false,
    error : function(request,error)
    {
      alert("Request: "+JSON.stringify(request));
    }
  }).done(function(resp){
    console.log(resp);
    var divInteractions = $('<div class="drugInteractions container ">');
    divInteractions.html("<h3 class='drugInteracts'>Interactions: "+ resp + "</h3");
    divInteractions.append('</div>');
    $('.InteractionsResults').append(divInteractions);
  });
});

function displayInfo() {
  $('.drugAPIResults').empty();

  for (i = searchArray.length -1; i > searchArray.length -3; i--) {
    var div1 = $('<div class="test2 col-md-6">');
    div1.append("<h2 class='drugBrandName'>Brand Name: " + searchArray[i].brand + "</h2>");
    div1.append("<h4 class='drugGenericName'>Generic Name: " + searchArray[i].generic + "</h4>");
    div1.append("<h4 class='drugIndications'>Indications: " + searchArray[i].Indication + "</h4>");
    div1.append($('</div>'));
    $("#drug").val('');
    $('.drugAPIResults').append(div1);
  }

};
