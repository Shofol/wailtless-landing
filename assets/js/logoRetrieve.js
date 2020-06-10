(function retrieveLogo() {

    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get('logoLocation')) {
        const imageSrc = urlParams.get('logoLocation');
        document.getElementById("logo").src = imageSrc;
    }

    if (urlParams.get('qrCodeLocation')) {
        const qrCodeSrc = urlParams.get('qrCodeLocation');
        document.getElementById("qrCode").src = qrCodeSrc;
    }

    if (urlParams.get('mobileNumber')) {
        const mobileNumber = urlParams.get('mobileNumber');
        document.getElementById("mobileNo").innerHTML = mobileNumber;
    }
})()