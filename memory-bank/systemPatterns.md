# System Patterns - Nefes Yoga Studio

## Architecture
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Global CSS
- **Animation**: Framer Motion for scroll reveals, CSS keyframes for breath/bounce
- **Smooth Scroll**: Lenis

## Component Patterns

### Server vs Client Components
- Layout and static components (Footer, SectionHeader, Placeholder) are Server Components
- Interactive/animated components use "use client" directive
- Client components: Navbar, HeroSection, AboutSection, ClassesSection, ScheduleSection, InstructorsSection, TestimonialsSection, ContactSection, SmoothScroll, RevealOnScroll, BreathCircle

### Component Structure
```
src/
  app/
    layout.tsx       - Root layout with fonts
    page.tsx         - Main page composing all sections
    globals.css      - Global styles + Tailwind
  components/
    Navbar.tsx       - Fixed navigation with scroll detection
    BreathCircle.tsx - Animated breathing circle
    SectionHeader.tsx - Reusable section header (label + title)
    RevealOnScroll.tsx - Scroll-triggered reveal animation wrapper
    Placeholder.tsx  - Placeholder image component
    ClassCard.tsx    - Individual class card
    HeroSection.tsx  - Full-screen hero
    AboutSection.tsx - About studio section
    ClassesSection.tsx - Classes grid
    ScheduleSection.tsx - Weekly schedule table
    InstructorsSection.tsx - Instructor profiles
    TestimonialsSection.tsx - Testimonial cards
    ContactSection.tsx - Contact form + info
    Footer.tsx       - Site footer
    SmoothScroll.tsx - Lenis smooth scroll initializer
  constants/
    index.ts         - All static data (classes, schedule, instructors, etc.)
  types/
    index.ts         - TypeScript interfaces
```

### Animation Strategy
- **Breath Circle**: CSS keyframes, 4s infinite ease-in-out, scale 0.95-1.05
- **Scroll Reveals**: Framer Motion useInView, 0.8s duration, staggered delays
- **Navbar**: CSS transition on scroll state change
- **Cards**: CSS hover transitions (translateY, shadow)
- **Bounce Arrow**: CSS keyframes, 2s infinite

### Styling Convention
- Font families applied via inline style referencing CSS variables
- Tailwind for layout, spacing, colors
- Custom colors defined in @theme inline block
- Global CSS for form floating labels and custom animations
