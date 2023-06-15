import NumberedList from "./Layout-Components/Lists_and_ListItems/NumberedList";
import RegularList from "./Layout-Components/Lists_and_ListItems/RegularList";
import LargePersonListItem from "./Layout-Components/Lists_and_ListItems/people/LargePersonListItem";
import SmallPersonListItem from "./Layout-Components/Lists_and_ListItems/people/SmallPersonListItem";
import LargeProductListItem from "./Layout-Components/Lists_and_ListItems/products/LargeProductListItem";
import SmallProductListItem from "./Layout-Components/Lists_and_ListItems/products/SmallProductListItem";
import SplitScreen from "./Layout-Components/Split_Screen/SplitScreen";
import { people } from "./assets/people";
import { products } from "./assets/products";

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

      {/* Lists and List Items */}

      <SmallPersonListItem person={people[2]}/>
      <LargePersonListItem person={people[0]}/>

{/* 
      These lines of code are rendering two instances of the `RegularList` component. The first instance
      is rendering a list of `people` using the `SmallPersonListItem` component to render each item. The
      second instance is rendering the same list of `people` but using the `LargePersonListItem` component
      to render each item. The `resourceName` prop is used to specify the name of the resource being
      listed (in this case, "person"). The `items` prop is used to pass in the array of items to be
      listed. The `itemComponent` prop is used to specify the component to be used to render each item in
      the list.     
*/}

      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />


      <SmallProductListItem product={products[0]} />
      <LargeProductListItem product={products[1]} />


      <NumberedList 
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <NumberedList 
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />

    </div>
  );
};

export default App;
