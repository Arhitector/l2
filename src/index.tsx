import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { ApolloProvider } from '@apollo/react-hooks';
import { I18nextProvider } from 'react-i18next';

import apolloClient from './apolloSetup';
import i18next from './translations/i18n';
import Routers from 'src/router';

import registerServiceWorker from "./workers/registerServiceWorker";

const rootEl = document.getElementById("root");

render(
    <ApolloProvider client={apolloClient}>
        <I18nextProvider i18n={i18next}>
            <React.Suspense fallback="loading">
                <AppContainer>
                    <Routers />
                </AppContainer>
            </React.Suspense>
        </I18nextProvider>
    </ApolloProvider>,
    rootEl
);

registerServiceWorker();
