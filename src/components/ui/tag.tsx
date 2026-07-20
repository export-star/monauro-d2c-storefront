type TagProps = {
  children: string;
  tone?: "neutral" | "green" | "purple" | "orange";
};

const tones = {
  neutral: "border-black/10 bg-white text-neutral-700",
  green: "border-monauro-green/60 bg-monauro-green/35 text-neutral-900",
  purple: "border-monauro-purple/60 bg-monauro-purple/30 text-neutral-900",
  orange: "border-monauro-orange/50 bg-monauro-orange/10 text-neutral-900"
};

export function Tag({ children, tone = "neutral" }: TagProps) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}
