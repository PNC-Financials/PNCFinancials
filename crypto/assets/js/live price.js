let btc = document.querySelector('#bitcoin')
let btc2 = document.querySelector('#bitcoin2')
let btcMarket = document.querySelector('#bitcoinMkt')
let btcChange = document.querySelector('#bitcoinChange')

let ltc = document.querySelector('#litecoin')
let ltc2 = document.querySelector('#litecoin2')
let ltcMarket = document.querySelector('#litecoinMkt')
let ltcChange = document.querySelector('#litecoinChange')

let eth = document.querySelector('#ethereum')
let eth2 = document.querySelector('#ethereum2')
let ethMarket = document.querySelector('#ethereumMkt')
let ethChange = document.querySelector('#ethereumChange')

let doge = document.querySelector('#dogecoin')
let doge2 = document.querySelector('#dogecoin2')
let dogeMarket = document.querySelector('#dogecoinMkt')
let dogeChange = document.querySelector('#dogecoinChange')

let teth = document.querySelector('#tether')
let teth2 = document.querySelector('#tether2')
let tethMarket = document.querySelector('#tetherMkt')
let tethChange = document.querySelector('#tetherChange')

let bnb = document.querySelector('#bnb')
let bnb2 = document.querySelector('#bnb2')
let bnbMarket = document.querySelector('#bnbMkt')
let bnbChange = document.querySelector('#bnbChange')

let sol = document.querySelector('#solana')
let sol2 = document.querySelector('#solana2')
let solMarket = document.querySelector('#solanaMkt')
let solChange = document.querySelector('#solanaChange')

let xrp = document.querySelector('#xrp')
let xrp2 = document.querySelector('#xrp2')
let xrpMarket = document.querySelector('#xrpMkt')
let xrpChange = document.querySelector('#xrpChange')

let ada = document.querySelector('#cardano')
let ada2 = document.querySelector('#cardano2')
let adaMarket = document.querySelector('#cardanoMkt')
let adaChange = document.querySelector('#cardanoChange')

let avax = document.querySelector('#avalanche')
let avax2 = document.querySelector('#avalanche2')
let avaxMarket = document.querySelector('#avalancheMkt')
let avaxChange = document.querySelector('#avalancheChange')

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cdogecoin%2Cripple%2Clitecoin%2Cxrp20%2Ctether%2Cethereum%2Csolana%2Cavalanche-2%2Ccardano%2Cbinancecoin%2C&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response) {


    let badge1 = document.querySelector(".badge1")
    let badge2 = document.querySelector(".badge2")
    let badge3 = document.querySelector(".badge3")
    let badge4 = document.querySelector(".badge4")

    console.log(response)
    btc.innerText = response.bitcoin.usd
    btc2.innerText = response.bitcoin.usd
    btcMarket.innerText = response.bitcoin.usd_market_cap
    btcChange.innerText = response.bitcoin.usd_24h_change


    eth.innerText = response.ethereum.usd
    eth2.innerText = response.ethereum.usd
    ethMarket.innerText = response.ethereum.usd_market_cap
    ethChange.innerText = response.ethereum.usd_24h_change

    teth.innerText = response.tether.usd
    teth2.innerText = response.tether.usd
    tethMarket.innerText = response.tether.usd_market_cap
    tethChange.innerText = response.tether.usd_24h_change

    // sol.innerText = response.solana.usd
    sol2.innerText = response.solana.usd
    solMarket.innerText = response.solana.usd_market_cap
    // solChange.innerText = response.solana.usd_24h_change

    // xrp.innerText = response.xrp20.usd
    xrp2.innerText = response.ripple.usd
    xrpMarket.innerText = response.ripple.usd_market_cap
    // xrpChange.innerText = response.ripple.usd_24h_change

    // ada.innerText = response.cardano.usd
    ada2.innerText = response.cardano.usd
    adaMarket.innerText = response.cardano.usd_market_cap
    // adaChange.innerText = response.cardano.usd_24h_change


    // ltc.innerText = response.litecoin.usd
    ltc2.innerText = response.litecoin.usd
    ltcMarket.innerText = response.litecoin.usd_market_cap
    // ltcChange.innerText = response.litecoin.usd_24h_change

    bnb.innerText = response.binancecoin.usd
    bnb2.innerText = response.binancecoin.usd
    bnbMarket.innerText = response.binancecoin.usd_market_cap
    bnbChange.innerText = response.binancecoin.usd_24h_change

    // avax.innerText = response.avalanche2.usd
    // avax2.innerText = response.avalanche_2.usd
    // avaxMarket.innerText = response.avalanche_2.usd_market_cap
    // avaxChange.innerText = response.avalanche_2.usd_24h_change

    // doge.innerText = response.dogecoin.usd
    // doge2.innerText = response.dogecoin.usd
    // dogeMarket.innerText = response.dogecoin.usd_market_cap
    // dogeChange.innerText = response.dogecoin.usd_24h_change

    
    if (badge1.innerText > 0) {
        badge1.classList.add("green")
    }
    else {
        badge1.classList.add("red")
    }
    
    if (badge2.innerText > 0) {
        badge2.classList.add("green")
    }
    else {
        badge2.classList.add("red")
    }
    
    if (badge3.innerText > 0) {
        badge3.classList.add("green")
    }
    else {
        badge3.classList.add("red")
    }
    
    if (badge4.innerText > 0) {
        badge4.classList.add("green")
    }
    else {
        badge4.classList.add("red")
    }
});


// FORMAT
// =======

// "usd": 1630.76,
//     "usd_market_cap": 196236064007.4322,
//         "usd_24h_vol": 5034364707.846195,
//             "usd_24h_change": -0.2677526803031068,
//                      "last_updated_at": 1696803075