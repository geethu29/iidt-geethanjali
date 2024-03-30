/*import React, { useState } from "react";

const products = [
  { id: 1, name: "Product 1", category: "Category A" },
  { id: 2, name: "Product 2", category: "Category B" },
  { id: 3, name: "Product 3", category: "Category A" },
  { id: 4, name: "Product 4", category: "Category C" },
 
];

function ProductFilter() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (categoryFilter === "" || product.category === categoryFilter) &&
      (searchTerm === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div>
        <h2>Categories</h2>
        <ul>
          <li onClick={() => handleCategoryClick("")}>All</li>
          <li onClick={() => handleCategoryClick("Category A")}>Category A</li>
          <li onClick={() => handleCategoryClick("Category B")}>Category B</li>
          <li onClick={() => handleCategoryClick("Category C")}>Category C</li>
          
        </ul>
      </div>
      <div>
        <h2>Products</h2>
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductFilter;
import React, { useState } from "react";

function ProductFilter() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div>
        <h2>Categories</h2>
        <ul>
          <li onClick={() => handleCategoryClick("")}>All</li>
          <li onClick={() => handleCategoryClick("Category A")}>Category A</li>
          <li onClick={() => handleCategoryClick("Category B")}>Category B</li>
          <li onClick={() => handleCategoryClick("Category C")}>Category C</li>
         
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default ProductFilter;
import React, { useState } from "react";


const products = [
  {
    id: "rec43w3ipXvP28vog",
    title: "high-back bench",
    company: "ikea",
    image: "https://course-api.com/images/store/product-1.jpeg",
    price: 9.99,
  },
  {
    id: "rec4f2RIftFCb7aHh",
    title: "albany table",
    company: "marcos",
    image: "https://course-api.com/images/store/product-2.jpeg",
    price: 79.99,
  },
  {
    id: "rec8kkCmSiMkbkiko",
    title: "accent chair",
    company: "caressa",
    image: "https://course-api.com/images/store/product-3.jpeg",
    price: 25.99,
  },
  {
    id: "recBohCqQsot4Q4II",
    title: "wooden table",
    company: "caressa",
    image: "https://course-api.com/images/store/product-4.jpeg",

    price: 45.99,
  },
  {
    id: "recDG1JRZnbpRHpoy",
    title: "dining table",
    company: "caressa",
    image: "https://course-api.com/images/store/product-5.jpeg",

    price: 6.99,
  },
  {
    id: "recNWGyP7kjFhSqw3",
    title: "sofa set",
    company: "liddy",
    image: "https://course-api.com/images/store/product-6.jpeg",
    price: 69.99,
  },
  {
    id: "recZEougL5bbY4AEx",
    title: "modern bookshelf",
    company: "marcos",
    image: "https://course-api.com/images/store/product-7.jpeg",
    price: 8.99,
  },
  {
    id: "recjMK1jgTb2ld7sv",
    title: "emperor bed",
    company: "liddy",
    image: "https://course-api.com/images/store/product-8.jpeg",
    price: 21.99,
  },
  {
    id: "recmg2a1ctaEJNZhu",
    title: "utopia sofa",
    company: "marcos",
    image: "https://course-api.com/images/store/product-9.jpeg",
    price: 39.95,
  },
  {
    id: "recvKMNR3YFw0bEt3",
    title: "entertainment center",
    company: "liddy",
    image: "https://course-api.com/images/store/product-10.jpeg",
    price: 29.98,
  },
  {
    id: "recxaXFy5IW539sgM",
    title: "albany sectional",
    company: "ikea",
    image: "https://course-api.com/images/store/product-11.jpeg",
    price: 10.99,
  },
  {
    id: "recyqtRglGNGtO4Q5",
    title: "leather sofa",
    company: "liddy",
    image: "https://course-api.com/images/store/product-12.jpeg",
    price: 9.99,
  },

  // Add more products as needed
];

function ProductFilter() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (categoryFilter === "" || product.category === categoryFilter) &&
      (searchTerm === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div>
          <h2>Categories</h2>
          <ul>
            <li onClick={() => handleCategoryClick("")}>All</li>
            <li onClick={() => handleCategoryClick("Category A")}>
              Category A
            </li>
            <li onClick={() => handleCategoryClick("Category B")}>
              Category B
            </li>
            <li onClick={() => handleCategoryClick("Category C")}>
              Category C
            </li>
            
          </ul>
        </div>
        <div></div>
      </div>
      <div className="produ">
        <h2>Products</h2>
      </div>
    </div>
  );
}

export default ProductFilter;*/
/*
import React, { useState } from "react";

const products = [
  {
    id: "rec43w3ipXvP28vog",
    title: "high-back bench",
    company: "ikea",
    image: "https://course-api.com/images/store/product-1.jpeg",
    price: 9.99,
  },
  {
    id: "rec4f2RIftFCb7aHh",
    title: "albany table",
    company: "marcos",
    image: "https://course-api.com/images/store/product-2.jpeg",
    price: 79.99,
  },
  {
    id: "rec8kkCmSiMkbkiko",
    title: "accent chair",
    company: "caressa",
    image: "https://course-api.com/images/store/product-3.jpeg",
    price: 25.99,
  },
  {
    id: "recBohCqQsot4Q4II",
    title: "wooden table",
    company: "caressa",
    image: "https://course-api.com/images/store/product-4.jpeg",
    price: 45.99,
  },
  {
    id: "recDG1JRZnbpRHpoy",
    title: "dining table",
    company: "caressa",
    image: "https://course-api.com/images/store/product-5.jpeg",
    price: 6.99,
  },
  {
    id: "recNWGyP7kjFhSqw3",
    title: "sofa set",
    company: "liddy",
    image: "https://course-api.com/images/store/product-6.jpeg",
    price: 69.99,
  },
  {
    id: "recZEougL5bbY4AEx",
    title: "modern bookshelf",
    company: "marcos",
    image: "https://course-api.com/images/store/product-7.jpeg",
    price: 8.99,
  },
  {
    id: "recjMK1jgTb2ld7sv",
    title: "emperor bed",
    company: "liddy",
    image: "https://course-api.com/images/store/product-8.jpeg",
    price: 21.99,
  },
  {
    id: "recmg2a1ctaEJNZhu",
    title: "utopia sofa",
    company: "marcos",
    image: "https://course-api.com/images/store/product-9.jpeg",
    price: 39.95,
  },
  {
    id: "recvKMNR3YFw0bEt3",
    title: "entertainment center",
    company: "liddy",
    image: "https://course-api.com/images/store/product-10.jpeg",
    price: 29.98,
  },
  {
    id: "recxaXFy5IW539sgM",
    title: "albany sectional",
    company: "ikea",
    image: "https://course-api.com/images/store/product-11.jpeg",
    price: 10.99,
  },
  {
    id: "recyqtRglGNGtO4Q5",
    title: "leather sofa",
    company: "liddy",
    image: "https://course-api.com/images/store/product-12.jpeg",
    price: 9.99,
  },
];

function ProductFilter() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (categoryFilter === "" || product.category === categoryFilter) &&
      (searchTerm === "" ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div>
          <h2>Categories</h2>
          <ul>
            <li onClick={() => handleCategoryClick("")}>All</li>
            <li onClick={() => handleCategoryClick("Category A")}>
              Category A
            </li>
            <li onClick={() => handleCategoryClick("Category B")}>
              Category B
            </li>
            <li onClick={() => handleCategoryClick("Category C")}>
              Category C
            </li>
            
          </ul>
        </div>
        <div></div>
      </div>
      <div className="produ">
        <h2>Products</h2>
        <ul>
          {filteredProducts.map((product) => (
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductFilter;*/
/*correct
import React, { useState } from "react";
import "./Product.css";

const products = [
  {
    id: "rec43w3ipXvP28vog",
    title: "high-back bench",
    company: "ikea",
    image: "https://course-api.com/images/store/product-1.jpeg",
    price: 9.99,
  },
  {
    id: "rec4f2RIftFCb7aHh",
    title: "albany table",
    company: "marcos",
    image: "https://course-api.com/images/store/product-2.jpeg",
    price: 79.99,
  },
  {
    id: "rec8kkCmSiMkbkiko",
    title: "accent chair",
    company: "caressa",
    image: "https://course-api.com/images/store/product-3.jpeg",
    price: 25.99,
  },
  {
    id: "recBohCqQsot4Q4II",
    title: "wooden table",
    company: "caressa",
    image: "https://course-api.com/images/store/product-4.jpeg",

    price: 45.99,
  },
  {
    id: "recDG1JRZnbpRHpoy",
    title: "dining table",
    company: "caressa",
    image: "https://course-api.com/images/store/product-5.jpeg",

    price: 6.99,
  },
  {
    id: "recNWGyP7kjFhSqw3",
    title: "sofa set",
    company: "liddy",
    image: "https://course-api.com/images/store/product-6.jpeg",
    price: 69.99,
  },
  {
    id: "recZEougL5bbY4AEx",
    title: "modern bookshelf",
    company: "marcos",
    image: "https://course-api.com/images/store/product-7.jpeg",
    price: 8.99,
  },
  {
    id: "recjMK1jgTb2ld7sv",
    title: "emperor bed",
    company: "liddy",
    image: "https://course-api.com/images/store/product-8.jpeg",
    price: 21.99,
  },
  {
    id: "recmg2a1ctaEJNZhu",
    title: "utopia sofa",
    company: "marcos",
    image: "https://course-api.com/images/store/product-9.jpeg",
    price: 39.95,
  },
  {
    id: "recvKMNR3YFw0bEt3",
    title: "entertainment center",
    company: "liddy",
    image: "https://course-api.com/images/store/product-10.jpeg",
    price: 29.98,
  },
  {
    id: "recxaXFy5IW539sgM",
    title: "albany sectional",
    company: "ikea",
    image: "https://course-api.com/images/store/product-11.jpeg",
    price: 10.99,
  },
  {
    id: "recyqtRglGNGtO4Q5",
    title: "leather sofa",
    company: "liddy",
    image: "https://course-api.com/images/store/product-12.jpeg",
    price: 9.99,
  },

  // Add more products
];

function ProductFilter() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (categoryFilter === "" || product.category === categoryFilter) &&
      (searchTerm === "" ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  // Chunk the filtered products into arrays of three products each
  const chunkedProducts = [];
  for (let i = 0; i < filteredProducts.length; i += 3) {
    chunkedProducts.push(filteredProducts.slice(i, i + 3));
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ margiright: "100px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="cat">
          <h2>Company</h2>

          <h6>All </h6>
          <h6>Ikea</h6>
          <h6>Marcos</h6>
          <h6>Carresa</h6>
          <h6>liddy</h6>

         
        </div>
        <div></div>
      </div>
      <div className="produ">
        {chunkedProducts.map((row, index) => (
          <div key={index} style={{ display: "flex" }}>
            {row.map((product) => (
              <img
                key={product.id}
                src={product.image}
                alt={product.title}
                style={{
                  width: "300px",
                  height: "300px",
                  marginRight: "20px",
                  marginBottom: "30px",
                  marginTop: "30px",
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;*/
/*final
import React, { useState } from "react";

const products = [
  {
    id: "rec43w3ipXvP28vog",
    title: "high-back bench",
    company: "ikea",
    image: "https://course-api.com/images/store/product-1.jpeg",
    price: 9.99,
  },
  {
    image: "https://course-api.com/images/store/product-2.jpeg",
    id: "rec4f2RIftFCb7aHh",
    title: "albany table",
    company: "marcos",
    image: "https://course-api.com/images/store/product-2.jpeg",
  },
  {
    id: "rec8kkCmSiMkbkiko",
    title: "accent chair",
    company: "caressa",
    image: "https://course-api.com/images/store/product-3.jpeg",
    price: 25.99,
  },
  {
    id: "recBohCqQsot4Q4II",
    title: "wooden table",
    company: "caressa",
    image: "https://course-api.com/images/store/product-4.jpeg",

    price: 45.99,
  },
  {
    id: "recDG1JRZnbpRHpoy",
    title: "dining table",
    company: "caressa",
    image: "https://course-api.com/images/store/product-5.jpeg",

    price: 6.99,
  },
  {
    id: "recNWGyP7kjFhSqw3",
    title: "sofa set",
    company: "liddy",
    image: "https://course-api.com/images/store/product-6.jpeg",
    price: 69.99,
  },
  {
    id: "recZEougL5bbY4AEx",
    title: "modern bookshelf",
    company: "marcos",
    image: "https://course-api.com/images/store/product-7.jpeg",
    price: 8.99,
  },
  {
    id: "recjMK1jgTb2ld7sv",
    title: "emperor bed",
    company: "liddy",
    image: "https://course-api.com/images/store/product-8.jpeg",
    price: 21.99,
  },
  {
    id: "recmg2a1ctaEJNZhu",
    title: "utopia sofa",
    company: "marcos",
    image: "https://course-api.com/images/store/product-9.jpeg",
    price: 39.95,
  },
  {
    id: "recvKMNR3YFw0bEt3",
    title: "entertainment center",
    company: "liddy",
    image: "https://course-api.com/images/store/product-10.jpeg",
    price: 29.98,
  },
  {
    id: "recxaXFy5IW539sgM",
    title: "albany sectional",
    company: "ikea",
    image: "https://course-api.com/images/store/product-11.jpeg",
    price: 10.99,
  },
  {
    id: "recyqtRglGNGtO4Q5",
    title: "leather sofa",
    company: "liddy",
    image: "https://course-api.com/images/store/product-12.jpeg",
    price: 9.99,
  },
];

function ProductFilter() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (categoryFilter === "" || product.category === categoryFilter) &&
      (searchTerm === "" ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  // Chunk the filtered products into arrays of three products each
  const chunkedProducts = [];
  for (let i = 0; i < filteredProducts.length; i += 3) {
    chunkedProducts.push(filteredProducts.slice(i, i + 3));
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "70px", marginTop: "30px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div>
          <h2>Company</h2>
          <h6>All </h6>
          <h6>Ikea</h6>
          <h6>Marcos</h6>
          <h6>Carressa</h6>
          <h6>Liddy</h6>
        </div>
      </div>
      <div className="produ">
        {chunkedProducts.map((row, index) => (
          <div key={index} style={{ display: "flex" }}>
            {row.map((product) => (
              <img
                key={product.id}
                src={product.image}
                alt={product.title}
                style={{
                  width: "300px",
                  height: "300px",
                  marginRight: "20px",
                  marginBottom: "30px",
                  marginTop: "30px",
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;*/

/*done
import React, { useState } from "react";

const products = [
  // Product data
  {
    id: "rec43w3ipXvP28vog",
    title: "high-back bench",
    company: "ikea",
    image: "https://course-api.com/images/store/product-1.jpeg",
    price: 9.99,
  },
  {
    image: "https://course-api.com/images/store/product-2.jpeg",
    id: "rec4f2RIftFCb7aHh",
    title: "albany table",
    company: "marcos",
    image: "https://course-api.com/images/store/product-2.jpeg",
  },
  {
    id: "rec8kkCmSiMkbkiko",
    title: "accent chair",
    company: "caressa",
    image: "https://course-api.com/images/store/product-3.jpeg",
    price: 25.99,
  },
  {
    id: "recBohCqQsot4Q4II",
    title: "wooden table",
    company: "caressa",
    image: "https://course-api.com/images/store/product-4.jpeg",

    price: 45.99,
  },
  {
    id: "recDG1JRZnbpRHpoy",
    title: "dining table",
    company: "caressa",
    image: "https://course-api.com/images/store/product-5.jpeg",

    price: 6.99,
  },
  {
    id: "recNWGyP7kjFhSqw3",
    title: "sofa set",
    company: "liddy",
    image: "https://course-api.com/images/store/product-6.jpeg",
    price: 69.99,
  },
  {
    id: "recZEougL5bbY4AEx",
    title: "modern bookshelf",
    company: "marcos",
    image: "https://course-api.com/images/store/product-7.jpeg",
    price: 8.99,
  },
  {
    id: "recjMK1jgTb2ld7sv",
    title: "emperor bed",
    company: "liddy",
    image: "https://course-api.com/images/store/product-8.jpeg",
    price: 21.99,
  },
  {
    id: "recmg2a1ctaEJNZhu",
    title: "utopia sofa",
    company: "marcos",
    image: "https://course-api.com/images/store/product-9.jpeg",
    price: 39.95,
  },
  {
    id: "recvKMNR3YFw0bEt3",
    title: "entertainment center",
    company: "liddy",
    image: "https://course-api.com/images/store/product-10.jpeg",
    price: 29.98,
  },
  {
    id: "recxaXFy5IW539sgM",
    title: "albany sectional",
    company: "ikea",
    image: "https://course-api.com/images/store/product-11.jpeg",
    price: 10.99,
  },
  {
    id: "recyqtRglGNGtO4Q5",
    title: "leather sofa",
    company: "liddy",
    image: "https://course-api.com/images/store/product-12.jpeg",
    price: 9.99,
  },
];

function ProductFilter() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (categoryFilter === "" || product.category === categoryFilter) &&
      (searchTerm === "" ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  // Chunk the filtered products into arrays of three products each
  const chunkedProducts = [];
  for (let i = 0; i < filteredProducts.length; i += 3) {
    chunkedProducts.push(filteredProducts.slice(i, i + 3));
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "50px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            marginTop: "30px",
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="cat">
          <h2>Company</h2>
          <h6>All </h6>
          <h6>Ikea</h6>
          <h6>Marcos</h6>
          <h6>Carressa</h6>
          <h6>Liddy</h6>
        </div>
      </div>
      <div className="produ">
        {chunkedProducts.map((row, index) => (
          <div key={index} style={{ display: "flex" }}>
            {row.map((product) => (
              <div key={product.id} style={{ marginRight: "20px" }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "300px",
                    height: "200px",

                    marginTop: "30px",
                  }}
                />
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.company}</p>
                  <p>${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;*/
import React, { useState } from "react";
import "./Product.css";

const products = [
  // Product data
  {
    id: "rec43w3ipXvP28vog",
    title: "high-back bench",
    company: "ikea",
    image: "https://course-api.com/images/store/product-1.jpeg",
    price: 9.99,
  },
  {
    image: "https://course-api.com/images/store/product-2.jpeg",
    id: "rec4f2RIftFCb7aHh",
    title: "albany table",
    company: "marcos",
    image: "https://course-api.com/images/store/product-2.jpeg",
  },
  {
    id: "rec8kkCmSiMkbkiko",
    title: "accent chair",
    company: "caressa",
    image: "https://course-api.com/images/store/product-3.jpeg",
    price: 25.99,
  },
  {
    id: "recBohCqQsot4Q4II",
    title: "wooden table",
    company: "caressa",
    image: "https://course-api.com/images/store/product-4.jpeg",

    price: 45.99,
  },
  {
    id: "recDG1JRZnbpRHpoy",
    title: "dining table",
    company: "caressa",
    image: "https://course-api.com/images/store/product-5.jpeg",

    price: 6.99,
  },
  {
    id: "recNWGyP7kjFhSqw3",
    title: "sofa set",
    company: "liddy",
    image: "https://course-api.com/images/store/product-6.jpeg",
    price: 69.99,
  },
  {
    id: "recZEougL5bbY4AEx",
    title: "modern bookshelf",
    company: "marcos",
    image: "https://course-api.com/images/store/product-7.jpeg",
    price: 8.99,
  },
  {
    id: "recjMK1jgTb2ld7sv",
    title: "emperor bed",
    company: "liddy",
    image: "https://course-api.com/images/store/product-8.jpeg",
    price: 21.99,
  },
  {
    id: "recmg2a1ctaEJNZhu",
    title: "utopia sofa",
    company: "marcos",
    image: "https://course-api.com/images/store/product-9.jpeg",
    price: 39.95,
  },
  {
    id: "recvKMNR3YFw0bEt3",
    title: "entertainment center",
    company: "liddy",
    image: "https://course-api.com/images/store/product-10.jpeg",
    price: 29.98,
  },
  {
    id: "recxaXFy5IW539sgM",
    title: "albany sectional",
    company: "ikea",
    image: "https://course-api.com/images/store/product-11.jpeg",
    price: 10.99,
  },
  {
    id: "recyqtRglGNGtO4Q5",
    title: "leather sofa",
    company: "liddy",
    image: "https://course-api.com/images/store/product-12.jpeg",
    price: 9.99,
  },
];

function ProductFilter() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (categoryFilter === "" || product.category === categoryFilter) &&
      (searchTerm === "" ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  // Chunk the filtered products into arrays of three products each
  const chunkedProducts = [];
  for (let i = 0; i < filteredProducts.length; i += 3) {
    chunkedProducts.push(filteredProducts.slice(i, i + 3));
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "50px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            marginTop: "30px",
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="cat">
          <h2>Company</h2>
          <h6>All </h6>
          <h6>Ikea</h6>
          <h6>Marcos</h6>
          <h6>Carressa</h6>
          <h6>Liddy</h6>
        </div>
      </div>
      <div className="produ">
        {chunkedProducts.map((row, index) => (
          <div key={index} style={{ display: "flex" }}>
            {row.map((product) => (
              <div
                key={product.id}
                style={{ marginRight: "20px", textAlign: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "300px",
                      height: "200px",
                      marginTop: "30px",
                    }}
                  />
                  <div>
                    <h3>{product.title}</h3>
                    <p>{product.company}</p>
                    <p>{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;
