import React from 'react';

export default function CheeseList(props){


    return (
		<ul className = {props.className}>
			{props.cheeseList.map((cheese,index) => (
				<li className = {props.liClass} key={index}>{cheese}</li>
			))}
		</ul>
	);
}