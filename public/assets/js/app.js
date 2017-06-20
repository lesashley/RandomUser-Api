const carnet = (data) =>{
  let name = data.results[0].name.first;
  let last = data.results[0].name.last;
  const container = $('<div class="container"><h1>'+name+" "+last+'</h1></div>');
  const img = $(`<img src="${data.results[0].picture.large}" class="right"/>`);
  const gender = $('<p>Gender: '+data.results[0].gender+'</p>');
  const city = $('<p>City: '+data.results[0].location.city+'</p>');
  const street = $('<p>Street: '+data.results[0].location.street+'</p>');
  const email = $('<p>Email: '+data.results[0].email+'</p>');
  const phone = $('<p>Phone: '+data.results[0].cell+'</p>');

  container.append(img);
  container.append(gender);
  container.append(city);
  container.append(street);
  container.append(email);
  container.append(phone);
  return container;
}

$(_=>{
  $.getJSON("https://randomuser.me/api/?nat=es",function(data){
  console.log(data);
  $('#root').append(carnet(data));
  });
})
