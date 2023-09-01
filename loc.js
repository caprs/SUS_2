function procureLoc(){
    var cidade = document.getElementById("busca").value;







fetch('https://ipgeolocation.abstractapi.com/v1?' +cidade+ 'api_key=8c75a03818684a7fae3727b70d4d0e3c')
  .then(response => {
    if (response.ok){
        throw new Error('verifique sua localização e tente novamente');
    }

    const retorno = response.json();
    return retorno;
})
    .then(data => {
        console.log(data.main.ip_address);

        var ip = data.main.ip_address;
        ip = "166.171.248.255";
        document.getElementById("saida").value = ip;
    })
  .catch(err => console.error(err));

}

 