export default function ToolsSection({
    title,
    tools,
}: {
    title: string;
    tools: {name: string, bg: string, color: string} [];
}) {
    return (
        <ul className="flex gap-4 items-center col-span-6 rounded-2xl bg-foreground p-10">
          <li className="text-white text-xl font-bold border-r pr-4">
            {title}
          </li>
          {tools.map((tool) => (<li
            key={tool.name}
            className={`flex items-center rounded-lg font-bold text-xl px-4 py-2`}
            style={{ backgroundColor: tool.bg, color: tool.color }}
            >
            {tool.name}
            </li>
            ))}
        </ul>
    );
}