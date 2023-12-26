import Link from "next/link";

export default function Header() {
    return (
      <header className="flex justify-between items-center">
        <nav className="flex gap-8 items-center text-gray-500 font-semibold">
          <Link className="text-primary font-semibold text-2xl" href={"/"}>
            PIZZA BAR
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
        </nav>
        <nav className="flex gap-4 items-center text-gray-700 font-semibold">
          <Link href={"/login"}>Login</Link>
          <Link
            href={"register"}
            className="bg-primary text-white px-8 rounded-full py-2"
          >
            Register
          </Link>
        </nav>
      </header>
    );
}