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
{/* The code is rendering a component called `SplitScreen` with two child components,
`LeftHandComponent` and `RightHandComponent`. The `leftColor` and `rightColor` props are setting the
background color of the left and right components respectively. */}
      {/* <SplitScreen 
        left={LeftHandComponent}
        leftColor='bg-blue-400'
        right={RightHandComponent}
        rightColor='bg-green-400'
      /> */}
        <SplitScreen leftColor='bg-blue-400'  rightColor='bg-green-400'>
          <LeftHandComponent />
          <RightHandComponent />
        </SplitScreen>
    </div>
  )
}

export default App