// Regenerate the static, self-contained README artwork with: node generate-header.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const palettes = {
  light: { bg: '#F8F6F1', ink: '#203536', muted: '#596D6B', line: '#DCDDD3', sage: '#70877A', soft: '#DEE4D9', clay: '#BE6E4D', claySide: '#A5583F', sand: '#E3CEAD' },
  dark: { bg: '#142022', ink: '#F4F1E8', muted: '#B7C4BD', line: '#344447', sage: '#95AA97', soft: '#3B514B', clay: '#D58A65', claySide: '#A9644A', sand: '#D5B991' },
};

function artwork(c) {
  return `<g fill="none" stroke="${c.line}" stroke-width="1.5">
    <path d="M792 226H1084M940 42V268" stroke-dasharray="3 8"/>
    <circle cx="940" cy="156" r="116"/>
  </g>
  <circle cx="1040" cy="63" r="19" fill="${c.clay}"/>
  <path d="M1040 29V23M1068 63H1080M1040 97V103" stroke="${c.clay}" stroke-width="2" stroke-linecap="round"/>
  <g stroke="${c.bg}" stroke-width="1.5" stroke-linejoin="round">
    <path d="M820 192 940 124 1060 192 940 260Z" fill="${c.soft}"/>
    <path d="M820 192V212L940 280V260Z" fill="${c.sage}"/>
    <path d="M1060 192V212L940 280V260Z" fill="${c.sage}" opacity=".76"/>
    <path d="M841 149 940 93 1039 149 940 205Z" fill="${c.sand}"/>
    <path d="M841 149V167L940 223V205Z" fill="${c.sage}"/>
    <path d="M1039 149V167L940 223V205Z" fill="${c.sage}" opacity=".76"/>
    <path d="M871 111 940 72 1009 111 940 150Z" fill="${c.clay}"/>
    <path d="M871 111V126L940 165V150Z" fill="${c.claySide}"/>
    <path d="M1009 111V126L940 165V150Z" fill="${c.claySide}" opacity=".78"/>
  </g>
  <path d="M921 111 936 120 959 106" fill="none" stroke="${c.bg}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`;
}

function header(theme, mobile) {
  const c = palettes[theme];
  const w = mobile ? 640 : 1120, h = mobile ? 270 : 310;
  const x = mobile ? 32 : 56;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title desc">
  <title id="title">Dhananjay Sarathe — Founding engineer, curious builder.</title>
  <desc id="desc">A quiet ivory and terracotta composition with three geometric building blocks and a small sun. Bengaluru, India.</desc>
  <rect width="${w}" height="${h}" rx="16" fill="${c.bg}"/>
  <text x="${x}" y="${mobile ? 47 : 65}" fill="${c.muted}" font-family="Arial, Helvetica, sans-serif" font-size="${mobile ? 17 : 15}" letter-spacing="2.6">HELLO, I'M</text>
  <text x="${x - 2}" y="${mobile ? 122 : 146}" fill="${c.ink}" font-family="Georgia, 'Times New Roman', serif" font-size="${mobile ? 48 : 61}" letter-spacing="-1.8">Dhananjay Sarathe.</text>
  <text x="${x}" y="${mobile ? 169 : 197}" fill="${c.ink}" font-family="Arial, Helvetica, sans-serif" font-size="${mobile ? 24 : 24}">Founding engineer. Curious builder.</text>
  <circle cx="${x + 4}" cy="${mobile ? 222 : 259}" r="4" fill="${c.sage}"/>
  <text x="${x + 20}" y="${mobile ? 228 : 265}" fill="${c.muted}" font-family="Arial, Helvetica, sans-serif" font-size="${mobile ? 19 : 17}">Bengaluru, India</text>
  ${mobile ? `<g transform="translate(359, -3) scale(.25)">${artwork(c)}</g>` : artwork(c)}
</svg>
`;
}

mkdirSync(fileURLToPath(new URL('./assets/', import.meta.url)), { recursive: true });
for (const theme of ['light', 'dark']) {
  for (const mobile of [false, true]) {
    const name = `header-${mobile ? 'mobile-' : ''}${theme}.svg`;
    writeFileSync(new URL(`./assets/${name}`, import.meta.url), header(theme, mobile));
  }
}
