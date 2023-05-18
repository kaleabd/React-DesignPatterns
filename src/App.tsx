import SplitScreen from "./SplitScreen";
import Right from "./components/Right";
import Left from "./components/Left";
import RegularList from "./RegularList";
import { people } from "./assets/people";
import SmallPersonListItem from "./people/SmallPersonListItem";
import LargePersonListItem from "./people/LargePersonListItem";
import { products } from "./assets/products";
import SmallProductListItem from "./product/SmallProductItem";
import LargeProductListItem from "./product/LargeProductItem";
import NumberedList from "./NumberedList";
import Modal from "./Modal";
import CurrentUserLoader from "./Container-component/CurrentUserLoader";
import UserInfo from "./Container-component/UserInfo";

const App = () => {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={2}>
        <Left message="Hello" />
        <Right name="Kaleab!" />
      </SplitScreen>
      {/* LIST AND LIST ITEMS */}
      {/* `<RegularList>` is rendering a list of items from the `people` array, where each item is
      represented by a `SmallPersonListItem` component. The `resourceName` prop is used to specify
      the name of the resource being listed (in this case, "person"). */}
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
      <br />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <br />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
      <br />
      <NumberedList
      items={products}
      resourceName="product"
      itemComponent={SmallProductListItem}
      />
      <br />
      <Modal>
        <LargeProductListItem product={products[0]}/>
      </Modal>
      <br />
      <br />
      {/* `<CurrentUserLoader>` is a higher-order component that loads the current user's information
      and passes it down to its child components as props. In this case, the child component is
      `<UserInfo/>`, which likely displays information about the current user. */}
      <CurrentUserLoader>
        <UserInfo/>
      </CurrentUserLoader>
      <br />
      <br />
    </>
  );
};

export default App;
