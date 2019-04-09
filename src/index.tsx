import * as React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";

import {I18nextProvider} from 'react-i18next';

import i18next from './translations/i18n';

import App from "./components/App";

const rootEl = document.getElementById("root");

render(
    <I18nextProvider i18n={i18next}>
        <React.Suspense fallback="loading">
            <AppContainer>
                <App/>
            </AppContainer>
        </React.Suspense>
    </I18nextProvider>,
    rootEl
);
