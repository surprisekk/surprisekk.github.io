var person = {

				name : 'Rajat',
				id: 25,
				age:21,
				counrty:'India',

				details:{
					langs:['C','python','javascript'],
					places:['agra','jaipur']
				},

				greet :function(){
					console.log('hello ' + this.age);
				}
 		   }
Object.prototype.bigTits=function(){
	console.log('i Wanna fuck big tits of stuti');
}
var newObject= Object.create(person)
console.log(newObject.name)


				newObject.lover='stuti';
				newObject.lust='rautela';


console.log(newObject.name);
console.log(newObject.lover);
console.log(newObject.bigTits())
console.log(newObject.__proto__==person);
console.log(person.__proto__==Object.prototype);