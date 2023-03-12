fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => countries.forEach(country => {
    //A DIV FOR EACH CARD
    var newcard = document.createElement('div');
    newcard.setAttribute("id", "neww");
    //var styleDiv=`border: 1px solid black;
    //border-radius: 2px;`
    //document.getElementById("neww").style=styleDiv;

    //STORING THE CURRENCIES OF EACH COUNTRY IN AN ARRAY CURR
    var curr = [];
    if (country.currencies) {
      Object.keys(country.currencies).forEach(x => { curr.push(x); })
    }

    //STORING THE LANGUAGES OF EACH COUNTRY IN ARRAY LANGUAGES
    if (country.languages) {
      var languages = [];
      Object.keys(country.languages).forEach(x => { languages.push(x); })
      
    }
    //---------------------------------------------------------
    newcard.innerHTML = `
      
        <div class="card" style="width:18rem;  margin-right: 10px; margin-bottom:10px; border:2px solid brown; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
      <img src="${country.flags.png}" class="card-img-top" style="width:285px;height:200px;">
      <div class="card-body" style="background-color:#FFDAB9; height:20rem;">
        <h3 class="card-title" style="color:#800000	 ;font-size:25px; font-weight:bold">${country.name.common}</h3>
        <p><span style="font-weight:bold;color:	#B22222;">Capital</span>    :${country.capital} </p>
        <p> <span style="font-weight:bold;color:#B22222	;">Currencies:</span> ${curr}</p>
        <p> <span style="font-weight:bold;color:#B22222;">Borders:</span>  ${country.borders} </p>
        
        <p><span style="font-weight:bold;color:	#B22222;">Languages</span>  :${languages}</p>
        
        <a href="https://www.google.com/search?q=${country.name.common}+traditional+food&rlz=1C1BNSD_enLB986LB986&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiN8v2bkNb9AhWDTqQEHQVSCfsQ_AUoAXoECAEQAw&biw=1536&bih=746&dpr=1.25" class="btn btn-primary" id="clickme"  style=" background: linear-gradient(to bottom right, #EF4765, #FF9A5A)";>Traditional Dishes</a>
      </div>
      </div>
     
      `;
    //------------------------------------------------------------
    document.getElementById("body").style.fontFamily = "Serif";
    document.getElementById("mainDiv").appendChild(newcard);

    //EXCHANGE TO DOLLARS BUTTON -- FUNCTION 
    






    

  })




  )