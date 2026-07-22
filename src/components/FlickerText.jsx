import React from "react";

export function FlickerText({ text, className = "", tag: Tag = "span", delay = 0 }) {
  return (
    <Tag className={className}>
      {text.split("").map((letter, i) => (
        <span
          key={i}
          className="flicker-letter"
          style={{
            animationDelay: `${delay + i * 0.50}s`,
            display: letter === " " ? "inline" : "inline-block",
          }}
        >
          {letter === " " ? " " : letter}
        </span>
      ))}
    </Tag>
  );
}

export default FlickerText;
