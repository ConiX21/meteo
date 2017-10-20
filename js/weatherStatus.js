var WeatherStatus = function () {
    function getPictureStatus(status) {
        var picture;

        switch (status) {
            case "sunny":
                picture = "assets/P1_a.png";
                break;
            case "rain":
                picture = "assets/P1_c.png";
                break;
            case "lightRain":
                picture = "assets/P2_b.png";
                break;
            case "cloudy":
                picture = "assets/P5_a.png";
                break;
            case "clearNight":
                picture = "assets/nuit_P1_a.png";
                break;
            case "rainyNight":
                picture = "assets/nuit_P2_c.png";
                break;
            case "fogNight":
                picture = "assets/nuit_P8_a.png";
                break;
        }

        return picture;
    }

    return {
        "getPictureStatus": getPictureStatus  //getPictureStatus de droite correspond au getPictureStatus nom de la fonction. Gauche clef, droit valeur
    }
}();


var WeatherVille = function () {
    function getPictureStatusVille(city) {
        var pictureVille;

        switch (city) {
            case "Nice":
                pictureVille = "assets/P1_a.png";
                break;
            case "Marseille":
                pictureVille = "assets/P1_c.png";
                break;
            case "Lyon":
                pictureVille = "assets/P2_b.png";
                break;
            case "Paris":
                pictureVille = "assets/P5_a.png";
                break;
        }

        return pictureVille;
    }
    
    return {
        "getPictureStatusVille": getPictureStatusVille
    }
}();