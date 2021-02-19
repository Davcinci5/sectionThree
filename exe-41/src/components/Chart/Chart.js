import React from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2'

const LineChart = (props) => {
   const reducer = (accumulator, currentValue) => {
       accumulator[0].push(currentValue[0]);
       accumulator[1].push(currentValue[1]);
       return accumulator;
   };

   const getNext = () => {
    let next = props.start + props.set;
    if(next > props.data.length){
       next =  props.data.length;
    }
    return next;
   }
  
   const nextIndex = getNext();


   

   let sliceArre = props.data.slice(props.start, nextIndex)
   const [label, set ] = sliceArre.reduce(reducer,[[],[]]);
    const data = {
        labels: label,
        datasets: [
            {
                label: props.text,
                data: set,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor:'rgba(255, 99, 132,1)'
            }
        ]
    }
    props.nextSet(nextIndex);

    return(
        <div data-testid="custom-element">
            <Line data={data}/>
        </div>
    );
};

const mapStatetoProps = state => ({
    data: state.data,
    start: state.start,
    set: state.set,
    text: state.text
});

const mapDispatchtoProps = dispatch => ({
    nextSet: (payload) => dispatch({type: 'FETCH_NEXT', payload})
  });
export {LineChart};
export default connect(mapStatetoProps, mapDispatchtoProps)(LineChart);