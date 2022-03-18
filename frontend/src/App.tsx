import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { Header, Content, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

const httpLink = createHttpLink({
  uri: 'http://localhost:8080/v1/graphql',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default App;
