import React,{Component} from "react";

class Results extends Component{

    constructor(props){
        super(props);
        this.store= this.props.store;
    }


    votesAngularInPercent(){
        if(this.store.getState().angular ){
            return (this.store.getState().angular/(this.store.getState().angular+this.store.getState().react+this.store.getState().vuejs)*100);
        }
        else{
            return 0;
        }
    }


    votesReactInPercent(){
        if(this.store.getState().react ){
            return (this.store.getState().react/(this.store.getState().angular+this.store.getState().react+this.store.getState().vuejs)*100);
        }
        else{
            return 0;
        }

    }


    votesVueInPercent(){

        if(this.store.getState().vuejs ){
            return (this.store.getState().vuejs/(this.store.getState().angular+this.store.getState().react+this.store.getState().vuejs)*100);
        }
        else{
            return 0;
        }

    }

    votesAngularInPercentStyles(){
        return{
            width:this.votesAngularInPercent()+"%"
        }
    }

    votesReactInPercentStyles(){
        return{
            width:this.votesReactInPercent()+"%"
        }

    }

    votesVueInPercentStyles(){
        return{
            width:this.votesVueInPercent()+"%"
        }

    }

    render(){
        return(

            <div>
                    <span className="label label-success"> Angular Js:{this.votesAngularInPercent().toFixed(2)+"%"} </span>
                        <div className="progress progress-striped active">
                             <div className= "progress-bar progress-bar-danger" style={this.votesAngularInPercentStyles()}>
                     </div>
                </div>


                <span className="label label-info"> React js:{this.votesReactInPercent().toFixed(2)+"%"} </span>
                <div className="progress progress-striped active">
                    <div className= "progress-bar progress-bar-info" style={this.votesReactInPercentStyles()}>
                </div>
                </div>

                <span className="label label-success"> Vue Js:{this.votesVueInPercent().toFixed(2)+"%"} </span>
                    <div className="progress progress-striped active" >
                             <div className= "progress-bar progress-bar-success" style={this.votesVueInPercentStyles()}>
              </div>
                </div>
            </div>


        )
    }


}

export default Results;