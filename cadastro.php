<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $sobrenome = $_POST["sobrenome"];
    $datanasc = $_POST["datanasc"];
    $rg = $_POST["rg"];
    $cartaosus = $_POST["cartaosus"];
    $cpf = $_POST["cpf"];
    $endereço = $_POST["endereço"];
    $celular = $_POST["celular"];


    // Abra o arquivo em modo de escrita
    $arquivo = fopen("dados.txt", "a");

    // Escreva os dados no arquivo
    fwrite($arquivo, "Nome: " . $nome . "\n");
    fwrite($arquivo, "Email: " . $email . "\n");
    fwrite($arquivo, "Sobrenome" . $sobrenome . "\n");
    fwrite($arquivo, "Datanasc " . $datanasc . "\n");
    fwrite($arquivo, "RG " . $rg . "\n");
    fwrite($arquivo, "CPF " . $cpf . "\n");
    fwrite($arquivo, "Endereço " . $endereço . "\n");
    fwrite($arquivo, "Celular " . $celular. "\n");
    fwrite($arquivo, "Cartaosus " . $cartaosus. "\n");


    // Feche o arquivo
    fclose($arquivo);

    echo "Dados salvos com sucesso!";
}
?>
