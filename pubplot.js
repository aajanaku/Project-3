<script src="data_pub(1).js"></script>

        // Extract data 
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
                type: 'column' 
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
                color: 'black' 
            }, {
                name: 'Pandemic',
                data: pandemicCounts,
                color: 'pink' 
            }],
            plotOptions: {
                column: {
                    grouping: true, 
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            exporting: {
                enabled: true 
            }
        });