// Flat ESLint config (Next.js 16 removed `next lint`; see REFACTOR_NOTES §1.2).
// `eslint-config-next` ships a flat-config array in v16.
import next from 'eslint-config-next';

const config = [
  { ignores: ['out/**', '.next/**', 'node_modules/**', 'next-env.d.ts'] },
  ...next,
  {
    // This site is a static export (next.config.mjs: output:'export',
    // images.unoptimized), so next/image optimization is unavailable and
    // plain <img> is intentional. Silence the otherwise-noisy warning.
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
];

export default config;
