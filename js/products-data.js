/**
 * Sunglasses & Fashion Accessories Store
 * Comprehensive Products Database
 */

const PRODUCTS_DATA = [
  // ================= SUNGLASSES =================
  {
    id: "sg-1",
    name: "AeroGold Titanium Aviator",
    category: "sunglasses",
    subCategory: "Aviator",
    gender: "unisex",
    brand: "Ray-Ban",
    price: 189.0,
    originalPrice: 229.0,
    discount: "17% OFF",
    rating: 4.9,
    reviewsCount: 128,
    isNew: true,
    isTrending: true,
    isBestSeller: true,
    isFeatured: true,
    image: "images/products/sg-1.jpg",
    gallery: [
      "images/products/sg-1.jpg"
    ],
    colors: [
      { name: "Gold / G-15 Green", code: "#c5a059" },
      { name: "Matte Black / Polar Grey", code: "#1a1a1a" },
      { name: "Silver / Gradient Blue", code: "#a8b5c2" }
    ],
    shortDesc: "Timeless military-inspired aviator frames hand-forged from ultralight Japanese titanium with crystal polarized lenses.",
    description: "The AeroGold Titanium Aviator delivers unmatched optical precision and lightweight endurance. Engineered with precision hinge assemblies, comfortable hypoallergenic silicone nose pads, and 100% UV400 polarized mineral glass lenses that filter 99.9% of reflective glare while maintaining true color spectrum integrity.",
    specs: {
      "Frame Type": "Full Rim Teardrop Aviator",
      "Frame Material": "High-Grade Japanese Titanium",
      "Lens Type": "Polarized Mineral Crystal G-15",
      "UV Protection": "UV400 / 100% UVA & UVB Shield",
      "Lens Width": "58 mm",
      "Bridge Width": "14 mm",
      "Temple Length": "140 mm",
      "Weight": "19.5 grams",
      "Face Shape Match": "Oval, Square, Heart, Diamond"
    },
    inStock: true
  },
  {
    id: "sg-2",
    name: "Riviera Tortoise Wayfarer",
    category: "sunglasses",
    subCategory: "Wayfarer",
    gender: "unisex",
    brand: "Persol",
    price: 165.0,
    originalPrice: 195.0,
    discount: "15% OFF",
    rating: 4.8,
    reviewsCount: 94,
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    isFeatured: true,
    image: "images/products/sg-2.jpg",
    gallery: [
      "images/products/sg-2.jpg"
    ],
    colors: [
      { name: "Havana Tortoise / Brown", code: "#6d4c41" },
      { name: "Onyx Black / Dark Smoke", code: "#212121" },
      { name: "Amber Horn / Warm Olive", code: "#bcaaa4" }
    ],
    shortDesc: "Handcrafted Italian acetate wayfarer featuring distinctive 5-barrel German hinges and vintage warm lenses.",
    description: "Channel iconic mid-century Riviera sophistication. Cut from premium block cellulose acetate from Mazzucchelli 1849, hand-tumbled for 72 hours for an ultra-lustrous bevel edge, and fitted with anti-reflective coated gradient lenses.",
    specs: {
      "Frame Type": "Hand-Cut Retro Square Wayfarer",
      "Frame Material": "Mazzucchelli Cellulose Acetate",
      "Lens Type": "CR-39 Anti-Reflective Gradient",
      "UV Protection": "UV400 Category 3 Filtering",
      "Lens Width": "52 mm",
      "Bridge Width": "20 mm",
      "Temple Length": "145 mm",
      "Weight": "34.0 grams",
      "Face Shape Match": "Round, Oval, Oblong"
    },
    inStock: true
  },
  {
    id: "sg-3",
    name: "Monaco Oversized Cat-Eye",
    category: "sunglasses",
    subCategory: "Cat-Eye",
    gender: "women",
    brand: "Gucci",
    price: 245.0,
    originalPrice: 290.0,
    discount: "16% OFF",
    rating: 4.9,
    reviewsCount: 168,
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    isFeatured: true,
    image: "images/products/sg-3.jpg",
    gallery: [
      "images/products/sg-3.jpg"
    ],
    colors: [
      { name: "Gloss Jet Black / Charcoal", code: "#111111" },
      { name: "Ivory Pearl / Gradient Sepia", code: "#e8dfd8" },
      { name: "Burgundy Wine / Rose Smoke", code: "#5c1d2e" }
    ],
    shortDesc: "Dramatic flared cat-eye frames with sculpted architectural cheek lines and gold-foil temple accents.",
    description: "Designed for effortless glamour, the Monaco Cat-Eye elevates high-street fashion with striking upswept angles, rich hand-beveled acetate edges, and signature micro-inlaid gilded emblems along the contoured temples.",
    specs: {
      "Frame Type": "Dramatic Sculpted Cat-Eye",
      "Frame Material": "Bio-Based Premium Acetate",
      "Lens Type": "Shatterproof Nylon Gradient Lenses",
      "UV Protection": "100% UVA/UVB Block Category 3",
      "Lens Width": "55 mm",
      "Bridge Width": "18 mm",
      "Temple Length": "142 mm",
      "Weight": "38.2 grams",
      "Face Shape Match": "Round, Heart, Oval, Diamond"
    },
    inStock: true
  },
  {
    id: "sg-4",
    name: "Bohemian Amber Round Shades",
    category: "sunglasses",
    subCategory: "Round",
    gender: "unisex",
    brand: "Tom Ford",
    price: 175.0,
    originalPrice: 210.0,
    discount: "17% OFF",
    rating: 4.7,
    reviewsCount: 82,
    isNew: false,
    isTrending: false,
    isBestSeller: false,
    isFeatured: false,
    image: "images/products/sg-4.jpg",
    gallery: [
      "images/products/sg-4.jpg"
    ],
    colors: [
      { name: "Antique Bronze / Warm Amber", code: "#8d6e63" },
      { name: "Rose Gold / Sunset Peach", code: "#d7ccc8" }
    ],
    shortDesc: "Fine-gauge circular wire frames inspired by 70s rock aesthetics with warm high-contrast tinted optics.",
    description: "Crafted for free spirits and creative visionaries, these round metal wire sunglasses deliver subtle vintage warmth and razor-sharp silhouette aesthetics, finished with hand-spun filigree temple engravings.",
    specs: {
      "Frame Type": "Filigree Wire Round",
      "Frame Material": "Stainless Steel & Monel Alloy",
      "Lens Type": "High-Contrast Polycarbonate Amber",
      "UV Protection": "UV400 Optical Protection",
      "Lens Width": "50 mm",
      "Bridge Width": "21 mm",
      "Temple Length": "145 mm",
      "Weight": "22.0 grams",
      "Face Shape Match": "Square, Rectangle, Angular"
    },
    inStock: true
  },
  {
    id: "sg-5",
    name: "Apex Polarized Shield Shades",
    category: "sunglasses",
    subCategory: "Sport Shield",
    gender: "men",
    brand: "Oakley",
    price: 210.0,
    originalPrice: 250.0,
    discount: "16% OFF",
    rating: 4.9,
    reviewsCount: 215,
    isNew: true,
    isTrending: true,
    isBestSeller: true,
    isFeatured: true,
    image: "images/products/sg-5.jpg",
    gallery: [
      "images/products/sg-5.jpg"
    ],
    colors: [
      { name: "Matte Carbon / Fire Iridium", code: "#37474f" },
      { name: "Electric Blue / Ice Polar", code: "#1565c0" }
    ],
    shortDesc: "High-velocity performance shield shades featuring wrap-around panoramic coverage and hydrophobic prism coating.",
    description: "Built for active outdoor pursuits and futuristic urban streetwear, the Apex Shield features an uninterrupted cylindrical toric lens geometry that broadens peripheral vision while offering zero aerodynamic drag.",
    specs: {
      "Frame Type": "Aerodynamic Mono-Shield Wrap",
      "Frame Material": "O-Matter Resilient Polymer",
      "Lens Type": "Prizm Polarized Toric Lens",
      "UV Protection": "Plutonite 100% UV Filtration",
      "Lens Width": "138 mm (Full Shield)",
      "Bridge Width": "Integrated Comfort Saddle",
      "Temple Length": "132 mm",
      "Weight": "28.5 grams",
      "Face Shape Match": "All Medium to Broad Face Shapes"
    },
    inStock: true
  },
  {
    id: "sg-6",
    name: "Retro Clubmaster Browline",
    category: "sunglasses",
    subCategory: "Browline",
    gender: "men",
    brand: "Carrera",
    price: 155.0,
    originalPrice: 180.0,
    discount: "14% OFF",
    rating: 4.8,
    reviewsCount: 110,
    isNew: false,
    isTrending: false,
    isBestSeller: true,
    isFeatured: false,
    image: "images/products/sg-6.jpg",
    gallery: [
      "images/products/sg-6.jpg"
    ],
    colors: [
      { name: "Ebony & Gold / Dark Green", code: "#263238" },
      { name: "Walnut Horn / Grey Polar", code: "#4e342e" }
    ],
    shortDesc: "Mid-century intellectual styling with a rich acetate brow bar and polished metallic bottom eye-wire.",
    description: "An authentic tribute to 1950s modernist design, the Retro Clubmaster matches authoritative upper brow definition with featherlight lower rims, suitable for both tailored suits and smart-casual weekends.",
    specs: {
      "Frame Type": "Semi-Rimless Browline",
      "Frame Material": "Handmade Acetate with Metal Chassis",
      "Lens Type": "Mineral Crystal Anti-Scratch",
      "UV Protection": "UV400 Protection Grade",
      "Lens Width": "51 mm",
      "Bridge Width": "21 mm",
      "Temple Length": "145 mm",
      "Weight": "31.0 grams",
      "Face Shape Match": "Oval, Round, Triangular"
    },
    inStock: true
  },
  {
    id: "sg-7",
    name: "Geometric Hexagonal Minimalist",
    category: "sunglasses",
    subCategory: "Geometric",
    gender: "unisex",
    brand: "Ray-Ban",
    price: 169.0,
    originalPrice: 199.0,
    discount: "15% OFF",
    rating: 4.7,
    reviewsCount: 76,
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    isFeatured: true,
    image: "images/products/sg-7.jpg",
    gallery: [
      "images/products/sg-7.jpg"
    ],
    colors: [
      { name: "Polished Gold / Bottle Green", code: "#c5a059" },
      { name: "Gunmetal / Flat Silver Mirror", code: "#616161" }
    ],
    shortDesc: "Contemporary polygonal thin wire frame delivering subtle edge to modern minimalist outfits.",
    description: "Evolution meets rebellion: hexagonal contours sharpen softer facial features, fitted with flat crystal lenses that offer crisp clarity and refined reflective charm under natural sunlight.",
    specs: {
      "Frame Type": "Slim Hexagonal Wire Profile",
      "Frame Material": "Corrosion-Resistant Monel Alloy",
      "Lens Type": "Flat Glass Ultra-Thin Optics",
      "UV Protection": "UV400 Total Protection",
      "Lens Width": "53 mm",
      "Bridge Width": "19 mm",
      "Temple Length": "145 mm",
      "Weight": "21.5 grams",
      "Face Shape Match": "Round, Oval, Soft Jawlines"
    },
    inStock: true
  },
  {
    id: "sg-8",
    name: "Vogue Rimless Gradient Tint",
    category: "sunglasses",
    subCategory: "Rimless",
    gender: "women",
    brand: "Gucci",
    price: 230.0,
    originalPrice: 275.0,
    discount: "16% OFF",
    rating: 4.9,
    reviewsCount: 143,
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    isFeatured: false,
    image: "images/products/sg-8.jpg",
    gallery: [
      "images/products/sg-8.jpg"
    ],
    colors: [
      { name: "Rose Gold / Sunset Rose Gradient", code: "#f48fb1" },
      { name: "Champagne / Warm Cognac Gradient", code: "#ffcc80" }
    ],
    shortDesc: "Y2K luxury revival rimless sunglasses with beveled diamond-cut lens facets and gilded screw accents.",
    description: "Infused with effortless Beverly Hills opulence, these rimless gradient shades feature diamond-beveled lens edges, delicately balanced double-bridge suspension, and crystal-clear visibility.",
    specs: {
      "Frame Type": "Frameless Beveled Edge",
      "Frame Material": "18K Gold PVD-Coated Titanium Bridges",
      "Lens Type": "Polycarbonate Diamond-Facet Gradient",
      "UV Protection": "UV400 High Clarity Filtering",
      "Lens Width": "60 mm",
      "Bridge Width": "16 mm",
      "Temple Length": "138 mm",
      "Weight": "18.0 grams",
      "Face Shape Match": "Square, Heart, Oval, Diamond"
    },
    inStock: true
  },

  // ================= BELTS =================
  {
    id: "belt-1",
    name: "Verona Full-Grain Italian Leather Belt",
    category: "belts",
    subCategory: "Dress Belt",
    gender: "men",
    brand: "Montblanc",
    price: 89.0,
    originalPrice: 110.0,
    discount: "19% OFF",
    rating: 4.9,
    reviewsCount: 154,
    isNew: true,
    isTrending: true,
    isBestSeller: true,
    isFeatured: true,
    image: "images/products/belt-1.jpg",
    gallery: [
      "images/products/belt-1.jpg"
    ],
    colors: [
      { name: "Cognac Tan / Brass", code: "#8d5b2c" },
      { name: "Onyx Black / Brushed Steel", code: "#1a1a1a" },
      { name: "Espresso Brown / Gunmetal", code: "#3e2723" }
    ],
    shortDesc: "Handcrafted 35mm dress belt cut from Tuscan vegetable-tanned bovine leather with beveled hand-painted edges.",
    description: "Tanned using centuries-old artisanal Tuscan recipes with natural chestnut tree barks, this full-grain leather belt will develop a rich, deeply personal patina over decades of wear. Equipped with a solid brushed brass single-prong buckle.",
    specs: {
      "Material": "100% Certified Full-Grain Tuscan Bovine Leather",
      "Buckle Type": "Solid Heavyweight Brushed Brass Single-Prong",
      "Width": "35 mm (1.38 inches)",
      "Thickness": "3.8 mm Heavy-Gauge Hide",
      "Available Sizes": "32, 34, 36, 38, 40, 42 inches",
      "Edge Finish": "Triple Hand-Burnished & Beveled Waxed Edges",
      "Origin": "Florence, Italy",
      "Occasion": "Business Formal, Tailored Suits, Dress Trousers"
    },
    inStock: true
  },
  {
    id: "belt-2",
    name: "Milano Reversible Formal Belt",
    category: "belts",
    subCategory: "Reversible Belt",
    gender: "men",
    brand: "Montblanc",
    price: 98.0,
    originalPrice: 125.0,
    discount: "22% OFF",
    rating: 4.8,
    reviewsCount: 118,
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    isFeatured: true,
    image: "images/products/belt-2.jpg",
    gallery: [
      "images/products/belt-2.jpg"
    ],
    colors: [
      { name: "Dual Black & Chocolate Brown", code: "#212121" }
    ],
    shortDesc: "Versatile 2-in-1 reversible leather belt featuring a smooth twist buckle mechanism for seamless black-to-brown transition.",
    description: "The definitive business travel essential. With a simple pull-and-twist of the polished palladium buckle, switch between formal jet black and rich deep mocha brown without needing multiple belts in your luggage.",
    specs: {
      "Material": "Dual-Sided Smooth Calfskin Leather",
      "Buckle Type": "Spring-Loaded 360° Rotating Palladium Buckle",
      "Width": "32 mm (1.25 inches)",
      "Thickness": "3.2 mm Dual-Layer Bonded",
      "Available Sizes": "30, 32, 34, 36, 38, 40 inches",
      "Edge Finish": "Precision Heat-Sealed Edge Coat",
      "Origin": "Milan, Italy",
      "Occasion": "Executive Meetings, Boardrooms, Black Tie"
    },
    inStock: true
  },
  {
    id: "belt-3",
    name: "Amalfi Braided Woven Stretch Belt",
    category: "belts",
    subCategory: "Casual Belt",
    gender: "unisex",
    brand: "Persol",
    price: 59.0,
    originalPrice: 75.0,
    discount: "21% OFF",
    rating: 4.7,
    reviewsCount: 88,
    isNew: true,
    isTrending: false,
    isBestSeller: false,
    isFeatured: false,
    image: "images/products/belt-3.jpg",
    gallery: [
      "images/products/belt-3.jpg"
    ],
    colors: [
      { name: "Khaki Sand & Brown Leather", code: "#bcaaa4" },
      { name: "Navy Blue & Cognac Trim", code: "#1a237e" },
      { name: "Olive Field & Tan Leather", code: "#558b2f" }
    ],
    shortDesc: "Flexible woven elastic braid with full-grain leather tabs and pin buckle that adjusts without preset holes.",
    description: "Experience unrestricted weekend comfort. The micro-stretch woven web accommodates natural movement during golf, yachting, or relaxed casual dining, allowing micro-adjustments at every millimeter.",
    specs: {
      "Material": "High-Tension Poly-Elastic Braid with Genuine Leather Trims",
      "Buckle Type": "Zinc Alloy Nickel-Free Satin Pin Buckle",
      "Width": "35 mm (1.38 inches)",
      "Thickness": "4.0 mm Braided Depth",
      "Available Sizes": "S (30-32), M (34-36), L (38-40), XL (42-44)",
      "Edge Finish": "Reinforced Leather Tip & Keeper Loop",
      "Origin": "Spain",
      "Occasion": "Chinos, Linen Shorts, Golf, Casual Weekend"
    },
    inStock: true
  },
  {
    id: "belt-4",
    name: "Montana Western Floral Tooled Belt",
    category: "belts",
    subCategory: "Western Belt",
    gender: "unisex",
    brand: "Gucci",
    price: 115.0,
    originalPrice: 145.0,
    discount: "21% OFF",
    rating: 4.9,
    reviewsCount: 65,
    isNew: false,
    isTrending: true,
    isBestSeller: false,
    isFeatured: true,
    image: "images/products/belt-4.jpg",
    gallery: [
      "images/products/belt-4.jpg"
    ],
    colors: [
      { name: "Antique Walnut Tooled", code: "#4e342e" },
      { name: "Vintage Caramel Tooled", code: "#795548" }
    ],
    shortDesc: "Heritage western belt carved with intricate floral filigree embossing and an engraved antique silver buckle set.",
    description: "A celebration of artisanal saddle-making heritage. Crafted from hefty 9oz saddle leather, deep-embossed with continuous floral motifs, and accented with a four-piece antiqued silver filigree buckle, keeper, and tip set.",
    specs: {
      "Material": "Heavy-Duty 9oz Saddle Skirting Leather",
      "Buckle Type": "4-Piece Antique Silver Floral Engraved Buckle Set",
      "Width": "38 mm (1.50 inches)",
      "Thickness": "4.2 mm Saddle-Grade Hide",
      "Available Sizes": "32, 34, 36, 38, 40, 42 inches",
      "Edge Finish": "Hand-Dyed Dark Edge with Contrast Stitching",
      "Origin": "USA / Mexico Craft Workshop",
      "Occasion": "Raw Denim, Boots, Country Casual, Festival Wear"
    },
    inStock: true
  },
  {
    id: "belt-5",
    name: "Siena Velvety Suede Casual Belt",
    category: "belts",
    subCategory: "Suede Belt",
    gender: "men",
    brand: "Tom Ford",
    price: 79.0,
    originalPrice: 95.0,
    discount: "17% OFF",
    rating: 4.8,
    reviewsCount: 72,
    isNew: true,
    isTrending: false,
    isBestSeller: false,
    isFeatured: false,
    image: "images/products/belt-5.jpg",
    gallery: [
      "images/products/belt-5.jpg"
    ],
    colors: [
      { name: "Warm Taupe Suede", code: "#a1887f" },
      { name: "Navy Suede", code: "#283593" },
      { name: "Charcoal Slate Suede", code: "#424242" }
    ],
    shortDesc: "Sumptuous Italian calf suede with a nubuck backing and subtly curved brushed nickel buckle.",
    description: "Add soft tactile luxury to relaxed tailoring and denim. Cut from velvety split suede backed by supple full-grain nubuck, this belt strikes the ultimate balance of softness, structure, and Italian sprezzatura.",
    specs: {
      "Material": "Italian Calf Suede with Full-Grain Nubuck Reinforcement",
      "Buckle Type": "Satin Brushed Nickel Single-Pin Hardware",
      "Width": "35 mm (1.38 inches)",
      "Thickness": "3.5 mm Dual-Layer",
      "Available Sizes": "32, 34, 36, 38, 40 inches",
      "Edge Finish": "Tonal Feather-Stitched Edge Detail",
      "Origin": "Siena, Italy",
      "Occasion": "Loafers & Chinos, Blazer & Denim, Smart Casual"
    },
    inStock: true
  },
  {
    id: "belt-6",
    name: "Vanguard Tactical Quick-Release Belt",
    category: "belts",
    subCategory: "Tactical Belt",
    gender: "men",
    brand: "Oakley",
    price: 49.0,
    originalPrice: 65.0,
    discount: "25% OFF",
    rating: 4.9,
    reviewsCount: 198,
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    isFeatured: false,
    image: "images/products/belt-6.jpg",
    gallery: [
      "images/products/belt-6.jpg"
    ],
    colors: [
      { name: "Tactical Matte Black", code: "#1e1e1e" },
      { name: "Coyote Tan", code: "#8d6e63" },
      { name: "Military Olive Drab", code: "#33691e" }
    ],
    shortDesc: "High-density ballistic nylon webbing with an aviation-grade aluminum quick-release Cobra-style buckle.",
    description: "Engineered for maximum tensile strength and tactical utility. The 1000D mil-spec nylon webbing holds up to 1,200 lbs of load resistance without fraying, accompanied by a quick-snap buckle that clicks into place in milliseconds.",
    specs: {
      "Material": "1000D Mil-Spec High-Tensile Ballistic Nylon Webbing",
      "Buckle Type": "Heavy-Duty Aerospace Aluminum Quick-Release Clasp",
      "Width": "38 mm (1.50 inches)",
      "Thickness": "2.8 mm Stiffened Dual-Layer Webbing",
      "Available Sizes": "Adjustable S (28-34), M (34-40), L (40-46)",
      "Edge Finish": "Ultrasonic Heat-Sealed Tip",
      "Origin": "USA",
      "Occasion": "Cargo Pants, Outdoor Hiking, Everyday Carry, EDC"
    },
    inStock: true
  },

  // ================= CAPS =================
  {
    id: "cap-1",
    name: "Heritage Washed Twill Dad Cap",
    category: "caps",
    subCategory: "Baseball Cap",
    gender: "unisex",
    brand: "New Era",
    price: 36.0,
    originalPrice: 45.0,
    discount: "20% OFF",
    rating: 4.8,
    reviewsCount: 174,
    isNew: true,
    isTrending: true,
    isBestSeller: true,
    isFeatured: true,
    image: "images/products/cap-1.jpg",
    gallery: [
      "images/products/cap-1.jpg"
    ],
    colors: [
      { name: "Deep Navy Blue", code: "#0d47a1" },
      { name: "Vintage Khaki", code: "#d7ccc8" },
      { name: "Washed Forest Green", code: "#2e7d32" }
    ],
    shortDesc: "Classic low-profile 6-panel cap crafted from garment-washed 100% cotton twill with an antique brass strap slider.",
    description: "The quintessential relaxed everyday cap. Softened through authentic pigment dye garment washing, featuring a pre-curved visor, embroidered ventilation eyelets, and an interior moisture-wicking sweatband.",
    specs: {
      "Cap Style": "Unstructured Low-Profile 6-Panel Dad Hat",
      "Fabric": "100% Garment-Washed Heavy Cotton Chino Twill",
      "Brim Type": "Pre-Curved 2.75\" Visor with 8-Row Stitching",
      "Closure System": "Self-Fabric Strap with Antique Brass Buckle & Tuck",
      "Sweatband": "100% Breathable Cotton Herringbone Sweatband",
      "Sizing": "One Size Fits Most (54 cm – 61 cm Circumference)",
      "Care Instructions": "Hand Wash Cold / Air Dry Flat"
    },
    inStock: true
  },
  {
    id: "cap-2",
    name: "Urban Suede Curved Brim Hat",
    category: "caps",
    subCategory: "Luxury Cap",
    gender: "unisex",
    brand: "Gucci",
    price: 65.0,
    originalPrice: 85.0,
    discount: "24% OFF",
    rating: 4.9,
    reviewsCount: 92,
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    isFeatured: true,
    image: "images/products/cap-2.jpg",
    gallery: [
      "images/products/cap-2.jpg"
    ],
    colors: [
      { name: "Earthy Olive Green", code: "#558b2f" },
      { name: "Desert Sand Suede", code: "#d7ccc8" },
      { name: "Midnight Charcoal", code: "#263238" }
    ],
    shortDesc: "Premium faux micro-suede cap with a structured crown, tonal metal branding plaque, and satin lining.",
    description: "Elevate your streetwear look with plush tactile suede. Features a silk-feel satin interior lining to protect hair from friction, reinforced front buckram panels, and a sleek matte metal buckle clasp.",
    specs: {
      "Cap Style": "Structured Mid-Profile 6-Panel Luxury Cap",
      "Fabric": "Ultra-Fine Micro-Suede (Polyester / Elastane Blend)",
      "Brim Type": "Curved Bill with Suede Edge Binding",
      "Closure System": "Micro-Suede Strap with Matte Gunmetal Buckle",
      "Sweatband": "Padded Anti-Microbial Microfiber Sweatband",
      "Sizing": "Adjustable (55 cm – 60 cm)",
      "Care Instructions": "Spot Clean with Suede Brush"
    },
    inStock: true
  },
  {
    id: "cap-3",
    name: "Metropolitan 9Fifty Flat Brim Snapback",
    category: "caps",
    subCategory: "Snapback",
    gender: "men",
    brand: "New Era",
    price: 42.0,
    originalPrice: 50.0,
    discount: "16% OFF",
    rating: 4.8,
    reviewsCount: 139,
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    isFeatured: false,
    image: "images/products/cap-3.jpg",
    gallery: [
      "images/products/cap-3.jpg"
    ],
    colors: [
      { name: "Heather Grey & Black", code: "#424242" },
      { name: "All Black Stealth Edition", code: "#111111" }
    ],
    shortDesc: "Authentic high-crown structured flat brim snapback made from premium wool blend fabric with green under-visor.",
    description: "An homage to modern metropolitan skate and hip-hop culture. Featuring a high-profile buckram-backed crown that preserves shape under any conditions, a flat brim that can be curved to preference, and an iconic retro green under-bill.",
    specs: {
      "Cap Style": "Structured High-Crown 6-Panel Snapback",
      "Fabric": "80% Acrylic, 20% Australian Wool Blend",
      "Brim Type": "Rigid Flat Visor with Kelly Green Under-Visor",
      "Closure System": "Double-Snap Retro Polyethylene Closure",
      "Sweatband": "Performance Moisture-Transport Poly-Cotton Band",
      "Sizing": "Adjustable Snap (56 cm – 62 cm)",
      "Care Instructions": "Dry Clean or Specialized Hat Brush"
    },
    inStock: true
  },
  {
    id: "cap-4",
    name: "Pacific Coast Retro Mesh Trucker",
    category: "caps",
    subCategory: "Trucker Cap",
    gender: "unisex",
    brand: "Carrera",
    price: 32.0,
    originalPrice: 40.0,
    discount: "20% OFF",
    rating: 4.7,
    reviewsCount: 86,
    isNew: true,
    isTrending: false,
    isBestSeller: false,
    isFeatured: false,
    image: "images/products/cap-4.jpg",
    gallery: [
      "images/products/cap-4.jpg"
    ],
    colors: [
      { name: "Vintage Maroon & White Mesh", code: "#880e4f" },
      { name: "Navy Blue & Cream Mesh", code: "#1a237e" }
    ],
    shortDesc: "Foam front trucker cap with heavy-gauge breathable mesh back and retro embroidered adventure patch.",
    description: "Built for summer road trips and beach bonfires. The open poly-mesh rear panels offer unlimited cooling airflow, while the high-density foam front panel stays featherlight even under intense midday heat.",
    specs: {
      "Cap Style": "A-Frame 5-Panel Retro Trucker",
      "Fabric": "100% Poly Foam Front / 100% Polyester Mesh Back",
      "Brim Type": "Semi-Curved Visor with Contrast Rope Detail",
      "Closure System": "Plastic 7-Hole Adjustable Snapback",
      "Sweatband": "Quick-Dry Terrycloth Lined Front Band",
      "Sizing": "Universal Adjustable Fit (54 cm – 61 cm)",
      "Care Instructions": "Hand Wash Warm / Air Dry"
    },
    inStock: true
  },
  {
    id: "cap-5",
    name: "Nordic Merino Wool Fisherman Beanie",
    category: "caps",
    subCategory: "Beanie",
    gender: "unisex",
    brand: "Persol",
    price: 45.0,
    originalPrice: 55.0,
    discount: "18% OFF",
    rating: 4.9,
    reviewsCount: 162,
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    isFeatured: true,
    image: "images/products/cap-5.jpg",
    gallery: [
      "images/products/cap-5.jpg"
    ],
    colors: [
      { name: "Heather Slate Grey", code: "#78909c" },
      { name: "Oatmeal Melange", code: "#d7ccc8" },
      { name: "Burnt Terracotta", code: "#bf360c" }
    ],
    shortDesc: "Chunky 7-gauge ribbed knit watch cap spun from 100% non-mulesed ultra-soft merino wool.",
    description: "Pure thermal comfort without itching. Spun from 19.5-micron superfine Australian merino wool fibers, this ribbed knit beanie provides natural temperature regulation, odor resistance, and can be worn with single or double fold.",
    specs: {
      "Cap Style": "Ribbed Watch Cap / Fisherman Beanie",
      "Fabric": "100% Extra-Fine Merino Wool (7-Gauge 2-Ply)",
      "Brim Type": "Double Roll Cuffed Hem (Adjustable Depth)",
      "Closure System": "Seamless Circular 3D Knit Construction",
      "Sweatband": "Naturally Breathable & Non-Allergenic Wool",
      "Sizing": "One Size Elastic Stretch Fit (Fits 53 cm – 62 cm)",
      "Care Instructions": "Hand Wash Cold with Wool Detergent / Dry Flat"
    },
    inStock: true
  },
  {
    id: "cap-6",
    name: "Andalusia Pure Wool Felt Fedora",
    category: "caps",
    subCategory: "Fedora Hat",
    gender: "unisex",
    brand: "Tom Ford",
    price: 120.0,
    originalPrice: 150.0,
    discount: "20% OFF",
    rating: 4.9,
    reviewsCount: 54,
    isNew: true,
    isTrending: false,
    isBestSeller: false,
    isFeatured: false,
    image: "images/products/cap-6.jpg",
    gallery: [
      "images/products/cap-6.jpg"
    ],
    colors: [
      { name: "Sand Dune Tan", code: "#d7ccc8" },
      { name: "Midnight Black Felt", code: "#1a1a1a" }
    ],
    shortDesc: "Sculpted wide-brim fedora hat handcrafted from water-resistant Australian wool felt with a genuine leather band.",
    description: "An iconic silhouette of timeless sophistication. Molded with a teardrop crown crease, raw-edge 3-inch brim, and wrapped in a slim full-grain bridle leather band with a hand-stitched brass closure feather loop.",
    specs: {
      "Cap Style": "Teardrop Crown Wide-Brim Fedora",
      "Fabric": "100% Australian Merino Wool Felt (Water-Resistant)",
      "Brim Type": "3.0\" Flat Stiffened Brim with Raw Cut Edge",
      "Closure System": "Structured Fixed Fit with Internal Size-Drawstring",
      "Sweatband": "Full-Grain Sheepskin Leather Sweatband",
      "Sizing": "Available in S (55 cm), M (57 cm), L (59 cm), XL (61 cm)",
      "Care Instructions": "Spot Clean with Felt Sponge"
    },
    inStock: true
  },

  // ================= FASHION ACCESSORIES =================
  {
    id: "acc-1",
    name: "Artisan RFID Bi-Fold Leather Wallet",
    category: "accessories",
    subCategory: "Wallets",
    gender: "men",
    brand: "Montblanc",
    price: 75.0,
    originalPrice: 95.0,
    discount: "21% OFF",
    rating: 4.9,
    reviewsCount: 142,
    isNew: true,
    isTrending: true,
    isBestSeller: true,
    isFeatured: true,
    image: "images/products/acc-1.jpg",
    gallery: [
      "images/products/acc-1.jpg"
    ],
    colors: [
      { name: "Whiskey Cognac Brown", code: "#8d5b2c" },
      { name: "Matte Raven Black", code: "#1a1a1a" }
    ],
    shortDesc: "Ultra-slim front-pocket bifold wallet cut from vegetable-tanned calfskin with military RFID-blocking lining.",
    description: "Carries 8 cards and cash notes without bulging your silhouette. Hand-stitched with waxed French linen thread, burnished edges, and lined with German aerospace RFID mesh that protects your contactless cards against electronic skimming.",
    specs: {
      "Material": "Vegetable-Tanned Italian Vachetta Calfskin",
      "Capacity": "8 Card Slots, Full-Length Bill Compartment, 2 Hidden Pockets",
      "Dimensions": "11.0 cm x 8.5 cm x 1.1 cm (Folded)",
      "Security": "13.56 MHz RFID / NFC Signal Blocking Barrier",
      "Weight": "62 grams",
      "Hardware": "Debossed Brand Emblem & Reinforced Corner Creasing",
      "Packaging": "Luxury Rigid Gift Box & Cotton Dust Bag"
    },
    inStock: true
  },
  {
    id: "acc-2",
    name: "Como Mulberry Silk & Cashmere Scarf",
    category: "accessories",
    subCategory: "Scarves",
    gender: "women",
    brand: "Gucci",
    price: 135.0,
    originalPrice: 170.0,
    discount: "21% OFF",
    rating: 4.9,
    reviewsCount: 78,
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    isFeatured: true,
    image: "images/products/acc-2.jpg",
    gallery: [
      "images/products/acc-2.jpg"
    ],
    colors: [
      { name: "Burgundy Floral Filigree", code: "#6a1b9a" },
      { name: "Champagne Baroque Damask", code: "#f5f5f5" }
    ],
    shortDesc: "Double-sided reversible luxury scarf woven from 70% grade-A cashmere and 30% Lake Como mulberry silk.",
    description: "An heirloom accessory woven on historic Italian jacquard looms in Lake Como. The cashmere delivers sumptuous thermal insulation against cool evening breezes while the silk sheen creates an ethereal drape over trench coats and evening wear.",
    specs: {
      "Material": "70% Inner Mongolian Cashmere, 30% Lake Como Silk",
      "Weave Type": "Jacquard Reversible Double-Faced Weave",
      "Dimensions": "180 cm x 70 cm with 8 cm Twisted Fringes",
      "Weight": "165 grams",
      "Finish": "Hand-Rolled Hemming and Hand-Knotted Tassels",
      "Care Instructions": "Dry Clean Only / Iron on Low Silk Setting"
    },
    inStock: true
  },
  {
    id: "acc-3",
    name: "Chronos Stealth Matte Black Watch",
    category: "accessories",
    subCategory: "Watches",
    gender: "men",
    brand: "Montblanc",
    price: 260.0,
    originalPrice: 320.0,
    discount: "19% OFF",
    rating: 4.8,
    reviewsCount: 104,
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    isFeatured: true,
    image: "images/products/acc-3.jpg",
    gallery: [
      "images/products/acc-3.jpg"
    ],
    colors: [
      { name: "Stealth All-Black", code: "#111111" },
      { name: "Black Dial & Rose Gold Ring", code: "#bcaaa4" }
    ],
    shortDesc: "Minimalist 41mm quartz chronograph with sapphire crystal glass and quick-release stainless mesh Milanese strap.",
    description: "Exquisite Japanese Miyota quartz movement housed inside a surgical-grade 316L stainless steel casing with PVD matte black ion plating. Features date aperture, 1-second stopwatch sub-dials, and 5 ATM water resistance.",
    specs: {
      "Movement": "Japanese Miyota Chronograph Quartz Caliber",
      "Case Material": "316L Surgical Stainless Steel with Matte PVD Coating",
      "Glass Type": "Anti-Reflective Scratchproof Sapphire Crystal",
      "Case Diameter": "41 mm | Thickness: 9.8 mm",
      "Strap": "Interchangeable 20mm Stainless Steel Milanese Mesh",
      "Water Resistance": "5 ATM / 50 Meters (Shower & Rain Proof)",
      "Battery Life": "3-Year Standard Silver Oxide Cell"
    },
    inStock: true
  },
  {
    id: "acc-4",
    name: "Nautical Braided Leather Anchor Bracelet",
    category: "accessories",
    subCategory: "Bracelets",
    gender: "unisex",
    brand: "Persol",
    price: 42.0,
    originalPrice: 55.0,
    discount: "24% OFF",
    rating: 4.7,
    reviewsCount: 91,
    isNew: true,
    isTrending: false,
    isBestSeller: false,
    isFeatured: false,
    image: "images/products/acc-4.jpg",
    gallery: [
      "images/products/acc-4.jpg"
    ],
    colors: [
      { name: "Ocean Navy & Silver Anchor", code: "#1a237e" },
      { name: "Saddle Tan & Brass Anchor", code: "#8d5b2c" }
    ],
    shortDesc: "Double-wrap genuine bolo braided leather cord with a laser-engraved 316L stainless steel anchor clasp.",
    description: "Inspired by traditional maritime rope knots and seafaring adventure. The anchor hooks securely through the leather loop, serving as both a functional clasp and a striking wrist statement when layered alongside luxury timepieces.",
    specs: {
      "Material": "Genuine German Double-Braided Bolo Leather Cord",
      "Hardware": "High-Polish 316L Hypoallergenic Stainless Steel Anchor",
      "Cord Width": "4 mm Braided Diameter",
      "Length": "Total Cord Length 40 cm (Wraps Twice around 17-20 cm Wrist)",
      "Clasp": "Friction Lock Anchor Hook System",
      "Weight": "24 grams"
    },
    inStock: true
  },
  {
    id: "acc-5",
    name: "Sterling Silver Engine-Turned Cufflinks",
    category: "accessories",
    subCategory: "Cufflinks",
    gender: "men",
    brand: "Tom Ford",
    price: 85.0,
    originalPrice: 110.0,
    discount: "23% OFF",
    rating: 4.9,
    reviewsCount: 46,
    isNew: false,
    isTrending: false,
    isBestSeller: false,
    isFeatured: false,
    image: "images/products/acc-5.jpg",
    gallery: [
      "images/products/acc-5.jpg"
    ],
    colors: [
      { name: "High-Polish Rhodium Silver", code: "#cfd8dc" },
      { name: "18K Gold Plated Brass", code: "#ffe082" }
    ],
    shortDesc: "Heavyweight rectangular cufflinks etched with traditional barleycorn guilloché patterns and swivel torpedo backs.",
    description: "The hallmark of sartorial excellence. Plated in tarnish-resistant rhodium to preserve its mirror-like gleam across years of galas and formal ceremonies. Weighted comfortably to hold French double-cuffs in perfect crisp alignment.",
    specs: {
      "Metal": "Solid Jewelers Brass with 3-Micron Rhodium Electroplating",
      "Pattern": "Vintage Barleycorn Guilloché Machine Engraving",
      "Face Dimensions": "18 mm x 12 mm x 3 mm",
      "Backing Type": "Heavy-Duty Swivel Torpedo Toggle Mechanism",
      "Weight": "16.8 grams (Pair)",
      "Packaging": "Velvet-Lined Wooden Presentation Jewel Box"
    },
    inStock: true
  },
  {
    id: "acc-6",
    name: "Heritage Bridle Leather Key Case & Fob",
    category: "accessories",
    subCategory: "Key Accessories",
    gender: "unisex",
    brand: "Montblanc",
    price: 38.0,
    originalPrice: 48.0,
    discount: "21% OFF",
    rating: 4.8,
    reviewsCount: 63,
    isNew: true,
    isTrending: false,
    isBestSeller: false,
    isFeatured: false,
    image: "images/products/acc-6.jpg",
    gallery: [
      "images/products/acc-6.jpg"
    ],
    colors: [
      { name: "Vintage British Tan", code: "#a1887f" },
      { name: "Executive Carbon Black", code: "#212121" }
    ],
    shortDesc: "Compact snap-closure key organizer case holding up to 6 keys to eliminate pocket jingling and screen scratching.",
    description: "Crafted from rugged English bridle leather that resists scuffs and moisture. Holds up to 6 standard house and office keys securely on individual brass swivel clips, accompanied by an external D-ring for bulky modern car key fobs.",
    specs: {
      "Material": "English Bridle Leather (Wax-Infused Vegetable Tan)",
      "Internal Hardware": "6 Swivel Brass Key Clips + 1 Car Fob D-Ring",
      "Closure": "Dual Heavy-Duty Antique Brass Press Studs",
      "Dimensions": "10.0 cm x 6.0 cm x 2.0 cm",
      "Weight": "48 grams",
      "Durability": "Reinforced Riveted Spine & Waxed Edge Sealing"
    },
    inStock: true
  }
];

// Helper functions for easy access
function getProductById(id) {
  return PRODUCTS_DATA.find(p => p.id === id) || PRODUCTS_DATA[0];
}

function getProductsByCategory(category) {
  if (!category || category === "all") return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

function getFeaturedProducts(limit = 8) {
  return PRODUCTS_DATA.filter(p => p.isFeatured).slice(0, limit);
}

function getTrendingProducts(limit = 8) {
  return PRODUCTS_DATA.filter(p => p.isTrending).slice(0, limit);
}

function getNewArrivals(limit = 8) {
  return PRODUCTS_DATA.filter(p => p.isNew).slice(0, limit);
}

function getBestSellers(limit = 8) {
  return PRODUCTS_DATA.filter(p => p.isBestSeller).slice(0, limit);
}

function getRelatedProducts(category, currentId, limit = 4) {
  return PRODUCTS_DATA
    .filter(p => p.category === category && p.id !== currentId)
    .slice(0, limit);
}

