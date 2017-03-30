function getPeople(p){
  for(var p=0; p < 87; p++){
  let settings = {
    url: "http://swapi.co/api/people/" + p
  }
  $.ajax(settings).done(function(result){
    console.log(result);
    console.log(result.name);
    let person = result.name;
    $('.person').append(person + '<br>');
  })
}
}

function getPersonDetail(p){
  let settings = {
    url: "http://swapi.co/api/people/" + p
  }
  $.ajax(settings).done(function(result){
    console.log(result.name);
    console.log(result.birth_year);
    console.log(result.films);
    console.log(result.species);
    console.log(result.vehicles);
    console.log(result.starships);
    let name = result.name;
    let birth_year = result.birth_year;
    let films = result.films;
    let species = result.species;
    let vehicles = result.vehicles;
    let starships = result.starships;
    $('#personDetail').append(name + '<br>');
    $('#personDetail').append(birth_year + '<br>');
    $('#personDetail').append(films + '<br>');
    $('#personDetail').append(species + '<br>');
    $('#personDetail').append(vehicles + '<br>');
    $('#personDetail').append(starships + '<br>');
  })
}

function getFilms(f){
  for(var f=0; f<7; f++){
  let settings = {
    url: "http://swapi.co/api/films/" + f
  }
  $.ajax(settings).done(function(result){
    console.log(result);
    console.log(result.title);
    let film = result.title;
    $('#film').append(film + '<br>');
  })
}
}

function getFilmDetail(f){
  let settings = {
    url: "http://swapi.co/api/films/" + f
  }
  $.ajax(settings).done(function(result){
    console.log(result.title);
    console.log(result.episode_id);
    console.log(result.opening_crawl);
    console.log(result.release_date);
    console.log(result.characters);
    let title = result.title;
    let episode_id = result.episode_id;
    let opening_crawl = result.opening_crawl;
    let release_date = result.release_date;
    let characters = result.characters;
    $('#title').append(title + '<br>');
    $('#opening_crawl').append(opening_crawl + '<br>');
    $('#release_date').append(release_date + '<br>');
    $('#characters').append(characters + '<br>');
    //slice characters later to get top 3
  })
}

function getVehicles(v){
  for(var v=0; v<39; v++){
  let settings = {
    url: "http://swapi.co/api/vehicles/" + v
  }
  $.ajax(settings).done(function(result){
    console.log(result);
    console.log(result.name);
    let vehicle = result.name;
    $('#vehicle').append(vehicle + '<br>');
  })
}
}

function getVehicleDetail(v){
  let settings = {
    url: "http://swapi.co/api/vehicles/" + v
  }
  $.ajax(settings).done(function(result){
    console.log(result.name);
    console.log(result.model);
    console.log(result.max_atmosphering_speed);
    console.log(result.vehicle_class);
    console.log(result.length);
    let name = result.name;
    let model = result.model;
    let speed = result.max_atmosphering_speed;
    let vehicle_class = result.vehicle_class;
    let length = result.length;
    $('#vehicleDetail').append(name + '<br>');
    $('#vehicleDetail').append(model + '<br>');
    $('#vehicleDetail').append(speed+ '<br>');
    $('#vehicleDetail').append(vehicle_class + '<br>');
    $('#vehicleDetail').append(length + '<br>');
  })
}


$('#characters').click(getPeople);
$('#films').click(getFilms);
$('#vehicles').click(getVehicles);
