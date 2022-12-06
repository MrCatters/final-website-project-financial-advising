$(document).ready(function () {
    $("#stock-button").click(function (e) {
        e.preventDefault();
        var stock = $("#stock-input").val();
        formGraph(stock);
    });
});

function formGraph(stock) {
    let url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&outputsize=compact&apikey=KL9FQTDP913ZAZ41"
    $.getJSON(url, {
        symbol: stock
    }).done(function (data) {
        if (Object.keys(data)[0] != "Meta Data") {
            alert("Invalid stock symbol or expired API key \n Please try again");
        }

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
        var day = dates[0].substring(0, dates[0].indexOf(" "));
        for (let i = 0; i < dates.length; i++) {
            let dateReduced = dates[i].substring(dates[i].indexOf(" ") + 1, dates[i].length);
            let data = [];
            data.push(dateReduced);
            data.push(Number(prices[i]));
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
    });
};