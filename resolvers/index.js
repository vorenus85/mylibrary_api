import { getAuthors } from'./queries/getAuthors.js';
import { addAuthor } from'./mutations/addAuthor.js';

export default {
    Query: {
        getAuthors,
    },
    Mutation: {
        addAuthor,
    }
}