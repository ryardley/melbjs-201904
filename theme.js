// import { syntaxHighlighter } from "mdx-deck/themes";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { railscasts } from "react-syntax-highlighter/dist/styles/hljs";

export const getLanguage = className => {
  const match = /language-(\w*)/.exec(className || "language-javascript");
  let lang = "javascript";
  if (match.length > 1) {
    lang = match[1];
  }
  return lang;
};

export const pre = props => props.children;

export const code = props => {
  const language = getLanguage(props.className);

  return (
    <SyntaxHighlighter style={railscasts} language={language} {...props} />
  );
};

const syntaxHighlighter = {
  components: {
    pre,
    code
  }
};

const theme = {
  font: "system-ui, sans-serif",
  monospace: "Menlo, monospace",

  colors: {
    text: "#000",
    background: "white",
    link: "#07c",
    pre: "#f0f",
    preBackground: "#333",
    code: "#f0f"
  },
  css: {
    fontSize: "16px",

    textAlign: "center",
    "@media screen and (min-width:56em)": {
      fontSize: "32px"
    },
    "@media screen and (min-width:64em)": {
      fontSize: "48px"
    },
    "@media print": {
      fontSize: "40px"
    },
    "li > p": {
      margin: 0
    }
  },
  pre: {
    textAlign: "left"
  },
  ol: {
    textAlign: "left"
  },
  ul: {
    textAlign: "left"
  }
};

const blue = "#0af";

export default {
  ...theme,
  font: '"Avenir Next", system-ui, sans-serif',
  css: {
    fontWeight: 100
  },
  colors: {
    text: "#fff",
    background: "#111",
    blue,
    link: blue,
    pre: blue,
    preBackground: "#000",
    code: blue
  },
  heading: {
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    fontWeight: 100
  },
  quote: {
    fontWeight: 100
  },
  code: {
    fontSize: 26
  },
  ...syntaxHighlighter
};
