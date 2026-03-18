# Active Context - Nefes Yoga Studio

## Current State
Project is fully implemented with all 7 sections, navigation, and footer. All components are created and the build passes successfully.

## Recently Completed
- [x] Project scaffolding with create-next-app
- [x] Dependency installation (gsap, framer-motion, lenis, clsx)
- [x] Type definitions
- [x] Constants/data
- [x] Global CSS with custom animations and form styles
- [x] All components implemented
- [x] Root layout with fonts
- [x] Main page composition
- [x] Memory bank documentation

## Active Decisions
- Using Framer Motion for scroll animations instead of GSAP (simpler API for this use case)
- CSS keyframes for infinite animations (better performance)
- Placeholder colored boxes instead of real images
- Turkish text throughout (no i18n needed)

## Known Considerations
- All images are placeholders - ready to be replaced with real photography
- Form is non-functional (preventDefault only) - needs backend integration
- Lenis smooth scroll may need adjustment on some mobile browsers
- Schedule data is static - could be connected to a CMS in the future
