// Regenerate the static, self-contained README artwork with: node generate-header.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const palettes = {
  light: { bg: '#F8F6F1', ink: '#203536', muted: '#596D6B', line: '#DCDDD3', sage: '#70877A', soft: '#DEE4D9', clay: '#BE6E4D', claySide: '#A5583F', sand: '#E3CEAD' },
  dark: { bg: '#142022', ink: '#F4F1E8', muted: '#B7C4BD', line: '#344447', sage: '#95AA97', soft: '#3B514B', clay: '#D58A65', claySide: '#A9644A', sand: '#D5B991' },
};

function artwork(c) {
  const edge = c.bg === '#142022' ? '#8FA497' : c.ink;
  return `<circle cx="1013" cy="94" r="53" fill="${c.sand}" opacity=".45"/>
  <path d="M986 34A65 65 0 0 1 1077 104" fill="none" stroke="${c.line}" stroke-width="1.5"/>
  <ellipse cx="930" cy="263" rx="132" ry="8" fill="${c.soft}" opacity=".42"/>
  <path d="M778 264H1086" stroke="${c.line}" stroke-width="1.5" stroke-linecap="round"/>
  <!-- A custom three-quarter view of the builder's workspace. -->
  <g stroke-linejoin="round">
    <path d="M846 83Q846 76 853 77L991 95Q997 96 997 103V212L846 192Z" fill="${c.sage}" stroke="${edge}" stroke-width="1.6"/>
    <path d="M856 94 987 111V199L856 182Z" fill="${c.bg}" stroke="${edge}" stroke-width="1.3"/>
    <path d="M846 192 997 212 959 241 808 221Z" fill="${c.soft}" stroke="${edge}" stroke-width="1.6"/>
    <path d="M808 221 959 241V246L808 226Z" fill="${c.sage}" stroke="${edge}" stroke-width="1.3"/>
    <path d="M959 241 997 212V217L959 246Z" fill="${c.sage}" stroke="${edge}" stroke-width="1.3"/>
    <path d="M845 201 982 219M837 207 974 225M829 213 966 231" stroke="${c.sage}" stroke-width="1"/>
    <path d="M862 203 846 216M882 206 866 219M902 208 886 221M922 211 906 224M942 214 926 227M962 216 946 229" stroke="${c.sage}" stroke-width=".8"/>
    <path d="M869 222 914 228 906 234 861 228Z" fill="${c.bg}" stroke="${c.sage}" stroke-width="1"/>
  </g>
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M875 119 869 123 875 129M893 121 899 127 893 131M884 119 881 131" stroke="${c.clay}" stroke-width="2"/>
    <path d="M870 143 924 150M880 153 949 162M880 164 929 170" stroke="${c.sage}" stroke-width="2.2"/>
    <path d="M939 152 960 155M940 172 958 174" stroke="${c.clay}" stroke-width="2.2"/>
  </g>
  <!-- Three broad leaves keep the silhouette quiet at README scale. -->
  <path d="M1052 226V169M1052 204 1033 187M1052 192 1070 175" fill="none" stroke="${c.sage}" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M1052 181C1032 173 1035 148 1050 142C1062 155 1068 170 1052 181Z" fill="${c.sage}"/>
  <path d="M1042 196C1023 199 1008 180 1013 169C1036 169 1046 179 1042 196Z" fill="${c.sage}"/>
  <path d="M1059 188C1057 166 1074 151 1084 157C1081 179 1074 186 1059 188Z" fill="${c.sage}"/>
  <path d="M1035 223H1073L1068 258H1040Z" fill="${c.clay}"/>
  <path d="M1035 223H1073V229H1035Z" fill="${c.claySide}"/>
  <path d="M1045 236 1047 250" stroke="${c.sand}" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M792 236C776 228 776 250 792 250" fill="none" stroke="${edge}" stroke-width="1.5"/>
  <path d="M790 231H814V251Q814 258 807 258H797Q790 258 790 251Z" fill="${c.sand}" stroke="${edge}" stroke-width="1.5"/>
  <path d="M796 218C804 212 796 207 802 201" fill="none" stroke="${c.muted}" stroke-width="1.3" stroke-linecap="round"/>`;
}

function mobileArtwork(c) {
  return `<circle cx="564" cy="43" r="13" fill="${c.clay}"/>
  <path d="M525 40H564V67H525Z" fill="${c.soft}" stroke="${c.sage}" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M529 44H560V63H529Z" fill="${c.bg}"/>
  <path d="M539 50 535 54 539 58M550 50 554 54 550 58" fill="none" stroke="${c.clay}" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M525 67 518 73H571L564 67Z" fill="${c.sage}"/>
  <path d="M518 73H571" stroke="${c.sage}" stroke-width="2" stroke-linecap="round"/>`;
}

function header(theme, mobile) {
  const c = palettes[theme];
  const w = mobile ? 640 : 1120, h = mobile ? 270 : 310;
  const x = mobile ? 32 : 56;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title desc">
  <title id="title">Dhananjay Sarathe — Founding engineer, curious builder.</title>
  <desc id="desc">A custom illustration of a quiet workspace: a laptop, coffee, a sculptural plant, and warm sunlight. Bengaluru, India.</desc>
  <rect width="${w}" height="${h}" rx="16" fill="${c.bg}"/>
  <text x="${x}" y="${mobile ? 47 : 65}" fill="${c.muted}" font-family="Arial, Helvetica, sans-serif" font-size="${mobile ? 17 : 15}" letter-spacing="2.6">HELLO, I'M</text>
  <text x="${x - 2}" y="${mobile ? 122 : 146}" fill="${c.ink}" font-family="Georgia, 'Times New Roman', serif" font-size="${mobile ? 48 : 61}" letter-spacing="-1.8">Dhananjay Sarathe.</text>
  <text x="${x}" y="${mobile ? 169 : 197}" fill="${c.ink}" font-family="Arial, Helvetica, sans-serif" font-size="${mobile ? 24 : 24}">Founding engineer. Curious builder.</text>
  <circle cx="${x + 4}" cy="${mobile ? 222 : 259}" r="4" fill="${c.sage}"/>
  <text x="${x + 20}" y="${mobile ? 228 : 265}" fill="${c.muted}" font-family="Arial, Helvetica, sans-serif" font-size="${mobile ? 19 : 17}">Bengaluru, India</text>
  ${mobile ? mobileArtwork(c) : artwork(c)}
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
