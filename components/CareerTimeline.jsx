export default function CareerTimeline({company, position, workingDate, summary, techStacks}) {
  return (
    <article>
      <h1 className="text-2xl font-bold">{company} {" - "} {position}</h1>
      <small>{workingDate}</small>
      <p className="mt-5">{summary}</p>
      <p className="font-semibold mt-5">Tech Stack</p>
      <ul className="list-disc ml-10">
        {techStacks.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </article>
  )
}