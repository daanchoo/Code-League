var events = [
  {
    title: "Breakfast",
    date_start: "2017-02-23T09:00:00.535Z",
    date_end: "2017-02-23T11:00:00.535Z",
    location: "Stockholm waterfront"
  },
  {
    title: "Qualifier race",
    date_start: "2017-02-23T13:00:00.535Z",
    date_end: "2017-02-23T16:00:00.535Z",
    location: "Mantorp park"
  },
  {
    title: "Dinner",
    date_start: "2017-02-23T18:00:00.535Z",
    date_end: "2017-02-23T22:00:00.535Z",
    location: "Scandic continetal"
  }
]

// alla events
"www.daniel.se/events";
// hämta lista events
$.ajax.get('/events', function(events) {
  // visa lista events
  eventsListContainer.innerHTML = 
  //for var i = 0 osv..

    <li>
      <a href="/events/{event.id}">
        <h2>{ event.title }</h2>
        <p>{ event.location }</p>
      </a>
    </li>
    <li>
      <a href="/events/{event.id}">
        <h2>{ event.title }</h2>
        <p>{ event.location }</p>
      </a>
    </li>
});



//event med id: 0
"www.daniel.se/events/0/"

// hämta eventdetaljer
$.ajax.get('/events/0/', function(event) {
  // visa eventdetaljer
  eventDetailsContainer.innerHTML = 
    <h1>{event.title}</h1>
    <span>{event.start_date}</span>
    <span>{event.end_date}</span>
    googlemaps karta med { event.location }
});


"www.daniel.se/events/0/edit/"
//visa formulär för att updatera/ändra event.
<form></form>

form.addEventListener('submit', function(e) {
  // hämta värden från formulär och skicka till ajax  update event

  $.ajax.put('/events/0/', data, function(event) {
    // visa updaterad event details.
  });
})




