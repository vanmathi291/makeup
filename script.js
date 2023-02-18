url =
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=colourpop&product_type=lipstick";

async function api() {
  v = fetch(url);
  out1 = await v;
  prom = out1.json();
  out11 = await prom;
  console.log(out11);

 const uiData= out11.map((data) => {
    const ui = `
    <div class="main">
        <h3>BRAND:COLOURPOP</h3>
        <h3>PRODUCT_TYPE:LIPSTICK</h3>
        <h3>NAME:${data.name}</h3>
        <br>
        <img src="${data.image_link}" alt="">
        <br>
        <h3>IMAGE_LINK: 
            "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076"</h3>
        <h3>product_link: ${data.product_link}
        
            </h3>
            <h3>description: ${data.description}
                </h3>
                <h3>PRICE:${data.price}${data.currency}</h3>
         </div>
    
    `;
    return ui
  });
  console.log(uiData);
  document.getElementById('apiData').innerHTML=uiData
}

api();
