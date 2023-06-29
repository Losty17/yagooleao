type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

const fontSizes = {
    1: "text-5xl",
    2: "text-4xl",
    3: "text-3xl",
    4: "text-2xl",
    5: "text-xl",
    6: "text-lg",    
} as const;

export default ({ level, className, children }: HeadingProps) => {
  const Heading = `h${level}` as keyof JSX.IntrinsicElements;

  return <Heading className={`font-black uppercase ${fontSizes[level]} ${className}`}>{children}</Heading>;
};
