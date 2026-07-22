'use client';

import { useState, useEffect, useRef, type CSSProperties } from 'react';
import Image from "next/image";

// ── Palette ──────────────────────────────────────────────────────────────────
const P = {
  pink: '#F4A5B5',
  pinkDark: '#C4667A',
  pinkDeep: '#A84E63',
  pinkLight: '#FFF0F3',
  pinkMid: '#FAD5DE',
  cream: '#FFF7F5',
  brown: '#3D2020',
  brownMid: '#7A4A4A',
  brownLight: '#A07070',
  sage: '#A8C4A0',
  sageDark: '#6E9868',
  taupe: '#C4A896',
  gold: '#D4A853',
};

// ── Data ─────────────────────────────────────────────────────────────────────
const COOKIES = [
  {
    id: 1,
    name: 'Chocolate Chip',
    description:
      'Golden-edged with pools of semi-sweet chocolate, crispy outside and chewy at the center. Made with brown butter and a touch of fleur de sel.',
    image:
      '/images/chocolatechip.png',
    tag: '',
    tagColor: P.pinkDeep,
  },
  {
    id: 2,
    name: 'Double Chocalate Chip',
    description:
      'Pillowy soft with a crinkled sugar crust rolled in cinnamon and cardamom. A warm, spiced finish that melts on your tongue.',
    image:
      'https://images.unsplash.com/photo-1608070735103-35aa01048704?w=600&h=600&fit=crop&auto=format',
    tag: '',
    tagColor: P.gold,
  },
  {
    id: 3,
    name: 'Snickerdoodle',
    description:
      'Earthy ceremonial matcha balanced by creamy white chocolate chips — a sophisticated, verdant pairing in every bite.',
    image:
      'https://images.unsplash.com/photo-1757345016219-7b3b8a1b9fba?w=600&h=600&fit=crop&auto=format',
    tag: '',
    tagColor: P.sageDark,
  },
  {
    id: 4,
    name: 'Salted Brownie',
    description:
      'Buttery shortbread pressed with a sweet cavity filled with house-made raspberry preserves. Delicate, jammy, and utterly charming.',
    image:
      'https://images.unsplash.com/photo-1565624546530-a1c8e57e7214?w=600&h=600&fit=crop&auto=format',
    tag: '',
    tagColor: '',
  },
  {
    id: 5,
    name: 'Oatmeal',
    description:
      'Fragrant culinary lavender folded into a fine French butter base, dusted with powdered sugar. Floral, elegant, impossibly tender.',
    image:
      'https://images.unsplash.com/photo-1669837127024-668ca3314d21?w=600&h=600&fit=crop&auto=format',
    tag: '',
    tagColor: '#7B68C8',
  },
  {
    id: 6,
    name: 'Lemon Blueberry',
    description:
      'Rich cocoa dough packed with dark chocolate chunks and a hint of espresso. Intensely fudgy, deeply satisfying.',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=600&fit=crop&auto=format',
    tag: '',
    tagColor: '',
  },
  {
    id: 7,
    name: 'Peanut Butter',
    description:
      'Chewy brown sugar cookies with swirls of cinnamon baked in — reminiscent of a warm morning pastry in every mouthful.',
    image:
      '/images/peanutbutter.png',
    tag: '',
    tagColor: '',
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description:
      'A powdery crinkled exterior gives way to a molten caramel center, finished with hand-crushed fleur de sel. Sweet, salty, memorable.',
    image:
      'https://images.unsplash.com/photo-1576717585968-8ea8166b89b8?w=600&h=600&fit=crop&auto=format',
    tag: '',
    tagColor: P.pinkDark,
  },
  {
    id: 9,
    name: 'S\'mores',
    description:
      'A powdery crinkled exterior gives way to a molten caramel center, finished with hand-crushed fleur de sel. Sweet, salty, memorable.',
    image:
      '/images/smores.png',
    tag: '',
    tagColor: P.pinkDark,
  },
  {
    id: 10,
    name: 'Strawberry Cheesecake',
    description:
      'A powdery crinkled exterior gives way to a molten caramel center, finished with hand-crushed fleur de sel. Sweet, salty, memorable.',
    image:
      '/images/strawberry.png',
    tag: '',
    tagColor: P.pinkDark,
  },
];

const PRICING = [
  { qty: 3, price: 6, label: 'Three', note: 'A sweet treat for yourself', emoji: '🍪' },
  { qty: 6, price: 11, label: 'Half Dozen', note: 'Perfect for sharing', emoji: '🎁' },
  { qty: 12, price: 20, label: 'One Dozen', note: 'Great for gatherings & gifts', emoji: '🎉' },
];

// ── Hooks ─────────────────────────────────────────────────────────────────────
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── Section Header ────────────────────────────────────────────────────────────
function SectionHeader({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle: string;
  light?: boolean;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{
        textAlign: 'center',
        marginBottom: 56,
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12,
          letterSpacing: '0.22em',
          textTransform: 'uppercase' as const,
          color: light ? 'rgba(255,255,255,0.7)' : P.pinkDark,
          marginBottom: 12,
          fontWeight: 500,
        }}
      >
        ✦ Whisked-By-Vale ✦
      </p>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 700,
          color: light ? '#fff' : P.brown,
          margin: '0 0 16px',
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          fontSize: 'clamp(15px, 2vw, 18px)',
          color: light ? 'rgba(255,255,255,0.85)' : P.brownLight,
          maxWidth: 480,
          margin: '0 auto',
          lineHeight: 1.7,
        }}
      >
        {subtitle}
      </p>
      <div
        style={{
          width: 60,
          height: 3,
          background: light
            ? 'rgba(255,255,255,0.5)'
            : `linear-gradient(90deg, ${P.pink}, ${P.pinkDark})`,
          borderRadius: 2,
          margin: '20px auto 0',
        }}
      />
    </div>
  );
}

// ── Cookie Card ───────────────────────────────────────────────────────────────
function CookieCard({ cookie, index }: { cookie: (typeof COOKIES)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(40px)',
        transition: `opacity 0.7s ${index * 0.07}s ease, transform 0.7s ${index * 0.07}s ease`,
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: 24,
          overflow: 'hidden',
          cursor: 'pointer',
          background: P.cream,
          boxShadow: hovered
            ? '0 24px 56px rgba(196,102,122,0.3)'
            : '0 4px 20px rgba(196,102,122,0.1)',
          transform: hovered ? 'translateY(-6px)' : 'none',
          transition: 'box-shadow 0.4s ease, transform 0.4s ease',
        }}
      >
        <div
          style={{
            position: 'relative',
            aspectRatio: '1',
            overflow: 'hidden',
            background: P.pinkLight,
          }}
        >
          <img
            src={cookie.image}
            alt={cookie.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover' as const,
              display: 'block',
              transform: hovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.65s ease',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(40,12,12,0.88) 0%, rgba(40,12,12,0.25) 55%, transparent 100%)',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '20px 18px',
              transform: hovered ? 'none' : 'translateY(12px)',
              opacity: hovered ? 1 : 0,
              transition: 'transform 0.4s ease, opacity 0.4s ease',
            }}
          >
            <p
              style={{
                color: '#fff',
                fontSize: 13,
                lineHeight: 1.65,
                fontFamily: "'DM Sans', sans-serif",
                margin: 0,
              }}
            >
              {cookie.description}
            </p>
          </div>
          {cookie.tag && (
            <div style={{ position: 'absolute', top: 12, left: 12 }}>
              <span
                style={{
                  padding: '4px 12px',
                  borderRadius: 20,
                  fontSize: 11,
                  fontWeight: 600,
                  background: 'rgba(255,247,245,0.96)',
                  color: cookie.tagColor,
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.04em',
                }}
              >
                {cookie.tag}
              </span>
            </div>
          )}
        </div>
        <div
          style={{
            padding: '14px 18px 16px',
            background: hovered
              ? `linear-gradient(135deg, ${P.pinkLight}, ${P.cream})`
              : P.cream,
            transition: 'background 0.4s ease',
          }}
        >
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 16,
              fontWeight: 600,
              color: P.brown,
              margin: 0,
            }}
          >
            {cookie.name}
          </h3>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              color: P.pinkDark,
              margin: '4px 0 0',
              opacity: hovered ? 1 : 1,
              transition: 'opacity 0.3s ease',
            }}
          >
            Hover to learn more 
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Pricing Card ──────────────────────────────────────────────────────────────
function PricingCard({
  tier,
  selected,
  onSelect,
  delay,
}: {
  tier: (typeof PRICING)[0];
  selected: boolean;
  onSelect: () => void;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const { ref, visible } = useReveal();
  const perCookie = (tier.price / tier.qty).toFixed(2);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(32px)',
        transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease`,
      }}
    >
      <div
        onClick={onSelect}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: 24,
          padding: '36px 24px 32px',
          textAlign: 'center' as const,
          cursor: 'pointer',
          background: selected
            ? `linear-gradient(145deg, ${P.pink}, ${P.pinkDark})`
            : hovered
              ? P.pinkLight
              : P.cream,
          boxShadow: selected
            ? '0 20px 56px rgba(196,102,122,0.45)'
            : hovered
              ? '0 12px 36px rgba(196,102,122,0.18)'
              : '0 4px 18px rgba(196,102,122,0.1)',
          border: `2px solid ${selected ? 'transparent' : hovered ? P.pinkMid : 'transparent'}`,
          transform: selected ? 'scale(1.04)' : hovered ? 'translateY(-4px)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          position: 'relative' as const,
        }}
      >
        {selected && (
          <div
            style={{
              position: 'absolute',
              top: -10,
              right: -10,
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
          >
            ✓
          </div>
        )}
        <div style={{ fontSize: 32, marginBottom: 12 }}>{tier.emoji}</div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase' as const,
            color: selected ? 'rgba(255,255,255,0.75)' : P.brownLight,
            marginBottom: 6,
            fontWeight: 500,
          }}
        >
          {tier.qty} cookies
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 20,
            fontWeight: 700,
            color: selected ? '#fff' : P.brown,
            marginBottom: 4,
          }}
        >
          {tier.label}
        </div>
        <div
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 52,
            fontWeight: 700,
            color: selected ? '#fff' : P.pinkDark,
            lineHeight: 1,
            margin: '8px 0',
          }}
        >
          ${tier.price}
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            color: selected ? 'rgba(255,255,255,0.7)' : P.brownLight,
            marginBottom: 12,
          }}
        >
          ${perCookie} per cookie
        </div>
        <div
          style={{
            width: 40,
            height: 1,
            background: selected ? 'rgba(255,255,255,0.35)' : P.pinkMid,
            margin: '0 auto 12px',
          }}
        />
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 13,
            color: selected ? 'rgba(255,255,255,0.8)' : P.taupe,
          }}
        >
          {tier.note}
        </div>
      </div>
    </div>
  );
}

// ── Nav Link ──────────────────────────────────────────────────────────────────
function NavLink({
  href,
  children,
  scrolled,
}: {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 14,
        fontWeight: 500,
        color: scrolled ? (hovered ? P.pinkDark : P.brown) : hovered ? P.pinkLight : 'rgba(255,255,255,0.9)',
        textDecoration: 'none',
        letterSpacing: '0.02em',
        transition: 'color 0.25s ease',
        paddingBottom: 2,
        borderBottom: hovered ? `2px solid ${scrolled ? P.pink : 'rgba(255,255,255,0.7)'}` : '2px solid transparent',
      }}
    >
      {children}
    </a>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export function WhiskedByValePage() {
  const [scrolled, setScrolled] = useState(false);
  const [heroParallax, setHeroParallax] = useState(0);
  const [selectedPricing, setSelectedPricing] = useState<number | null>(null);
  const [orderBtnHovered, setOrderBtnHovered] = useState(false);
  const [ctaBtnHovered, setCtaBtnHovered] = useState(false);
  const [menuBtnHovered, setMenuBtnHovered] = useState(false);
  const [heroBtnHovered, setHeroBtnHovered] = useState<'menu' | 'pricing' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const aboutReveal = useReveal();
  const orderReveal = useReveal();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHeroParallax(y * 0.38);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBase: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '0 24px',
    minHeight: 68,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    background: scrolled ? 'rgba(255,247,245,0.96)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    boxShadow: scrolled ? '0 2px 24px rgba(196,102,122,0.1)' : 'none',
    transition: 'background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease',
    flexWrap: 'wrap',
  };

  return (
    <div style={{ fontFamily: "'Dancing Script', cursive", background: P.cream, color: P.brown }}>
      <nav style={navBase}>
        <a
          href="#home"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 26,
            fontWeight: 700,
            color: scrolled ? P.brown : '#fff',
            textDecoration: 'none',
            textShadow: scrolled ? 'none' : '0 1px 8px rgba(61,32,32,0.25)',
            transition: 'color 0.4s ease',
            lineHeight: 1,
          }}
        >
          Whisked-By-Vale
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginLeft: 'auto' }}>
          <div className="nav-links-desktop" style={{ alignItems: 'center', gap: 24 }}>
            <NavLink href="#menu" scrolled={scrolled}>
              Menu
            </NavLink>
            <NavLink href="#pricing" scrolled={scrolled}>
              Pricing
            </NavLink>
            <NavLink href="#about" scrolled={scrolled}>
              About
            </NavLink>
            <a
              href="#order"
              onMouseEnter={() => setOrderBtnHovered(true)}
              onMouseLeave={() => setOrderBtnHovered(false)}
              style={{
                padding: '9px 24px',
                borderRadius: 40,
                background: orderBtnHovered
                  ? P.pinkDark
                  : scrolled
                    ? P.pink
                    : 'rgba(255,255,255,0.22)',
                color: '#fff',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                textDecoration: 'none',
                border: scrolled ? 'none' : '2px solid rgba(255,255,255,0.55)',
                backdropFilter: scrolled ? 'none' : 'blur(8px)',
                boxShadow: orderBtnHovered
                  ? '0 8px 28px rgba(196,102,122,0.45)'
                  : '0 2px 10px rgba(196,102,122,0.2)',
                transform: orderBtnHovered ? 'translateY(-1px)' : 'none',
                transition: 'all 0.25s ease',
                letterSpacing: '0.02em',
              }}
            >
              Order Now
            </a>
          </div>

          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            style={{
              border: 'none',
              background: scrolled ? 'rgba(244,165,181,0.16)' : 'rgba(255,255,255,0.2)',
              color: scrolled ? P.brown : '#fff',
              borderRadius: 999,
              width: 42,
              height: 42,
              fontSize: 20,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
            }}
          >
            ☰
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="nav-links-mobile" style={{ width: '100%', paddingTop: 12, marginTop: 4 }}>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)} style={{ color: scrolled ? P.brown : '#fff' }}>
              Menu
            </a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} style={{ color: scrolled ? P.brown : '#fff' }}>
              Pricing
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ color: scrolled ? P.brown : '#fff' }}>
              About
            </a>
            <a href="#order" onClick={() => setMobileMenuOpen(false)} style={{ color: scrolled ? P.brown : '#fff' }}>
              Order Now
            </a>
          </div>
        )}
      </nav>

      <section
        id="home"
        ref={heroRef}
        style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '-10%',
            backgroundImage:
              'url(https://images.unsplash.com/photo-1634188023615-7e08901193b6?w=1600&h=1100&fit=crop&auto=forma)',
            backgroundSize: 'cover',
            backgroundPosition: `center calc(50% + ${heroParallax}px)`,
            willChange: 'background-position',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(61,32,32,0.45) 0%, rgba(61,32,32,0.15) 45%, rgba(255,240,243,0.88) 100%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 24px',
            paddingTop: 92,
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              letterSpacing: '0.24em',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: 16,
              textTransform: 'uppercase',
              animation: 'fadeInUp 0.9s 0.1s ease both',
            }}
          >
            ✦ &nbsp;Handcrafted with love &nbsp;✦
          </p>
          <h1
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: 'clamp(68px, 11vw, 130px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1,
              margin: '0 0 12px',
              textShadow: '0 3px 24px rgba(61,32,32,0.28)',
              animation: 'fadeInUp 0.9s 0.2s ease both',
            }}
          >
            WhiskedByVale
          </h1>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(16px, 2.2vw, 22px)',
              color: 'rgba(255,255,255,0.95)',
              marginBottom: 44,
              maxWidth: 500,
              lineHeight: 1.7,
              animation: 'fadeInUp 0.9s 0.35s ease both',
            }}
          >
            Small-batch cookies baked fresh to order, made with the finest ingredients and a whole lot of heart.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 14,
              animation: 'fadeInUp 0.9s 0.5s ease both',
              flexWrap: 'wrap' as const,
              justifyContent: 'center',
            }}
          >
            <a
              href="#menu"
              onMouseEnter={() => setHeroBtnHovered('menu')}
              onMouseLeave={() => setHeroBtnHovered(null)}
              style={{
                padding: '14px 40px',
                borderRadius: 50,
                background: heroBtnHovered === 'menu' ? P.pinkDark : P.pink,
                color: '#fff',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                boxShadow:
                  heroBtnHovered === 'menu'
                    ? '0 12px 36px rgba(196,102,122,0.55)'
                    : '0 6px 28px rgba(244,165,181,0.45)',
                transform: heroBtnHovered === 'menu' ? 'translateY(-2px)' : 'none',
                transition: 'all 0.25s ease',
              }}
            >
              View Menu
            </a>
            <a
              href="#pricing"
              onMouseEnter={() => setHeroBtnHovered('pricing')}
              onMouseLeave={() => setHeroBtnHovered(null)}
              style={{
                padding: '14px 40px',
                borderRadius: 50,
                background: heroBtnHovered === 'pricing' ? 'rgba(255,255,255,0.32)' : 'rgba(255,255,255,0.18)',
                color: '#fff',
                border: '2px solid rgba(255,255,255,0.55)',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                backdropFilter: 'blur(10px)',
                transform: heroBtnHovered === 'pricing' ? 'translateY(-2px)' : 'none',
                transition: 'all 0.25s ease',
              }}
            >
              See Pricing
            </a>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 36,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            color: 'rgba(255,255,255,0.65)',
            animation: 'fadeInUp 1s 1s ease both',
          }}
        >
          <span
            style={{
              fontSize: 10,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 22,
              height: 36,
              borderRadius: 11,
              border: '2px solid rgba(255,255,255,0.45)',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: 5,
            }}
          >
            <div
              style={{
                width: 4,
                height: 8,
                borderRadius: 2,
                background: 'rgba(255,255,255,0.8)',
                animation: 'scrollDot 1.6s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </section>

      <section id="about" style={{ padding: '96px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div
          ref={aboutReveal.ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 64,
            alignItems: 'center',
            opacity: aboutReveal.visible ? 1 : 0,
            transform: aboutReveal.visible ? 'none' : 'translateY(32px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: P.pinkDark,
                marginBottom: 14,
                fontWeight: 500,
              }}
            >
              ✦ Our Story
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 700,
                color: P.brown,
                margin: '0 0 20px',
                lineHeight: 1.2,
              }}
            >
              Baked with patience,<br />
              <em>served with joy.</em>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                lineHeight: 1.8,
                color: P.brownMid,
                marginBottom: 16,
              }}
            >
              Hi, I&apos;m Vale — home baker, cookie obsessive, and firm believer that the right cookie can turn any day around. Every batch is mixed by hand, baked to order, and shipped within 48 hours so you always get them at their freshest.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                lineHeight: 1.8,
                color: P.brownMid,
                marginBottom: 32,
              }}
            >
              No preservatives, no shortcuts — just real butter, quality chocolate, and recipes refined over years of weekend baking. Each cookie is a little love letter.
            </p>
            <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
              {[
                { n: '200+', label: 'Happy customers' },
                { n: '8', label: 'Cookie flavors' },
                { n: '48h', label: 'Baked to order' },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "'Dancing Script', cursive",
                      fontSize: 36,
                      fontWeight: 700,
                      color: P.pinkDark,
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      color: P.brownLight,
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 32,
                overflow: 'hidden',
                aspectRatio: '4/5',
                background: P.pinkLight,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1598839950984-034f6dc7b495?w=600&h=750&fit=crop&auto=format"
                alt="Freshly baked cookies on a white surface"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 28,
                left: -24,
                background: P.cream,
                borderRadius: 20,
                padding: '14px 20px',
                boxShadow: '0 8px 32px rgba(196,102,122,0.2)',
                animation: 'float 3.5s ease-in-out infinite',
              }}
            >
              <div
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: 18,
                  fontWeight: 700,
                  color: P.pinkDark,
                }}
              >
                Made fresh daily
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  color: P.brownLight,
                  marginTop: 2,
                }}
              >
                No shelf life, all love
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                top: -16,
                right: -16,
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${P.pinkMid}, ${P.pink})`,
                opacity: 0.5,
                zIndex: -1,
              }}
            />
          </div>
        </div>
      </section>

      <section id="menu" style={{ padding: '80px 24px 96px', background: P.pinkLight }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <SectionHeader title="Our Cookie Menu" subtitle="Every cookie baked to order — never sitting on a shelf." />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(256px, 1fr))',
              gap: 24,
            }}
          >
            {COOKIES.map((c, i) => (
              <CookieCard key={c.id} cookie={c} index={i} />
            ))}
          </div>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 15,
              color: P.brownLight,
              textAlign: 'center',
              marginTop: 40,
            }}
          >
            ✦ &nbsp; All cookies are baked to order! &nbsp;✦
          </p>
        </div>
      </section>

      <section id="pricing" style={{ padding: '88px 24px 96px', background: P.cream }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeader title="Pricing" subtitle="For more specific batch sizes, please DM!" />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: 20,
            }}
          >
            {PRICING.map((t, i) => (
              <PricingCard
                key={t.qty}
                tier={t}
                selected={selectedPricing === t.qty}
                onSelect={() => setSelectedPricing(t.qty === selectedPricing ? null : t.qty)}
                delay={i * 0.1}
              />
            ))}
          </div>

          <div
            style={{
              marginTop: 40,
              textAlign: 'center',
              minHeight: 80,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'opacity 0.4s ease',
              opacity: selectedPricing ? 1 : 0,
              pointerEvents: selectedPricing ? 'auto' : 'none',
            }}
          >
            {selectedPricing && (
              <>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18,
                    color: P.brownMid,
                    marginBottom: 20,
                    fontStyle: 'italic',
                  }}
                >
                  {selectedPricing} cookies for{' '}
                  <strong style={{ color: P.pinkDark }}>${PRICING.find((p) => p.qty === selectedPricing)?.price}</strong>{' '}
                  — sounds delicious!
                </p>
                <a
                  href="#order"
                  style={{
                    padding: '13px 40px',
                    borderRadius: 50,
                    background: `linear-gradient(135deg, ${P.pink}, ${P.pinkDark})`,
                    color: '#fff',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: 15,
                    textDecoration: 'none',
                    boxShadow: '0 8px 32px rgba(196,102,122,0.38)',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  Place My Order →
                </a>
              </>
            )}
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: P.brownLight,
              textAlign: 'center',
              marginTop: 28,
            }}
          >
            Mix and match any flavors within your order. Note: Assortment of flavors is an upcharge, DM for more info
          </p>
        </div>
      </section>

      <section
        id="order"
        style={{
          padding: '96px 24px',
          background: `linear-gradient(145deg, ${P.pinkDark} 0%, #B03D55 100%)`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {[
          { size: 320, top: -80, right: -60, opacity: 0.12 },
          { size: 200, bottom: -60, left: -40, opacity: 0.1 },
          { size: 120, top: '30%', left: '15%', opacity: 0.08 },
        ].map((c, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: c.size,
              height: c.size,
              borderRadius: '50%',
              background: '#fff',
              opacity: c.opacity,
              top: c.top,
              bottom: (c as { bottom?: number | string }).bottom,
              left: c.left,
              right: c.right,
              pointerEvents: 'none',
            }}
          />
        ))}

        <div
          ref={orderReveal.ref}
          style={{
            maxWidth: 620,
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            opacity: orderReveal.visible ? 1 : 0,
            transform: orderReveal.visible ? 'none' : 'translateY(32px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div style={{ fontSize: 48, marginBottom: 16 }}>🍪</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 700,
              color: '#fff',
              margin: '0 0 16px',
              lineHeight: 1.2,
            }}
          >
            Ready to place your order?
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              color: 'rgba(255,255,255,0.85)',
              marginBottom: 36,
              lineHeight: 1.75,
              maxWidth: 480,
              margin: '0 auto 36px',
            }}
          >
            Reach out via email and let me know your chosen flavors, quantity, and any special requests. I&apos;ll confirm your order within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:hello@whiskedbyvale.com"
              onMouseEnter={() => setCtaBtnHovered(true)}
              onMouseLeave={() => setCtaBtnHovered(false)}
              style={{
                padding: '14px 40px',
                borderRadius: 50,
                background: ctaBtnHovered ? '#fff' : 'rgba(255,255,255,0.95)',
                color: ctaBtnHovered ? P.pinkDeep : P.pinkDark,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                boxShadow: ctaBtnHovered
                  ? '0 16px 48px rgba(0,0,0,0.25)'
                  : '0 8px 28px rgba(0,0,0,0.18)',
                transform: ctaBtnHovered ? 'translateY(-2px) scale(1.02)' : 'none',
                transition: 'all 0.25s ease',
                letterSpacing: '0.01em',
              }}
            >
              hello@whiskedbyvale.com
            </a>
            <a
              href="#menu"
              onMouseEnter={() => setMenuBtnHovered(true)}
              onMouseLeave={() => setMenuBtnHovered(false)}
              style={{
                padding: '14px 36px',
                borderRadius: 50,
                background: menuBtnHovered ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.12)',
                color: '#fff',
                border: '2px solid rgba(255,255,255,0.45)',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
                transform: menuBtnHovered ? 'translateY(-2px)' : 'none',
                transition: 'all 0.25s ease',
              }}
            >
              Browse Menu Again
            </a>
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: 'rgba(255,255,255,0.6)',
              marginTop: 24,
            }}
          >
            Minimum order: 6 cookies · Delivery within 3–5 business days
          </p>
        </div>
      </section>

      <footer
        style={{
          padding: '48px 24px',
          background: P.brown,
          color: 'rgba(255,255,255,0.65)',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: 28,
                fontWeight: 700,
                color: '#fff',
                marginBottom: 6,
              }}
            >
              WhiskedByVale
            </div>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: 14,
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              Small-batch, big heart.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              gap: 28,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              flexWrap: 'wrap',
            }}
          >
            {['Menu', 'Pricing', 'About', 'Order'].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = P.pinkMid)}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)')}
              >
                {l}
              </a>
            ))}
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12 }}>
            © 2025 WhiskedByVale · Made with 🍪
          </p>
        </div>
      </footer>
    </div>
  );
}
