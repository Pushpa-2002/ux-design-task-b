export default function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="mb-3 text-sm text-white/60">{children}</p>;
}
