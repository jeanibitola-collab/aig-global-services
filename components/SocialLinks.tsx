import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { COMPANY } from "@/lib/site";

const networks = [
  { key: "instagram", label: "Instagram", Icon: FaInstagram },
  { key: "facebook", label: "Facebook", Icon: FaFacebookF },
  { key: "x", label: "X (Twitter)", Icon: FaXTwitter },
  { key: "linkedin", label: "LinkedIn", Icon: FaLinkedinIn },
] as const;

export default function SocialLinks() {
  const items = networks.filter((n) => COMPANY.socials[n.key]);

  // Until links are added, show the handle as text
  if (items.length === 0) {
    return <p className="text-sm">Instagram · Facebook · X · LinkedIn: @aigglobalservices</p>;
  }

  return (
    <div className="flex gap-3">
      {items.map(({ key, label, Icon }) => (
        <a
          key={key}
          href={COMPANY.socials[key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-green"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}