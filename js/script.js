

//stampo da 1 a 100 in console

  let ripetizioni = 100;

   for ( let i = 1; i <=100; i++){
     
   console.log(i);
  }


 //stampo i multipli di 3

 

   for ( let is = 1; is <=100; is++){

    if(is % 3 == 0)
    console.log(is);

 }
  const app = document.getElementById("app");
  const fizz = document.createElement("div");
  fizz.setAttribute("class","div-3");
  app.append(fizz);
  console.log(fizz)
  fizz.innerHTML = is + "fizz";


 //dividi per 5

   for ( let i = 1; i <=100; i++){

    if(i % 5 == 0)
    console.log(i);


 }
  const secondo = document.getElementById("secondo");
  const buzz = document.createElement("div");
  buzz.setAttribute("class","div-5");
  app.append(buzz);
  console.log(buzz)
  buzz.innerHTML=  "buzz";

// divido per 3 e 5

for ( let i = 1; i <=100; i++){

   if ((i % 3 == 0) && ( i % 3 == 0))
    console.log(i);


}
const terzo = document.getElementById("terzo");
  const fizzbuzz = document.createElement("div");
  fizzbuzz.setAttribute("class","div-5-3");
  app.append(fizzbuzz);
  console.log(fizzbuzz)
  fizzbuzz.innerHTML=  "fizzbuzz";











    

