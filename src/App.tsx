import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChefHat,
  UtensilsCrossed,
  Flame,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // Height of the fixed navbar
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-stone-900/95 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center space-x-2 text-white hover:text-amber-400 transition-colors"
            >
              <Flame className="w-8 h-8" />
              <span className="font-display font-bold text-xl">Al-Sham</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["story", "menu", "preparation", "heritage"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-white hover:text-amber-400 transition-colors font-display"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <button className="px-6 py-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-display font-bold rounded-full transform transition-all hover:scale-105">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-amber-400 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMenuOpen ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col space-y-4 py-4">
              {["story", "menu", "preparation", "heritage"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-white hover:text-amber-400 transition-colors font-display text-lg"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <button className="px-6 py-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-display font-bold rounded-full transform transition-all hover:scale-105 w-full">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern Hero Section */}
      <motion.header
        id="hero"
        className="relative h-screen clip-diagonal overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Background Layers */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 transform transition-transform duration-1000 hover:scale-110"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-amber-400/30 rounded-full animate-float"></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 border-4 border-amber-400/30 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-40 left-1/4 w-40 h-40 border-4 border-amber-400/30 rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 z-10">
          <div className="space-y-8 animate-slide-up">
            {/* Logo Icon */}
            <div className="mx-auto w-24 h-24 bg-amber-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-8">
              <Flame className="w-12 h-12 text-amber-400" />
            </div>

            {/* Title Group */}
            <div className="space-y-4">
              <h1 className="text-7xl md:text-8xl font-display font-extrabold tracking-tight text-shadow">
                Al-Sham
              </h1>
              <p
                className="text-4xl md:text-5xl font-arabic mb-6 text-amber-200 animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                الشام
              </p>
            </div>

            {/* Tagline */}
            <p
              className="text-xl md:text-2xl font-display tracking-wide text-amber-100 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "1s" }}
            >
              Where ancient traditions meet modern culinary artistry
            </p>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection("menu")}
              className="mt-8 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-stone-900 font-display font-bold rounded-full transform transition-all hover:scale-105 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: "1.5s" }}
            >
              Explore Our Menu
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={() => scrollToSection("story")}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <div className="w-1 h-16 rounded-full bg-gradient-to-b from-amber-400 to-transparent"></div>
        </div>
      </motion.header>

      {/* Our Story Section */}
      <motion.section
        id="story"
        className="py-20 px-4 md:px-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed text-gray-700">
              For three generations, our family has preserved the authentic
              traditions of Middle Eastern kebab making. Our recipes, passed
              down through generations, capture the essence of traditional
              cooking methods and spice combinations that have been perfected
              over centuries.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              Every dish we serve carries with it not just flavor, but a story -
              a connection to our cultural heritage and the time-honored
              traditions of our ancestors.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80"
              alt="Traditional kebab preparation"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </motion.section>

      {/* Menu Section */}
      <motion.section
        id="menu"
        className="py-20 bg-stone-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
                variants={itemVariants}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-xl font-bold text-amber-800">
                    ${item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Traditional Preparation */}
      <motion.section
        id="preparation"
        className="py-20 px-4 md:px-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Traditional Preparation
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {preparationSteps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center transform transition-all duration-300 hover:scale-105"
              variants={itemVariants}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-800 rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Cultural Heritage */}
      <motion.section
        id="heritage"
        className="py-20 bg-amber-800 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Cultural Heritage
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed">
                Kebab is more than just food - it's a cultural institution that
                spans centuries and continents. From the royal courts of the
                Ottoman Empire to the bustling streets of modern Middle Eastern
                cities, kebab has been a cornerstone of our culinary heritage.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Our restaurant honors this rich history by maintaining
                traditional cooking methods and using authentic spice blends
                that have remained unchanged for generations.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img
                src="/spices.jpg  "
                alt="Traditional spices"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" /> +1 (555) 123-4567
                </p>
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" /> info@alsham.com
                </p>
                <p className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" /> 123 Mediterranean St,
                  Foodville
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Hours</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" /> Mon-Thu: 11am - 10pm
                </p>
                <p className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" /> Fri-Sat: 11am - 11pm
                </p>
                <p className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" /> Sun: 12pm - 9pm
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block hover:text-amber-500 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="block hover:text-amber-500 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="block hover:text-amber-500 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-700 text-center">
            <p>&copy; 2024 Al-Sham Kebab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const menuItems = [
  {
    name: "Adana Kebab",
    description:
      "Hand-minced lamb kebab seasoned with red pepper flakes, mounted on wide iron skewers and grilled over charcoal.",
    price: "24.99",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80",
  },
  {
    name: "Shish Tawook",
    description:
      "Marinated chicken breast pieces, skewered and grilled to perfection with our special blend of spices.",
    price: "22.99",
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80",
  },
  {
    name: "Mixed Grill Platter",
    description:
      "A generous assortment of our finest kebabs, including lamb, chicken, and beef varieties.",
    price: "34.99",
    image: "/platter.jpg",
  },
];

const preparationSteps = [
  {
    icon: <ChefHat className="w-8 h-8 text-white" />,
    title: "Spice Selection",
    description:
      "Our master chefs carefully select and blend premium spices following traditional recipes.",
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-white" />,
    title: "Marination",
    description:
      "Meats are marinated for 24 hours in our special blend of spices and aromatics.",
  },
  {
    icon: <ChefHat className="w-8 h-8 text-white" />,
    title: "Charcoal Grilling",
    description:
      "Each kebab is grilled over traditional charcoal to achieve perfect flavor and texture.",
  },
];

export default App;
