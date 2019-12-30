import * as functions from 'firebase-functions';
import { RESULTS, FEED } from './results';

const getSearchResultsFromTasty = async (q: string) => {
  try {
    const response = RESULTS.filter((result: any) => {
      const { name, description } = result;
      return name.toLowerCase().includes(q) || (description && description.toLowerCase().includes(q));
    });
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const autoCompletes = [
  { display: "meatballs" },
  { display: "meat" },
  { display: "chicken nuggets" },
  { display: "chicken soup" },
  { display: "chicken" }
];

const getAutoCompleteFromTasty = async (prefix: string): Promise<any[]> => {
  return autoCompletes.filter(value => value.display.includes(prefix));
};

export const getSearchResults = functions.https.onRequest(async (request, response) => {
  const { q: query } = request.query;
  response.set({ 'Access-Control-Allow-Origin': '*' });
  let error = 'Please specify a query for your search.';
  if (query !== "") {
    try {
      const recipes = await getSearchResultsFromTasty(query);
      return response.status(200).send(recipes);
    } catch (error) {
      return response.status(400).send({
        error,
        code: 400
      });
    }
  }
  return response.status(400).send({
    error,
    code: 400
  });
});


export const getAutoComplete = functions.https.onRequest(async (request, response) => {
  const { prefix } = request.query; // get 'prefix' param from request
  response.set({ 'Access-Control-Allow-Origin': '*' });
  let error = 'Please specify a prefix for this request'; // default error message 
  if (prefix && prefix !== "") { // check if 'prefix' param is valid
    try {
      const results = await getAutoCompleteFromTasty(prefix); // get auto complete results from API using recieved prefix
      return response.status(200).send(results); // return array with results
    } catch (error) {
      // return object with error 
      return response.status(400).send({
        error,
        code: 400
      });
    }
  }
  // if 'prefix' is not valid, return object with error
  return response.status(400).send({
    error,
    code: 400
  });

});

const getFeedFromTasty = async () => {
  try {
    return FEED;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getFeed = functions.https.onRequest(async (request, response) => {
  response.set({ 'Access-Control-Allow-Origin': '*' });
  try {
    const results = await getFeedFromTasty(); // get auto complete results from API using recieved prefix
    return response.status(200).send(results); // return array with results
  } catch (error) {
    // return object with error 
    return response.status(400).send({
      error,
      code: 400
    });
  }

});