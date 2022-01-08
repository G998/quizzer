import {useState, useEffect} from 'react';

//css
import './App.css';

//components
import Quiz from './components/Quiz'
import StartReset from './components/StartReset';

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
const LIST_URL = 'http://localhost:8080/vocabList'
const INITIAL_LIST = ['ageru','asa','asagohan','asatte',
  'ashi','ashita','asoko','asobu','atatakai','atama',
  'atarashii','achira','yonde','atsui','atsui','ato',
  'anata','ani','ane','ano','apaato','abiru','abunai',
  'amai','amari','ame','arau','aru','aru','aruku','are',
  'ii, yoi','iie','iu','ie','iku','ikutsu','ikura','ike',
  'isha','isu','isogashii','itai','ichi','ichinichi',
  'ichiban','itsu','itsuka','ima','imi','imouto','iya',
  'iriguchi','iru','ireru','iro','iroiro','ue','ushiro',
  'usui','uta','utau','uchi','umareru','umi','uru','uwagi',
  'e','eiga','eigakan','eigo','ee','eki','erebeeta','en',
  'enpitsu','o','oishii','ookii','oozei','okaasan','okashi',
  'okane','okiru','oku','okusan','okuru','osake','osara',
  'ojisan','ojiisan','osu','osoi','ocha','otearai','otousan',
  'otouto','otoko','otokonoko','ototoi','ototoshi','otona',
  'onaka','onaji','oniisan','oneesan','obasan','obaasan',
  'obentou','oboeru','omoi','omoshiroi','oyogu','oriru',
  'owaru','ongaku','onna','onnanoko','~kai','~kai','gaikoku',
  'gaikokujin','kaisha','kaidan','kaimono','kau','kaesu',
  'kaeru','kao','kakaru','kagi','kaku'];



function App() {
  const [immutableList, setImmutableList] = useState([]);
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');

  const [counter, setCounter] = useState(1);
  const [score, setScore] = useState(0);

  const [showQuiz, setShowQuiz] = useState(false);
  const [reset, setReset] = useState(false);
  const [limit, setLimit] = useState(5);

  useEffect(()=> {
    const fetchList = async()=>{
      try{
        await fetch(LIST_URL)
        .then((res)=>res.json())
        .then(response=>{
          setImmutableList(shuffle(response))
          setLimit(response.length)
        })
      } catch(e){
        console.log(e);
      }
    }
    fetchList();
  }, []);

  const start = () =>{
    setShowQuiz(true)
    console.log(immutableList)
    const wordMeaning = immutableList[counter-1]
    setWord(wordMeaning.word);
    setMeaning(wordMeaning.meaning)
  }
  const onSubmit = (answer, event) => {
    console.log(meaning)
    event.preventDefault();
    if(answer.toLowerCase() === meaning){
      setScore(score+1)
    }
    if(counter < limit){
      setWord(immutableList[counter].word)
      setMeaning(immutableList[counter].meaning)
      setCounter(counter+1)
    }
    else{
      setShowQuiz(false)
      setReset(true)
    }
  }
  const handleReset = ()=>{
    setCounter(1)
    setScore(0)
    setShowQuiz(false);
    setImmutableList(shuffle(immutableList))
    setReset(false)
    if(immutableList.length > 10){
      setLimit(10)
    }
    else setLimit(immutableList.length)
  }
  const handleLimit = (value) => {value <= immutableList.length ? setLimit(value) : alert('Limit is too high. Please keep it at most ' + immutableList.length)}
  
  return (
    <div className="App">
      {!showQuiz && <StartReset start={start} limit={limit} handleLimit={handleLimit} handleReset={handleReset} reset={reset} score={score}/>}
      {showQuiz && <Quiz counter={counter} word={word} score={score} limit={limit} onSubmit={onSubmit}/>}
    </div>
  );
}

export default App;