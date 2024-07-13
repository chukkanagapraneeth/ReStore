import { Button } from "@mui/material";
import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // using spread operator
  // function addProduct() {
  //   setProducts([
  //     ...products,
  //     {
  //       name: "product" + (products.length + 1),
  //       price: products.length * 100 + 100,
  //     },
  //   ]);
  // }

  //using previous state
  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: products.length + 100,
        name: "product" + (products.length + 1),
        price: products.length * 100 + 100,
        description: "some desc",
        brand: "some brand",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  }

  function removeProduct() {
    setProducts(products.slice(0, -1));
  }

  return (
    <>
      <ProductList products={products} />
      <Button variant="contained" className="button" onClick={addProduct}>
        Add Product
      </Button>
      <Button variant="contained" className="button" onClick={removeProduct}>
        Remove Product
      </Button>
    </>
  );
}
