function enviarMensaje(origen, texto, ...destinatarios) {
   
    if (Array.isArray(destinatarios)) {
        for (destino of destinatarios) {
            let mensaje = { origen, texto, destino }
            console.log(mensaje);
        }
    }
}

enviarMensaje("1168150978", "El Sabado los espero en casa", "12222", "13333", "14444", "15555");
enviarMensaje("1168150978", "El Sabado los espero en casa", "16666", "17777");
enviarMensaje("1168150978", "El Sabado los espero en casa", "18888");
enviarMensaje("1168150978", "El Sabado los espero en casa");