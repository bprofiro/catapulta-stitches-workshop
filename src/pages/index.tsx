import Head from "next/head";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import * as themes from "../styles/themes";

type ThemeProps =
  | "catapulta_dark"
  | "catapulta_light"
  | "rocketseat_dark"
  | "rocketseat_light";

export default function Home() {
  const [currentTheme, setCurrentTheme] =
    useState<ThemeProps>("catapulta_light");

  const handleChangeTheme = (theme: ThemeProps) => {
    setCurrentTheme(theme);
  };

  useEffect(() => {
    document.body.className = themes[currentTheme];
  }, [currentTheme]);

  return (
    <>
      <Head>
        <title>Catapulta StitchesJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button
        variant="primary"
        onClick={() => handleChangeTheme("rocketseat_light")}
      >
        Rocketseat Light
      </Button>

      <Button
        variant="danger"
        onClick={() => handleChangeTheme("rocketseat_dark")}
      >
        Rocketseat Dark
      </Button>

      <Button
        variant="primary"
        onClick={() => handleChangeTheme("catapulta_light")}
      >
        Catapulta Light
      </Button>

      <Button
        variant="primary"
        onClick={() => handleChangeTheme("catapulta_dark")}
      >
        Catapulta Dark
      </Button>
    </>
  );
}
