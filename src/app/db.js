import Dexie from 'dexie';
import posts from '../features/post/posts.json';

export const db = new Dexie('animalSnapDB');

db.version(1).stores({
  posts: 'id,name,type', // Primary key and indexed properties
});

// seed data
db.on('populate', (transaction) => {
  transaction.posts.bulkAdd(posts);
});
