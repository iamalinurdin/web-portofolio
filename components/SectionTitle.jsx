import React from "react";

export default function SectionTitle({children, text = ''}) {
  return (
    <div className="mb-10 text-center">
      <h1 className="text-3xl md:text-4xl font-bold">{children}</h1>
      <p className="text-sm md:text-xl mt-5">{text}</p>
    </div>
  )
}