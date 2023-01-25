<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


require 'assets/js/Exception.php';
require 'assets/js/PHPMailer.php';
require 'assets/js/SMTP.php';


session_start();
error_reporting(0);

$name = $_POST['name'];
$email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];

  $path1=explode("/",$path);

if($name!="" || $email!="" || $message!="" || $subject!="")
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
          <td style="font-family:arial;font-size:12px;font-weight:normal;color:#000000"><b>'.$subject.'</b></td>
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
// $mail->IsSMTP();

try {
//   $mail->Host= "smtp.gmail.com"; // SMTP server
//   $mail->SMTPDebug= 0;                     // enables SMTP debug information (for testing)
//   $mail->AddAddress('shikhachauhan2110@gmail.com', $subject);
//   $mail->SetFrom('shikhachauhan2110@gmail.com', $subject);
//   $mail->Subject = $subject;
//   $mail->Port = 587;
//   $mail->SMTPAuth = true;
// //   $mail->SMTPSecure = 'ssl';
// $mail->Username = "shikhachauhan2110@gmail.com";  
// $mail->Password = "lifeisme14"; 
// // $mail->Password = "Rumibaidu21"; 
//   $mail->MsgHTML($message_body);
//  // $mail->AddAttachment('images/phpmailer.gif');      // attachment
//  // $mail->AddAttachment('images/phpmailer_mini.gif'); // attachment
//   $mail->Send();
//   echo json_encode("Success");
//   // header("location:thankyou-catalogue.html?varname=$path1[1]");
//   //echo "Message Sent OK<p></p>\n";
    $mail->isSMTP();                                           
    $mail->Host       = 'smtp.gmail.com';                     
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = 'shikhachauhan2110@gmail.com';                    
    $mail->Password   = 'ccbikbulegfepdrl';                             
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            
    $mail->Port       = 465;                                    

  
    $mail->setFrom('shikhachauhan2110@gmail.com', $subject);

    $mail->addAddress('shikhachauhan2110@gmail.com');             
    $mail->isHTML(true);                                 
    $mail->Subject = 'Here is the subject'.time();
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    // $mail->isHTML(true);                                 
    // $mail->Subject = $subject;
    // $mail->Body    = MsgHTML($message_body);
    
    $mail->send();
    echo 'Message has been sent';
    echo json_encode("Success");
} catch (phpmailerException $e) {
  echo json_encode("Not Sent");
} catch (Exception $e) {
  echo json_encode("Not Sent");
}
    
 
  //  header('location:index.html');
     
}

?>




