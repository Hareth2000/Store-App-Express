import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛍 Store Products</h1>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <h2 style={styles.productTitle}>{product.title}</h2>
            <p style={styles.price}>${product.price}</p>
            <button style={styles.button}>🛒 Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.3s",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    borderRadius: "8px",
  },
  productTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#444",
    marginTop: "10px",
  },
  price: {
    fontSize: "16px",
    color: "#777",
    margin: "5px 0",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    width: "100%",
    fontSize: "16px",
  },
};

export default App;
