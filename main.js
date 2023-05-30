axios.get('https://api.hgbrasil.com/weather?format=json-cors&key=4a806c34&woeid=455871')
    .then( response => {

        const time = response.data.results.time;
        const city = response.data.results.city;
        const description = response.data.results.description;
        const temp = response.data.results.temp;
        // const recarrega = window.location.reload();

        document.getElementById('time').innerHTML = time;
        document.getElementById('city').innerHTML = city;
        document.getElementById('description').innerHTML = description;
        document.getElementById('temp').innerHTML = temp;
})