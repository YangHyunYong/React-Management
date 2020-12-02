import logo from './logo.svg';
import './App.css';
import Customer from './components/customer';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '양현용',
  'birthday' : '961204',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '손태민',
  'birthday' : '961223',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '강희진',
  'birthday' : '960309',
  'gender' : '여자',
  'job' : '대학생'
}
]

function App(){
  return (
    <div>
    {
      customers.map(c=>{
        return <Customer
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
        />
      })
    }
    </div>
  );
}

export default App;
