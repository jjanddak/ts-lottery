import './App.css';

function App() {
  function createLotto(){
    let result:number[]=[];

    function pickSome(digit:number){
      let repeat = (Math.floor(Math.random()*10)%2)+1

      if(digit===40){
        for(let i=0; i<repeat; i++){
          if(result.length===6) return;
          let pickedNum = (Math.floor(Math.random()*10)%6)+digit;
          if(!result.includes(pickedNum)){
            result.push(pickedNum);
          }else{
            i--;
          }
        }
      }else if(digit===0){
        for(let i=0; i<repeat; i++){
          if(result.length===6) return;
          let pickedNum = (Math.floor(Math.random()*10)%10)+1;
          if(!result.includes(pickedNum)){
            result.push(pickedNum);
          }else{
            i--;
          }
        }
      }else{
        for(let i=0; i<repeat; i++){
          if(result.length===6) return;
          let pickedNum = (Math.floor(Math.random()*10)%10)+digit;
          if(!result.includes(pickedNum)){
            result.push(pickedNum);
          }else{
            i--;
          }
        }
      }
    }

    let digits:any[]=[0,10,20,30,40];
    while(result.length<6){
      let ran:number=(Math.floor(Math.random()*10)%5);
      if(digits[ran]!==undefined){
        let digit = digits[ran];
        pickSome(digit);
        digits[ran] = undefined;
      }
    }
    
    let bonus=(Math.floor(Math.random()*10)%45)+1
    while(result.includes(bonus)){
      bonus=(Math.floor(Math.random()*10)%45)+1;
    }

    result.sort((a,b)=>a-b);
    let li:HTMLElement=document.createElement("li");
    li.textContent=`${result.toString()} + ${bonus}`;
    let div:HTMLElement|null=document.querySelector(".container");
    div!.appendChild(li);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={createLotto}>
          번호생성
        </button>

        <div className="container">

        </div>
      </header>
    </div>
  );
}

export default App;
