import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  //this will accept and add content to our database. 
  export const putDb = async (id, value) => {
    console.log('PUT request to update the jateDB');
    // this will connect to the poper database. 
    const jateDb = await openDB('jate', 5);
    
    //this will open the objstore
    const objStore = tx.objectStore('jate');
    
    // this will check privlages and re write to database. 
    const tx = jateDb.transaction('readwrite', 'jate');
    
    const req = objStore.put({ id: id, value: value })

    // this will confirm data is saved to the database. 
    const res = await req;
    console.log('saved!', res);
  };

  
  
//this will add the logic to pull from the database. 
export const getDb = async (value) => {
  console.log('Gathering Data');
  // connects to the proper database. 
  const jateDb = await openDB('jate', 5);

  // this will open the objectstore 
  const objStore = tx.objectStore('jate');

  // this will connect to the databse and check priviliages. 
  const tx = jateDb.transaction('readwrite', 'jate');
  
  // use the .getAll() method to grab all the content in the DB
  const req = objStore.getAll()
  // confirm the data was fetched
  const res = await req;
  console.log('saved!', res);
};
