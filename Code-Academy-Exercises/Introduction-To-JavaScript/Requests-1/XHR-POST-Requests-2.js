//creates new object

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

//converst data to a string
const data = JSON.stringify({id: '200'});

//handles response
xhr.responseType = 'json';

xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
}

//Open request and sends object
xhr.open('POST', url);
xhr.send(data);


//making ajax post request.
