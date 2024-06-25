import Link from "next/link";
import UnderlineLink from "./Link";

const Footer = () => {
  return (
    <div className="group col-span-2 p-8 row-span-1 flex flex-col justify-center space-y-8 bg-neutral-100 rounded-2xl text-slate-400">
      <div>
        This is a portfolio design/concept made by
        <UnderlineLink href="https://viditkhandelwal.com">
          Vidit Khandelwal
        </UnderlineLink>
        using dummy, hypothetical content. For more things like this, go to
        <UnderlineLink href="https://snippetopia.xyz">
          Snippetopia.
        </UnderlineLink>
        iPhone design and Keynote logo &copy; Apple Inc., Figma and Substance 3D
        Stager logo &copy; Adobe Inc.
      </div>
    </div>
  );
};

export default Footer;
