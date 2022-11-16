import axios from 'axios'

const ecosystem = axios.get('https://cms.fuse.io/api/fuse-ecosystems?populate=deep&sort=updatedAt:desc')

export default ecosystem
