function openPaymentWindow() {
    const paymentUrl = "https://pay.nmkr.io/?p=9ae8097712e94cf0981fd1e3102d7bc2&c=1";

    // Specify the popup width and height
    const popupWidth = 500;
    const popupHeight = 700;

    // Calculate the center of the screen
    const left = window.top.outerWidth / 2 + window.top.screenX - ( popupWidth / 2);
    const top = window.top.outerHeight / 2 + window.top.screenY - ( popupHeight / 2);

    const popup =  window.open(paymentUrl, "NFT-MAKER PRO Payment Gateway",  `popup=1, location=1, width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`);

    // Show dim background
    document.body.style = "background: rgba(0, 0, 0, 0.5)";

    // Continuously check whether the popup has been closed
    const backgroundCheck = setInterval(function () {
        if(popup.closed) {
            clearInterval(backgroundCheck);

            console.log("Popup closed");

            // Remove dim background
            document.body.style = "";
        }
    }, 1000);
}




