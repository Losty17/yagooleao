type ContainerProps = {
  children: React.ReactNode;
  outerClassName?: string;
  sticky?: boolean;
  horizontal?: boolean;
  className?: string;
};

export default ({
  children,
  className,
  horizontal,
  outerClassName,
  sticky,
}: ContainerProps) => {
  return (
    <div
      className={`w-full ${sticky ? "sticky top-0" : ""} ${
        outerClassName || ""
      }`}
    >
      <div
        className={`container mx-auto flex ${
          horizontal ? "flex-row" : "flex-col"
        } ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
