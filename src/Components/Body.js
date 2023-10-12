import React from 'react'
import {useState} from 'react'
function Body()
{
    // constructor()
    // {
    //     super();
    //     this.useState={
    //         count:0,
    //     };
    // }
    useState={count:0}
    increment =() =>
    {
        this.setState((prevState) => ({
            count:prevState.count+1,
        }));
    };

    decrement =() =>
    {
        this.setState((prevState) => ({
            count:prevState.count-1,
        }));
    };
}
        return (
            <div className="center">
                <h1>Counter</h1>
                <p>{this.useState.count}</p>
                <button onClick={this.increment}>Inrement</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
            
        );
export default Body