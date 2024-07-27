const apiKey = 'cb16a3072328d9d839787bf3e40c319a';
const city = 'London';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

async function fetchWeather() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`Sem resposta de conexão remota: ${response.statusText} - ${errorDetails.message}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Existe um erro na sua aplicação: ', error);
  }
}

fetchWeather();
