import { Author } from '../../models/schema.js';
const getAuthors =  async () => await Author.find({}).exec()

export { getAuthors }