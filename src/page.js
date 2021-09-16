import React, { useEffect } from "react";
import data from "./snippets";
import { useParams } from "react-router-dom";
import { capitalize } from "./util";

const Page = () => {
  const { id } = useParams();
  const text = data[id] ?? "";
  useEffect(() => {
    window.hljs?.highlightAll({ language: "javascript", style: "agate" });
  });
  return (
    <section className="page">
      <h3>{capitalize(id)}</h3>
      <pre>
        <code className="language-js">{text}</code>
      </pre>
    </section>
  );
};

export default Page;
