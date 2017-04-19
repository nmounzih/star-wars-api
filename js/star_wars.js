function getPeople(p){
  for(var p=0; p < 88; p++){
  let id_num = p;
  let settings = {
    url: "http://swapi.co/api/people/" + p
  }
  $.ajax(settings).done(function(result){
    let person = result.name;
    $('#characterDiv').append('<div id=' + id_num + '><a onclick="getPersonDetail('+id_num+')">' + person + '</a><br>');
    })
  }
}

function getPersonDetail(p){
  let id_num = p;
  let settings = {
    url: "http://swapi.co/api/people/" + p
  }
  $.ajax(settings).done(function(result){
    let name = result.name;
    let birth_year = result.birth_year;
    let films = result.films;
    let species = result.species;
    let vehicles = result.vehicles;
    let starships = result.starships;
    $('#'+id_num).empty();
    $('#'+id_num).append(name + '<br>');
    $('#'+id_num).append(birth_year + '<br>');
    $('#'+id_num).append(films + '<br>');
    $('#'+id_num).append(species + '<br>');
    $('#'+id_num).append(vehicles + '<br>');
    $('#'+id_num).append(starships + '<br>');
  })
}

function getFilms(f){
  for(var f=0; f<8; f++){
  let id_num = f;
  let settings = {
    url: "http://swapi.co/api/films/" + f
  }
  $.ajax(settings).done(function(result){
    let film = result.title;
    $('#filmDiv').append('<div id=' + id_num + '><a onclick="getFilmDetail('+id_num+')">' + film + '</a><br>');
  })
}
}

function getFilmDetail(f){
  let id_num = f;
  let settings = {
    url: "http://swapi.co/api/films/" + f
  }
  $.ajax(settings).done(function(result){
    let title = result.title;
    let episode_id = result.episode_id;
    let opening_crawl = result.opening_crawl;
    let release_date = result.release_date;
    // let characters = result.characters;
    $('#'+id_num).empty();
    $('#'+id_num).append(title + '<br>');
    $('#'+id_num).append(opening_crawl + '<br>');
    $('#'+id_num).append(release_date + '<br>');
    // $('#'+id_num).append(characters + '<br>');
    //slice characters later to get top 3
  })
}

function getVehicles(v){
  for(var v=0; v<39; v++){
  let id_num = v;
  let settings = {
    url: "http://swapi.co/api/vehicles/" + v
  }
  $.ajax(settings).done(function(result){
    let vehicle = result.name;
    $('#vehicleDiv').append('<div id=' + id_num + '><a onclick="getVehicleDetail('+id_num+')">' + vehicle + '</a><br>');
  })
}
}

function getVehicleDetail(v){
  let id_num = v;
  let settings = {
    url: "http://swapi.co/api/vehicles/" + v
  }
  $.ajax(settings).done(function(result){
    let name = result.name;
    let model = result.model;
    let speed = result.max_atmosphering_speed;
    let vehicle_class = result.vehicle_class;
    let length = result.length;
    $('#'+id_num).append(name + '<br>');
    $('#'+id_num).append(model + '<br>');
    $('#'+id_num).append(speed+ '<br>');
    $('#'+id_num).append(vehicle_class + '<br>');
    $('#'+id_num).append(length + '<br>');
  })
}



$('#characters').click(getPeople);
$('#films').click(getFilms);
$('#vehicles').click(getVehicles);
