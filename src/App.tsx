import SplitScreen from "./Layout-Components/Split_Screen/SplitScreen";

const RightHandComponent: React.FC<{ message: string }> = ({ message }) => {
  return <h1>{message}</h1>;
};

const LeftHandComponent: React.FC<{ userName: string }> = ({ userName }) => {
  return <h1>{userName}</h1>;
};

const App = () => {
  return (
    <div>
      {/* The code is rendering a component called `SplitScreen` with two child components,
        `LeftHandComponent` and `RightHandComponent`. The `leftColor` and `rightColor` props are setting the
        background color of the left and right components respectively.
        <SplitScreen 
          left={LeftHandComponent}
          leftColor='bg-blue-400'
          right={RightHandComponent}
          rightColor='bg-green-400'
        /> 
      */}
      <SplitScreen leftColor="bg-blue-400" rightColor="bg-green-400">
        <LeftHandComponent userName="kaleab" />
        <RightHandComponent message="hello world!" />
      </SplitScreen>
    </div>
  );
};

export default App;
