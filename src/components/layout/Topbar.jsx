import { Mail, Phone, MapPin } from "lucide-react";

export default function TopBar() {
    return (
        <div className="hidden bg-[#2b2724] text-white sm:block">
            <div className="mx-auto flex h-9 max-w-[1600px] items-center justify-between px-5 text-xs sm:px-9 lg:px-[5vw]">

                <div className="flex items-center gap-5">
                    <a
                        href="mailto:info@shreeramsangh.org"
                        className="flex items-center gap-1.5 transition-opacity hover:opacity-75"
                    >
                        <Mail size={13} />
                        <span>info@shreeramsangh.org</span>
                    </a>

                    <a
                        href="tel:+91XXXXXXXXXX"
                        className="flex items-center gap-1.5 transition-opacity hover:opacity-75"
                    >
                        <Phone size={13} />
                        <span>+91 XXXXX XXXXX</span>
                    </a>

                    <span className="hidden items-center gap-1.5 md:flex">
                        <MapPin size={13} />
                        <span>Lucknow, Uttar Pradesh</span>
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    <span>Follow us</span>

                    <a href="#" aria-label="Facebook">
                        Facebook
                    </a>

                    <a href="#" aria-label="Instagram">
                        Instagram
                    </a>
                </div>

            </div>
        </div>
    );
}