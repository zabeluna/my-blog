import navItems from "@/constants/nav-items";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full backdrop-blur">
      <div className="container flex max-w-screen-2xl h-28 items-center">
        <div className="flex justify-between w-full md:grid md:grid-cols-3">
          <span className="font-logo text-5xl">Iza</span>
          <nav className="flex items-center gap-5 sm:gap-12 text-md lg:gap-20 md:col-span-1 md:justify-center">
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className="font-semibold hover:opacity-65 transition-opacity duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
