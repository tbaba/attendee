import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

function App() {
  return (
    <div className="App">
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
