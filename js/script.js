function usdtButton(){
    head = document.getElementById('header');
    head.style.opacity = '.6'
    send = document.getElementById('sender');
    send.classList.remove('d-none');
    send.classList.add('d-block');
    let memoAdr = document.getElementById('memoAdres');
    memoAdr.classList.remove('d-block');
    memoAdr.classList.add('d-none');
    //txt
    let walletAderss = document.getElementById('walletAddress');
    let walletNet = document.getElementById('walletNet');
    let QR =  document.getElementById('USDTQR'); //USDT
    QR.classList.remove('d-none');
    QR.classList.add('d-block');
    walletAderss.textContent = ('THQ2Zgk3mvUQd4TAhG9XphUsWU8fagLyR9')// USDT ADRES
    walletNet.textContent = ('TRX (TRC20)')// NET
}
function btcButton(){
    head = document.getElementById('header');
    head.style.opacity = '.6'
    send = document.getElementById('sender');
    send.classList.remove('d-none');
    send.classList.add('d-block');
    let memoAdr = document.getElementById('memoAdres');
    memoAdr.classList.remove('d-block');
    memoAdr.classList.add('d-none');
    //txt
    let walletAderss = document.getElementById('walletAddress');
    let walletNet = document.getElementById('walletNet');
    let QR =  document.getElementById('BTCQR'); //BTC
    QR.classList.remove('d-none');
    QR.classList.add('d-block');
    walletAderss.textContent = ('1Ge5uKm6BzXQp1R9zWh6AymQYNknWMofRw')// BTC ADRES
    walletNet.textContent = ('BTC (BITCOIN)')// NET
}
function ethButton(){
    head = document.getElementById('header');
    head.style.opacity = '.6'
    send = document.getElementById('sender');
    send.classList.remove('d-none');
    send.classList.add('d-block');
    let memoAdr = document.getElementById('memoAdres');
    memoAdr.classList.remove('d-block');
    memoAdr.classList.add('d-none');


    //txt
    let walletAderss = document.getElementById('walletAddress');
    let walletNet = document.getElementById('walletNet');
    let QR =  document.getElementById('ETHQR'); //ETH
    QR.classList.remove('d-none');
    QR.classList.add('d-block');
    walletAderss.textContent = ('0xa6a0dfce519cbc3d189895a1336b0d41b2054c1a')// BTC ADRES
    walletNet.textContent = ('ETH (ERC20)')// NET
}
function bnbButton() {
    let head = document.getElementById('header');
    let send = document.getElementById('sender');
    let memoAdr = document.getElementById('memoAdres');
    let walletAderss = document.getElementById('walletAddress');
    let walletNet = document.getElementById('walletNet');
    let QR =  document.getElementById('BNBQR');
    memoAdr.classList.remove('d-none');
    memoAdr.classList.add('d-block');
    memoAdr.textContent = 'MEMO 524775475';
    walletAderss.textContent = 'bnb165q9dz39mqh789zuuuqwkv22plut6f4nzy9jc9';
    walletNet.textContent = 'BNB (BEP2)';
    head.style.opacity = '0.6';
    send.classList.remove('d-none');
    send.classList.add('d-block');

    QR.classList.remove('d-none');
    QR.classList.add('d-block');
}





function copyWalletAddress(button) {
    var walletAddress = document.getElementById('walletAddress');
    var textarea = document.createElement('textarea');
    textarea.value = walletAddress.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(textarea);
    button.textContent = 'Address copied';
    button.style.backgroundColor = 'green';
    setTimeout(function() {
        button.textContent = 'COPY WALLET LINK';
        button.style.backgroundColor = 'black';
    }, 2000);
}
function close_btn(){
    head = document.getElementById('header');
    head.style.opacity = '1.0'
    send = document.getElementById('sender');
    send.classList.remove('d-block');
    send.classList.add('d-none');
}
