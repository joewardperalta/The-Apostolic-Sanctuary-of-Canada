export function Title({ children, className }) {
  return (
    <h1 className={"text-3xl font-bold mb-6 md:text-5xl " + className}>
      {children}
    </h1>
  );
}

export function Subtitle({ children, className }) {
  return <p className={"md:text-base " + className}>{children}</p>;
}

export function Heading({ children, className }) {
  return (
    <h2 className={"text-3xl font-semibold mb-4 md:text-4xl " + className}>
      {children}
    </h2>
  );
}
