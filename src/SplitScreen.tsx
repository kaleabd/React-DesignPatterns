interface SplitScreenProps {
    children: React.ReactNode[];
    leftWeight: number;
    rightWeight: number;
  }
  
  const SplitScreen: React.FC<SplitScreenProps> = ({ 
    children,
    leftWeight= 1,
    rightWeight = 1
    }) => {

    /* `const [left, right] = children;` is destructuring the `children` array passed as a prop to the
    `SplitScreen` component. It assigns the first element of the array to the `left` variable and
    the second element to the `right` variable. This assumes that the `children` array always has
    two elements. */
    const [left,right] = children;
    return (
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className={`col-span-${leftWeight} bg-red-500`}>
          {left}
        </div>
        <div className={`col-span-${rightWeight} bg-green-500`}>
          {right}
        </div>
      </div>
    );
  };
  
  export default SplitScreen;
  