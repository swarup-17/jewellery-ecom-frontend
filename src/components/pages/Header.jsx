import { cn } from "@/lib/utils";
import { asset } from "../../assets/asset";
import { Search, ShoppingBag, User, Menu, MapPin } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const Header = () => {
  const navItemStyle =
    "font-medium border-b-2 border-transparent hover:border-current focus:border-current transition-colors duration-300 pb-1";
  return (
    <header className="top-0 left-0 w-full pt-8 bg-transparent hover:bg-white hover:text-black text-white z-50">
      <nav className="flex justify-around items-center">
        <div className="flex items-start md:gap-8 sm:gap-3 gap-2">
          <button className="lg:hidden ml-2">
            <Menu className="w-6 h-6 cursor-pointer" />
          </button>
          <button>
            <Search className="w-6 h-6 cursor-pointer" />
          </button>
          <button>
            <MapPin className="w-6 h-6 cursor-pointer" />
          </button>
        </div>
        <h1 className="scroll-m-20 text-center lg:text-7xl text-3xl tracking-tight text-balance">
          ECAS & CO.
        </h1>

        <div className="flex items-end md:gap-8 sm:gap-3 gap-2">
          <User className="w-6 h-6 cursor-pointer" />
          <ShoppingBag className="w-6 h-6 cursor-pointer" />
        </div>
      </nav>

      <div className="hidden lg:flex justify-center mt-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className={navItemStyle}>
                HIGH JEWELRY
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className={navItemStyle}>
                JEWELRY
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(navItemStyle, "cursor-pointer")}
              >
                FINE SILVER
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-screen max-w-none left-0">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] mx-auto">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a className="relative group flex h-full w-full select-none flex-col justify-end overflow-hidden rounded-md p-6 no-underline outline-none focus:shadow-md">
                        <img
                          src={asset.allJewellery}
                          alt="Pure Silver Collection"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="relative z-10">
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Pure Silver Collection
                          </div>
                          <p className="text-sm leading-tight text-gray-200">
                            Crafted with 92.5% pure silver for lasting beauty.
                          </p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem title="Silver Chains" href="#">
                    Elegant and timeless chains for every occasion.
                  </ListItem>
                  <ListItem title="Silver Rings" href="#">
                    Discover our collection of stunning silver rings.
                  </ListItem>
                  <ListItem title="Silver Bracelets" href="#">
                    Adorn your wrists with beautifully crafted bracelets.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(navItemStyle, "cursor-pointer")}
              >
                FINE GOLD
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-screen max-w-none left-0">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] mx-auto">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a className="relative group flex h-full w-full select-none flex-col justify-end overflow-hidden rounded-md p-6 no-underline outline-none focus:shadow-md">
                        <img
                          src={asset.gold}
                          alt="9KT Fine Gold Collection"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="relative z-10">
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            9KT Fine Gold
                          </div>
                          <p className="text-sm leading-tight text-gray-200">
                            Discover our radiant collection of 9KT gold
                            jewellery.
                          </p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem title="Gold Necklaces" href="#">
                    Luxurious 9KT gold necklaces to elevate your style.
                  </ListItem>
                  <ListItem title="Gold Earrings" href="#">
                    From classic studs to modern hoops.
                  </ListItem>
                  <ListItem title="Gold Chains" href="#">
                    Timeless gold chains for everyday elegance.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(navItemStyle, "cursor-pointer")}
              >
                FINE WATCHES
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-screen max-w-none left-0">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] mx-auto">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a className="relative group flex h-full w-full select-none flex-col justify-end overflow-hidden rounded-md p-6 no-underline outline-none focus:shadow-md">
                        <img
                          src={asset.karwaChauth}
                          alt="Diwali Special Collection"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="relative z-10">
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Diwali Specials
                          </div>
                          <p className="text-sm leading-tight text-gray-200">
                            Celebrate in style with our exclusive festive
                            designs.
                          </p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem title="Festival Collection" href="#">
                    Shine bright during the festive season.
                  </ListItem>
                  <ListItem title="Wedding Collection" href="#">
                    Exquisite pieces for your special day.
                  </ListItem>
                  <ListItem title="Gifts for Her" href="#">
                    The perfect gift to show you care.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#" className={navItemStyle}>
                GIFTS
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;

const ListItem = ({ className, title, children, href, ref, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
