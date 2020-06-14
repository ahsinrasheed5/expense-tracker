import React, { Fragment } from 'react';
import MyContext from './MyContext';
import Car from './Cars';

const Cars = props => (
    <MyContext.Consumer>
        {
            context =>(
                <Fragment>
                <h4>Cars:</h4>
                {Object.keys(context.cars).map(carID => (
                    <Car
                        key={carID}
                        name={context.cars[carID].name}
                        price={context.cars[carID].price}
                        incrementPrice={() => context.incrementPrice(carID)}
                        decrementPrice={() => context.decrementPrice(carID)}
                    />
                ))}
            </Fragment>
            )
        }
    {/* <Fragment>
        <p>Name: {props.name}</p>
        <p>Price: ${props.price}</p>
        <button onClick={props.incrementPrice}>&uarr;</button>
        <button onClick={props.decrementPrice}>&darr;</button>
    </Fragment> */}
    </MyContext.Consumer>
);



export default Cars;