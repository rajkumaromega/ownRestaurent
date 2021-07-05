import {React, Component} from 'react';
import {Media,Card,CardImg, CardImgOverlay, CardText, CardTitle, CardBody} from 'reactstrap'
class Dishdetail extends Component{

    constructor(props){
        super(props);
        
    }
    renderComments(comments){
        if(comments != null){
            // eslint-disable-next-line no-lone-blocks
             return comments.map((comment)=>{
                return (
                    <li key={comment.id}>
                        {comment.commenti}
                        <br/>
                        {comment.author},{comment.date}
                    </li>
                );
            });
        }
        else{
            <div></div>
        }
    }

    renderDish(dish){
        if(dish != null){
            return (
            <Card>
                <CardImg object src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.author}</CardText>
                </CardBody>
            </Card>
            );
        }
        else{
            return 
              <div></div>
        }
    }

    render(){  

        const selectDish = this.props.dishselected;
        console.log(selectDish)
        const selectedComments = selectDish ? selectDish.comments:null;
        console.log(selectedComments)
        return(
            
           
         <div>
             <div className="col-12 col-md-5 m-1">
                 {this.renderDish(selectDish)}
             </div>
             <div className="col-12 col-md-5 m-1">
                <ul>{this.renderComments(selectedComments)}</ul>
             </div>
         </div>   
             
        )
    }
}
export default Dishdetail;