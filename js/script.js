function displayCryptoDetails(qrId, walletAddress, networkType, showMemo) {
    let head = document.getElementById('header');
    head.style.opacity = '0.6';

    let send = document.getElementById('sender');
    send.classList.remove('d-none');
    send.classList.add('d-block');

    // Скрытие или показ блока memoAdres
    let memoAdr = document.getElementById('memoAdres');
    if (showMemo) {
        memoAdr.classList.remove('d-none');
    } else {
        memoAdr.classList.add('d-none');
    }
    memoAdr.textContent = 'MEMO 524775475';

    // Показать QR-код и обновить детали
    let walletAderss = document.getElementById('walletAddress');
    let walletNet = document.getElementById('walletNet');
    let QR = document.getElementById(qrId);

    // Скрыть все QR-коды
    let allQr = document.getElementsByClassName('qr-code');
    for (let i = 0; i < allQr.length; i++) {
        allQr[i].classList.remove('d-block');
        allQr[i].classList.add('d-none');
    }

    // Показать конкретный QR-код
    QR.classList.remove('d-none');
    QR.classList.add('d-block');
    walletAderss.textContent = walletAddress;
    walletNet.textContent = networkType;
}
function btcButton() {
    displayCryptoDetails('BTCQR', '1Ge5uKm6BzXQp1R9zWh6AymQYNknWMofRw', 'BTC (BITCOIN)', false);
}

function ethButton() {
    displayCryptoDetails('ETHQR', '0xa6a0dfce519cbc3d189895a1336b0d41b2054c1a', 'ETH (ERC20)', false);
}

function usdtButton() {
    displayCryptoDetails('USDTQR', 'THQ2Zgk3mvUQd4TAhG9XphUsWU8fagLyR9', 'TRX (TRC20)', false);
}

function bnbButton() {
    displayCryptoDetails('BNBQR', 'bnb165q9dz39mqh789zuuuqwkv22plut6f4nzy9jc9', 'BNB (BEP2)', true);
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
