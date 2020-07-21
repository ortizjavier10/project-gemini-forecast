/* JS for historypage.html */
var launchHistoryContainer = document.querySelector('.past-launches');

function datePicker() {
    var searchYear = document.querySelector("#yearpicker").value;

    fetch('https://api.spacexdata.com/v3/launches/past?launch_year=' + searchYear)
    .then(function(response) {
        return response.json();
    })

    .then(function(response) {
       
     console.log(searchYear);
     console.log(response);
    
        for (var i=0; i < 25; i++) {
            var launchDiv = document.createElement('div')
            // set classes
            launchDiv.classList = 'launch-div col s12 red lighten-1 white-text z-depth-3'

            // set mission name and flight number values
            var launchName = response[i].mission_name
            var flightNumber = response[i].flight_number
            var launchDate = response[i].launch_date_local
            var payloadType = response[i].rocket.second_stage.payloads[0].payload_type
            var launchDetails = response[i].details
            var missionPatch = response[i].links.mission_patch

            //create an image element
            var patchImg = document.createElement('img')
            patchImg.innerHTML = '';
            patchImg.classList = 'mission-patch'
            patchImg.setAttribute('src', missionPatch);
            launchDiv.appendChild(patchImg);

            // create an h5 element
            var missionInfo = document.createElement('h5')
            // set text context
            missionInfo.innerHTML = "Mission Name : <span class='span-input'>" 
            + launchName + "</span><br /> SpaceX Flight Number: <span class='span-input'>" 
            + flightNumber + "</span><br /> Launch Date: <span class='span-input'>" 
            + launchDate + "</span> <br /> Payload Type: <span class='span-input'>" 
            + payloadType + "</span><br /> Launch Details: <span class='span-input'>"
            + launchDetails + "</span>"
            // set class 
            missionInfo.classList = 'mission-title'
            // append to container
            launchDiv.appendChild(missionInfo); 




            launchHistoryContainer.appendChild(launchDiv)
        }
      
    })
    
}

// var resetPage = function(
//     document.getElementById("resetBtn")
//     reset()
// )
function pageReset() {
    document.getElementsByClassName("launch-div").reset();
}
