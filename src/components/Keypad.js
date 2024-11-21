// Code Keypad Component Here

function Keypad (){
    return (
        <>
         <input type="password" 
          onChange={()=> console.log('Entering password...')}
          placeholder="ENTER PASSWORD"
         />
        </>
    );
}

export default Keypad;