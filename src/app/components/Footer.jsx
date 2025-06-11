import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between gap-3">
        <Link href="/" className="font-bold text-white">
          FIRA
        </Link>
        <p className="text-slate-600">
          © 2025 Firaol Admasu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
