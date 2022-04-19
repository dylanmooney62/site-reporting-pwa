import Dexie from 'dexie';

export const db = new Dexie('animalSnapDB');

db.version(1).stores({
  posts: 'id,name,type', // Primary key and indexed properties
});
