console.log("connecting!...");
const $display = document.querySelector("#display");
const datos = "http://api.icndb.com/jokes/random";
const $callToAction = document.querySelector("#callToAction");


$callToAction.addEventListener("click", () => {
  getData(datos);
})

async function getData(datos){
  let joke = await fetch(datos);
  let jokeJSON = await joke.json();

  console.log(jokeJSON.value);
  $display.innerHTML = `"${jokeJSON.value.joke}"`;
}




















/*id: 1,
  title: "IM",
  year: 2008
}];*/

//"http://api.icndb.com/jokes/random";

//api_url == datos
/*
const getDatos = () => {
  return new Promise((resolve, reject) => {
    if($datos.length === 0) {
      reject(new Error("No existen datos"));
    }
    setTimeout(() => {
      resolve($datos);
    },1000);
  });
}

async function fetchingData (){
  try{
    const datosFetched = await fetch("http://api.icndb.com/jokes/random", {
    headers: {
      Accept:"application/json"
    }
  });
  } catch (err) {
    console.log(err.message);
  }
}

fetchingData();


*/

/*$(document).ready(function () {
 /* $("#callToAction").click(function (e) {
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
});*/

// fetch method print in console

/*
$("#callToAction").click(function (e) {
fetch($api_url,{
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
    console.log(JSON.parse(texto));
    //$("#display").html(`${value.joke}`);
    //display.innerHTML = JSON.stringify(texto.value);
    display.innerHTML = (texto)[1].value;

})
.catch(function(error){
    console.log(error);
})

})

/*

$(document).ready(function() {
  $("#callToAction").click(function (e) {
    e.preventDefault();
  fetch('http://api.icndb.com/jokes/random', {
  method: 'POST',
  body: JSON.stringify(data)
}
  .then(response => response.json())
  .then(data => console.log(data)))
  

  })
});
*/