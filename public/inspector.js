var holder;
var moreTable;
var tableSize;
let radiusConvert;

var radius = document.getElementById("myRange").value;
radiusConvert = radius * 1609.34


function loadData() {

    var catChoices = document.getElementsByName("category");
    var radius = document.getElementById("myRange").value;

    // radiusConvert = radius * 1609.34

    for(i = 0; i < catChoices.length; i++){
        if(catChoices[i].checked){
            category = catChoices[i].value;
            console.log(category)
            console.log(radius)
        }
    }

    if((radius === "3") && (category === "all")){
        allData()
    }
    else{
        sortedData(radius,category)
    }
}

function allData(){
    tableSize = 5;
    fetch('/api')
        .then(res => res.json())
        .then(res => {
            holder = res;
            console.log(res); // logging step to check what we got
            return res["data"];
        })
        .then(res => {

            //get list of categories
            // cate = []
            // for(i=0; i<res.length; i++){
            //     if(!cate.includes(res[i].category)){
            //         cate.push(res[i].category)
            //     }
            // }
            // console.log("cate")

            text = "<table border><tr><th>Name</th><th>Address</th><th>Category</th><th>Location</th>"
            text = text + "<th>Proper Hand Washing</th><th>Proper Sewage Disposal</th><th>Rodent and Insects</th></tr>"

            for(i = 0; i<tableSize; i++){
                text = text + "<tr><td>" 
                + res[i].name + "</td><td>" 
                + res[i].address_line_1 + "</td><td>" 
                + res[i].category + "</td><td>" 
                    if (res[i].geocoded_column_1 !== undefined){
                    text = text + res[i].geocoded_column_1.coordinates[1] + ", " + res[i].geocoded_column_1.coordinates[0] + "</td><td>";
                    }
                    else{
                    text = text + "N/A, N/A</td><td>";
                    }
                text = text + res[i].proper_hand_washing  + "</td><td>"
                + res[i].proper_sewage_disposal  + "</td><td>"
                + res[i].rodent_and_insects  + "</td></tr>"
            }

            moreTable = text
            text = text + "</table>";

            return text;
        })
        .then(text => {
            document.querySelector(".content").innerHTML = text;
            return text;
        })
        .then(text => document.getElementById("more").id = "show");
       
    // fetch('/')
    // .then(res => res.json())
    // .then(res => console.log(res)); 
    
    // fetch('/user')
    // .then(res => res.json())
    // .then(res => console.log(res));
}

function sortedData(radius, category){
    tableSize = 5;

    fetch('/api')
        .then(res => res.json())
        .then(res => {
            sorted = []
            for(i = 0; i < res["data"].length; i++){
                if(res["data"][i].category == category){
                    sorted.push(res["data"][i])
                }
            }
            console.log(sorted)
            holder = res;
            return sorted
        })
        .then(sorted => {
            // holder = sorted;

            text = "<table border><tr><th>Name</th><th>Address</th><th>Category</th><th>Location</th>"
            text = text + "<th>Proper Hand Washing</th><th>Proper Sewage Disposal</th><th>Rodent and Insects</th></tr>"

            if(tableSize > sorted.length){
                tableSize = sorted.length
            }

            for(i = 0; i < tableSize; i++){
                text = text + "<tr><td>" 
                + sorted[i].name + "</td><td>" 
                + sorted[i].address_line_1 + "</td><td>" 
                + sorted[i].category + "</td><td>" 
                    if (sorted[i].geocoded_column_1 !== undefined){
                    text = text + sorted[i].geocoded_column_1.coordinates[1] + ", " + sorted[i].geocoded_column_1.coordinates[0] + "</td><td>";
                    }
                    else{
                    text = text + "N/A, N/A</td><td>";
                    }
                text = text + sorted[i].proper_hand_washing  + "</td><td>"
                + sorted[i].proper_sewage_disposal  + "</td><td>"
                + sorted[i].rodent_and_insects  + "</td></tr>"
            }

            moreTable = text
            text = text + "</table>";

            return text;
        })
        .then(text => {
            document.querySelector(".content").innerHTML = text;
            return text;
        })
        .then(text => document.getElementById("more").id = "show");
}

function more(){
    newTableSize = tableSize + 5

    if(newTableSize > holder["data"].length){
        newTableSize = holder["data"].length
    }

    for(i = tableSize; i< newTableSize; i++){
        moreTable = moreTable + "<tr><td>" 
            + holder["data"][i].name + "</td><td>" 
            + holder["data"][i].address_line_1 + "</td><td>" 
            + holder["data"][i].category + "</td><td>" 
                if (holder["data"][i].geocoded_column_1 !== undefined){
                moreTable = moreTable + holder["data"][i].geocoded_column_1.coordinates[1] + ", " + holder["data"][i].geocoded_column_1.coordinates[0] + "</td><td>";
                }
                else {
                moreTable = moreTable + "N/A, N/A</td><td>";
                }
            moreTable = moreTable + holder["data"][i].proper_hand_washing  + "</td><td>"
            + holder["data"][i].proper_sewage_disposal  + "</td><td>"
            + holder["data"][i].rodent_and_insects  + "</td></tr>"
    }

    tableSize = tableSize + 5
    document.querySelector(".content").innerHTML = moreTable + "</table>"
}

var x = document.getElementById("location");
var lat;
var long;

function map(){
    console.log("location being acquired");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Location: " + position.coords.latitude + ", " + position.coords.longitude;
    lat = position.coords.latitude;
    long = position.coords.longitude;

    console.log(lat, long)

    var mymap = L.map('mapholder').setView([lat, long], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZnVvMDAxIiwiYSI6ImNrM3oxaW1qbjAzY2IzcG84bjJwNm4zOGwifQ.JpTWYlpv-vKaYI-iJbmH0A', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken: 'pk.eyJ1IjoiZnVvMDAxIiwiYSI6ImNrM3oxaW1qbjAzY2IzcG84bjJwNm4zOGwifQ.JpTWYlpv-vKaYI-iJbmH0A'
    }).addTo(mymap);

    console.log(radiusConvert)

    var marker = L.marker([lat, long]).addTo(mymap);
    marker.bindPopup("<b>You</b>").openPopup();

    var circle = L.circle([lat, long], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: radiusConvert
    }).addTo(mymap);

}