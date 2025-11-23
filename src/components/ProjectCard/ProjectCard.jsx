export default function ProjectCard({ title, description, url, image }) {
  return (
    <article className="card p-6 bg-white border rounded-lg flex flex-col items-center">
      <h3 className="text-xl font-semibold">{title}</h3>
      <img src={image} alt={title} className="max-h-[200px] object-contain mt-2" />
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      {url && (
        <a className="mt-4 inline-block text-primary hover:underline hover:text-yellow-500" href={url} target="_blank" rel="noreferrer">Ver projeto →</a>
      )}
    </article>
  )
}