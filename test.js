



const products =  {
    "count": 1000,
    "products": {
      "6834": {
        "subcategory": "mobile",
        "title": "Micromax Canvas Spark",
        "price": "4999",
        "popularity": "51936"
      },
      "5530": {
        "subcategory": "mobile",
        "title": "Samsung Galaxy Grand Max",
        "price": "12950",
        "popularity": "48876"
      },
      "4340": {
        "subcategory": "mobile",
        "title": "Apple iPhone 6",
        "price": "40999",
        "popularity": "46198"
      },
      "4804": {
        "subcategory": "mobile",
        "title": "Samsung Galaxy Grand Prime",
        "price": "9286",
        "popularity": "45775"
      }
    

    }}
    function map_get_data() {
        for (const productId in products.products) {
           
          const product = products.products[productId];
          console.log(product.title);
          console.log(product.price);
          console.log(product.popularity);

        
        }



        {  for (const productId in products.products) {
            const product = products.products[productId];
            
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.popularity}</td>
            </tr>
          }}
      }

map_get_data();