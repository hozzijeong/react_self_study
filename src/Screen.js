import React from "react";
import { useSetLang, useT,useLang } from "./context";
// import translations from "./translations";

const Screen = () => {
    const t = useT();
    const setLang = useSetLang();
    const lang = useLang();

    return (
      <>
        {console.log(t("안녕"), t("번역"),t("Hello"), t("Translate"),lang)}
        <h1> {lang === "en" ? t("Hello") : t("안녕")} </h1>
        <button onClick={ () => lang === "en" ? setLang("kr") : setLang("en")}>
          {lang === "en" ? t("Translate"): t("번역")}</button>
      </>
    );
};

export default Screen;