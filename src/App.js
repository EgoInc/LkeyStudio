import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

//Lang settings
import { IntlProvider } from 'react-intl';
import { LOCALES } from './lang/locales';
import { messages } from './lang/messages';

function App() {

  const [language, setLanguage] = useState(() => {
    const locale = navigator.language;
    if (locale === "ru-RU") {
    //   sessionStorage.setItem("lang", "ru-RU");
    //   return LOCALES.RUS
    // } else {
      sessionStorage.setItem("lang", "eng-Eng");
      return LOCALES.ENG
    }
  })

  console.log(language)
  return (
    <>
    <IntlProvider locale ={language} messages={messages[language]} defaultLocale={LOCALES.ENG}>

      <Routes>
        {/* Добавить изменение языка */}
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    
    </IntlProvider>
    </>
  );
}

export default App;
