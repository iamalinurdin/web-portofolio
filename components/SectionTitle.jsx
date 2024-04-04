import React from "react";

export default function SectionTitle({children, text = ''}) {
  return (
    <div className="mb-10 text-center">
      <h1 className="text-4xl font-bold">{children}</h1>
      <p className="text-xl mt-5">{text}</p>
    </div>
  )
}