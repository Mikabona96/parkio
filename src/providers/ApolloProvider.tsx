'use client';
import React, { FC } from 'react';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider as ApolloGQLProvider,
} from '@apollo/client';

export const ApolloProvider: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const client = new ApolloClient({
		uri: '/api',
		cache: new InMemoryCache(),
	});
	return <ApolloGQLProvider client={client}>{children}</ApolloGQLProvider>;
};
