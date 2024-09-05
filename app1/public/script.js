fetch('/products')
  .then(response => response.json())
  .then(data => {
    const productosDiv = document.getElementById('products');
    data.forEach(producto => {
      const p = document.createElement('p');
      p.textContent = `ProductId: ${producto.productId} - Title: ${producto.title}`;
      productosDiv.appendChild(p);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });