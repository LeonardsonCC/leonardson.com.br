import React from "react";
import HeadNext from "next/head";

const Head = () => {
  return (
    <HeadNext>
      <meta charSet="utf-8" />
      <title>Leonardson</title>
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link rel="stylesheet" type="text/css" href="/static/global.css" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="title" content="Leonardson" />
      <meta
        name="description"
        content="Meu website pessoal. Possui uma breve descrição sobre quem eu sou e meus projetos no GitHub."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://leonardson.wtf" />
      <meta property="og:title" content="Leonardson" />
      <meta
        property="og:description"
        content="Meu website pessoal. Possui uma breve descrição sobre quem eu sou e meus projetos no GitHub."
      />
      <meta property="og:image" content="https://leonardson.wtf/og.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://leonardson.wtf" />
      <meta property="twitter:title" content="Leonardson" />
      <meta
        property="twitter:description"
        content="Meu website pessoal. Possui uma breve descrição sobre quem eu sou e meus projetos no GitHub."
      />
      <meta property="twitter:image" content="https://leonardson.wtf/og.png" />
    </HeadNext>
  );
};

export default Head;
