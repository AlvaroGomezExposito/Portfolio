/**
 * PGWeb — Backend del formulario de contacto (Google Apps Script)
 * ================================================================
 * Este archivo es solo referencia / control de versiones. NO se ejecuta
 * aquí: hay que copiarlo manualmente en el editor de script.google.com.
 *
 * DESPLIEGUE (pasos manuales, una sola vez):
 *   1. Ir a https://script.google.com → Nuevo proyecto.
 *   2. Borrar el contenido de Code.gs por defecto y pegar TODO este archivo.
 *   3. Guardar el proyecto (dale un nombre, p.ej. "PGWeb Contact Form").
 *   4. Implementar → Nueva implementación → tipo "Aplicación web".
 *        - Ejecutar como: Yo (tu cuenta de Gmail)
 *        - Quién tiene acceso: Cualquier usuario
 *   5. Autorizar los permisos que pida Google (enviar email en tu nombre).
 *   6. Copiar la URL de la web app (termina en /exec).
 *   7. Pegar esa URL en js/main.js, en la constante CONTACT_FORM_ENDPOINT
 *      (busca 'PEGA_AQUI_TU_URL_DE_APPS_SCRIPT').
 *
 * Si vuelves a editar este código en script.google.com, tienes que crear
 * una NUEVA implementación (o gestionar implementaciones → editar) para
 * que los cambios se apliquen a la URL pública ya usada en la web.
 */

function doPost(e) {
  var name = e.parameter.name || '(sin nombre)';
  var email = e.parameter.email || '(sin email)';
  var msg = e.parameter.msg || '(sin mensaje)';

  var subject = 'Nuevo mensaje de contacto — ' + name;
  var body =
    'Nombre: ' + name + '\n' +
    'Email: ' + email + '\n\n' +
    'Mensaje:\n' + msg;

  MailApp.sendEmail({
    to: 'alvarogomez0402@gmail.com',
    replyTo: email,
    subject: subject,
    body: body,
  });

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
