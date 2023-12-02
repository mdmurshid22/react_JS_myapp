import {useState} from 'react';
function UseStateArrays()
{
	const [data,setData]=useState(0);
	function add_num()
	{
		setData(data+2);
	}
	function sub_num()
	{
		setData(data-1);
	}
	return(
		<>
		<h3>{data} Times Clicked!</h3>
		<button onClick={add_num}>Add Button</button><br/>
		<button onClick={sub_num}>Sub Button</button>
		</>
		);
}
export default UseStateArrays;