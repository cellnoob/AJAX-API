console.log("connecting!...");

$(document).ready(function () {
  $("#callToAction").click(function (e) {
    e.preventDefault();
    $.getJSON(
      "http://api.icndb.com/jokes/random",
      function (data, textStatus, jqXHR) {
        console.log(data);
        console.log(textStatus);
        console.log(jqXHR);
        $("#display").html(`${data.value.joke}`);
      }
    );
  });
});

// fetch method print in console
/*fetch("http://api.icndb.com/jokes/random",{
    method: "POST",
    body:"data"
})
.then(function(response){
    if(response.ok){
        return response.text();
    }else{
        throw "Call error";
    }
})
.then(function(texto){
    console.log(texto);
})
.catch(function(error){
    console.log(error);
})


*/
