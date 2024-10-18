// Função para obter o clima usando a OpenWeatherMap API
function getWeather(latitude, longitude) {
  const apiKey = '8c6717f32df51d835c2208f785a9ae16'; // Insira sua chave da OpenWeatherMap aqui
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro na resposta da API: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Verifica a resposta da API no console

      // Verifica se os campos retornados existem
      if (data.main && data.weather) {
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        // Exibir os dados no HTML
        document.getElementById('temperature').textContent = temperature;
        document.getElementById('description').textContent = description;
      } else {
        document.getElementById('weather').textContent = 'Dados do clima não disponíveis.';
      }
    })
    .catch(error => {
      console.error('Erro ao obter o clima:', error);
      document.getElementById('weather').textContent = 'Não foi possível obter o clima.';
    });
}

// Verifica se o navegador suporta a Geolocation API
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Chama a função para obter o clima
    getWeather(latitude, longitude);
  }, error => {
    console.error('Erro ao obter localização:', error);
    document.getElementById('weather').textContent = 'Não foi possível obter a localização.';
  });
} else {
  console.log('Geolocalização não é suportada pelo navegador.');
  document.getElementById('weather').textContent = 'Geolocalização não suportada pelo navegador.';
}
