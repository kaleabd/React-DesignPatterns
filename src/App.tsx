import SplitScreen from './Layout-Components/Split-Screen/SplitScreen'

const RightHandComponent = () => {
  return <h1>Right hand!</h1>
}

const LeftHandComponent = () => {
  return <h1>Left hand!</h1>
}

const App = () => {
  return (
    <div>
      <SplitScreen 
        left={LeftHandComponent}
        leftColor='bg-blue-400'
        right={RightHandComponent}
        rightColor='bg-green-400'
      />
    </div>
  )
}

export default App