export default function Container({ children, className }) {
  return (
    <div className={"max-w-[100rem] mx-auto px-5 h-full" + " " + className}>
      {children}
    </div>
  );
}
