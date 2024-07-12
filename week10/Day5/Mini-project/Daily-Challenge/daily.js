//1. The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

document.addEventListener("DOMContentLoaded", () => {
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");
  const amount = document.getElementById("amount");
  const result = document.getElementById("result");
  const convertButton = document.getElementById("convertButton");

  //link of supported codes endpoint from the page ExchangeRate
  const supportCodesUrl = `https://v6.exchangerate-api.com/v6/a373e3fe08c887d79320fc24/codes`;

  //had written the specific currency like in the exchange webpage was asked and it wasnt converting the mount at all. took it out and started working
  //found the issue by entering the dev tool and finding the error the .catch from the conversion button catched

  //link of pair conversion from the ExchangeRate page
  const conversionUrl = `https://v6.exchangerate-api.com/v6/a373e3fe08c887d79320fc24/pair`;

  //2. First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

  async function fetchSupportedCurrencies() {
    try {
      const response = await fetch(supportCodesUrl);
      const data = await response.json();
      if (data.result === "success") {
        data.supported_codes.forEach((code) => {
          const option = document.createElement("option");
          option.value = code[0];
          option.text = code[1];
          fromCurrency.add(option.cloneNode(true));
          toCurrency.add(option.cloneNode(true));
        });
      }
    } catch (error) {
      console.log("Error fetching currencies", error);
    }
  }

  fetchSupportedCurrencies();

  //3. To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests from the ExchangeRate API documentation.
  // Hint: You could also supply an optional AMOUNT variable in the query of the request.

  convertButton.addEventListener("click", () => {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amountInput = amount.value;

    fetch(`${conversionUrl}/${from}/${to}/${amountInput}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          result.textContent = `${data.conversion_result}`;
        } else {
          result.textContent = "Conversion failed :(";
        }
      })
      .catch((error) =>
        console.log("Error fetching the conversion rate", error)
      );
  });
});
