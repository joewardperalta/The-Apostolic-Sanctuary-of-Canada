export function Button({ children, className = "" }) {
  return (
    <button className={"font-semibold p-2 px-6 rounded-md" + " " + className}>
      {children}
    </button>
  );
}

export function ButtonPrimary({ children, className }) {
  return (
    <Button className={"border border-white bg-red-600 " + className}>
      {children}
    </Button>
  );
}

export function ButtonSecondary({ children, className }) {
  return (
    <Button className={"border border-white " + className}>{children}</Button>
  );
}
