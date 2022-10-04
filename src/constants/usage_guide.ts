export const usage_guide =
`usage:
    deno run --allow-write --allow-read src/index.ts [OPTIONS]

    OPTIONS:
        -h, --help
                Print help information

        -r, --render
                Render README.md file with existing data.json
                
        -v, --visitor (="my-github-profile-id")
                Render README.md file with new data   

    EXAMPLE:
        $ deno run --allow-write --allow-read src/index.ts -r
        $ deno run --allow-write --allow-read src/index.ts --render
        $ deno run --allow-write --allow-read src/index.ts -v="tanishq-singh-2301"
        $ deno run --allow-write --allow-read src/index.ts --visitor="tanishq-singh-2301"
`;