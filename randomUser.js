const apiUrl = "https://randomuser.me/api/";

async function fetchRandomUser() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Sem resposta de conexão " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Existe um erro na conexão da sua aplicação fetch: ", error);
  }
}

fetchRandomUser();
