function buscarLoc(){
    var localizacao = document.getElementById("buscar").value;

    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q='+localizacao+'&appid=a33b39419560f94ad0e19f7893b32960'

 
    fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('verifique o nome da cidade e tente novamente');
        }
        const retorno = response.json(); // Converte a resposta em JSON  
        return retorno; 
      })

      .then(data => {
        
        console.log(data.coord.lon);

        var lon = data.coord.lon;

        console.log(data.coord.lat);

        var lat = data.coord.lat;
    
        criaMapa(lat,lon);

       })

       function criaMapa(lat,lon) {
        L.mapquest.key = 'm5PYcV7mUykYNzRY1DpZrkJ9JdmkimqH';
       
        // 'map' refers to a <div> element with the ID map
        L.mapquest.map('map', {
          center: [lat, lon],
          layers: L.mapquest.tileLayer('map'),
          zoom: 15
        });
  }
}

function reloadPage(){
  location.reload()
}

function buscarCep(){
  var cep = document.getElementById("busca").value;

  const apiURL = 'https://viacep.com.br/ws/'+cep+'/json/'

  fetch(apiURL)
  .then(response =>{
      if(!response.ok){
          throw new Error('verifique o cep e tente novamente');
      }
      const retorno = response.json();
      return retorno;
  })

  .then(data =>{
      console.log(data.logradouro);
      var rua = data.logradouro;
      document.getElementById('ruaInput').value = rua;

      console.log(data.bairro);
      var bairro = data.bairro;
      document.getElementById('bairroInput').value = bairro;


     
  })
}