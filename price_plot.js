

// Store genre label
var genres = [];

// Store Pre-Pandemic and Pandemic prices
var prePandemicPrices = [];
var pandemicPrices = [];


data.forEach(function(item) {
    genres.push(item[1]); 

    // Pre-Pandemic Price
    prePandemicPrices.push({
        name: item[1], 
        y: item[2],    
        color: 'pink' 
    });

    // Pandemic Price
    pandemicPrices.push({
        name: item[1], 
        y: item[4],    
        color: 'black' 
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
