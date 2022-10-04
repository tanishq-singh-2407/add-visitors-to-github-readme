import { parse } from './deps.ts';
import { usage_guide } from './constants/index.ts';
import * as lib from './lib/index.ts';

const { render, r, visitor, v } = parse(Deno.args);

if (render || r)
    await lib.render();

else if ((visitor || v) && typeof visitor === "string" && visitor.length > 1)
    await lib.visitor(visitor);

else
    console.log(usage_guide);
