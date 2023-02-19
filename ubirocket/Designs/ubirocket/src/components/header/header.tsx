import { useRouter } from "next/router";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

type platformTypes = "facebook" | "twitter" | "linkedin";
function Header() {
  const router = useRouter();
  const handleShare = (platform: platformTypes) => {
    let url = window.location.href;
    console.log(url);

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${url}`);
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        );
        break;
      default:
        break;
    }
  };
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
        <button onClick={() => handleShare("facebook")}>
          <FaFacebook />
        </button>
        <button onClick={() => handleShare("twitter")}>
          <FaTwitter />
        </button>
        <button onClick={() => handleShare("linkedin")}>
          <FaLinkedin />
        </button>
      </ul>
    </nav>
  );
}

export default Header;
