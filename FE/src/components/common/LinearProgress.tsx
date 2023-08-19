import { FC, useEffect, useRef } from "react";

interface LinearProgressProps {
  value: number;
}

const LinearProgress: FC<LinearProgressProps> = ({ value }) => {
  const barRef = useRef<HTMLDivElement>(null);
  if (value > 100) value = 100;
  if (value < 0) value = 0;

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.width = `${value}%`;
    }
  });

  return (
    <div
      className={"fixed left-0 top-0 h-4 bg-green-300 z-[100] transition-all"}
      ref={barRef}
    ></div>
  );
};

export default LinearProgress;
