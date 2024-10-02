// function add(num:number){
// 	return num+2;
// }
//
// console.log(add(9))

//  let func= (name: string, active:boolean=false)=>{
// 			console.log(name,"labbu")
// }
//
// func("ayu");
//
//
//  function addTwo (num:number):number{
//  	//	return "hemlo";
// 	 return num+2;
//  }
//
// const heroes = ["a", "y", "u"];
// heroes.map((hero):string=>{
// 	return hero;
// 					     
// })

;((errormsg:string):void=>{
	console.log(errormsg);
})("error")


  ngOnInit(): void {
    this.taskService.currentTaskProgress$.subscribe((progressIN) => {
      if (this.circleSvg) {
        let progress = progressIN || 1;
        if (progress > 1) {
          progress = 1;
        }
        const dashOffset = this.circumference * -1 * progress;
        this._renderer.setStyle(
          this.circleSvg.nativeElement,
          'stroke-dashoffset',
          dashOffset,
        );
      }
    });
  }
