//JSON
//Javascript
//Object
//Notation
var weathers = [
    {
        "city": "Nice",
        "day": new Date(Date.now()),
        "status": "sunny", //guillemets important
        "degres": 26,
        "times": [         //[] signifie tableau
            {
                "hour": "8H00",
                "status": "rain",
                "degres": 16
            },
            {
                "hour": "12H00",
                "status": "sunny",
                "degres": 28
            },
            {
                "hour": "16H00",
                "status": "sunny",
                "degres": 1
            },
            {
                "hour": "22H00",
                "status": "rain",
                "degres": 4
            }
        ],
        "wind": "180"
    },
        {
        "city": "Marseille",
        "day": new Date(Date.now()),
        "status": "rain", //guillemets important
        "degres": 42,
        "times": [         //[] signifie tableau
            {
                "hour": "8H00",
                "status": "sunny",
                "degres": 32
            },
            {
                "hour": "12H00",
                "status": "lightRain",
                "degres": 28
            },
            {
                "hour": "16H00",
                "status": "sunny",
                "degres": 34
            },
            {
                "hour": "22H00",
                "status": "rainyNight",
                "degres": 20
            }
        ],
        "wind": "10"
    },
        {
        "city": "Paris",
        "day": new Date(Date.now()),
        "status": "cloudy", //guillemets important
        "degres": 26,
        "times": [         //[] signifie tableau
            {
                "hour": "8H00",
                "status": "sunny",
                "degres": 22
            },
            {
                "hour": "12H00",
                "status": "cloudy",
                "degres": 20
            },
            {
                "hour": "16H00",
                "status": "rain",
                "degres": 18
            },
            {
                "hour": "22H00",
                "status": "rainyNight",
                "degres": 16
            }
        ],
        "wind": "0"
    },
        {
        "city": "Lyon",
        "day": new Date(Date.now()),
        "status": "rainyNight", //guillemets important
        "degres": 32,
        "times": [         //[] signifie tableau
            {
                "hour": "8H00",
                "status": "rain",
                "degres": 16
            },
            {
                "hour": "12H00",
                "status": "cloudy",
                "degres": 28
            },
            {
                "hour": "16H00",
                "status": "sunny",
                "degres": 33
            },
            {
                "hour": "22H00",
                "status": "fogNight",
                "degres": 28
            }
        ],
        "wind": "64"
    }
];
