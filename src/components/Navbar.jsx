import React from "react";
import clsx from "clsx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const nav_menu = [
    // { id: 1, name: "About", link: "#about", emoji: "🧑‍💻" },
    { id: 2, name: "Skills", link: "#skills", emoji: "💻" },
    { id: 3, name: "Projects", link: "#projects", emoji: "📁" },
    // { id: 4, name: "Experience", link: "#experience", emoji: "💼" },
    { id: 5, name: "Education", link: "#education", emoji: "🎓" },
  ];

  return (
    <div className="sticky top-0 backdrop-blur-lg bg-primary z-50 flex justify-between items-center px-6 py-4">
      {/* Logo */}
      <div className="text-white text-xl font-bold cursor-pointer">
        Vineet Raj
      </div>

      {/* Hamburger Menu */}
      <div className="sm:hidden flex items-center">
        <span
          className="cursor-pointer active:rotate-45 transition-all duration-150"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {!openMenu ? (
            <img src="/images/open_menu.png" alt="open" className="h-6 w-6" />
          ) : (
            <img src="/images/close_menu.png" alt="close" className="h-6 w-6" />
          )}
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex gap-6 items-center">
        {nav_menu.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="text-white font-semibold hover:text-blue-500 active:scale-90 px-2 py-1 rounded-sm"
          >
            {item.emoji} {item.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu */}
      <nav
        className={clsx(
          "absolute left-0 w-full top-16 flex flex-col bg-primary opacity-100 transition-all duration-300 py-4",
          !openMenu && "hidden"
        )}
      >
        {nav_menu.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="text-white font-semibold hover:text-blue-500 active:scale-90 px-6 py-2"
            onClick={() => setOpenMenu(false)} // Close the menu after selecting a link
          >
            {item.emoji} {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
