// let score: number | string;
// score= 4;
// score="4";
//
// type User ={
// 	name: string,
// 	id: number,
// }
//
// type Admin={
// 	username: string,
// 	id: number,
// }
//
// let ayu: User | Admin;
// ayu={name: "ayu", id:1};
// ayu={username: "ayusuperstar", id:1};
//
// function getId(id:number | string){
// 		console.log(id);
// }
// getId(3);
// getId("3")
//
 function getId(id:number | string){
	//id.toLowerCase();   //error....needs typechecking first
	if(typeof(id)==="string"){
		id.toLowerCase()
	}
		console.log(id);
 }

const mix: (number | string)[]=[];

let seatType : "aisle" | "middle" | "window";
