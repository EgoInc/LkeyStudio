import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Portfolio from "./components/Portfolio";

//Lang settings
import { IntlProvider } from "react-intl";
import { LOCALES } from "./lang/locales";
import { messages } from "./lang/messages";

function App() {
  const [language, setLanguage] = useState(() => {
    var savedItem = sessionStorage.getItem("lang");
    console.log("savedItem", savedItem);
    var lang;
    if (savedItem !== undefined && savedItem !== null) {
      if (savedItem === "ru-RU") {
        lang = LOCALES.RUS;
      } else {
        lang = LOCALES.ENG;
      }
    } else if (savedItem === undefined) {
      lang = LOCALES.RUS;
      sessionStorage.setItem("lang", JSON.stringify("ru-RU"));
    } else {
      lang = LOCALES.RUS;
      sessionStorage.setItem("lang", JSON.stringify("ru-RU"));
    }
    return lang;
  });

  const onLanguageChanged = (lang) => {
    sessionStorage.setItem("lang", lang);
    setLanguage(lang === "ru-RU" ? LOCALES.RUS : LOCALES.ENG);
  };

  return (
    <>
      <IntlProvider
        locale={language}
        messages={messages[language]}
        defaultLocale={language}
      >
        <Sidebar language={language} onLanguageChanged={onLanguageChanged} />

        <Routes>
          {/* Добавить изменение языка */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </IntlProvider>
    </>
  );
}

export default App;
