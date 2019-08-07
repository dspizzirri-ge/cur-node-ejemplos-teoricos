const callback = ((todoOK, fallo) => {
    const numero = Math.random().toFixed(2) * 100;
    const resto = numero % 2
    const esPar = resto == 0;
    setTimeout(() => {
        if (esPar)
            return todoOK(true);
        return fallo(false);
    }, 2000);
});


callback(data => console.log(`Callback ok: ${data}`),
    err => console.log(`Callback error: ${err}`))


