import './App.css';
import { Suspense, useState } from 'react';

import i18n from 'i18next';
import { initReactI18next, useTranslation , Trans } from 'react-i18next'




function App() {

  const {t} = useTranslation();
  const [count , setCount] = useState(1)

  const onChange = (event) => {
    console.log(event.target.value)
    i18n.changeLanguage(event.target.value)
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <Suspense fallback = "Loading...">
      <div className="App">
        <header>
          <h1>{t('welcome')}</h1>
          <p>
            <Trans components={{bold : <strong/>}}>
              sample
            </Trans>
          </p>
          <p>{t('times' , {count})}</p>
          <select name = 'language' onChange={onChange}>
            <option value="en">English</option>
            <option value="fr">Francais</option>
            <option value="es">Español</option>
          </select>
        </header>
      </div>
    </Suspense>
  );
}

export default App;
