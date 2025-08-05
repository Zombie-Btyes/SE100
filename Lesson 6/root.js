// root.js

const users = [
  { name: 'Tom', country: 'Singapore' },
  { name: 'Jerry', country: 'Malaysia' },
  { name: 'Sarah', country: 'Indonesia' }
];

function WelcomeMessagesTitle() {
  return <p>Welcome Messages</p>
}

function WelcomeMessage(props) {
  return <li>Welcome {props.name} from {props.country}</li>
}

function WelcomeMessagesList() {
    return <ul>
        {
            users.map((user) => <>
                {user.country === 'Singapore' && <li>Majulah Singpura</li>}
                <WelcomeMessage key={user.name} name={user.name} country={user.country} />
            </>)
        }
    </ul>
}

function WelcomeMessagesSection() {
  return <div>
    <WelcomeMessagesTitle />
    <WelcomeMessagesList />
  </div>
}

function App() {
  return <div>
    <WelcomeMessagesSection />
  </div>
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)

const strings = ['hello', 'world', 'javascript'];

const lengths = strings.map(str => str.length);

console.log(lengths); 

const names = [['John', 'Doe'], ['Jane', 'Doe']];

const fullNames = names.map(name => name.join(' '));

console.log(fullNames); 

const age = 20;
const beverage = age >= 18 ? 'Beer' : 'Juice';
console.log(beverage);

