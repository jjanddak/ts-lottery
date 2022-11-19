import "./App.css";

function App() {
  function createLotto() {
    function getPaper() {

      const round = 5
      const paper: any = []
      for (let i = 0; i < round; i++) {
        const getRan = (min: number, max: number) => {
          min = min === 0 ? 0 : 1
          return (Math.floor(Math.random() * 10) % (max + 1 - min)) + min
        }
        const lottoNums: any = []
        while (lottoNums.length < 6) {
          let digit = getRan(0, 4)
          digit = digit === 0 ? 0 : digit * 10
          let duplicate = getRan(1, 2) // max <= 6개까지 남은 개수
          let round = 1
          while (round <= duplicate) {


            const n = digit === 40 ? getRan(0, 5) : getRan(0, 9)
            const num = digit + n
            if (!lottoNums.includes(num)) {
              lottoNums.push(num === 0 ? 1 : num)
              if (lottoNums.length + duplicate > 6) duplicate = 6 - lottoNums.length
              round++
            }
          }
        }
        lottoNums.sort((a: number, b: number) => a - b)
        paper.push(lottoNums)
      }
      return paper
    }

    function getYearLottery() {

    }

    const paper = getPaper()
    const year = getYearLottery()

    const container: HTMLElement | null = document.querySelector(".container");
    const div: HTMLElement = document.createElement("div")
    for (let i = 0; i < paper.length; i++) {
      let li: HTMLElement = document.createElement("li");
      li.textContent = `${paper[i].toString()}`;
      div?.appendChild(li);
    }
    if (container?.children) container.textContent = ''
    container?.appendChild(div)
  }

  return (
    <div className="App" >
      <header className="App-header">
        <button
          id="btn"
          onClick={createLotto}
        >
          추첨!!
        </button>

        <div className="container"></div>
        <div className="yearContainer" >hello world</div>
      </header >
    </div >
  );
}

export default App;
