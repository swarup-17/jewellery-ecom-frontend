import { asset } from "../../assets/asset";
import { Button } from "../ui/button";

const categories = [
  { name: "EARRINGS", image: asset.earring, alt: "Earrings" },
  { name: "RINGS", image: asset.ring, alt: "Rings" },
  { name: "NECKLACES", image: asset.necklace, alt: "Necklaces" },
  { name: "BRACELETS", image: asset.bracelet, alt: "Bracelets" },
  { name: "WATCHES", image: asset.watch, alt: "Watches" },
  { name: "HOME", image: asset.home, alt: "Home" },
];
const collections = [
  { image: asset.collection1, alt: "Collection1" },
  { image: asset.collection2, alt: "Collection2" },
  { image: asset.collection3, alt: "Collection3" },
  { image: asset.collection4, alt: "Collection4" },
];

const Hero = () => {
  return (
    <main>
      <section className="min-h-screen flex flex-col justify-end">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src={asset.banner} type="video/mp4" />
          Video not available.
        </video>

        <div className="text-center pb-10">
          <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-blue-300 transition-colors cursor-pointer">
            Shop Now
          </button>
        </div>
      </section>

      <section className="bg-white py-15">
        <div className="text-center">
          <h2 className="scroll-m-20 text-5xl tracking-tight max-md:text-3xl mb-16">
            Shop By Category
          </h2>

          <div className="grid grid-cols-6 gap-x-4 gap-y-8 px-4 max-lg:grid-cols-3 max-md:grid-cols-2">
            {categories.map((category) => (
              <div key={category.name} className="text-center">
                <div className="group overflow-hidden rounded-lg aspect-square">
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 text-lg font-medium tracking-wide text-gray-800">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gray-100 py-15">
        <div className="text-center">
          <h2 className="scroll-m-20 text-5xl tracking-tight max-md:text-3xl mb-12">
            Brand Collections
          </h2>

          <div className="grid grid-cols-4 gap-x-4 gap-y-8 px-4 max-lg:grid-cols-3 max-md:grid-cols-2">
            {collections.map((collection) => (
              <div key={collection.name} className="text-center">
                <div className="group overflow-hidden rounded-lg min-h-[200px]">
                  <img
                    src={collection.image}
                    alt={collection.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>

          <button className="mt-12 font-semibold tracking-wider py-3 px-8 hover:border-b-2 hover:border-blue-400 transition-colors cursor-pointer">
            VIEW ALL COLLECTIONS
          </button>
        </div>
      </section>

      <section className="relative bg-white py-10">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-4">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Find your favorite designs at a Store Nearby
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience our collections firsthand and get personalized advice
              from our experts.
            </p>
            <button className="bg-black text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors">
              Find a Store
            </button>
          </div>

          <div className="w-full md:w-1/2">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-lg shadow-lg"
            >
              <source src={asset.nearbyStore} type="video/mp4" />
              Video not available.
            </video>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
