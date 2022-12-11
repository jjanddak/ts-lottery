import "./App.css";

function App() {
  function createLotto() {
    function getPaper() {

      const paper: any = []
      for (let i = 0; i < 5; i++) {
        const getRan = (min: number, max: number) => {
          min = min === 0 ? 0 : 1
          return (Math.floor((Math.random() * 1000 + (new Date().valueOf() % 100))) % (max + 1 - min)) + min
        }
        const lottoNums: any = []
        let digit = 0
        while (lottoNums.length < 6) {
          digit = digit >= 5 ? 0 : digit

          let skipDigit = getRan(0, 100)
          while (skipDigit <= 30) {
            digit++
            skipDigit = getRan(0, 100)
            if (digit >= 5) digit = 0
          }

          let duplicate = getRan(1, 2) // max <= 6개까지 남은 개수
          let round = 1
          while (round <= duplicate) {
            const n = digit === 4 ? getRan(0, 5) : getRan(0, 9)
            const pickedNum = digit * 10 + n
            if (!lottoNums.includes(pickedNum)) {
              lottoNums.push(pickedNum === 0 ? 1 : pickedNum)
              if (lottoNums.length + duplicate > 6) duplicate = 6 - lottoNums.length
              round++
            }
          }
          digit++
        }
        lottoNums.sort((a: number, b: number) => a - b)
        paper.push(lottoNums)
      }
      return paper
    }

    function getYearLottery() {
      let n = 0
      while (n <= 100000) {
        n = Math.floor(Math.random() * 100000000) % 1000000
      }
      const round = Math.floor(Math.random() * 10 % 5) + 1
      return `${round}조 ${n}`
    }

    const paper = getPaper()
    const year = getYearLottery()

    const container: HTMLElement | null = document.querySelector(".container");
    const yearContainer: HTMLElement | null = document.querySelector(".yearContainer");
    const div: HTMLElement = document.createElement("div")
    const yearLi: HTMLElement = document.createElement("li")
    yearLi.textContent = year

    for (let i = 0; i < paper.length; i++) {
      let li: HTMLElement = document.createElement("li");
      li.textContent = `${paper[i].toString()}`;
      div?.appendChild(li);
    }
    if (container?.children) container.textContent = ''
    if (yearContainer?.children) yearContainer.textContent = ''
    container?.appendChild(div)
    yearContainer?.appendChild(yearLi)
  }

  return (
    <div className="App" >
      <header className="App-header">
        <div className="numbers-container">
          <div><h4>로또</h4></div>
          <div className="container">
            <li>0, 0, 0, 0, 0, 0</li>
            <li>0, 0, 0, 0, 0, 0</li>
            <li>0, 0, 0, 0, 0, 0</li>
            <li>0, 0, 0, 0, 0, 0</li>
            <li>0, 0, 0, 0, 0, 0</li>
          </div>
          <div><h4>연금복권</h4></div>
          <div className="yearContainer">
            <li>0조 000000</li>
          </div>
        </div>

        <button
          id="btn"
          onClick={createLotto}
        >
          Pick Your Number
        </button>
      </header >
    </div >
  );
}

export default App;
