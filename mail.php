<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>메일 전송 완료</title>
<style type="text/css">
body {margin:0;padding:0;text-align:center;color:#333;font-size:12px;line-height:40px;  }
h2 { color:gray; }
#form { border:1px solid silver; width:60%; margin:0 auto; }
</style>
</head>
<body>
<h2>성공적으로 메일이 전달 되었습니다.</h2>
<h4>메일을 보내 주셔서 감사합니다.</h4>
<div id="form">
<?php

   $name=$_POST['name'];
   $email=$_POST['email'];
   $tel=$_POST['tel'];
   $message=$_POST['message'];

   $to='ground91@naver.com';
   $subject='포트폴리오 관련 메일이 왔습니다.';
   $msg="작성자:$name\n".
        "보낸사람메일주소:$email\n".
        "전화번호:$tel\n".
        "내용:$message\n";

   mail($to,$subject,$msg,$email);

   echo '작성자:'.$name.'<br />';
   echo '메일:'.$email.'<br />';
   echo '전화번호:'.$tel.'<br />';
   echo '내용:'.$message.'<br />';
   echo '메일이 성공적으로 전송되었습니다<br />';


?>
</div>
<h2><a href="#" onclick="javascript:history.back(-1);">back</a></h2>
</body>
</html>
