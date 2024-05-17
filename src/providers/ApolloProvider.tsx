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
	const cache = new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					getVehicles: {
						merge(existing, incoming) {
							return incoming;
						},
					},
				},
			},
		},
	});

	const client = new ApolloClient({
		uri: '/api',
		cache: cache,
	});
	return <ApolloGQLProvider client={client}>{children}</ApolloGQLProvider>;
};
