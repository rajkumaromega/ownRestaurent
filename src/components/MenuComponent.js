import React,{Component } from 'react';
import {Media,Card,CardImg, CardImgOverlay, CardText, CardTitle, CardBody} from 'reactstrap'
import Dishdetail from './DishdetailComponent';
class Menu extends Component{
    constructor(props){
        super(props);

        this.state ={
            selectedDish:null
        }
       
    } 
     onDishSelect(dish){
           this.setState({selectedDish:dish}) ;
        }
     

    render() {
        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=> this.onDishSelect(dish)} >
                        <CardImg object src={dish.image} alt={dish.image}/> 
                        <CardImgOverlay>
                            <CardTitle heading>{dish.name}</CardTitle>
                            
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
           <div className="container">
               <div className="row">
                    
                        {menu}
                    
               </div>
               <div className="row">
                   
                   {/* {this.renderDish(this.state.selectedDish)} */}
                   <Dishdetail dishselected={this.state.selectedDish}/>
               </div>
           </div>   
        );
    }

}
export default Menu;