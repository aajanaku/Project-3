
var genres = [];

var prePandemicPrices = [];
var pandemicPrices = [];

data.forEach(function(item) {
    genres.push(item[0]); 

    // Pre-Pandemic Price
    prePandemicPrices.push({
        name: item[0], 
        y: item[2],    
        color: 'DeepSkyBlue' 
    });

    // Pandemic Price
    pandemicPrices.push({
        name: item[0], 
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
