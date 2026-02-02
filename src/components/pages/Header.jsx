import { useState } from "react";
import { cn } from "@/lib/utils";
import { asset } from "../../assets/asset";
import { Search, ShoppingBag, User, Menu, MapPin } from "lucide-react";

const navLinks = [
  { href: "/new", label: "NEW ARRIVALS" },
  { href: "/bestsellers", label: "BESTSELLERS" },
  {
    href: "/women-jewellery",
    label: "WOMEN'S JEWELLERY",
    columns: 2,
    image: {
      src: asset.gold,
      alt: "Shop All Women's",
      title: "Shop All Women's",
      description: "Discover our radiant collection of Women's jewellery.",
    },
    items: [
      {
        href: "/womens/necklaces",
        title: "Neckpieces & Sets",
        desc: "Explore statement necklaces and elegant matching sets.",
      },
      {
        href: "/womens/earrings",
        title: "Earrings",
        desc: "From timeless studs to dazzling drop earrings.",
      },
      {
        href: "/womens/rings",
        title: "Rings",
        desc: "Discover our collection of cocktail and stackable rings.",
      },
      {
        href: "/womens/bracelets",
        title: "Bracelets & Kada",
        desc: "Adorn your wrists with chic bracelets and traditional kadas.",
      },
      {
        href: "/womens/anklets",
        title: "Anklets",
        desc: "Elegant designs to complement any look.",
      },
    ],
  },
  {
    href: "/men-jewellery",
    label: "MEN'S JEWELLERY",
    columns: 1,
    image: {
      src: asset.silver2,
      alt: "Shop All Men's",
      title: "Shop All Men's",
      description: "Discover our radiant collection of Men's jewellery.",
    },
    items: [
      {
        href: "/men/chains",
        title: "Chains",
        desc: "Bold and classic chains in silver and gold tones.",
      },
      {
        href: "/men/bracelets",
        title: "Bracelets & Kada",
        desc: "Masculine designs that make a statement.",
      },
      {
        href: "/men/rings",
        title: "Rings",
        desc: "Rings and modern bands for everyday wear.",
      },
    ],
  },
  {
    href: "/special-collections",
    label: "SPECIAL COLLECTIONS",
    columns: 1,
    items: [
      {
        href: "/collections/pearl",
        title: "The Pearl Collection",
        desc: "Timeless elegance with lustrous freshwater pearls.",
      },
      {
        href: "/collections/crystal",
        title: "The Crystal Collection",
        desc: "Glimmering, precision-cut pieces that catch the light.",
      },
      {
        href: "/collections/watch",
        title: "The Watch Collection",
        desc: "Sophisticated timepieces for a polished look.",
      },
      {
        href: "/collections/anti-tarnish",
        title: "Anti-Tarnish Jewellery",
        desc: "Everyday wear that stays brilliant and bright.",
      },
    ],
  },
];

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navItemStyle =
    "font-medium border-b-2 border-transparent hover:border-current focus:border-current transition-colors duration-300 pb-0.5";

  return (
    <header
      className="top-0 left-0 w-full lg:pt-6 py-3 lg:pb-0 bg-transparent hover:bg-white text-white z-50 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav className="container mx-auto px-3 flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-6">
          <button
            aria-label="Menu"
            className={cn(
              "lg:hidden transition-colors",
              isHovered ? "text-black" : "text-white"
            )}
          >
            <Menu className="w-6 h-6" />
          </button>
          <button
            aria-label="Search"
            className={cn(
              "transition-colors",
              isHovered ? "text-black" : "text-white"
            )}
          >
            <Search className="w-6 h-6" />
          </button>
          <button
            aria-label="Location"
            className={cn(
              "hidden lg:block transition-colors",
              isHovered ? "text-black" : "text-white"
            )}
          >
            <MapPin className="w-6 h-6" />
          </button>
        </div>
        <a href="/" aria-label="Home">
          <img
            className={cn("w-auto", isHovered ? "h-20" : "h-20 ")}
            src={isHovered ? asset.invert2 : asset.logo}
            alt="Brand Logo"
            loading="lazy"
          />
        </a>
        <div className="flex items-center gap-3 md:gap-8">
          <button
            aria-label="User Account"
            className={cn(
              "transition-colors",
              isHovered ? "text-black" : "text-white"
            )}
          >
            <User className="w-6 h-6" />
          </button>
          <button
            aria-label="Shopping Bag"
            className={cn(
              "transition-colors",
              isHovered ? "text-black" : "text-white"
            )}
          >
            <ShoppingBag className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <div className="hidden lg:flex justify-center mt-3">
        <ul className="flex items-center gap-8">
          {navLinks.map((link) =>
            link.items ? (
              <DropdownMenu
                key={link.label}
                menu={link}
                isHovered={isHovered}
              />
            ) : (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(navItemStyle, isHovered && "text-black")}
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;

const DropdownMenu = ({ menu, isHovered }) => {
  const { label, href, items, columns = 1, image } = menu;

  return (
    <li className="relative group">
      <a
        href={href}
        className={cn(
          "cursor-pointer",
          "font-medium border-b-2 border-transparent hover:border-current focus:border-current transition-colors duration-300",
          isHovered && "text-black"
        )}
      >
        {label}
      </a>
      <div className="absolute top-full left-1/2 -translate-x-1/2 p-4 bg-white text-black shadow-lg rounded-lg hidden group-hover:flex z-10 gap-6">
        {image && (
          <div className="relative w-56 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
              <h3 className="font-semibold text-lg">{image.title}</h3>
              <p className="text-sm text-gray-200">{image.description}</p>
            </div>
          </div>
        )}
        <ul
          className={cn(
            "grid gap-3",
            columns === 2
              ? "w-[400px] md:w-[500px] lg:w-[550px] md:grid-cols-2"
              : "w-[300px]"
          )}
        >
          {items.map((item) => (
            <ListItem key={item.href} {...item} />
          ))}
        </ul>
      </div>
    </li>
  );
};

const ListItem = ({ className, title, desc, href }) => (
  <li>
    <a
      href={href}
      className={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100",
        className
      )}
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-gray-500">{desc}</p>
    </a>
  </li>
);
