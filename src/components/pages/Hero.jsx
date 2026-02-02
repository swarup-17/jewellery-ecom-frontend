import { asset } from "../../assets/asset";

const categories = [
  { name: "EARRINGS", image: asset.pic1, alt: "Earrings" },
  { name: "RINGS", image: asset.pic2, alt: "Rings" },
  { name: "NECKLACES", image: asset.pic3, alt: "Necklaces" },
  { name: "BRACELETS", image: asset.pic4, alt: "Bracelets" },
  { name: "WATCHES", image: asset.pic5, alt: "Watches" },
  { name: "HOME", image: asset.pic6, alt: "Home" },
];
const collections = [
  { image: asset.collection1, alt: "Collection1" },
  { image: asset.collection2, alt: "Collection2" },
  { image: asset.collection3, alt: "Collection3" },
  { image: asset.collection4, alt: "Collection4" },
];
const sets = [
  { name: "Silver Jewelry", image: asset.silver, alt: "Silver" },
  { name: "Gold Jewelry", image: asset.jewellery, alt: "Jewelry" },
];

const experienceItems = [
  {
    id: 1,
    imageSrc: asset.book,
    imageAlt: "Booking",
    title: "Book An Appointment",
    description: "We’re happy to assist with in-store or virtual appointments.",
    buttonText: "Book Now",
  },
  {
    id: 2,
    imageSrc: asset.shipping,
    imageAlt: "Shipping",
    title: "Shipping & Returns",
    description: "Complimentary shipping and returns on all orders.",
    buttonText: "Learn More",
  },
  {
    id: 3,
    imageSrc: asset.atService,
    imageAlt: "At Your Service",
    title: "At Your Service",
    description: "Our client care experts are always here to help.",
    buttonText: "Contact Us",
  },
  {
    id: 4,
    imageSrc: asset.blueBox,
    imageAlt: "Blue Box",
    title: "Iconic Blue Box",
    description: "Your purchase comes wrapped in our Blue Box packaging.",
    buttonText: "Explore",
  },
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
          className="fixed top-0 left-0 bottom-0 w-full h-full object-cover -z-10"
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
                <div className="group overflow-hidden rounded-lg aspect-square cursor-pointer">
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

      <section className="relative bg-gray-100 py-5">
        <div className="text-center">
          <h2 className="scroll-m-20 text-5xl tracking-tight max-md:text-3xl mb-12">
            Brand Collections
          </h2>

          <div className="grid grid-cols-4 gap-x-4 gap-y-8 px-4  max-md:grid-cols-2">
            {collections.map((collection, id) => (
              <div key={id} className="text-center">
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

          <button className="mt-12 font-semibold tracking-wider rounded-full border-black border-1 py-3 px-8 hover:text-white hover:bg-black transition-colors cursor-pointer">
            VIEW ALL COLLECTIONS
          </button>
        </div>
      </section>

      <section className="relative bg-gray-100 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 px-4 md:grid-cols-2">
          {sets.map((set, id) => (
            <div key={id} className="text-center">
              <div className="group overflow-hidden rounded-lg aspect-square">
                <img
                  src={set.image}
                  alt={set.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                />
              </div>

              <h3 className="mt-4 text-2xl font-medium tracking-wide text-gray-800 md:text-3xl">
                {set.name}
              </h3>

              <button className="mt-4 rounded-full border-black border-1 py-3 px-8 text-sm font-semibold tracking-wider transition-colors hover:bg-black hover:text-white md:mt-6 md:text-base cursor-pointer">
                Shop Now
              </button>
            </div>
          ))}
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
            <button className="border-black border-1 text-black font-semibold py-3 px-8 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer">
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

      <section className="relative bg-white py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Our Brand Experience
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
              {experienceItems.map((item, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col items-center justify-between"
                >
                  <div className="group relative w-full overflow-hidden rounded-lg min-h-[100px] mb-4 sm:mb-6">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col items-center justify-around gap-3">
                    <h3 className="text-xl sm:text-2xl">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 max-w-xs">
                      {item.description}
                    </p>
                    <button className="mt-4 text-sm sm:text-base font-semibold  px-6 hover:border-b-2 hover:border-blue-400 cursor-pointer">
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
