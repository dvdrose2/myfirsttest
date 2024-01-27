const apiKey = '3671b377-ee75-4348-af80-a289a8c9543e';
const apiUrl = `https://api.livecoinwatch.com/coins/list?api_key=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const cryptoList = document.getElementById('crypto-list');
    data.forEach(crypto => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = `https://livecoinwatch.com/img/icons/${crypto.symbol.toLowerCase()}.png`;
      const nameSpan = document.createElement('span');
      nameSpan.textContent = crypto.name;
      const priceSpan = document.createElement('span');
      priceSpan.textContent = `$${crypto.price.toFixed(2)}`;
      li.appendChild(img);
      li.appendChild(nameSpan);
      li.appendChild(priceSpan);
      cryptoList.appendChild(li);
    });
  })
  .catch(error => console.error(error));
