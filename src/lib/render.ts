import data from "../../data/visitors.json" assert { type: "json" };

const createReadmeText = () => `
# _**${data.name}**_

## _**Visitors**_

<p align="left">
    ${data.visitors.map(id => `<a href="https://github.com/${id}"><img src="https://avatars.githubusercontent.com/${id}?s=96" width="96px" height="96px" /></a>`).join("\n    ")}
</p>

Don't see your badge? Then create an [_**issue.**_](https://github.com/tanishq-singh-2301/add-visitors-to-github-readme/issues/new?title=Add%20My%20Name)
`;

export const render = async () => await Deno.writeTextFile("./README.md", createReadmeText());
