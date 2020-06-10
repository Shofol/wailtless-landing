(function retrieveLogo() {

    const urlParams = new URLSearchParams(window.location.search);
    const imageSrc = urlParams.get('logoLocation');
    document.getElementById("logo").src = imageSrc;
})()