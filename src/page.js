import React, { useEffect } from "react";
import data from "./texts";
import { useParams } from "react-router-dom";

const Page = () => {
  let { id } = useParams();
  const text = data[id] ?? "";
  useEffect(() => {
    window.hljs?.highlightAll({ language: "javascript", style: "agate" });
  });
  return (
    <>
      <pre>
        <code className="language-js">{text}</code>
      </pre>

      <i>
        Source:{" "}
        <a href="https://github.com/fbeline/design-patterns-JS">fbeline</a>
      </i>
    </>
  );
};

export default Page;
