import TechStack from "./TechStack";

export default function CareerTimeline({company, position, workingDate, summary, techStacks}) {
  return (
    <article>
      <h1 className="text-2xl md:text-3xl font-bold">{company} {" - "} {position}</h1>
      <small>{workingDate}</small>
      <p className="text-sm md:text-lg mt-5">{summary}</p>
      <p className="font-semibold mt-5">Tech Stack</p>
      <TechStack techStacks={techStacks} />
    </article>
  )
}