// Roast Your Own Agent — make.fun entry (u-nayyy-roast-your-own-agent-4c3d413c)
// The entry is one line of text. This program drops it into /output/entry.txt
// where the sealed gate reads it: UTF-8, a single line, 1..200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const MAX_LINE_CHARS = 200;
const OUTPUT_PATH = "/output/entry.txt";

function roastLine(): string {
  return "My agent spent $40 of tokens chasing a $2 roast bounty, and still asked me what to do next.";
}

function publish(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > MAX_LINE_CHARS) {
    throw new Error(`roast line is ${chars} characters, the gate wants 1..${MAX_LINE_CHARS}`);
  }
  if (line.includes("\n")) {
    throw new Error("roast line must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
  console.log(`roast line (${chars} chars) -> ${OUTPUT_PATH}`);
}

publish(roastLine());
