import React, { useEffect, useRef } from "react";

const Utterances = () => {
  const ref = useRef();

  useEffect(() => {
    const script = document.createElement("script");

    const config = {
      src: "https://utteranc.es/client.js",
      repo: "wontory/KAT-V2",
      "issue-term": "pathname",
      label: "Comments",
      theme: "github-light",
      crossOrigin: "anonymous",
      defer: true,
    };

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    setTimeout(() => {
      ref.current.append(script);
    }, 300);
  }, []);

  return (
    <div
      className="overflow-y-scroll scrollbar-hide"
      ref={ref}
      style={{ maxHeight: "calc(100vh - 229px)" }}
    />
  );
};

export default Utterances;
