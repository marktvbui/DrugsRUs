//input drug #1 into search bar and append API info to first column
var searchArray = [];

$('#drug-submit').on("click", function(event){
  event.preventDefault();
  var type = 'brand_name:';
  // console.log(queryURL);
  var input = $('#drug');
  // var searchArray = [];
  var med = $(input).val();
  // var med = searchTerm;
  var queryURL = "https://api.fda.gov/drug/label.json?api_key=KyKEcTqedZfpcgwkn5LpZryaZBCkRWJaU9215u08&search=" + type + med;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    // self note...store into an array, loop through array and only show most recent 2 elements
    // for (i = searchArray.length; i > (searchArray.length - 2); i--;) {
      var brand = response.results[0].openfda.brand_name[0];
      var generic = response.results[0].openfda.generic_name[0];
      var Indication = response.results[0].indications_and_usage[0];
      searchArray.push({'brand': brand, 'generic': generic, 'Indication': Indication});
      var div1 = $('<div class="test2 col-md-6">');
      div1.append("<h2>" + brand + "</h2>");
      div1.append("<h5>" + generic + "</h5>");
      div1.append("<h5>" + Indication + "</h5>");
      // div1.append("<h2>" + brand + "</h2> <br>");s
      div1.append($('</div>'));
      $('.test1').append(div1);
      $("#drug").val('');
  });
    $("#drugChoice").show();

  // if (searchArray.length === 1) {
  //   $('.test99').empty();
  //   var button = $('<button type="button" class="interactionsButton" id="interactionsButton">Interactions?</button>');
  //   // var span = document.createElement('span');
  //   $('.test99').append(button);
  // }

});

$('#drugChoice').on("click", function(event){
  console.log('you clicked me');
  console.log(searchArray[0].brand);
  console.log(searchArray[1].brand);

  event.preventDefault();
  $.ajax({
    url: '/interactions',
    method: "GET",
    async: false
    , data: {data:"med1_name=" + searchArray[0].brand + "med2_name=" + searchArray[1].brand}
  }).done(function(data){
    console.log('hi');
    console.log(data.User.datavalues.Interactions);
    // var divInteractions = $('<div class="drugInteractions col-md-12">');
    // divInteractions.append("<h2>" + data + "</h2");
    // divInteractions.append('</div>');
    // $('.interactionsResults').append(divInteractions);
  });
});


//input drug #1 into search bar and append API info to first column
// $('#drug-submit').one("click", function(event){
//   event.preventDefault();

//   // var text = "";
//   var input = $('#drug');
//   var textLocation = $(input).val().indexOf(text);

//   if(textLocation === -1){
//     $(input).val( $(input).val());
//   }else{
//     $(input).val( $(input).val().substr(0, textLocation));
//   }
//     $("#druginfo").show();
//     $("#drugChoice").show();
//     // $("#druginput1").append($("#drug").val());
//     $("#druginput2").append($("#drug").val());
//     $("<p>SIGN IN THROUGH GOOGLE TO COMPARE YOUR DRUG TO YOUR PRESCRIPTION!</p>").appendTo("#Content");
// });

//on-click of compare button, will show interactions between the 2 drugs
// $('#drugChoice').on("click", function(event){
//   event.preventDefault();

//   // var text = "";
//   var input = $('#drug');
//   var textLocation = $(input).val().indexOf(text);

//   if(textLocation === -1){
//     $(input).val( $(input).val());
//   }else{
//     $(input).val( $(input).val().substr(0, textLocation));
//   }
//     $("#druginfo").show();
//     // $("#drugChoice").show();
//     // $("#druginteractions").append($(#interaction))
// });

// function display() {
//   // for (i = searchArray.length; i > (searchArray.length - 2); i--) {
//   $(".test1").empty();
//   // console.log(searchArray);
//   // console.log(searchArray.length);
//   if (searchArray.length === 2) {
//     console.log('hi');
//     searchArray.shift();
//         console.log(searchArray);
//       var div1 = $('<div class="test1 col-md-6">');
//       div1.append("<h2>" + searchArray[0].brand + "</h2>");
//       div1.append("<h5>" + searchArray[0].generic + "</h5>");
//       div1.append("<h5>" + searchArray[0].Indication + "</h5>");
//       div1.append($('</div>'));
//       $('.test1').append(div1);

//       console.log(searchArray[1]);
//       // var div2 = $('<div class="test2 col-md-6">');
//       div1.append("<h2>" + searchArray[1].brand + "</h2>");
//       div1.append("<h5>" + searchArray[1].generic + "</h5>");
//       div1.append("<h5>" + searchArray[1].Indication + "</h5>");
//       div1.append($('</div>'));
//       $('.test1').append(div1);
//       $("#drug").val('');

//     };


//   };

// $("#drug-submit").
