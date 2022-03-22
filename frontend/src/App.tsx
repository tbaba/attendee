import React from "react";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { Index } from "./components";
import { About } from "./components/About";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const styles: React.CSSProperties = {
  background: "linear-gradient(to bottom right, blue, pink)",
};
function App() {
  return (
    <div className="App h-screen text-slate-50" style={styles}>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

const httpLink = createHttpLink({
  uri: "http://localhost:8080/v1/graphql",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default App;
