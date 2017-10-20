//MUSTACHE est un moteur de template
//IndexController est une function iife
var IndexController = function (attendSonArgument) {

    var actualWeathers = weathers; //var = variable globale  ici on stock le tableau weathers dans actualWeathers
    var index = 0; //on initialise une variable "vide" en dehors d'une fct avec var pour qu'elle soit globale


    document.addEventListener("click", (evt) => {
        if (evt.target.parentNode.nodeName == "BUTTON") { 
            index = Math.round(Math.random() * (weathers.length - 1)); 
            initialize();
        }
    });


    function initialize() {
        setCity();
        setDay();
        setStatus();
    }

  
    function setCity() {
      
        var template = document.querySelector("#cityTemplate").innerHTML;
        var render = Mustache.render(template, { "city": actualWeathers[index].city }); 
        document.querySelector("div.city").innerHTML = render;

        couleurBackground(actualWeathers[index].city);
    }


    function setDay() {
        var template = document.querySelector("#dayTemplate").innerHTML;
        var render = Mustache.render(template, { "day": formatDate(actualWeathers[index].day) });
        document.querySelector("div.day").innerHTML = render;
    }

   
    function setStatus() {
        var pictureStatus = document.querySelector("#pictureStatus");
        var degres = document.querySelector("#degres");
        pictureStatus.src = WeatherStatus.getPictureStatus(actualWeathers[index].status); // 
        degres.innerText = actualWeathers[index].degres;
        setColumnsWeathers();
        setWindSpeed();
    }


    function setColumnsWeathers() {
        var template = document.querySelector("#weatherTemplate").innerHTML; //on récupére le contenu HTML du template 
        var datas = setPictureToColomnWeather(actualWeathers[index].times);
        var render = Mustache.render(template, { "temperatureLoop": datas });

        document.querySelector("div.colWeathers").innerHTML = render;
    }

    function setPictureToColomnWeather(datas) {
        var tabTimes = [];

        for (d of datas) {
            var obj = {};
            obj.status = WeatherStatus.getPictureStatus(d.status);
            obj.hour = d.hour;
            obj.degres = d.degres;
            tabTimes.push(obj);
        }
        return tabTimes;
    }

    function setWindSpeed() {
        var animation = document.querySelector("animateTransform");
        var windDiv = document.querySelector("#wind");
        var wind = actualWeathers[index].wind;
        var speedWind = "0s";

        switch (true) {
            case wind == 0:
                speedWind = ".5s";
                setColorWindTurbine("green");
                break;
            case wind > 0 && wind < 45:
                speedWind = "2s";
                setColorWindTurbine("yellowgreen");
                break;
            case wind >= 45 && wind <= 90:
                speedWind = "1.5s";
                setColorWindTurbine("orange");
                break;
            case wind > 90 && wind <= 130:
                speedWind = "1s";
                setColorWindTurbine("red");
                break;
            default:
                setColorWindTurbine("purple");
                speedWind = ".5s";
        }

        animation.attributes.repeatCount.value = (wind > 0) ? "indefinite" : 0; // ternaire
        windDiv.innerText = wind + " km/h";
        animation.attributes.dur.value = speedWind;
    }

    function setColorWindTurbine(color) {
        var allPaths = document.querySelectorAll("path");
        for (p of allPaths) {
            p.attributes.fill.value = color;
        }
    }

    function formatDate(date) {
        var options =
            {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
            };
        return date.toLocaleDateString("fr-FR", options);
    }


    function couleurBackground(ville) {
        var img;
        switch (ville.toLowerCase()) {
            case "nice":
                img = "assets/img-mobile/img_125.jpg";
                break;
            case "lyon":
                img = "assets/img-mobile/img_13.jpg";            
                break;
            case "paris":
                img = "assets/img-mobile/img_26.jpg";
                break;
            case "marseille":
                img = "assets/img-mobile/img_32.jpg";
                break;
        }
        document.body.style.backgroundImage = `url(${img})`;
    }

    return {
        "initialize": initialize 
    };


}(weathers); 



document.addEventListener("DOMContentLoaded", function () { 
    IndexController.initialize();
});