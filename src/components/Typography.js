export function Title({ children, className }) {
  return (
    <h1
      className={
        "text-3xl font-bold mb-4 leading-tight md:text-5xl " + className
      }
    >
      {children}
    </h1>
  );
}

export function Subtitle({ children, className }) {
  return (
    <p className={"text-xs leading-relaxed md:text-lg " + className}>
      {children}
    </p>
  );
}

export function Paragraph({ children, className }) {
  return <p className={"leading-relaxed " + className}>{children}</p>;
}
