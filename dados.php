<?php 


require '../telefonia/processamento_dados/curl.php';
$processamento = new Curl();
$sorteio = "https://go.pccom.pro/crmpro/api/v1/LeadCapture/c60112586290bc2cec1ae01d6bd9a334";
$evento = "https://go.pccom.pro/crmpro/api/v1/LeadCapture/d344d183c4aa27dd2eacbb415ef7523b";
$acao = isset($_GET['acao']) ? $_GET['acao'] : ''; 

if($acao == "sorteio"){
    $dados = [
        "firstName"=> $_POST['nome'],
        "emailAddress"=> $_POST['email'],
        "phoneNumber"=>$_POST['telefone']
        ];
        $processamento->enviar($dados,$sorteio);
        header('location:/evento?staus=dados_eviado');
}
else if($acao == 'cadastro'){
 $dados = [
        "firstName"=> $_POST['nome'],
        "emailAddress"=> $_POST['email'],
        "phoneNumber"=>$_POST['telefone'],
    "description"=> $_POST['desc']
      ];
      $processamento->enviar($dados,$evento);
      header('location:/evento?staus=dados_eviado');
}


?>