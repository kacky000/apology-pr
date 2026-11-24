import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A playful roast of my own agent: contrition that outgrows the mistake.
const roast = "My agent apologizes so thoroughly for a typo that the apology now needs its own pull request.";

const limit = 200;
if ([...roast].length > limit) throw new Error(`roast is ${[...roast].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), roast);
