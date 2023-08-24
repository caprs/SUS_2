function Alerta() {
    alert("Certifique-se que pelo menos 2 sintomas estão preenchidos")
}

document.getElementById('enviar').addEventListener('click', function () {
    var dordecabeca = document.getElementById('dor-cabeca').value;
    var dorgarganta = document.getElementById('dor-garganta').value;
    var febre = document.getElementById('febre').value;
    var nausea = document.getElementById('nausea').value;
    var fraqueza = document.getElementById('fraqueza').value;
    var diarreia = document.getElementById('diarreia').value;
    var olhosvermelhos = document.getElementById('olhos-vermelhos').value;
    var tremores = document.getElementById('tremores').value;
    var vomito = document.getElementById('vomito').value;
    var doresmusculares = document.getElementById('dores-musculares').value;

    if (dordecabeca !== '' && dorgarganta !== '' && febre !== '' && nausea !== '' && fraqueza !== '' && diarreia !== '' && olhosvermelhos !== '' && tremores !== '' && vomito !== '' && doresmusculares !== '') {
        alert('Enviando informações...');
        location.href = "carteira.html";
        // Aqui você pode adicionar a lógica para enviar o formulário
    } else {
        alert('Por favor, preencha pelo menos 2 sintomas');
        location.href = "sintomas.html"
    }
});