import { Author } from '../../models/schema.js';
const addAuthor = async (_, args) => {
    try {
      let response = await Author.create(args);
      return response;
    } catch(e) {
      return e.message;
    }
  }

export {addAuthor}