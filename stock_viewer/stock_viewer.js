$(document).ready(function () {
    /* On button click, get the stock symbol from the input field and pass it to the formGraph function. */
    $("input[type = 'submit']").click(function (e) {
        e.preventDefault();
        var stock = $("#stock-input").val();
        formGraph(stock);
    });
});

function formGraph(stock) {
    /* Sets the base URL for the API call. */
    let url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&outputsize=compact&apikey=KL9FQTDP913ZAZ41"
    /* Adds the stock symbol to the URL. */
    $.getJSON(url, {
        symbol: stock
    }).done(function (data) {
        /* If the API call is unsuccessful, display an error message. */
        if (Object.keys(data)[0] != "Meta Data") {
            alert("Invalid stock symbol or expired API key \n Please try again");
        }

        /* Place date and price data into individual arrays. */
        var dates = [];
        var prices = [];
        for (let key in data) {
            if (key.includes("Time Series")) {  
                for (let date in data[key]) {
                    dates.push(date);
                    prices.push(data[key][date]["4. close"]);
                }
            }
        }
        
        var dataHolder = [];
        /* Get the day the prices occurred on. */
        var day = dates[0].substring(0, dates[0].indexOf(" "));
        /* Take away the date in the data and leave the time. */
        for (let i = 0; i < dates.length; i++) {
            let dateReduced = dates[i].substring(dates[i].indexOf(" ") + 1, dates[i].length);
            let data = [];
            /* Add the time and price to the data array. */
            data.push(dateReduced);
            data.push(Number(prices[i]));
            /* 
            * Add the data array to the dataHolder array.
            * Results in a 2D array with the time and price.
            */
            dataHolder.push(data);
        }

        // Initialize the chart using anychart and jquery
        $('#container').anychart('line');
        var chart = $('#container').anychart();
        chart.title(stock);
        var firstSeries = chart.line(dataHolder);
        firstSeries.name('Price');
        chart.yAxis().title('Price');
        chart.xAxis().title('Time');
        chart.animation(true);
        
        //change the color of the text to black
        chart.title().fontColor('black');
        chart.yAxis().title().fontColor('black');
        chart.xAxis().title().fontColor('black');
        chart.xAxis().labels().fontColor('black');
        chart.yAxis().labels().fontColor('black');
    });
};