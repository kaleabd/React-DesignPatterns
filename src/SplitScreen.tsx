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

        const [left,right] = children;
    return (
      <div className="flex items-center">
        <div className={`flex-${leftWeight} bg-red-500`}>
          {left}
        </div>
        <div className={`flex-${rightWeight} bg-green-500`}>
          {right}
        </div>
      </div>
    );
  };
  
  export default SplitScreen;
  