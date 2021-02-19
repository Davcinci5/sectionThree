import React , { useEffect } from 'react';
import { connect } from 'react-redux';

function Tool(props) {
      useEffect(() => {
        props.loadData();
      },[props]);
  
  
  const handleChange = (e) => {
        let { value } = e.target;
        value = parseInt(value);
        value = value >= 6 && value <= 100 ? value : 6;
        props.changeSize(value);
  }

  return (
    <div>
      <h3>Line Chart</h3>
      <label htmlFor="increase">How many data do you want to see:</label>
      <input type="number" 
             id="increase"
             min='6' 
             max="100"
             value={props.set}
             onChange={handleChange}
              ></input>
      </div>
  );
};
const mapStatetoProps = state => ({
  set: state.set
});
const mapDispatchtoProps = dispatch => ({
  loadData: () => dispatch({type: 'LOAD_DATA'}),
  changeSize: (payload) => dispatch({type: 'CHANGE_SIZE', payload})
});
export {Tool};
export default connect(mapStatetoProps, mapDispatchtoProps)(Tool);

