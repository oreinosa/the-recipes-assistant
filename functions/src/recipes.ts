// import * as functions from 'firebase-functions';
// import axios from 'axios';

// const getSearchResultsFromTasty = async (q: string) => {
//   try {
//     // q = q.trim().toLowerCase();
//     const response = await axios({
//       method: "GET",
//       url: "https://tasty.p.rapidapi.com/recipes/list",
//       headers: {
//         "x-rapidapi-host": "tasty.p.rapidapi.com",
//         "x-rapidapi-key": "256c766282mshf1ac5b6004ad947p1898a0jsn6d377c1382f0"
//       },
//       params: {
//         "from": "5",
//         "sizes": "15",
//         q
//       }
//     });
//     return response.data.results;
//   } catch (e) {
//     throw e;
//   }
// };

// // const autoCompletes = [
// //   { display: "meatballs" },
// //   { display: "meat" },
// //   { display: "chicken nuggets" },
// //   { display: "chicken soup" }
// // ];

// const getAutoCompleteFromTasty = async (prefix: string): Promise<any[]> => {
//   prefix = prefix.trim().toLowerCase();
//   return autoCompletes.filter(value => value.display.includes(prefix));
// };

// const getAutoCompleteFromTasty = async (prefix: string) => {
//   try {
//     // prefix = prefix.trim().toLowerCase();
//     const response = await axios({
//       method: "GET",
//       url: "https://tasty.p.rapidapi.com/recipes/auto-complete",
//       headers: {
//         "x-rapidapi-host": "tasty.p.rapidapi.com",
//         "x-rapidapi-key": "256c766282mshf1ac5b6004ad947p1898a0jsn6d377c1382f0"
//       },
//       params: {
//         prefix
//       }
//     });
//     return response.data.results;
//   } catch (e) {
//     throw e;
//   }
// };

// export const getSearchResults = functions.https.onRequest(async (request, response) => {
//   const { q: query } = request.query;
//   response.set({ 'Access-Control-Allow-Origin': '*' });
//   let error = 'Please specify a query for your search.';
//   if (query !== "") {
//     try {
//       const recipes = await getSearchResultsFromTasty(query);
//       return response.status(200).send(recipes);
//     } catch (error) {
//       return response.status(400).send({
//         error,
//         code: 400
//       });
//     }
//   }
//   return response.status(400).send({
//     error,
//     code: 400
//   });
// });


// export const getAutoComplete = functions.https.onRequest(async (request, response) => {
//   const { prefix } = request.query; // get 'prefix' param from request
//   response.set({ 'Access-Control-Allow-Origin': '*' });
//   let error = 'Please specify a prefix for this request'; // default error message 
//   if (prefix && prefix !== "") { // check if 'prefix' param is valid
//     try {
//       const results = await getAutoCompleteFromTasty(prefix); // get auto complete results from API using recieved prefix
//       return response.status(200).send(results); // return array with results
//     } catch (error) {
//       // return object with error 
//       return response.status(400).send({
//         error,
//         code: 400
//       });
//     }
//   }
//   // if 'prefix' is not valid, return object with error
//   return response.status(400).send({
//     error,
//     code: 400
//   });

// });


// const getFeedFromTasty = async () => {
//   try {
//     const response = await axios({
//       method: "GET",
//       url: "https://tasty.p.rapidapi.com/feeds/list",
//       headers: {
//         "x-rapidapi-host": "tasty.p.rapidapi.com",
//         "x-rapidapi-key": "256c766282mshf1ac5b6004ad947p1898a0jsn6d377c1382f0"
//       },
//       params: {
//         size: "20",
//         timezone: "%2B0700",
//         vegetarian: "false",
//         from: "0"
//       }
//     });
//     return response.data.results.filter((result: any) => result.item).map((result: any) => result.item);
//   } catch (e) {
//     throw e;
//   }
// }

// export const getFeed = functions.https.onRequest(async (request, response) => {
//   response.set({ 'Access-Control-Allow-Origin': '*' });
//   try {
//     const results = await getFeedFromTasty(); // get auto complete results from API using recieved prefix
//     return response.status(200).send(results); // return array with results
//   } catch (error) {
//     // return object with error 
//     return response.status(400).send({
//       error,
//       code: 400
//     });
//   }

// });