export function Button({ children, className = "" }) {
  return (
    <button className={"font-semibold p-2 px-4 rounded-md" + " " + className}>
      {children}
    </button>
  );
}

export function ButtonPrimary({ children, className }) {
  return (
    <Button className={"border border-white " + className}>{children}</Button>
  );
}
