import { useEffect, useRef, useState } from "react";

interface SpoilerProps {
  spoilerText: string;
  duration?: number;
  intervalsBetween?: number;
}

const scrambleText = (text: string) => {
  const chars = "░▒▓█▄▀■";
  return text
    .split("")
    .map((char) =>
      char === " " ? " " : chars[Math.floor(Math.random() * chars.length)],
    )
    .join("");
};

const firstShowText = (text: string) => {
  return text
    .split("")
    .map((char) => (char === " " ? " " : "█"))
    .join("");
};

export default function ({
  spoilerText,
  duration,
  intervalsBetween,
}: SpoilerProps) {
  const [text, setText] = useState<string>("");
  const [firstShow, setFirstShow] = useState<boolean>(true);
  const [restored, setRestored] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  if (!intervalsBetween) intervalsBetween = 30;
  if (!duration) duration = 500 * intervalsBetween;

  const scrambler = () => {
    intervalRef.current = setInterval(() => {
      setText(scrambleText(spoilerText));
    }, intervalsBetween);
  };

  const restorer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setRestored(true);
    setText(spoilerText);
  };

  useEffect(() => {
    scrambler();
    setFirstShow(false);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      onClick={restorer}
      data-restored={restored}
      className="data-[restored=false]:hover:cursor-pointer"
    >
      {firstShow ? firstShowText(spoilerText) : text}
    </span>
  );
}
