const robotFactory = (model, mobile) => {
  return {
    model : model,
		mobile: mobile,
		beep () {
      console.log('Beep Boop');
    }
	};
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();


//factory functions come in. A real world factory manufactures multiple copies of an item quickly and on a massive scale.
//A factory function is a function that returns an object and can be reused to make multiple object instances.
//Factory functions can also have parameters allowing us to customize the object that gets returned.
