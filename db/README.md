# DrugsRUs
Restore drug interaction database.

1. login to your local mysql server
2. create a new database drugsrus_db or if you already have one use it
3. open a new terminal and navigate to the backup file (../db/drugsRus.sql)
4. run command one of the following:
  4.1 if you already have a database `mysql -uroot //database name you already have < drugsRus.sql`
  4.2 if you created a new database `mysql -uroot drugsrs_db < drugsRus.sql`

API calls:
There will be two different calls, one to the openFDA API and the other will be to our interaction database.

1. openFDA API:
  <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
  <script type="text/javascript">
    var type = 'brand_name:' //change this to either brand_name or generic_name depending on the searchto be performed.
    var med = 'Motrin'; //this is the term (brand or generic) to be searched
    var queryURL = "https://api.fda.gov/drug/label.json?api_key=KyKEcTqedZfpcgwkn5LpZryaZBCkRWJaU9215u08&search=" + type + med;
   
    // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      // console.log(response);
      console.log("Brand: " + response.results[0].openfda.brand_name[0]);
      console.log("Generic: " + response.results[0].openfda.generic_name[0]);
      console.log("Description: " + response.results[0].description[0]);
      // console.log("Interactions: " + response.results[0].drug_interactions[0]);
      console.log("Indication: " + response.results[0].indications_and_usage[0]);
    });

</script>

2. For the interactions, there is a view that joins the drugs and interactions labeled `meds_interactions` which should be treated as a regular table.  We will need to create a model for this object and refer to its fields as usual.
