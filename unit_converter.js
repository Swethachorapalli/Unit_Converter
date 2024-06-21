document.getElementById('convertButton').addEventListener('click', function() {
  let lengthInMeters = parseFloat(document.getElementById('lengthInput').value);
  let selectedUnit = document.getElementById('unitSelect').value;
  let convertedLength;
  if (selectedUnit === 'cm') {
    convertedLength = lengthInMeters * 100;
  } else if (selectedUnit === 'km') {
    convertedLength = lengthInMeters / 1000;
  } else if (selectedUnit === 'mm') {
    convertedLength = lengthInMeters * 1000;
  }
  document.getElementById('result').textContent = `Converted length: ${convertedLength} ${selectedUnit}`;
});