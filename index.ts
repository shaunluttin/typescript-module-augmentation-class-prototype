import * as oidc from 'oidc-client';

const client = new oidc.OidcClient({});

client.fooBarBaz();
client.clearStaleState({} as any);