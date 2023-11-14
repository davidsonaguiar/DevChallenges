import './App.css'

import ProductCard from "./components/ProductCard";
import ListCard from "./components/ListCard";
import Section from "./components/Section";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import Tab from "./components/Tab";

import { useEffect, useState } from "react";
import { Product } from "./models/product";
import { Filter } from "./models/filter";


export default function App() {

  const [products, setProducts] = useState<Product[]>([]);
  const [ filter, setFilter ] = useState<Filter>("all-products");

  async function getDatas() {
    const response = await fetch("./public/datas/simple-coffee-listing-data.json");
    if (response.ok) {
      const data = await response.json();
      setProducts(data);
    }
  }

  useEffect(() => {
    getDatas();
  }, []);

  const productList = products
    .filter(product => filter === "all-products" ? true : product.available)
    .map((product) => {
      return (
        <li key={product.id}>
          <ProductCard
            title={product.name}
            src={product.image}
            popular={product.popular}
            price={product.price}
            rating={product.rating}
            votes={product.votes}
            available={product.available}
          />
        </li>
      );
    });

  return (
    <main>
      <Section>
        <Title>Our Collection</Title>
        <Paragraph>
          Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
        </Paragraph>
        <div style={{
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem"
        }}>
          <Tab 
            title="All Products" 
            id="all-products" 
            name="tabs"
            checked={filter === "all-products"}
            onChange={() => setFilter("all-products")}
          />
          <Tab 
            title="Available Now" 
            id="available-now" 
            name="tabs"
            checked={filter === "available-now"}
            onChange={() => setFilter("available-now")}
          />
        </div>
        <ListCard>
          {productList}
        </ListCard>
      </Section>
    </main>
  )
}