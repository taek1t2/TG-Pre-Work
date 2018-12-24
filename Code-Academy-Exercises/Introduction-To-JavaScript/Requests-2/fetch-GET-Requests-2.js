//sends requests
fetch('https://api-to-call.com/endpoint').then(response => {

  //converst response object to json
  if (response.ok) {
    return response.json();
  }

//handles errors
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);

//handles success
}).then(jsonResponse => {
  return jsonResponse;
});
