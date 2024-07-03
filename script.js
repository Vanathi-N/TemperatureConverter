function convertTemperature() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (isNaN(value)) {
        alert('Enter correct value!!!');
        return;
    }

    let celsiusValue;

    switch (fromUnit) {
        case 'Celsius':
            celsiusValue = value;
            break;
        case 'Fahrenheit':
            celsiusValue = (value - 32) * 5 / 9;
            break;
        case 'Kelvin':
            celsiusValue = value - 273.15;
            break;
        default:
            alert('Invalid fromUnit');
            return;
    }

    let convertedValue;

    switch (toUnit) {
        case 'Celsius':
            convertedValue = celsiusValue;
            break;
        case 'Fahrenheit':
            convertedValue = celsiusValue * 9 / 5 + 32;
            break;
        case 'Kelvin':
            convertedValue = celsiusValue + 273.15;
            break;
        default:
            alert('Invalid toUnit');
            return;
    }

    document.getElementById('result').innerHTML = `${value} ${fromUnit} is equal to ${convertedValue.toFixed(2)} ${toUnit}`;
}
