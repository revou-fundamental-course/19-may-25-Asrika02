function convertTemperature() {
  const temp = parseFloat(document.getElementById("Temperature").value);
  const unit = document.getElementById("unit").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(temp)) {
    resultDiv.innerHTML = "Mohon masukkan angka suhu yang valid.";
    return;
  }

  let celsius, fahrenheit, kelvin;

  switch (unit) {
    case "celsius":
      celsius = temp;
      fahrenheit = (temp * 9) / 5 + 32;
      kelvin = temp + 273.15;
      break;
    case "fahrenheit":
      celsius = ((temp - 32) * 5) / 9;
      fahrenheit = temp;
      kelvin = celsius + 273.15;
      break;
    case "kelvin":
      celsius = temp - 273.15;
      fahrenheit = (celsius * 9) / 5 + 32;
      kelvin = temp;
      break;
  }

  resultDiv.innerHTML = `
    <p><strong>Celsius:</strong> ${celsius.toFixed(2)} °C</p>
    <p><strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F</p>
    <p><strong>Kelvin:</strong> ${kelvin.toFixed(2)} K</p>
  `;
}