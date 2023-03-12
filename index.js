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
      
        <div class="card" style="width:18rem;  margin-right: 10px;">
      <img src="${country.flags.png}" class="card-img-top" style="width:20px;height:20px;">
      <div class="card-body" style="background-color:#FFDAB9;">
        <h3 class="card-title" style="color:#800000	 ;font-size:25px; font-weight:bold">${country.name.common}</h3>
        <p><span style="font-weight:bold;color:	#B22222;">Capital</span>    :${country.capital} </p>
        <p> <span style="font-weight:bold;color:#B22222	;">Currencies:</span> ${curr}</p>
        <p> <span style="font-weight:bold;color:#B22222;">Borders:</span>  ${country.borders} </p>
        
        <p><span style="font-weight:bold;color:	#B22222;">Languages</span>  :${languages}</p>
        
        <a href="#" class="btn btn-primary" id="clickme"  style=" background: linear-gradient(to bottom right, #EF4765, #FF9A5A)";>Exchange to Dollar</a>
      </div>
      </div>
     
      `;
    //------------------------------------------------------------
    document.getElementById("body").style.fontFamily = "Serif";
    document.getElementById("mainDiv").appendChild(newcard);

    //EXCHANGE TO DOLLARS BUTTON -- FUNCTION 
    document.getElementById("clickme").onclick = function () {
      var URL = "https://api.fastforex.io/fetch-once?from='+curr+'&to=USD&api_key=7a785b182a-abb4c70d1a-rrd9c1"
      fetch(URL)
        .then(response => response.json())
        .then(currency => {
          _exchangeRate = response.result.USD;
          var p = document.createElement('p');
          p.innerHTML = _exchangeRate;
          document.getElementById("neww").appendChild(p);
         

        }
        )






    }

  })




  )