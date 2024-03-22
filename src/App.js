import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";

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
      var parsedItem = JSON.parse(savedItem);
      if (parsedItem === "ru-RU") {
        lang = LOCALES.RUS;
      } else {
        lang = LOCALES.ENG;
      }
      console.log("parsedItem", parsedItem);
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
    console.log("lang", lang, JSON.stringify(lang));
    sessionStorage.setItem("lang", JSON.stringify(lang));
    setLanguage(lang === "ru-RU" ? LOCALES.RUS : LOCALES.ENG);
  };

  console.log("language", language, LOCALES.RUS);
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
          </Route>
        </Routes>
      </IntlProvider>
    </>
  );
}

export default App;
