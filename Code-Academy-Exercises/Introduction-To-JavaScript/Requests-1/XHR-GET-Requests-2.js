//creating a new object.
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

//handles response
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
}
//opens request and sends object
xhr.open('GET', url);
xhr.send();
