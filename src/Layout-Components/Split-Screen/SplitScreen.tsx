import React from "react"

type SplitScreenProps = {
  left: React.ComponentType
  right: React.ComponentType
}
const SplitScreen: React.FC<SplitScreenProps> = ({left: Left, right: Right}) => {
  return (
    <div className="flex">
      <div className="flex-1">
        <Left />
      </div>
      <div className="flex-1">
        <Right />
      </div>
    </div>
  )
}

export default SplitScreen