const moneda = document.querySelector('#coin');
const criptomoneda = document.querySelector('#cripto');
const formulario = document.querySelector('#formulario');
const infoDiv = document.querySelector('#precio');
const amountValue = document.querySelector('#select_moneda');



// Events

formulario.addEventListener('submit', async e => {
    e.preventDefault();

    infoDiv.innerHTML = `<div class="loader">Loading...</div>`
    
    const monedaSelect = [...moneda.children].find(Option => Option.selected).value;
    const cryptoSelect = [...criptomoneda.children].find(Option => Option.selected).value;
    const amountValue = select_moneda.value
    const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelect}&tsyms=${monedaSelect}`;
    const response = await (await fetch(URL, {method: 'GET'} )).json();
    const price = response.DISPLAY[cryptoSelect][monedaSelect].PRICE;
    const alto = response.DISPLAY[cryptoSelect][monedaSelect].HIGH24HOUR;
    const bajo = response.DISPLAY[cryptoSelect][monedaSelect].LOW24HOUR;
    const cambio = response.DISPLAY[cryptoSelect][monedaSelect].CHANGEPCT24HOUR;
    
    if (!amountValue) {
    infoDiv.innerHTML = `
    <p>Precio actual: ${price} </p>
    <p>Precio más alto: ${alto}</p>
    <p>Precio más bajo: ${bajo}</p>
    <p>Diferencia 24h: ${cambio}%</p>`
    
} else {
    const priceRaw = response.RAW[cryptoSelect][monedaSelect].PRICE;
    const resultado = (amountValue / priceRaw ).toFixed(8);
    infoDiv.innerHTML = `
    <p>Precio actual: ${price} </p>
    <p>Precio más alto: ${alto}</p>
    <p>Precio más bajo: ${bajo}</p>
    <p>Diferencia 24h: ${cambio}%</p>
    <p>Puedes comprar: ${resultado} ${cryptoSelect}</p>`
    
}

})