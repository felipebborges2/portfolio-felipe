type Props = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export default function ProjectCard({ title, description, tags, link, repo }: Props) {
  return (
    <div className="card p-5 hover:translate-y-[-2px] transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-subtle">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {tags.map((t) => (
          <span key={t} className="rounded-md border border-border px-2 py-1 text-subtle">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {link && <a className="link-subtle" target="_blank" href={link}>Live</a>}
        {repo && <a className="link-subtle" target="_blank" href={repo}>GitHub</a>}
      </div>
    </div>
  );
}
