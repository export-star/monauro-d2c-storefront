export function ComparisonTable() {
  const rows = [
    ["Recovery logic", "Generic compression routine", "Calf-focused 15-minute routine with auto-off"],
    ["Compression pathway", "Varies by device", "Three groups of six massage heads with rhythmic inflation and deflation"],
    ["Intensity control", "Varies by device", "Level 1 Relax massage and Level 2 Deep massage"],
    ["Heat pathway", "Varies by device", "Heated surface support; temperature value needs final confirmation"],
    ["Power and charging", "Varies by device", "2000mAh lithium battery with Type-C charging"]
  ];

  return (
    <div className="overflow-hidden rounded-monauro border border-black/10 bg-white">
      <div className="grid bg-monauro-gray/55 p-5 text-sm font-bold uppercase text-neutral-600 md:grid-cols-3">
        <p>Dimension</p>
        <p>Ordinary compression device</p>
        <p>MONAURO direction</p>
      </div>
      {rows.map(([dimension, ordinary, monauro]) => (
        <div className="grid gap-3 border-t border-black/10 p-5 md:grid-cols-3" key={dimension}>
          <p className="font-semibold">{dimension}</p>
          <p className="text-neutral-600">{ordinary}</p>
          <p className="text-neutral-800">{monauro}</p>
        </div>
      ))}
    </div>
  );
}
