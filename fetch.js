
const getIP = async () => {
    const url = 'https://api.ipify.org	';
    const response = await fetch(url);
    return await response.text();
};


(async () => {
    const ip = await getIP();

    document.querySelector('#content2').innerHTML = `<p>${ip}</p>`;

})();