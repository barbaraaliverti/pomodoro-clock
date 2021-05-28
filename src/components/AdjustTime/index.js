import React from 'react';

function AdjustTime(props) {
	
	function handleDecrease() {
		if (props.length === 1) {
			return props.length;
		} else {
			return props.length - 1;			
		}
	};
	
	function handleIncrease() {
		if (props.length === 60) {
			return props.length;
		} else {
			return props.length + 1;			
		}
	};
	
	return (
		<div id={`${props.type}-container`}>
			<h4 id={`${props.type}-label`}>{props.type} length</h4>
			<div id="length-container" className="center-flex">
				<button id={`${props.type}-decrement`} onClick={() => props.setLength(handleDecrease())} disabled={props.timerStatus !== 'stopped'}>-</button> 
				<h2 id={`${props.type}-length`}>{props.length}</h2>
				<button id={`${props.type}-increment`} onClick={() => props.setLength(handleIncrease())} disabled={props.timerStatus !== 'stopped'}>+</button>
			</div>
			<h4>{props.length > 1? 'minutes' : 'minute'}</h4>
		</div>
	)
};

export default AdjustTime;