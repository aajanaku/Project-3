var genres = [];

var prePandemicPrices = [];
var pandemicPrices = [];

data.forEach(function(item) {
    var genreParts = item[1].split(" / "); // Split the genre by the slash
    var genre = genreParts[2]; // Take the part before the slash

    genres.push(genre);

    // Pre-Pandemic Price
    prePandemicPrices.push({
        name: genre,
        y: item[2],
        color: 'DeepSkyBlue'
    });

    // Pandemic Price
    pandemicPrices.push({
        name: genre,
        y: item[4],
        color: 'DarkSlateBlue'
    });
});

// Create the Highcharts chart
Highcharts.chart('container', {
    title: {
        text: 'Retail Prices by Genre (Pre-Pandemic and Pandemic)'
    },
    xAxis: {
        categories: genres,
        title: {
            text: 'Genre'
        }
    },
    yAxis: {
        title: {
            text: 'Price'
        }
    },
    series: [
        {
            name: 'Pre-Pandemic Price',
            data: prePandemicPrices
        },
        {
            name: 'Pandemic Price',
            data: pandemicPrices
        }
    ]
});



