interface User {
	readonly dbId: number,
	email: string,
	userId: number,
	googleId?: string,
	//startTrial: ()=> string
	startTrial():string
	getCoupon(couponname:string):number
	
}

const ayu: User={dbId:1,email: "ayu@ayu.com",userId: 20,ghId:"ayu",
	startTrial:()=>"abc",
	getCoupon(couponname:"abc") {
	    return 4
	},	
}
interface User{
	ghId: string,
}
interface Admin extends User{
	role: "admin"|"ta"|"learner"
}

const dev: Admin={dbId:1,email: "ayu@ayu.com",userId: 20,ghId:"ayu",role:"admin",
	startTrial:()=>"abc",
	getCoupon(couponname:"abc") {
	    return 4
	},	}

