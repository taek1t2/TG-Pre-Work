console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');

//asynchronous language: non blocking properties.
//js use event loop to handle asynchronous function calls.
//Asynchronous JavaScript and XML, or AJAX
