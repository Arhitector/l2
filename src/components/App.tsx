import * as React from "react";
import { useTranslation } from 'react-i18next';

export interface AppProps {
}

const App = (props) => {
    const { t } = useTranslation();
        return (
            <div className="app">
                <h1>{ t('welcome.title', { framework: "L2" }) }</h1>
                <h1>Hello World!</h1>
                <p>Foo to the barz</p>
            </div>
        );
    };

export default App;