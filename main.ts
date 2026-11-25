// The Absurd Clause Contest — entry program.
// Writes one original absurd terms-of-service clause to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Section 14.7: by using this service, you agree that your soul is non-transferable, except on Tuesdays, when it may be lent to the company for morale purposes.";

// Sealed gate, checked before writing: UTF-8 text of 1-200 characters,
// not only whitespace, a single line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read back and refuse to exit cleanly unless what landed on disk is
// byte-identical to the reviewed line.
if (readFileSync(outPath, "utf8") !== ENTRY) {
  throw new Error("entry.txt on disk differs from the reviewed entry");
}
