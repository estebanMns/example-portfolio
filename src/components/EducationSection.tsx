
export default function EducationSection({education}: any) {
    return (
        <section className="flex flex-col gap-4 items-center col-span-6 row-span-3 rounded-2xl bg-foreground p-10">{Object.values(education).map((e:any) => (
            <article
          key={e.title}
          className="flex items-center justify-between w-full border-b border-b-grey pb-8"
        >
          <span className="flex flex-col">
            <h2 className="text-white text-3xl font-bold">{e.title}</h2>
            <p className="text-grey text-lg">{e.field}</p>
            <p className="text-grey text-sm">{e.location}</p>
          </span>
          <span className="bg-background rounded-lg text-white text-sm p-4">
            {e.period}
          </span>
        </article>
        ))}
          
        </section>

    );
} 