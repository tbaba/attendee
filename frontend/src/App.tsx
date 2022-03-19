import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { Header, Content, Footer } from "./components";

const styles: React.CSSProperties = {
  background: "linear-gradient(to bottom right, blue, pink)",
}
function App() {
  return (
    <div className="App h-screen text-slate-50" style={styles}>
      <Header />
      <Content />
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
