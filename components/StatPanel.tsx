interface Props {
  number: string;
  label: string;
  sub: string;
}

export default function StatPanel({ number, label, sub }: Props) {
  return (
    <div className="rounded-2xl bg-feature-soft px-5 py-6">
      <div className="flex items-end gap-2">
        <span className="text-5xl font-bold leading-none text-feature sm:text-6xl">
          {number}
          <span className="text-2xl align-super sm:text-3xl">+</span>
        </span>
        <div className="pb-1">
          <p className="text-sm font-semibold text-feature">{label}</p>
          <p className="text-[11px] text-feature/70">{sub}</p>
        </div>
      </div>
    </div>
  );
}
