import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const footerCols = [
  {
    id: 1,
    category: "Home",
    links: ["FAQ", "Features", "Companies", "Testimonials"],
  },
  {
    id: 2,
    category: "Pricing",
    links: ["Plans", "Billing", "Free Trial", "Refunds"],
  },
  {
    id: 3,
    category: "About",
    links: ["Careers", "Our Story", "Contact", "Policy"],
  },
  {
    id: 4,
    category: "Community",
    links: ["Forum", "Stories", "Blog", "Support"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white border-b-8 border-black">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
          {footerCols.map((col) => (
            <div key={col.id} className="flex flex-col items-center">
              <p className="mb-4 text-lg font-semibold pb-2 border-b-2 border-white inline-block">
                {col.category}
              </p>
              <ul className="flex flex-col items-center gap-3">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a
                      className="text-white hover:text-white transition-colors text-sm"
                      href="#"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-around gap-5 p-5">
        <div className="flex items-center gap-x-5">
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Youtube className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
        <p>&copy; 2025 All rights reserved.</p>
      </div>

      <div>
        <h1 className="text-center text-9xl font-extrabold bg-gradient-to-b from-white to-black bg-clip-text text-transparent">
          HOUSE OF IRA
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
