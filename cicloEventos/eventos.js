for (let i = 0; i < 10; i++) {

    console.log(`Vuelta: ${i}`);
    if (i === 5)
        setTimeout(() => console.log(`TimeOut`), 3000);
}