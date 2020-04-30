import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

const client = new ApolloClient({
    uri: ''
})






ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
,  document.getElementById('root')
);


