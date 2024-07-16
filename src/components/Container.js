export default function Container({ children, className }) {
  return (
    <div className={"max-w-[90rem] mx-auto px-5 h-full" + " " + className}>
      {children}
    </div>
  );
}
