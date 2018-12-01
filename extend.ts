import 'oidc-client';

declare module 'oidc-client' {
    export interface OidcClient {
        fooBarBaz();
    }
}
