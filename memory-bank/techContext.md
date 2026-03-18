# Tech Context - Nefes Yoga Studio

## Tech Stack
| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.2.0 | React framework with App Router |
| React | 19.2.4 | UI library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Utility-first CSS framework |
| Framer Motion | ^12 | Scroll-based animations |
| GSAP | ^3.14 | Animation library (available) |
| @gsap/react | ^2.1 | GSAP React integration |
| Lenis | ^1.3 | Smooth scrolling |
| clsx | ^2.1 | Conditional class names |

## Development
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Decisions
1. **Tailwind v4**: Uses `@theme inline` for custom color tokens instead of tailwind.config.ts
2. **Framer Motion over GSAP**: Used for scroll reveals due to simpler React integration
3. **CSS Keyframes**: Used for continuous animations (breathe, bounce) for better performance
4. **Lenis**: Provides smooth scroll behavior across browsers
5. **No images**: All images are colored placeholders for portfolio demonstration
6. **Single page**: All content on one page with anchor navigation

## Fonts
- **Cormorant Garamond**: Loaded via next/font/google with variable --font-cormorant
- **Lato**: Loaded via next/font/google with variable --font-lato
- Both use CSS variable approach for flexibility

## Color Tokens (Tailwind @theme)
- bg: #F5EDE3 (cream)
- bg-alt: #F0F5F0 (light green)
- bg-dark: #1A1A1A (footer)
- text: #333333
- text-light: #777777
- accent: #3D5A40 (forest green)
- warm: #C4A77D (gold/sand)
- white: #FFFFFF
