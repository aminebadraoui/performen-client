import { createDirectus, rest, staticToken } from '@directus/sdk';

const directus = createDirectus('http://143.198.172.101:3104')
    .with(rest())
    .with(staticToken('5HMWhxqRyt6QfOn8XKuAKQ7VsgLTETi3'));



export default directus;