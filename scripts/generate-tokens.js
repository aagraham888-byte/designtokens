#!/usr/bin/env node
// Auto-generated token extractor from Figma file data

const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, '..', 'tokens', 'figma-file.json');
const OUTPUT_FILE = path.join(__dirname, '..', 'tokens', 'tokens.css');

function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_/\\]+/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function rgbToHex(r, g, b) {
  const toHex = (v) => Math.round(v * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

const SHAPE_NODE_TYPES = ['RECTANGLE', 'ELLIPSE', 'FRAME', 'COMPONENT', 'INSTANCE', 'VECTOR', 'STAR', 'POLYGON'];

const colors = {};
const typography = {};
const spacing = {};

function traverseNode(node) {
  if (!node) return;

  const name = toKebabCase(node.name || 'unnamed');

  // Extract colors from nodes with solid fills
  if (SHAPE_NODE_TYPES.includes(node.type)) {
    if (Array.isArray(node.fills)) {
      node.fills.forEach((fill, i) => {
        if (fill.type === 'SOLID' && fill.color) {
          const { r, g, b } = fill.color;
          const hex = rgbToHex(r, g, b);
          const key = node.fills.length > 1 ? `${name}-${i}` : name;
          colors[key] = hex;
        }
      });
    }
  }

  // Extract text styles from TEXT nodes
  if (node.type === 'TEXT' && node.style) {
    const s = node.style;
    if (s.fontSize !== undefined) typography[`font-size-${name}`] = `${s.fontSize}px`;
    if (s.fontFamily !== undefined) typography[`font-family-${name}`] = `"${s.fontFamily}"`;
    if (s.fontWeight !== undefined) typography[`font-weight-${name}`] = String(s.fontWeight);
    if (s.lineHeightPx !== undefined) typography[`line-height-${name}`] = `${s.lineHeightPx}px`;
    if (s.letterSpacing !== undefined && s.letterSpacing !== 0) {
      typography[`letter-spacing-${name}`] = `${s.letterSpacing}px`;
    }
  }

  // Extract spacing/sizing from FRAME nodes
  if (node.type === 'FRAME') {
    if (node.paddingLeft !== undefined && node.paddingLeft !== 0) spacing[`spacing-${name}-padding-left`] = `${node.paddingLeft}px`;
    if (node.paddingRight !== undefined && node.paddingRight !== 0) spacing[`spacing-${name}-padding-right`] = `${node.paddingRight}px`;
    if (node.paddingTop !== undefined && node.paddingTop !== 0) spacing[`spacing-${name}-padding-top`] = `${node.paddingTop}px`;
    if (node.paddingBottom !== undefined && node.paddingBottom !== 0) spacing[`spacing-${name}-padding-bottom`] = `${node.paddingBottom}px`;
    if (node.itemSpacing !== undefined && node.itemSpacing !== 0) spacing[`spacing-${name}-gap`] = `${node.itemSpacing}px`;
  }

  // Recurse into children
  if (Array.isArray(node.children)) {
    node.children.forEach(traverseNode);
  }
}

// Read Figma file
let figmaData;
try {
  const raw = fs.readFileSync(INPUT_FILE, 'utf8');
  figmaData = JSON.parse(raw);
} catch (err) {
  console.error(`Error reading ${INPUT_FILE}:`, err.message);
  process.exit(1);
}

// Traverse the document tree
if (figmaData.document) {
  traverseNode(figmaData.document);
}

const hasTokens = Object.keys(colors).length > 0 || Object.keys(typography).length > 0 || Object.keys(spacing).length > 0;

let css;
if (!hasTokens) {
  css = `/* Auto-generated from Figma — do not edit manually */
/* No design tokens were found in your Figma file.
   To generate tokens, add colors (fills on rectangles/frames),
   text styles (text layers), or frames with padding/spacing
   to your Figma file, then re-run the sync workflow. */
:root {
}
`;
} else {
  const lines = ['/* Auto-generated from Figma — do not edit manually */\n:root {'];

  if (Object.keys(colors).length > 0) {
    lines.push('  /* Colors */');
    for (const [key, value] of Object.entries(colors)) {
      lines.push(`  --color-${key}: ${value};`);
    }
    lines.push('');
  }

  if (Object.keys(typography).length > 0) {
    lines.push('  /* Typography */');
    for (const [key, value] of Object.entries(typography)) {
      lines.push(`  --${key}: ${value};`);
    }
    lines.push('');
  }

  if (Object.keys(spacing).length > 0) {
    lines.push('  /* Spacing */');
    for (const [key, value] of Object.entries(spacing)) {
      lines.push(`  --${key}: ${value};`);
    }
    lines.push('');
  }

  lines.push('}');
  css = lines.join('\n') + '\n';
}

fs.writeFileSync(OUTPUT_FILE, css, 'utf8');
console.log(`Wrote ${OUTPUT_FILE}`);
if (hasTokens) {
  console.log(`  Colors: ${Object.keys(colors).length}`);
  console.log(`  Typography: ${Object.keys(typography).length}`);
  console.log(`  Spacing: ${Object.keys(spacing).length}`);
} else {
  console.log('  No tokens found — wrote placeholder CSS.');
}
