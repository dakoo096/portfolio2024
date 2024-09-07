<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger datos del formulario
    $asunto = htmlspecialchars($_POST['asunto']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);
    
    // Configurar el correo
    $destinatario = "noelia_cabral96@hotmail.com";  // El correo al que se enviará el mensaje
    $asunto_correo = "Consulta desde el formulario: " . $asunto;
    $mensaje_correo = "Correo del remitente: " . $email . "\n\n" . "Mensaje:\n" . $mensaje;

    // Encabezados
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Enviar correo
    if (mail($destinatario, $asunto_correo, $mensaje_correo, $headers)) {
        echo "El correo se ha enviado con éxito.";
    } else {
        echo "Hubo un problema al enviar el correo.";
    }
} else {
    echo "Acceso no autorizado.";
}
?>
