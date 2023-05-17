import SplitScreen from "./SplitScreen"
import Right from "./components/Right"
import Left from "./components/Left"

const App = () => {
  return (
    <div>
      <SplitScreen leftWeight = {1} rightWeight={3}>
        <Left message="Hello "/>
        <Right name="Kaleab!"/>  
      </SplitScreen>
    </div>
  )
}

export default App