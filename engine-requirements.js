const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(
    `\n\x1b[31m❌ [ERROR] This package requires Node.js 20+ to run reliably.\x1b[0m\n` +
    `\x1b[33m   You are using Node.js \x1b[1m${process.versions.node}\x1b[0m\n` +
    `\x1b[36m   Please upgrade to Node.js 20+ to proceed.\x1b[0m\n` +
    `\x1b[90m   (Lsqltmux-Code Bailz)\x1b[0m\n`
  );
  process.exit(1);
}

console.log(
  `\x1b[32m✅ [INFO] Node.js ${process.versions.node} detected. Good to go!\x1b[0m`
);
