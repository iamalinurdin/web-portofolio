export default function TechStack({techStacks}) {
  return (
    <ul className="list-disc ml-10">
      {techStacks.map((item, idx) => (
        <li className="text-sm md:text-md" key={idx}>{item}</li>
      ))}
    </ul>
  )
}