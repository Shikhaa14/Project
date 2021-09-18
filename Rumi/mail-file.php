<?php
session_start();
error_reporting(0);

$name = $_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$message=$_POST['text'];
$pagename=$_POST['pagename'];

  $path1=explode("/",$path);

if($name!="" || $email!="" || $message!="" || $phone!="")
{ 

require_once('phpmailer/class.phpmailer.php');


$message_body='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <meta http-equiv="content-type" content="text/html; charset=windows-1250">
  <meta name="generator" content="PSPad editor, www.pspad.com">
  <title></title>
  <style type="text/css">span.go{display:none} .go{display:none}</style>
  </head>
  <body>
    <div style="font-family:arial;font-size:12px;font-weight:normal;color:#000000;background:#ffffff;border:10px solid #cccccc;width:600px;padding:20px;margin: 0px auto;">
    <table border="1" cellpadding="5" style="width:500px;font-family:arial;font-size:12px;font-weight:normal;color:#000000;border-collapse:collapse;border:1px solid #cccccc;border-color:#cccccc">
      <tbody>
        <tr>
          <td colspan="2" style="font-family:arial;font-size:12px;font-weight:normal;color:#000000;border-bottom:3px solid #cccccc"><b>Kontakt Details</b></td>
        </tr>
        <tr>
          <td width="25%" align="right" style="font-family:arial;font-size:12px;font-weight:normal;color:#000000">Name:</td>
          <td style="font-family:arial;font-size:12px;font-weight:normal;color:#000000"><b>'.$name.'</b></td>
        </tr>
        <tr>
          <td align="right" style="font-family:arial;font-size:12px;font-weight:normal;color:#000000">Email:</td>
          <td style="font-family:arial;font-size:12px;font-weight:normal;color:#000000"><b>'.$email.'</b></td>
        </tr>
        <tr>
          <td align="right" style="font-family:arial;font-size:12px;font-weight:normal;color:#000000">Telefon:</td>
          <td style="font-family:arial;font-size:12px;font-weight:normal;color:#000000"><b>'.$phone.'</b></td>
        </tr>
        <tr>
          <td align="right" style="font-family:arial;font-size:12px;font-weight:normal;color:#000000">Nachricht:</td>
          <td style="font-family:arial;font-size:12px;font-weight:normal;color:#000000"><b>'.$message.'</b></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>
  </div>
  </body>
</html>
';

$mail = new PHPMailer(true); // the true param means it will throw exceptions on errors, which we need to catch
$mail->IsSMTP();

try {
  $mail->Host= "mail.innovateinfinite.com"; // SMTP server
  $mail->SMTPDebug= 0;                     // enables SMTP debug information (for testing)
  $mail->AddAddress('shikha@innovateinfinite.com', $pagename);
  $mail->SetFrom('shikha@innovateinfinite.com', $pagename);
  $mail->Subject = $pagename;
  $mail->Port = 465;
  $mail->SMTPAuth = true;
//   $mail->SMTPSecure = 'ssl';
$mail->Username = "info@restaurant-rumi.ch";  
$mail->Password = "Shikha@2020"; 
// $mail->Password = "Rumibaidu21"; 
  $mail->MsgHTML($message_body);
 // $mail->AddAttachment('images/phpmailer.gif');      // attachment
 // $mail->AddAttachment('images/phpmailer_mini.gif'); // attachment
  $mail->Send();
  echo json_encode("Success");
  // header("location:thankyou-catalogue.html?varname=$path1[1]");
  //echo "Message Sent OK<p></p>\n";
} catch (phpmailerException $e) {
  echo json_encode("Not Sent");
} catch (Exception $e) {
  echo json_encode("Not Sent");
}
    
 
  //  header('location:index.html');
     
}

?>




