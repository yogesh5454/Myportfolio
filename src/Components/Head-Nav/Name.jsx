"use client";
import { useEffect, useState } from "react";

const titles = [
  "Yogesh Sapkota",
  "a Frontend Developer",
  "a React Developer",
 "a Web Developer"
];

export default function Name() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const fullText = titles[index];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayAfterComplete = 1000;

  useEffect(() => {
    let timeout;

    if (!deleting && text.length < fullText.length) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (!deleting && text.length === fullText.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, delayAfterComplete);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, fullText]);

  return (
    <h1 className="text-5xl font-semibold mb-5">
      Hi, I am{" "}
      <span className="text-[#4ecca3] border-r-5 border-[#4ecca3] animate-pulse pr-2">
        {text}
      </span>
    </h1>
  );
}
