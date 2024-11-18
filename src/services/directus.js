import { createDirectus, rest, staticToken } from '@directus/sdk';

const directus = createDirectus('http://143.198.172.101:5204')
    .with(rest())
    .with(staticToken('Zwr4a6GH6F5pwhCGW1CcbNFVs-uIM7R6'));



export default directus;