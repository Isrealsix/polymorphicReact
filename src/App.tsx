import "./App.css";
import { Text } from "./components";

const Emphasis = ({children}: {children: React.ReactNode}) => <em style={{backgroundColor: 'rebeccapurple'}}>{children}</em>

function App() {
  return (
    <div className="App">
      <p>hi</p>
      <Text as="h1">Hello</Text>
      <Text as="h2">Hello</Text>
      <Text>Hello motto</Text>
      <Text as='a' href='http://google.com'>Google</Text>
      <Text as={Emphasis}>You are totally awesome at this</Text>
    </div>
  );
}

export default App;
