import { classNames } from "@/utils";

export default ({
  children,
  className,
  colorScheme = "primary",
  ...props
}: {
  children: React.ReactNode;
  colorScheme?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={classNames(
        "flex items-center justify-center",
        "px-4 py-2",
        "rounded-md",
        colorScheme === "primary"
          ? "bg-carbon text-marble"
          : "bg-marble text-carbon",
        "focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
