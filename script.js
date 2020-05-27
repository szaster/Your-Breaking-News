var apiKey = "Wnzr87egH7NGFAHMg3rOj8yG4AgnCejd";

var rapidApiKey = "0deb5d185fmshde18b9f954e9815p1515bcjsnf6dbc546835f";

$(document).ready(function () {
    //TODO Setup variabes here

    console.log("js");
    var search = $("#search");
    var searchSubmit = $("#searchSubmit");
    var searchClear = $("#searchClear");

    //Jquery datePicker function to generate a plugin calendar
    var startDate = $("#beginDate").datepicker();
    var endDate = $("#endDate").datepicker();



    searchSubmit.on("click", function (event) {
        console.log(search.val());
        getNYTarticles(search.val());
        getHoaxyNews(search.val());
        getBingNews(search.val());
    });



});

function getHoaxyNews(val) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://api-hoaxy.p.rapidapi.com/articles?sort_by=relevant&use_lucene_syntax=true&query=${val}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "api-hoaxy.p.rapidapi.com",
            "x-rapidapi-key": "0deb5d185fmshde18b9f954e9815p1515bcjsnf6dbc546835f"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

}

function getBingNews(val) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/?q=${val}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "microsoft-azure-bing-news-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "0deb5d185fmshde18b9f954e9815p1515bcjsnf6dbc546835f"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

function getNYTarticles(val) {
    var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${val}&api-key=${apiKey}`;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (data) {
        console.log(data);
        var docs = data.response.docs;
        for (var i = 0; i < docs.length; i++) {
            var newHeadLine = $("<a>");
            newHeadLine.addClass(
                "waves-effect waves-light waves-effect btn btn-large indigo"
            );
            newHeadLine.attr("href", docs[i].web_url);
            newHeadLine.text(docs[i].headline.main.slice(0, 25) + "...");
            $("#headLine").append(newHeadLine);

            console.log(docs[i]);
        }

        //Adding to the html
        var newHeadLine = $("<a>");
        newHeadLine.addClass(
            "waves-effect waves-light waves-effect btn btn-large indigo"
        );
        newHeadLine.attr("id", "articleSection");
        $("#headLine").append(newHeadLine);


    });
}