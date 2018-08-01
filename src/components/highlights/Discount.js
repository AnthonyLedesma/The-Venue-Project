import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 25
    }

    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(()=>{
            this.percentage()
        },30)
    }
    

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={()=> this.percentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purcahse Tickets Before June 2019</h3>
                            <p>Quisque sit amet mi sed urna viverra vulputate at in lectus. Quisque molestie interdum neque ut iaculis. Mauris a nulla laoreet, aliquet odio non, varius ex.</p>
                            <MyButton
                                text="Purchase Tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link="https://google.com"
                            />
                        </div>
                    </Slide>
                    

                </div>
                
            </div>
        );
    }
}

export default Discount;