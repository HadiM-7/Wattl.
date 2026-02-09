import { cn } from "@/lib/utils";

interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
  className?: string;
}

export function WaveDivider({
  topColor,
  bottomColor,
  flip,
  className,
}: WaveDividerProps) {
  return (
    <div
      className={cn("relative -mt-px w-full overflow-hidden", className)}
      style={{ backgroundColor: bottomColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("block w-full", flip && "rotate-180")}
        preserveAspectRatio="none"
        style={{ height: "clamp(60px, 8vw, 120px)" }}
      >
        <path
          d="M0,0 L0,80 Q180,120 360,80 T720,80 T1080,80 T1440,80 L1440,0 Z"
          fill={topColor}
        />
      </svg>
    </div>
  );
}
