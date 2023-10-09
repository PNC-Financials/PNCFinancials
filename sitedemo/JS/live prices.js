let btc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade')
let eth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade')
let teth = new WebSocket('wss://stream.binance.com:9443/ws/busdusdt@trade')
let bnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade')
let sol = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade')
let xrp = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@trade')
let ada = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@trade')
let ltc = new WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@trade')

let lastPrice = null

btc.onmessage = (event) => {
    let btcCurPrice = document.getElementById("btcLastprice")
    let btcPriceElement = document.getElementById('btcPrice')
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2)
    btcCurPrice.innerHTML = price
    let currentPrice = parseFloat(stockObject.p).toFixed(2)
    btcPriceElement.innerHTML = currentPrice

    btcPriceElement.style.color = !lastPrice || lastPrice === price ? "white" : price > lastPrice ? "#49d748" : "rgb(255, 52, 52)"

    console.log(stockObject)

    lastPrice = price
    // console.log(lastPrice)
    console.log(currentPrice)
}

eth.onmessage = (event) => {
    let ethCurPrice = document.getElementById("ethLastprice")
    let ethPriceElement = document.getElementById('ethPrice')
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2)
    ethCurPrice.innerHTML = price
    let currentPrice = parseFloat(stockObject.p).toFixed(2)
    ethPriceElement.innerHTML = currentPrice

    ethPriceElement.style.color = !lastPrice || lastPrice === price ? "white" : price > lastPrice ? "#49d748" : "rgb(255, 52, 52)"



    lastPrice = price
    // console.log(lastPrice)
    console.log(currentPrice)
}

teth.onmessage = (event) => {
    let tethPriceElement = document.getElementById('tethPrice')
    let stockObject = JSON.parse(event.data)
    let currentPrice = parseFloat(stockObject.p).toFixed(2)
    tethPriceElement.innerHTML = currentPrice
}

bnb.onmessage = (event) => {
    let bnbCurPrice = document.getElementById("bnbLastprice")
    let bnbPriceElement = document.getElementById('bnbPrice')
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2)
    bnbCurPrice.innerHTML = price
    let currentPrice = parseFloat(stockObject.p).toFixed(2)
    bnbPriceElement.innerHTML = currentPrice

    bnbPriceElement.style.color = !lastPrice || lastPrice === price ? "white" : price > lastPrice ? "#49d748" : "rgb(255, 52, 52)"



    lastPrice = price
    // console.log(lastPrice)
    console.log(currentPrice)
}

sol.onmessage = (event) => {
    let solPriceElement = document.getElementById('solPrice')
    let stockObject = JSON.parse(event.data)
    let currentPrice = parseFloat(stockObject.p).toFixed(2)
    solPriceElement.innerHTML = currentPrice
}

xrp.onmessage = (event) => {
    let xrpPriceElement = document.getElementById('xrpPrice')
    let stockObject = JSON.parse(event.data)
    let currentPrice = parseFloat(stockObject.p).toFixed(2)
    xrpPriceElement.innerHTML = currentPrice
}

ada.onmessage = (event) => {
    let adaPriceElement = document.getElementById('adaPrice')
    let stockObject = JSON.parse(event.data)
    let currentPrice = parseFloat(stockObject.p).toFixed(2)
    adaPriceElement.innerHTML = currentPrice
}

ltc.onmessage = (event) => {
    let ltcCurPrice = document.getElementById("ltcLastprice")
    let ltcPriceElement = document.getElementById('ltcPrice')
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2)
    ltcCurPrice.innerHTML = price
    let currentPrice = parseFloat(stockObject.p).toFixed(2)
    ltcPriceElement.innerHTML = currentPrice

    ltcPriceElement.style.color = !lastPrice || lastPrice === price ? "white" : price > lastPrice ? "#49d748" : "rgb(255, 52, 52)"



    lastPrice = price
    // console.log(lastPrice)
    console.log(currentPrice)
}