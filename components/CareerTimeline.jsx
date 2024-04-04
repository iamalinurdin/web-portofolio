export default function CareerTimeline({company, position, workingDate, summary, techStacks}) {
  return (
    <article>
      <h1 className="text-2xl font-bold">{company}</h1>
      <h2 className="text-xl font-semibold">{position}</h2>
      <small>{workingDate}</small>
      <p>{summary}</p>
      <p>Tech Stack</p>
      <ul className="list-disc ml-10">
        {techStacks.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </article>
  )
}