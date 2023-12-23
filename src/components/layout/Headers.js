import Link from "next/link";

export default function Header() {
    return (
      <header className="flex justify-between items-center">
        <Link className="text-primary font-semibold text-2xl" href={""}>
          {" "}
          PIZZA BAR
        </Link>
        <nav className="flex gap-8 items-center text-gray-500 font-semibold">
          <Link href={""}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
          <Link
            href={""}
            className="bg-primary text-white px-8 rounded-full py-2"
          >
            Login
          </Link>
        </nav>
      </header>
    );
}