import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ocbvbb1txq01xx04azay87/master',
    cache: new InMemoryCache()
})