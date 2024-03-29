import { useHeader } from "@/hooks/hooks";
import { useRouter } from "next/router";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Header() {
  const router = useRouter();
  const { handleShare } = useHeader();
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
        <button aria-label="facebook" onClick={() => handleShare("facebook")}>
          <FaFacebook />
        </button>
        <button aria-label="twitter" onClick={() => handleShare("twitter")}>
          <FaTwitter />
        </button>
        <button aria-label="linkedin" onClick={() => handleShare("linkedin")}>
          <FaLinkedin />
        </button>
      </ul>
    </nav>
  );
}

export default Header;
