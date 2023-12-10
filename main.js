axios.get('https://api.hgbrasil.com/weather?format=json-cors&key=e291d3c2&user_ip=remote')
    .then( response => {

        const time = response.data.results.time;
        const city = response.data.results.city;
        const description = response.data.results.description;
        const temp = response.data.results.temp;
        // const recarrega = window.location.reload();

                // Verifica se a página já foi recarregada
                if (!sessionStorage.getItem('paginaRecarregada')) {
                    // Recarrega a página
                    window.location.reload();
                    // Marca a página como recarregada na sessionStorage
                    sessionStorage.setItem('paginaRecarregada', 'true');
                }

        document.getElementById('time').innerHTML = time;
        document.getElementById('city').innerHTML = city;
        document.getElementById('description').innerHTML = description;
        document.getElementById('temp').innerHTML = temp;
})
