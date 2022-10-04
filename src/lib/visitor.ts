import data from "../../data/visitors.json" assert { type: "json" };
import { render } from "./render.ts";

export const visitor = async (id: string) => {
    if (data.visitors.indexOf(id) > -1)
        return;

    data.visitors.push(id);

    await Deno.writeTextFile("./data/visitors.json", JSON.stringify(data, null, 4));
    await render();
};
