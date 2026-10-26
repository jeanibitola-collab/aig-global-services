import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/divisions";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hi AIG Global Services, I'd like to make an enquiry.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}