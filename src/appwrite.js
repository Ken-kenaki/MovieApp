// import { Client, Query, ID } from "appwrite";

// const projectId = import.meta.env.VITE_PROJECT_ID;
// const databaseID = import.meta.env.VITE_DATABASE_ID;
// const collectionID = import.meta.env.VITE_COLLECTION_ID;

// console.log('Project ID:', projectId);
// console.log('Database ID:', databaseID);
// console.log('Collection ID:', collectionID);

// const client = new Client()
//    .setEndpoint('https://cloud.appwrite.io/v1')
//    .setProject(projectId)

// const database = new Databases(client)

// export const updateSearchCount = async (search, movie) => {
//     try {
//         const result = await database.listDocuments(databaseID, collectionID, [
//             Query.equal('search', search),
//         ]);

//         if (result.documents.length > 0) {
//             const doc = result.documents[0];
//             await database.updateDocument(databaseID, collectionID, doc.$id, {
//                 count: doc.count + 1
//             });
//         } else {
//             await database.createDocument(databaseID, collectionID, ID.unique(), {
//                 search,
//                 count: 1,
//                 movie_id: movie.id,
//                 poster_path: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//             })
//         }
        
//     } catch (error) {
//         console.error('Error updating search count:', error)
        
//     }

// }