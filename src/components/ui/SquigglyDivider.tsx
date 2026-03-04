interface SquigglyDividerProps {
  color?: string;
  bg?: string;
  flip?: boolean;
}

export function SquigglyDivider({
  color = "#1A1A1A",
  bg = "transparent",
  flip = false,
}: SquigglyDividerProps) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 18,
        background: bg,
        transform: flip ? "scaleY(-1)" : "none",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 20"
        preserveAspectRatio="none"
        className="block w-full"
        style={{ height: 20 }}
      >
        <path
          d="M0 10 C50 4, 100 16, 150 10 C200 4, 250 16, 300 10 C350 4, 400 16, 450 10 C500 4, 550 16, 600 10 C650 4, 700 16, 750 10 C800 4, 850 16, 900 10 C950 4, 1000 16, 1050 10 C1100 4, 1150 16, 1200 10"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
