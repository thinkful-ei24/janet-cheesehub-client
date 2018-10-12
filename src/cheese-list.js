import React from 'react';

export default function CheeseList(props){


    return (
		<ul>
			{props.cheeseList.map((cheese,index) => (
				<li key={index}>{cheese}</li>
			))}
		</ul>
	);
}