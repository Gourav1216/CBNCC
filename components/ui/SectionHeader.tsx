interface SectionHeaderProps {
  badge?: string;
  badgeColor?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  badgeColor = "#4285F4",
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4`}
          style={{
            background: `${badgeColor}18`,
            color: badgeColor,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: badgeColor }}
          />
          {badge}
        </div>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-gray-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
