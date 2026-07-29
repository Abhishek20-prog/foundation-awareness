import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { galleryCategories } from "../data/ngoData";
import { useTheme } from "../context/ThemeContext";

const galleryImages = [
  // Education
  { id: "edu-1", category: "education", title: "Project Bachpanshala Remedial Class",    desc: "Children gathering for learning and interactive sessions by InAmigos volunteers.", url: "https://www.inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg" },
  { id: "edu-2", category: "education", title: "Book & Kit Distribution",                desc: "Distributing books, notebooks, and writing materials to local students.",            url: "https://www.inamigosfoundation.org.in/public/storage/gallery/1743051485.jpg" },
  { id: "edu-3", category: "education", title: "Group Study Circle",                     desc: "Students discussing problems under the supervision of a mentor.",                    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop" },
  { id: "edu-4", category: "education", title: "Creative Learning Sessions",             desc: "Developing motor and creative skills through paper crafts and drawing.",            url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" },
  { id: "edu-5", category: "education", title: "Digital Literacy Hour",                  desc: "Giving rural children hands-on exposure to basic computer skills.",                 url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop" },
  { id: "edu-6", category: "education", title: "Evening Tuition Drive",                  desc: "Daily evening tutoring to help children catch up on their school curricula.",       url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" },
  // Food
  { id: "food-1", category: "food", title: "Project SEVA Food Drive",                   desc: "Warm cooked meals and dry ration packs distributed to daily wage earners.",         url: "https://www.inamigosfoundation.org.in/public/storage/slideshow/1738236132.jpg" },
  { id: "food-2", category: "food", title: "Community Seva Campaign",                   desc: "Sparsely populated slum outreach campaigns distributing basic dry grains.",         url: "https://www.inamigosfoundation.org.in/public/storage/gallery/1743051466.jpg" },
  { id: "food-3", category: "food", title: "Warm Meal Serving",                         desc: "Serving hygienic and fresh food to street vendors and labor families.",             url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop" },
  { id: "food-4", category: "food", title: "Winter Blanket & Clothes Drive",            desc: "Sharing warm blankets, woolens, and seasonal garments to ward off cold.",          url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop" },
  { id: "food-5", category: "food", title: "Dry Ration Kit Assembly",                   desc: "Assembling basic cooking essentials like rice, flour, oil, and lentils.",          url: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&auto=format&fit=crop" },
  { id: "food-6", category: "food", title: "On-Ground Slum Feeding",                    desc: "Direct outreach drives bringing meals to children in remote slum clusters.",       url: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=800&auto=format&fit=crop" },
  // Animal
  { id: "anim-1", category: "animal", title: "Project JEEV Stray Animal Feeding",       desc: "Volunteers distributing healthy food and water to local street dogs.",             url: "https://www.inamigosfoundation.org.in/public/storage/slideshow/1738235697.jpg" },
  { id: "anim-2", category: "animal", title: "Stray Nourishment & Feed",                desc: "Distributing green fodder and grain mixtures for street cows in Chhattisgarh.",   url: "https://www.inamigosfoundation.org.in/public/storage/gallery/1743051449.jpg" },
  { id: "anim-3", category: "animal", title: "Daily Puppy Feeding",                     desc: "Volunteers ensuring stray puppies get basic milk and nutrition feeds.",            url: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=800&auto=format&fit=crop" },
  { id: "anim-4", category: "animal", title: "Stray Dog Rescue Support",                desc: "Assisting in safe veterinary transit for injured and sick stray dogs.",            url: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=800&auto=format&fit=crop" },
  { id: "anim-5", category: "animal", title: "Summer Water Bowls Initiative",           desc: "Installing clean clay water bowls in public parks for stray animals.",            url: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=800&auto=format&fit=crop" },
  { id: "anim-6", category: "animal", title: "Cow Goshala Support",                     desc: "Coordinating feed stock distributions for community animal shelters.",             url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop" },
  // Environment
  { id: "env-1", category: "environment", title: "Project Prakriti Tree Plantation",    desc: "A local plantation drive led by volunteers to restore green ecosystems.",          url: "https://www.inamigosfoundation.org.in/public/storage/slideshow/1738236201.jpg" },
  { id: "env-2", category: "environment", title: "Urban Greenery Restoration",          desc: "Reforestation work planting native saplings in Chhattisgarh parks.",              url: "https://www.inamigosfoundation.org.in/public/storage/gallery/1743051438.jpg" },
  { id: "env-3", category: "environment", title: "Planting Native Saplings",            desc: "Volunteers ensuring native plants are properly sowed and watered.",               url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop" },
  { id: "env-4", category: "environment", title: "Reforestation Campaign",              desc: "Mass seed sowing campaigns conducted in deforested soil ranges.",                  url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop" },
  { id: "env-5", category: "environment", title: "Plastic Cleanup Drive",               desc: "Clearing plastic bottles and non-biodegradable waste from local parks.",          url: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop" },
  { id: "env-6", category: "environment", title: "Eco Awareness in Schools",            desc: "Conducting talks to help kids understand waste sorting and recycling.",            url: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const { isDark } = useTheme();

  const filteredImages = filter === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape")      setLightboxIndex(null);
      if (e.key === "ArrowLeft")   setLightboxIndex((p) => (p === 0 ? filteredImages.length - 1 : p - 1));
      if (e.key === "ArrowRight")  setLightboxIndex((p) => (p === filteredImages.length - 1 ? 0 : p + 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  const sectionBg  = "var(--bg-secondary)";
  const borderClr  = "var(--border-color)";
  const titleColor = "var(--text-title)";
  const bodyColor  = "var(--text-body)";

  const catLabel = {
    education: "Bachpanshala",
    food:      "SEVA",
    animal:    "JEEV",
    environment: "Prakriti"
  };

  return (
    <section
      id="gallery"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
      style={{ backgroundColor: sectionBg, borderTop: `1px solid ${borderClr}` }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-12 max-w-2xl">
          <span className="section-eyebrow mb-4 block" style={{ color: "var(--grass)" }}>
            Field Documentation
          </span>
          <h2
            className="mb-4 tracking-tight"
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
              color: titleColor,
              lineHeight: 1.2
            }}
          >
            Our Work in the Field
          </h2>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: bodyColor, lineHeight: 1.65 }}>
            A visual record of on-ground activities across Chhattisgarh — education sessions,
            feeding drives, animal protection, and nature preservation.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {galleryCategories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-sm"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  letterSpacing: "0.08em",
                  backgroundColor: isActive ? "var(--grass)" : "var(--bg-card)",
                  color: isActive ? "#FFFFFF" : "var(--text-body)",
                  border: `1px solid ${isActive ? "var(--grass)" : borderClr}`
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setLightboxIndex(index)}
              className="break-inside-avoid editorial-figure cursor-zoom-in mb-4 group"
              style={{
                border: `1px solid ${borderClr}`,
                borderRadius: "4px",
                overflow: "hidden"
              }}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />

              {/* Natural dark overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-4 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to top, rgba(15,23,42,0.92) 55%, rgba(15,23,42,0.1) 100%)"
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="px-2 py-0.5"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--sun)",
                      backgroundColor: "rgba(15,23,42,0.7)",
                      border: "1px solid rgba(217,119,6,0.3)",
                      borderRadius: "2px"
                    }}
                  >
                    {catLabel[img.category] || img.category}
                  </span>
                  <ZoomIn className="w-4 h-4" style={{ color: "#F8FAFC" }} />
                </div>
                <h3
                  className="font-bold mb-1"
                  style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "0.875rem", color: "#F8FAFC" }}
                >
                  {img.title}
                </h3>
                <p
                  style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.7rem", color: "#CBD5E1", lineHeight: 1.5 }}
                >
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="py-20 text-center" style={{ color: "var(--text-muted)" }}>
            No gallery images found in this category.
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center p-4"
          style={{ backgroundColor: "rgba(15,23,42,0.96)" }}>

          {/* Top bar */}
          <div className="absolute top-4 inset-x-0 px-6 flex justify-between items-center">
            <div className="flex flex-col text-left">
              <span
                className="stamp-label mb-0.5"
                style={{ color: "var(--sun)" }}
              >
                {catLabel[filteredImages[lightboxIndex].category] || filteredImages[lightboxIndex].category}
              </span>
              <span
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "#F8FAFC",
                  maxWidth: "320px"
                }}
              >
                {filteredImages[lightboxIndex].title}
              </span>
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-3 rounded-sm transition-colors hover:opacity-70"
              style={{ backgroundColor: "rgba(248,250,252,0.08)", border: "1px solid rgba(248,250,252,0.12)" }}
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" style={{ color: "#F8FAFC" }} />
            </button>
          </div>

          {/* Prev */}
          <button
            onClick={() => setLightboxIndex((p) => (p === 0 ? filteredImages.length - 1 : p - 1))}
            className="absolute left-5 top-1/2 -translate-y-1/2 p-3 rounded-sm hidden sm:flex items-center transition-opacity hover:opacity-70"
            style={{ backgroundColor: "rgba(248,250,252,0.08)", border: "1px solid rgba(248,250,252,0.12)" }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" style={{ color: "#F8FAFC" }} />
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-[72vh] flex flex-col items-center">
            <img
              src={filteredImages[lightboxIndex].url}
              alt={filteredImages[lightboxIndex].title}
              className="max-w-full max-h-[65vh] object-contain"
              style={{ borderRadius: "2px" }}
            />
            <p
              className="text-center mt-4 max-w-lg"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "0.8125rem",
                color: "#94A3B8",
                lineHeight: 1.6
              }}
            >
              {filteredImages[lightboxIndex].desc}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={() => setLightboxIndex((p) => (p === filteredImages.length - 1 ? 0 : p + 1))}
            className="absolute right-5 top-1/2 -translate-y-1/2 p-3 rounded-sm hidden sm:flex items-center transition-opacity hover:opacity-70"
            style={{ backgroundColor: "rgba(248,250,252,0.08)", border: "1px solid rgba(248,250,252,0.12)" }}
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" style={{ color: "#F8FAFC" }} />
          </button>

          {/* Counter + mobile nav */}
          <div className="absolute bottom-5 flex items-center gap-5">
            <button
              onClick={() => setLightboxIndex((p) => (p === 0 ? filteredImages.length - 1 : p - 1))}
              className="sm:hidden px-4 py-2 text-xs font-bold"
              style={{ color: "#CBD5E1", border: "1px solid rgba(248,250,252,0.12)", borderRadius: "2px" }}
            >
              Prev
            </button>
            <span
              style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.7rem", fontWeight: 700, color: "#94A3B8", letterSpacing: "0.08em" }}
            >
              {lightboxIndex + 1} / {filteredImages.length}
            </span>
            <button
              onClick={() => setLightboxIndex((p) => (p === filteredImages.length - 1 ? 0 : p + 1))}
              className="sm:hidden px-4 py-2 text-xs font-bold"
              style={{ color: "#CBD5E1", border: "1px solid rgba(248,250,252,0.12)", borderRadius: "2px" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
