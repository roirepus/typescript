// const user = {
// 	name: "dev",
// 	email: "dev@dev.com",
// 	isActive: true,
// };
//
// function createUser({name:string,isPaid:boolean}){
//
// };
// let newUser ={name:"ayu", isPaid: false, email:"a@a.com"};
// createUser(newUser);
//
// function createCourse():{name:string, price:number}{
// 		return {name: "ts", price: 34}
// }
				//type-alias
type User ={
	readonly _id: string,  //readonly field
	name: string,
	email: string,
	isActive: boolean,
	cardDetails?: number  //optional field
}

type cardNumber={
	cardnumber: string
}
type cardDate={
	carddate: string
}
type cardDetails= cardNumber & cardDate &{
	cvv:number
}



// function createUser(user: User){
// 	return {name: user.name, email:user.email, isActive:user.isActive}
// }
//console.log(createUser({name: "",email:"",isActive: false})
//)
let myUser: User={
	_id: "12",
	name: "qyu",
	email: "qyu@ayu.com",
	isActive: false,
}
//myUser._id="abc";

export {}
