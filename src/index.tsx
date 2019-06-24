import * as React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";

import {I18nextProvider} from 'react-i18next';

import i18next from './translations/i18n';
import Routers from 'src/router';

import registerServiceWorker from "./webworkers/registerServiceWorker";

const rootEl = document.getElementById("root");

render(
    <I18nextProvider i18n={i18next}>
        <React.Suspense fallback="loading">
            <AppContainer>
                <Routers />
            </AppContainer>
        </React.Suspense>
    </I18nextProvider>,
    rootEl
);
registerServiceWorker();
