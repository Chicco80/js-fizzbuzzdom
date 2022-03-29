
//      <div class="row">
//      <div class="col-12 col-sm-6 col-md-4 col-lg-2">
//          <div class="box">
//              pippo
//          </div>

//      </div>
//  </div>

const app = document.getElementById("app");
const row = document.createElement("div");
row.setAttribute("class", "row");// la metto fuori perche e una sola



  let ripetizioni = 100;

   for ( let i = 1; i <=100; i++){
// creo colonna con classi
      const col = document.createElement("div");
      col.setAttribute("class", "col-12 col-sm-6 col-md-4 col-lg-2 gy-4");

      // creo box con classi
      const box = document.createElement("div");
      box.setAttribute("class","box");
      let valore;

      

      if ((i % 3 == 0) && ( i % 5 == 0)){
      console.log("fizzbuzz");
      valore = "fizzbuzz";
    
     
      

   } else if (i % 3 == 0){
      console.log("fizz");
      valore = "fizz";

   } else if ( i % 5 == 0){
      console.log("buzz");
      valore = "buzz";



      
   } else {
      console.log (i);
      valore = i;

      


   }
   box.innerHTML = valore;
   box.classList.add(valore);
    col.append(box);
    row.append(col);
}
    app.append(row);














    

