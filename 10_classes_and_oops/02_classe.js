class RailwayForm{
    submit(){
        alert(`${this.name} : Your Form is submited for TrainNo : ${this.trainNo}`)
    }

    cancel(){
        alert(`${this.name} : Your form is cancelled for TrainNo : ${this.trainNo}`)
    }
    fill(givenName, trainNo){
        this.name = givenName;
        this.trainNo = trainNo;
    }
}


//Create a form for Vishal
let vishal = new RailwayForm();
//fill the form with Vishal's Details
vishal.fill("Vishal", 12412)


//create a form for Hitesh
let hitesh = new RailwayForm();
//fill the form with Vishal's Details
hitesh.fill("Hitesh", 22222)

vishal.submit();
hitesh.submit();
hitesh.cancel();
