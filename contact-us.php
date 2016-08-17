<?php
    $to= 'hamrini.ismail@gmail.com';
	$sub= $_POST['Subject'];
	$msg= $_POST['message'];
	
	mail($to, $sub, $msg);
	$redirect_page= 'index.html';
    $redirect=true;

if ($redirect==true)
    header('Location:' .$redirect_page );
 ?>