export function Title({ children, className }) {
  return (
    <h1 className={"text-5xl font-bold mb-4 leading-tight " + className}>
      {children}
    </h1>
  );
}

export function Subtitle({ children, className }) {
  return <p className={"text-lg leading-relaxed " + className}>{children}</p>;
}

export function Paragraph({ children, className }) {
  return <p className={"leading-relaxed " + className}>{children}</p>;
}
