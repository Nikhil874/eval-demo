export function Menu(){
    const head1="Veggies";
    const head2="Salads";
    const items1=["Dosa","Idli","Vada","Pongal"];
    const items2=["onion","cucombur","Cabaggage"];
    return(
        <>
    <Displayhead head={head1}/>
    <Displayitems items={items1}/>
   <Displayhead head={head2}/>
     <Displayitems items={items2}/></>
    )
 

}

function Displayhead(props){
return <h2>{props.head}</h2>
}
function Displayitems({items}){
    return <ul>
        {items.map((el)=>{
         return <li>{el}</li>
        })}
    </ul>
}












