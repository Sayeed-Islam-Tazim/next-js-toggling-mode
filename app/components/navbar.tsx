import Link from "next/link";
import ModeToggler from "./modeToggler";

const navbarLinks = [
  {
    id: 1,
    title: "Home",
    url: "/home",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 4,
    title: "Profile",
    url: "/profile",
  },
];

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between m-2 p-2">
      <Link href={"/"}>Taz</Link>
      <ul className="flex items-center gap-2">
        <ModeToggler />
        {navbarLinks.map((navbarLink) => {
          return (
            <li key={navbarLink.id}>
              <Link href={navbarLink.url}>{navbarLink.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
