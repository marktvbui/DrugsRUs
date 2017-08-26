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
      var div1 = $('<div class="test2 col-md-6">');
      div1.append("<h2>Brand Name: " + brand + "</h2>");
      div1.append("<h4>Generic Name: " + generic + "</h4>");
      div1.append("<h4>Indications: " + Indication + "</h4>");
      // div1.append("<h2>" + brand + "</h2> <br>");s
      div1.append($('</div>'));
      $('.test1').append(div1);
      $("#drug").val('');
  });
    $("#drugChoice").show();

});

$('#drugChoice').on("click", function(event){
  console.log('you clicked me');
  console.log(searchArray[0].brand);
  console.log(searchArray[1].brand);

  event.preventDefault();
  $.ajax({
    url: '/interactions',
    method: "GET",
    dataType: 'text',
    cache: false,
    async: true,
    error : function(request,error)
    {
      alert("Request: "+JSON.stringify(request));
    }
    // , data: {data:"med1_name=" + searchArray[0].brand + "med2_name=" + searchArray[1].brand}
  }).done(function(resp){
    console.log('hi');
    console.log(resp);
    // var divInteractions = $('<div class="drugInteractions col-md-12">');
    // divInteractions.append("<h2>" + data + "</h2");
    // divInteractions.append('</div>');
    // $('.interactionsResults').append(divInteractions);
  });
});

