export default (...args: (string | undefined)[]) =>
  args.filter(Boolean).join(" ");
