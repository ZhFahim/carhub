import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-5 flex flex-col text-black-100 border-t border-gray-100">
      <div className="px-6 py-10 flex flex-wrap gap-5 justify-between max-md:flex-col sm:px-16">
        <div className="flex flex-col gap-6 justify-start items-start">
          <Image
            src="/logo.svg"
            alt="CarHub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            CarHub 2023 <br /> All rights reserved &copy;
          </p>
        </div>
        <div className="footer_links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer_link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 px-6 py-10 flex flex-wrap justify-between items-center border-t border-gray-100 sm:px-16">
        <p>@2023 CarHub. All Rights Reserved</p>
        <div className="footer_copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
