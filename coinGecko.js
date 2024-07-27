const apiUrl =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd";

async function fetchCryptoPrices() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(
      "There has beem a problem with your fetch operation: ",
      error
    );
  }
}

fetchCryptoPrices();
