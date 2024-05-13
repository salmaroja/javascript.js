function validatePrice() {
  const priceInput = document.getElementById('price').value;
  const regex = /^\$\d+(\.\d{2})?$/; 

  const result = document.getElementById('result');

  if (regex.test(priceInput)) {
      result.style.color = 'green';
      result.textContent = 'Valid';
  } else {
      result.style.color = 'red';
      result.textContent = 'Invalid';
}
}