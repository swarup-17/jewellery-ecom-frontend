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
    <footer className="bg-gray-50 text-black border-t border-gray-200">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {footerCols.map((col) => (
            <div key={col.id}>
              <p className="mb-4 text-lg font-semibold pb-2 border-b-2 border-black inline-block">
                {col.category}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a
                      className="text-gray-600 hover:text-black transition-colors text-sm"
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
        <p>&copy; 2025 All rights reserved.</p>

        <div className="flex items-center gap-x-5">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 transition-colors"
          >
            <Youtube className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
