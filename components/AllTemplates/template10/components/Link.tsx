import Link from "next/link";

const UnderlineLink = (props: {
  href: string;
  children: string | React.ReactNode;
}) => {
  return (
    <Link
      className="transition-all duration-200 ease-in-out mx-1 border-b border-b-slate-400 text-slate-600 hover:border-b-slate-600 hover:text-slate-400"
      href={props.href}
    >
      {props.children}
    </Link>
  );
};

export default UnderlineLink;
