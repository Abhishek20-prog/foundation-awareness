import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { galleryCategories } from "../data/ngoData";

const galleryImages = [
  // Education
  {
    id: "edu-1",
    category: "education",
    title: "Project Bachpanshala Remedial Class",
    desc: "Children gathering for learning and interactive sessions by InAmigos volunteers.",
    url: "https://www.inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg"
  },
  {
    id: "edu-2",
    category: "education",
    title: "Book & Kit Distribution",
    desc: "Distributing books, notebooks, and writing materials to local students.",
    url: "https://www.inamigosfoundation.org.in/public/storage/gallery/1743051485.jpg"
  },
  {
    id: "edu-3",
    category: "education",
    title: "Group Study Circle",
    desc: "Students discussing problems under the supervision of a mentor.",
    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop&ar=3:4"
  },
  {
    id: "edu-4",
    category: "education",
    title: "Creative Learning Sessions",
    desc: "Developing motor and creative skills through paper crafts and drawing.",
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop&ar=4:3"
  },
  {
    id: "edu-5",
    category: "education",
    title: "Digital Literacy Hour",
    desc: "Giving rural children hands-on exposure to basic computer skills.",
    url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop&ar=1:1"
  },
  {
    id: "edu-6",
    category: "education",
    title: "Evening Tuition Drive",
    desc: "Daily evening tutoring to help children catch up on their school curricula.",
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop&ar=16:10"
  },

  // Food
  {
    id: "food-1",
    category: "food",
    title: "Project SEVA Food Drive",
    desc: "Warm cooked meals and dry ration packs distributed to daily wage earners.",
    url: "https://www.inamigosfoundation.org.in/public/storage/slideshow/1738236132.jpg"
  },
  {
    id: "food-2",
    category: "food",
    title: "Community Seva Campaign",
    desc: "Sparsely populated slum outreach campaigns distributing basic dry grains.",
    url: "https://www.inamigosfoundation.org.in/public/storage/gallery/1743051466.jpg"
  },
  {
    id: "food-3",
    category: "food",
    title: "Warm Meal Serving",
    desc: "Serving hygienic and fresh food to street vendors and labor families.",
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop&ar=3:4"
  },
  {
    id: "food-4",
    category: "food",
    title: "Winter Blanket & Clothes Drive",
    desc: "Sharing warm blankets, woolens, and seasonal garments to ward off cold.",
    url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop&ar=4:3"
  },
  {
    id: "food-5",
    category: "food",
    title: "Dry Ration Kit Assembly",
    desc: "Assembling basic cooking essentials like rice, flour, oil, and lentils.",
    url: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&auto=format&fit=crop&ar=1:1"
  },
  {
    id: "food-6",
    category: "food",
    title: "On-Ground Slum Feeding",
    desc: "Direct outreach drives bringing meals to children in remote slum clusters.",
    url: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=800&auto=format&fit=crop&ar=16:10"
  },

  // Animal
  {
    id: "anim-1",
    category: "animal",
    title: "Project JEEV Stray Animal Feeding",
    desc: "Volunteers distributing healthy food and water to local street dogs.",
    url: "https://www.inamigosfoundation.org.in/public/storage/slideshow/1738235697.jpg"
  },
  {
    id: "anim-2",
    category: "animal",
    title: "Stray Nourishment & Feed",
    desc: "Distributing green fodder and grain mixtures for street cows in Chhattisgarh.",
    url: "https://www.inamigosfoundation.org.in/public/storage/gallery/1743051449.jpg"
  },
  {
    id: "anim-3",
    category: "animal",
    title: "Daily Puppy Feeding",
    desc: "Volunteers ensuring stray puppies get basic milk and nutrition feeds.",
    url: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=800&auto=format&fit=crop&ar=3:4"
  },
  {
    id: "anim-4",
    category: "animal",
    title: "Stray Dog Rescue Support",
    desc: "Assisting in safe veterinary transit for injured and sick stray dogs.",
    url: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=800&auto=format&fit=crop&ar=4:3"
  },
  {
    id: "anim-5",
    category: "animal",
    title: "Summer Water Bowls Initiative",
    desc: "Installing clean clay water bowls in public parks for stray animals.",
    url: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=800&auto=format&fit=crop&ar=1:1"
  },
  {
    id: "anim-6",
    category: "animal",
    title: "Cow Goshala Support",
    desc: "Coordinating feed stock distributions for community animal shelters.",
    url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop&ar=16:10"
  },

  // Environment
  {
    id: "env-1",
    category: "environment",
    title: "Project Prakriti Tree Plantation",
    desc: "A local plantation drive led by volunteers to restore green ecosystems.",
    url: "https://www.inamigosfoundation.org.in/public/storage/slideshow/1738236201.jpg"
  },
  {
    id: "env-2",
    category: "environment",
    title: "Urban Greenery Restoration",
    desc: "Reforestation work planting native saplings in Chhattisgarh parks.",
    url: "https://www.inamigosfoundation.org.in/public/storage/gallery/1743051438.jpg"
  },
  {
    id: "env-3",
    category: "environment",
    title: "Planting Native Saplings",
    desc: "Volunteers ensuring native plants are properly sowed and watered.",
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop&ar=3:4"
  },
  {
    id: "env-4",
    category: "environment",
    title: "Reforestation Campaign",
    desc: "Mass seed sowing campaigns conducted in deforested soil ranges.",
    url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop&ar=4:3"
  },
  {
    id: "env-5",
    category: "environment",
    title: "Plastic Cleanup Drive",
    desc: "Clearing plastic bottles and non-biodegradable waste from local parks.",
    url: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop&ar=1:1"
  },
  {
    id: "env-6",
    category: "environment",
    title: "Eco Awareness in Schools",
    desc: "Conducting talks to help kids understand waste sorting and recycling.",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop&ar=16:10"
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = filter === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="gallery"
      className="relative py-24 sm:py-32 px-6 bg-[#070a13] border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-[20%] left-[-10%] w-[35vw] h-[35vw] rounded-full glow-orb-emerald opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title details */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Media Gallery
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Our Work in Action
          </h2>
          <p className="text-slate-400 font-medium text-base leading-relaxed">
            A visual overview of our on-ground activities across Chhattisgarh, capturing moments of education, feeding drives, animal protection, and nature preservation.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === cat.id
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-white/5 border border-white/5 text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* CSS Columns Collage Layout (Pinterest / Masonry style) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setLightboxIndex(index)}
              className="break-inside-avoid relative rounded-3xl overflow-hidden cursor-zoom-in border border-white/5 shadow-lg bg-slate-950/40 mb-6 group transition-all duration-300 hover:border-emerald-500/30"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay Panel on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-widest bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/25 backdrop-blur-sm">
                    {img.category}
                  </span>
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">
                  {img.title}
                </h3>
                <p className="text-[10px] text-slate-400 font-semibold leading-normal">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="py-20 text-slate-500 text-sm font-semibold">
            No gallery images found in this category.
          </div>
        )}

      </div>

      {/* Lightbox Modal (Premium Popup Drawer) */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-[999] backdrop-blur-md flex flex-col items-center justify-center p-4">
          
          {/* Top Control Bar */}
          <div className="absolute top-4 inset-x-0 px-6 flex justify-between items-center text-white">
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest">
                Category: {filteredImages[lightboxIndex].category}
              </span>
              <span className="text-sm font-bold truncate max-w-[300px]">
                {filteredImages[lightboxIndex].title}
              </span>
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:rotate-90 transition-all duration-300"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white hidden sm:flex items-center justify-center focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="max-w-4xl max-h-[70vh] flex flex-col items-center justify-center">
            <img
              src={filteredImages[lightboxIndex].url}
              alt={filteredImages[lightboxIndex].title}
              className="max-w-full max-h-[65vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
            />
            {/* Caption */}
            <p className="text-slate-400 text-xs font-semibold text-center mt-4 max-w-lg leading-relaxed">
              {filteredImages[lightboxIndex].desc}
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white hidden sm:flex items-center justify-center focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Bottom Thumb Indicators / Mobile Navigation */}
          <div className="absolute bottom-6 flex items-center gap-4 text-white">
            <button onClick={handlePrev} className="sm:hidden px-4 py-2 bg-white/5 rounded-xl text-xs font-bold">
              Prev
            </button>
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">
              {lightboxIndex + 1} / {filteredImages.length}
            </span>
            <button onClick={handleNext} className="sm:hidden px-4 py-2 bg-white/5 rounded-xl text-xs font-bold">
              Next
            </button>
          </div>

        </div>
      )}
    </section>
  );
}
