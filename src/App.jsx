import { useEffect, useState } from "react";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-4.63-3.24A4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const BRAND = "#bf3b21";

const LOGO_DATA = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <rect width="120" height="120" rx="24" fill="#bf3b21"/>
    <text x="60" y="72" text-anchor="middle" font-family="Arial, sans-serif" font-size="44" font-weight="700" fill="white">SS</text>
  </svg>
`)}`;

// IMPORTANT: Place these images inside /public/images in your project
// Example: /public/images/main-front.jpg
const PHOTO_SLOTS = {
  front: "/images/main-front.jpg",
  downstairs: "/images/downstairs-corridor.jpg",
  upstairs: "/images/upstairs-corridor.jpg",
  goodsLift: "/images/goods-lift.jpg",
  liftCorridor: "/images/lift-corridor.jpg",
  lockDoor: "/images/lock-door.jpg"
};

function PhotoCard({ label, src = null, tall = false, dark = false, showLabel = true }) {
  return (
    <div className={`relative overflow-hidden rounded-[1.5rem] border border-zinc-200 ${tall ? "aspect-[4/5]" : "aspect-[16/10]"}`}>
      <div className={`absolute inset-0 ${dark ? "bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900" : "bg-gradient-to-br from-[color:var(--brand)]/15 via-zinc-100 to-zinc-200"}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(191,59,33,0.18),transparent_30%)]" />

      {src ? (
        <>
          <img
            src={src}
            alt={label}
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className={`absolute inset-0 ${dark ? "bg-black/35" : "bg-black/10"}`} />
        </>
      ) : null}

      <div className="relative flex h-full w-full items-end p-5">
        {showLabel ? (
  <div className="relative flex h-full w-full items-end p-5">
    <div className={`rounded-2xl px-4 py-3 text-sm font-medium shadow-sm ${dark ? "bg-white/10 text-white backdrop-blur" : "bg-white/85 text-zinc-700"}`}>
      {label}
    </div>
  </div>
) : null}
      </div>
    </div>
  );
}

function SocialButton({ href, label, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-[color:var(--brand)] hover:bg-[color:var(--brand)]"
    >
      <Icon className="h-5 w-5 text-zinc-700 transition duration-200 group-hover:text-white" />
    </a>
  );
}

export default function WebsiteStarter() {
  const [page, setPage] = useState("home");
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "storage", label: "Storage Types" },
    { id: "locations", label: "Location" },
    { id: "gallery", label: "Gallery" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact Us" },
    { id: "terms", label: "Terms" },
    { id: "ecom", label: "Ecom Base" },
    { id: "security", label: "Security" },
    { id: "pricing", label: "Prices" },
  ];

  const features = [
    { title: "Secure", text: "State-of-the-art security with 24/7 monitoring" },
    { title: "Contactless bookings", text: "Book your unit and gain access in just a few clicks" },
    { title: "Loads of options", text: "Choose the right unit size for your needs" },
    { title: "Free Wi‑Fi", text: "High speed Wi‑Fi in all buildings" },
    { title: "Easily accessible", text: "Free car parking and drive up units available" },
    { title: "Convenient location", text: "With facilities across the city, you are sure to find the perfect spot for you" },
  ];

  const galleryImages = [
    { src: PHOTO_SLOTS.front, alt: "Front of SelfStore Group building", title: "Main frontage", subtitle: "Exterior photo" },
    { src: PHOTO_SLOTS.downstairs, alt: "Storage corridor downstairs", title: "Ground floor units", subtitle: "Downstairs corridor" },
    { src: PHOTO_SLOTS.upstairs, alt: "Storage corridor upstairs", title: "Upper floor units", subtitle: "Upstairs corridor" },
    { src: PHOTO_SLOTS.goodsLift, alt: "Goods lift and access area", title: "Goods lift access", subtitle: "Goods lift" },
    { src: PHOTO_SLOTS.liftCorridor, alt: "Corridor next to lift", title: "Lift-side access corridor", subtitle: "Lift corridor" },
  ];

  const storageCards = [
    { title: "Self Storage", text: "Get your own secure storage unit accessible 24/7", imageLabel: "Downstairs corridor", imageSrc: PHOTO_SLOTS.downstairs },
    { title: "Business Storage", text: "Ideal for stock, tools, archives, equipment, ecommerce inventory, and flexible overflow space for growing businesses.", imageLabel: "Upstairs corridor", imageSrc: PHOTO_SLOTS.upstairs },
    { title: "Student Storage", text: "A practical option for storing furniture, boxes, and belongings between terms, moves, and summer breaks.", imageLabel: "Lift-side corridor", imageSrc: PHOTO_SLOTS.liftCorridor },
    { title: "Ecom Base", text: "Workspace next to your storage unit for easy order processing, packing, and dispatch.", imageLabel: "Goods lift & access", imageSrc: PHOTO_SLOTS.goodsLift },
  ];

  const faqs = [
    {
      q: "What is self-storage?",
      a: "Self-storage refers to renting individual storage units or lockers to store personal belongings, business inventory, or other items. It provides a secure and convenient solution for individuals and businesses that require additional space for short-term or long-term storage."
    },
    {
      q: "How does self-storage work?",
      a: "Renting a self-storage unit involves selecting the desired unit size, signing a rental agreement, and paying the rental fee. Once rented, customers have exclusive access to their storage unit, allowing them to store and retrieve their belongings as needed within the facility's operating hours."
    },
    {
      q: "Is there a minimum commitment?",
      a: "Yes, the minimum commitment is one month."
    },
    {
      q: "What sizes of storage units are available?",
      a: "Our self-storage facility offers a range of unit sizes ranging from 16 sq ft to 175 sqft to accommodate various needs. Common sizes include small lockers, closet-sized units and single/double garage-sized units. Our staff can assist you in determining the appropriate unit size based on your requirements."
    },
    {
      q: "How do I determine what size storage unit I need?",
      a: "Estimating the storage unit size you need can be challenging, but our team is here to help. Factors such as the number and size of items you plan to store, and any additional storage requirements can help determine the appropriate unit size. Feel free to consult with our staff to ensure you select the right unit."
    },
    {
      q: "Is my stored property safe and secure?",
      a: "At our self-storage facility, security is a top priority. We employ various security measures, including 24/7 video surveillance, gated access control, well-lit premises, and on-site staff to ensure the safety and security of your stored items. See our Security page for more information. Additionally, we recommend using a high-quality padlock to secure your unit. This can be provided by us, or you can provide your own."
    },
    {
      q: "Do you offer climate-controlled storage units?",
      a: "No not as of now."
    },
    {
      q: "Can I access my storage unit at any time?",
      a: "While our facility has specific operating hours, we strive to provide convenient access to your storage unit. Please check our facility's hours of operation, as access may be restricted during certain times, such as after-hours or on holidays. We do offer an out of hours service by appointment an additional charge."
    },
    {
      q: "What is the rental term for a storage unit?",
      a: "Our self-storage units are available for both short-term and long-term rentals. We offer flexible rental terms, ranging from month-to-month rentals to longer-term agreements. Speak to our staff to discuss the rental options that best suit your needs."
    },
    {
      q: "Can I transfer to a different storage unit if I need more or less space?",
      a: "Yes, we understand that your storage needs may change over time. If you require a different unit size, we will work with you to transfer to a more suitable unit within our facility, subject to availability."
    },
    {
      q: "Can I purchase storage supplies on-site?",
      a: "Yes, we offer a selection of moving and storage supplies, including boxes, packing materials, tape, and locks. These supplies are available for purchase at our facility to assist you with your storage and moving needs."
    },
    {
      q: "Why do I need Insurance?",
      a: "Your goods must be insured whilst in storage. Selfstore offers insurance protection under our own insurance policy. We always take good care of our storage facility and make every effort to protect items being stored with us. Unfortunately, there are some events which may damage your goods which are out of our control, such as a fire or flood. It is therefore standard practice for self-storage companies to require their customers to adequately insure their goods for the duration of their stay."
    },
    {
      q: "Do you have trolleys available?",
      a: "All stores have trolleys and pallet trucks available free of charge for customers use."
    },
    {
      q: "What happens if I lose my key?",
      a: "Everyone loses things from time to time and if you lose your key, it’s not the end of the world. Once your identity has been confirmed, we will cut the lock from your storage room so you are able to access it immediately. It will be necessary to acquire a new lock for your room after this, so it is advised that this is only a last resort option. We also offer a service where we will hold a key for you in a key safe so if this problem arises you will be able to enter your unit."
    },
    {
      q: "Can I add additional names for access?",
      a: "You are able to give access to your room to family/friends/colleagues, but their details must be added to your contract in advance and their identity verified as above."
    },
    {
      q: "Do I have to pay a deposit?",
      a: "Yes. All customers are required to pay a refundable security deposit before storing. How much is dependent on the size room you choose."
    },
    {
      q: "What items cannot be stored?",
      a: "We do not permit the storage of hazardous goods, toxic materials, pollutants, contaminants, waste, perishable goods, live animals, living plants, cash and securities, illegal goods, explosives, firearms, or ammunitions. We always cooperate with the Police and HM Customs. See our T&Cs."
    },
    {
      q: "Do you have office space?",
      a: <>
        Yes, we do have office space on site. Ecom Base is established to assist small online retailers grow. See <button onClick={() => goToPage("ecom")} className="text-[color:var(--brand)] underline">ECOM BASE</button> for more details.
      </>
    }
  ];

  const units = [
    { size: 16, price: 69, image: PHOTO_SLOTS.downstairs },
    { size: 25, price: 78, image: PHOTO_SLOTS.downstairs },
    { size: 35, price: 108, image: PHOTO_SLOTS.upstairs },
    { size: 50, price: 152, image: PHOTO_SLOTS.upstairs },
    { size: 75, price: 195, image: PHOTO_SLOTS.goodsLift },
    { size: 100, price: 217, image: PHOTO_SLOTS.liftCorridor },
    { size: 125, price: 260, image: PHOTO_SLOTS.front },
    { size: 150, price: 303, image: PHOTO_SLOTS.front },
    { size: 175, price: 347, image: PHOTO_SLOTS.lockDoor },
  ];

  const goToPage = (nextPage) => {
    setPage(nextPage);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const footer = (
    <section className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Learn More</div>
            <div className="mt-5 space-y-2 text-sm">
              <button onClick={() => goToPage("about")} className="block hover:text-[color:var(--brand)]">About Us</button>
              <button onClick={() => goToPage("locations")} className="block hover:text-[color:var(--brand)]">Locations</button>
              <button onClick={() => goToPage("faq")} className="block hover:text-[color:var(--brand)]">FAQs</button>
              <button onClick={() => goToPage("terms")} className="block hover:text-[color:var(--brand)]">Terms & Conditions</button>
              <button onClick={() => goToPage("contact")} className="block hover:text-[color:var(--brand)]">Contact Us</button>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Contact</div>
            <div className="mt-5 space-y-2 text-sm text-zinc-700">
              <div>+44 01614855454</div>
              <div>Hello@selfstoregroup.co.uk</div>
              <div>selfstoregroup.co.uk</div>
              <a href="https://share.google/nNsq7vwfRfPVCzdMz" target="_blank" rel="noreferrer" className="underline hover:text-[color:var(--brand)]">View Location</a>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Follow Us</div>
            <div className="mt-5 flex gap-4">
              <SocialButton href="https://www.instagram.com/selfstoregroup/?utm_source=ig_web_button_share_sheet" label="Instagram" Icon={InstagramIcon} />
              <SocialButton href="https://www.facebook.com/share/1BMTEEZqwQ/?mibextid=wwXIfr" label="Facebook" Icon={FacebookIcon} />
              <SocialButton href="https://www.linkedin.com/company/selfstore-group-ltd/" label="LinkedIn" Icon={LinkedinIcon} />
              <SocialButton href="https://share.google/nNsq7vwfRfPVCzdMz" label="Google Maps" Icon={MapPinIcon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderPage = () => {
    if (page === "home") {
      return (
        <>
          <section className="overflow-hidden border-b border-zinc-200 bg-white">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="mb-5 inline-flex rounded-full border border-[color:var(--brand)]/20 bg-[color:var(--brand)]/5 px-4 py-2 text-sm font-medium text-[#8f2a17]">
                  Secure • Convenient • Reliable self storage in Manchester
                </div>
                <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-zinc-950 md:text-6xl lg:text-7xl">
                  Self storage that feels simple, secure, and easy from day one.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">
                  Welcome to SelfStore Group, your trusted partner for all your storage needs in the vibrant city of Manchester.
                </p>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-[2rem] border border-zinc-200 bg-zinc-100 p-4 shadow-sm lg:col-span-2">
                  <PhotoCard label="Main frontage photo" src={PHOTO_SLOTS.front} showLabel={false} />
                </div>
                <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-4 shadow-sm">
                  <PhotoCard label="Downstairs corridor photo" src={PHOTO_SLOTS.downstairs} tall showLabel={false} />
                </div>
                <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-4 shadow-sm">
                  <PhotoCard label="Goods lift photo" src={PHOTO_SLOTS.goodsLift} tall showLabel={false} />
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-zinc-200 bg-zinc-50">
            <div className="mx-auto max-w-7xl px-6 py-20">
              <div className="max-w-2xl">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Why choose us?</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Easily access your belongings without sacrificing security</h2>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {features.map((item) => (
                  <div key={item.title} className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--brand)]/10 text-sm font-bold text-[color:var(--brand)]">✓</div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      );
    }

    if (page === "about") {
      return (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="relative overflow-hidden rounded-[2rem]">
            {PHOTO_SLOTS.downstairs ? (
              <img src={PHOTO_SLOTS.downstairs} alt="About SelfStore Group" className="absolute inset-0 h-full w-full object-cover" />
            ) : null}
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative max-w-4xl p-8 text-white md:p-12">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff7a5f]">About us</div>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">About SelfStore Group</h1>
              <p className="mt-6 text-lg leading-8 text-white/90">
                Welcome to Selfstore group your trusted partner for all your storage needs in the vibrant city of Manchester. With a commitment to providing secure, convenient, and reliable storage solutions, we are here to simplify your life and help you reclaim your space.
              </p>
              {!aboutExpanded && (
                <button onClick={() => setAboutExpanded(true)} className="mt-6 rounded-2xl bg-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
                  Learn more
                </button>
              )}
            </div>
          </div>
          {aboutExpanded && (
            <div className="mt-10 space-y-6 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
              <p className="text-base leading-8 text-zinc-700">
                Welcome to Selfstore group your trusted partner for all your storage needs in the vibrant city of Manchester. With a commitment to providing secure, convenient, and reliable storage solutions, we are here to simplify your life and help you reclaim your space.
              </p>
              <p className="text-base leading-8 text-zinc-700">
                We understand that your belongings are more than just items; they hold sentimental value, memories, and even aspirations. That's why we pride ourselves on offering state-of-the-art storage facilities that prioritise security and protection. Our modern facilities are equipped with advanced surveillance systems, access controls, and 24/7 monitoring to ensure the utmost safety of your possessions.
              </p>
              <p className="text-base leading-8 text-zinc-700">
                Convenience and communication is at the heart of our service. Whether you're a student, homeowner, business owner, or simply in transition, we offer a range of storage unit sizes to accommodate your specific requirements. Our user-friendly online booking system allows you to reserve and manage your storage unit effortlessly. Plus, our flexible rental terms give you the freedom to store for as short or long a period as you need.
              </p>
              <p className="text-base leading-8 text-zinc-700">
                We believe in providing exceptional customer service. Our friendly and knowledgeable staff are here to assist you every step of the way, from selecting the right storage unit to answering any questions you may have. We strive to create a welcoming and hassle-free environment where you can feel confident that your belongings are in good hands.
              </p>
              <p className="text-base leading-8 text-zinc-700">
                As a locally owned and operated company, we are proud to be a part of the Manchester community.
              </p>
              <p className="text-base leading-8 text-zinc-700">
                We are dedicated to giving back and supporting local initiatives that make a positive impact. Our commitment extends beyond providing exceptional storage solutions; we aim to be a reliable and trusted partner for our customers and the community we serve.
              </p>
              <p className="text-base leading-8 text-zinc-700">
                Experience the convenience, security, and peace of mind that comes with storing your belongings at Selfstore group.
              </p>
              <p className="text-base leading-8 text-zinc-700">
                Contact us today or visit our facility to discover how we can assist you in decluttering, organising, and simplifying your life.
              </p>
              <p className="text-base leading-8 text-zinc-700">
                Location: Units A &amp; B Blackbrook Trading Estate, Weybrook Road, Stockport, M19 2QD Opposite the Mcvities factory, KFC and McDonalds.
              </p>
            </div>
          )}
        </section>
      );
    }

    if (page === "storage") {
      return (
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Storage Types</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Storage options for personal, business, and student needs.</h1>
          </div>
          <div className="mt-12 space-y-10">
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Personal Storage</h2>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                Personal storage is designed for individuals who require extra space to store their personal belongings. Whether you're decluttering or downsizing your home, undergoing a home renovation or house move, personal storage units offer a convenient and secure option for what might be just a short time. You can also store seasonal items (such as Christmas or other religious decorations, collectibles, and much more, ensuring your possessions are kept safe until you need them again.
              </p>
            </div>
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Business Storage</h2>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                Most businesses require additional temporary or permanent storage space at some time. Our bespoke business storage solutions are tailored for all such needs, providing secure units on flexible terms, to small businesses, start-ups, sole-traders, professional consultants, wholesale operators and resellers alike; helping to manage inventory, store equipment and retain important documents.
              </p>
              <p className="mt-4 text-base font-semibold leading-8 text-zinc-600">Selfstore offer two types of unit for business users:-</p>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                The Stockroom, where you can store anything, ranging from rapid turnaround ecommerce stock, to promotional materials for trade shows and other equipment, which does not need to be available in the normal course of your business. We also provide smaller units; the Business Box, that provides a secure, organised and compact solution for storing important documents or archiving files, perhaps for many years.
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                We even have larger units, with concrete block walls and sturdy doors, which we call the Strongroom. Each has internal lighting and power and specifically caters for businesses and individuals who need to store legal, financial or medical records, and other sensitive information, in a very secure environment, where more regular access is required. With features like full access control, multi-camera surveillance and an advanced security system, confidentiality and integrity of your data is assured. And 24/7 access (upon request) can accommodate busy business schedules.
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                So, whether you're a solicitor or accountant, a large corporation, a small start-up, a one-man retail or home manufacturing business, a Selfstore business storage solution can help you streamline operations, improve efficiency and create a clutter-free workspace, improving the value of your main premises to the business and enhancing staff conditions.
              </p>
            </div>
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Student Storage</h2>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                Student storage is tailored to meet the needs of university students during summer breaks or study abroad programs. It offers a convenient solution for storing furniture, electronics, and other personal items without the hassle of transporting them back and forth. With flexible rental options, student storage ensures that your belongings are secure and readily accessible when you return.
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                When choosing a self-storage facility, consider your specific storage needs and explore the different categories available. A reputable storage provider will offer a range of unit sizes, flexible lease terms, and top-notch security measures to safeguard your belongings. Take the time to research and find a storage facility that best aligns with your requirements, giving you peace of mind and convenient access to your stored items whenever you need them.
              </p>
            </div>
          </div>
        </section>
      );
    }

    if (page === "gallery") {
      return (
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Gallery</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">See the facility before you book.</h1>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryImages.map((image) => (
              <div key={image.title} className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm">
                <div className="p-4">
                  <PhotoCard label={image.subtitle} src={image.src} />
                </div>
                <div className="px-5 pb-5">
                  <div className="text-lg font-semibold">{image.title}</div>
                  <div className="mt-1 text-sm text-zinc-500">{image.alt}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    }

    if (page === "locations") {
      return (
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 shadow-sm">
              <PhotoCard label="Main frontage photo" src={PHOTO_SLOTS.front} dark showLabel={false} />
            </div>
            <div className="rounded-[2rem] border border-zinc-200 bg-zinc-950 p-8 text-white shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff7a5f]">Current location</div>
              <h2 className="mt-3 text-3xl font-semibold">SelfStore Group</h2>
              <div className="mt-6 space-y-3 text-white/85">
                <div>Blackbrook Trading Estate</div>
                <div>Weybrook Road, Stockport</div>
                <div>M19 2QD</div>
                <div>0161 485 5454</div>
                <div>Hello@selfstoregroup.co.uk</div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (page === "pricing") {
      return (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Unit Sizes & Prices</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Find the right unit for you</h1>
            <p className="mt-4 text-zinc-600">Prices can be updated at any time as needed.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {units.map((u) => (
              <div key={u.size} className="rounded-2xl border p-6 shadow-sm">
                <PhotoCard label={`${u.size} sq ft unit`} src={u.image} showLabel={false} />
                <h3 className="mt-4 text-xl font-semibold">{u.size} sq ft</h3>
                <p className="mt-2 text-lg font-bold text-[color:var(--brand)]">£{u.price} / month</p>
              </div>
            ))}
          </div>
        </section>
      );
    }

    if (page === "faq") {
      return (
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">FAQ</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Frequently asked questions</h1>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={item.q} className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition">
                  <button onClick={() => setOpenFaqIndex(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="text-lg font-semibold text-zinc-900">{item.q}</span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-xl text-[color:var(--brand)] transition ${isOpen ? "rotate-45" : "rotate-0"}`}>
                      +
                    </span>
                  </button>
                  {isOpen ? <div className="border-t border-zinc-100 px-6 py-5 text-base leading-8 text-zinc-600">{typeof item.a === "string" ? <p>{item.a}</p> : item.a}</div> : null}
                </div>
              );
            })}
          </div>
        </section>
      );
    }

    if (page === "contact") {
      return (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="relative min-h-[320px] overflow-hidden rounded-[2rem]">
              {PHOTO_SLOTS.downstairs ? <img src={PHOTO_SLOTS.downstairs} alt="Contact background" className="absolute inset-0 h-full w-full object-cover" /> : null}
              <div className="absolute inset-0 bg-black/55" />
              <div className="relative flex h-full flex-col justify-between p-10 text-white">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff7a5f]">Contact</div>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Get in touch</h2>
                  <p className="mt-4 max-w-md text-white/85">Get in touch with us to learn more.</p>
                </div>
                <div className="mt-10 space-y-4 text-base text-white/90">
                  <div>+44 01614855454</div>
                  <div>Hello@selfstoregroup.co.uk</div>
                  <div>selfstoregroup.co.uk</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Send an enquiry</div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">Contact form</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">This gives you a clean enquiry form on the page. When the site is deployed, this can be connected to your email inbox, a form service, or your CRM so enquiries come through properly.</p>
                <form className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input type="text" placeholder="Full name" className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand)]" />
                    <input type="email" placeholder="Email address" className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand)]" />
                  </div>
                  <input type="tel" placeholder="Phone number" className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand)]" />
                  <textarea placeholder="Your message" rows="5" className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand)]" />
                  <button type="button" className="rounded-2xl bg-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">Send Enquiry</button>
                </form>
              </div>
              <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Storeganise</div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">Customer portal flow</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">This section gives customers a clear route into your Storeganise journey. The website acts as the marketing front-end, while Storeganise handles account login, booking, and customer management.</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <a href="https://book.selfstoregroup.co.uk/sites" className="rounded-2xl bg-[color:var(--brand)] px-5 py-4 text-center text-sm font-semibold text-white shadow-sm transition hover:opacity-90">Start Booking Flow</a>
                  <a href="https://book.selfstoregroup.co.uk/account/login" className="rounded-2xl border border-zinc-300 px-5 py-4 text-center text-sm font-semibold transition hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]">Customer Login</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (page === "security") {
      return (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Security</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Your belongings are safe with us</h1>
            <p className="mt-6 text-base leading-8 text-zinc-600">At SelfStore Group, security is our top priority. We use advanced systems and procedures to help ensure your items are protected at all times.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { title: "24/7 CCTV monitoring", image: PHOTO_SLOTS.downstairs },
              { title: "Secure gated access", image: PHOTO_SLOTS.front },
              { title: "Individually locked units", image: PHOTO_SLOTS.lockDoor },
              { title: "Well-lit facility", image: PHOTO_SLOTS.upstairs },
              { title: "Access control systems", image: PHOTO_SLOTS.goodsLift },
              { title: "On-site support", image: PHOTO_SLOTS.liftCorridor }
            ].map((item) => (
              <div key={item.title} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <PhotoCard label={item.title} src={item.image} />
                <div className="p-6">
                  <p className="font-semibold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    }

    if (page === "ecom") {
      return (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Ecom Base</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Workspace + storage for modern e-commerce businesses.</h1>
            <p className="mt-6 text-base leading-8 text-zinc-600">Ecom Base is established to assist small online retailers grow. By providing online business facilities, adjacent to your storage unit for ease of order processing and dispatch. The Ecom base office has ergonomic workstations, high speed internet to help with your e-commerce needs, a packing area to easily and comfortably pack and unpack deliveries to and from the site. The various bright and airy offices will provide a modern inspiring working environment, great transport links and many local food amenities within walking distance such as, Aldi, sandwich shops and fast-food outlets. ECOM BASE is a great place to meet other likeminded business people and interact and exchange experiences and exciting ideas to stay ahead of the ever-evolving e-commerce landscape. Ecom base can also introduce to a variety of financial and business consultants to help your business expand and eventually leave us 😞. As part of the self store family you can join the Ecom base business club via a Monthly subscription. </p>
            
          </div>
        </section>
      );
    }

    return (
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Terms & Conditions</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Terms page starter</h1>
        <div className="mt-8 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
          <p className="text-base leading-8 text-zinc-600">This page is ready for your final terms, access policies, prohibited items list, and rental conditions.</p>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900" style={{ "--brand": BRAND }}>
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <button onClick={() => goToPage("home")} className="flex min-w-0 items-center gap-3 text-left">
              <img src="/logo.png" alt="SelfStore Group logo" className="h-20 w-auto shrink-0 object-contain" />
              <div className="min-w-0">
                <div className="truncate text-base font-semibold tracking-tight sm:text-lg">SelfStore Group</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">Manchester self storage</div>
              </div>
            </button>

            <div className="hidden items-center gap-3 lg:flex">
              <nav className="flex flex-wrap items-center justify-center gap-2 text-sm text-zinc-700 xl:gap-3">
                {navItems.map((item) => {
                  const active = page === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => goToPage(item.id)}
                      className={`rounded-full px-4 py-2 transition ${active ? "bg-[color:var(--brand)] text-white" : "hover:bg-zinc-100 hover:text-[color:var(--brand)]"}`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>
              <a
  href="https://book.selfstoregroup.co.uk/account/login"
  className="rounded-2xl border border-zinc-300 px-4 py-2 text-sm font-medium transition hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
>
  Customer Login
</a>
<a
  href="https://book.selfstoregroup.co.uk/sites"
  className="rounded-2xl bg-[color:var(--brand)] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
>
  Book Now
</a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <a
    href="https://book.selfstoregroup.co.uk/account/login"
    className="rounded-xl border border-zinc-300 px-3 py-2 text-xs font-semibold transition hover:border-[color:var(--brand)] hover:text-[color:var(--brand)] sm:px-4 sm:text-sm"
  >
    Login
  </a>

  <a
    href="https://book.selfstoregroup.co.uk/sites"
    className="rounded-xl bg-[color:var(--brand)] px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-90 sm:px-4 sm:text-sm"
  >
    Book Now
  </a>
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-700"
              >
                ☰
              </button>
            </div>
          </div>

          {mobileMenuOpen ? (
            <div className="mt-4 rounded-3xl border border-zinc-200 bg-white p-4 shadow-xl lg:hidden">
              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <button key={item.id} onClick={() => goToPage(item.id)} className="rounded-2xl bg-zinc-50 px-4 py-3 text-left text-sm font-medium hover:bg-zinc-100 hover:text-[color:var(--brand)]">
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          ) : null}
        </div>
      </header>

      <main>
        {renderPage()}
        {footer}
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 SelfStore Group LTD. All rights reserved.</div>
          <div></div>
        </div>
      </footer>
    </div>
  );
}
