import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#1a1b1d]">
      <nav className="flex justify-center py-4 px-5">
        <ul className="flex gap-3">
          <li>
            <Link
              href={"/"}
              className="text-white hover:text-[#5a5959] transition-all duration-300"
            >
              Main
            </Link>
          </li>
          <li>
            <Link
              href={"/portfolio"}
              className="text-white hover:text-[#5a5959] transition-all duration-300"
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
