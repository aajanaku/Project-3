<script src="data_pub(1).js"></script>

// Extract data for the chart
var categories = data.map(function(item) {
    return item[1]; // Category title
});
var prePandemicCounts = data.map(function(item) {
    return item[2]; // Pre-pandemic book count
});
var pandemicCounts = data.map(function(item) {
    return item[4]; // Pandemic book count
});

Highcharts.chart('container', {
    chart: {
        type: 'column' // Use column chart for comparison
    },
    title: {
        text: 'Published Books Comparison (Pre-Pandemic vs. Pandemic)'
    },
    xAxis: {
        categories: categories
    },
    yAxis: {
        title: {
            text: 'Book Count'
        }
    },
    series: [{
        name: 'Pre-Pandemic',
        data: prePandemicCounts,
        color: 'black' // Set the color of pre-pandemic bars to black
    }, {
        name: 'Pandemic',
        data: pandemicCounts,
        color: 'pink' // Set the color of pandemic bars to pink
    }],
    plotOptions: {
        column: {
            grouping: true, // Enable grouping for side-by-side bars
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    exporting: {
        enabled: true // Enable export options (e.g., download as image or PDF)
    }
});
