import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <nav className="absolute py-2 w-full">
      <ul className="flex justify-center gap-x-4 text-white">
        <li
          className="cursor-pointer text-sm hover:font-medium"
          onClick={() => router.push("/")}
        >
          Launches
        </li>
        <li
          className="cursor-pointer text-sm hover:font-medium"
          onClick={() => router.push("/countdown")}
        >
          Countdown
        </li>
      </ul>
    </nav>
  );
}

export default Header;
