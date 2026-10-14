import Reveal from "@/components/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
};

/** Shared section header: one spacing scale and one heading level for every section. */
export default function SectionHeading({ eyebrow, title, highlight, description }: Props) {
  return (
    <Reveal>
      <div className="mb-10 text-center">
        <p className="uppercase tracking-widest text-[#9b9b9b] text-sm">{eyebrow}</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-accent-fg">{highlight}</span>
            </>
          )}
        </h2>
        {description && (
          <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-[#9b9b9b] leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
