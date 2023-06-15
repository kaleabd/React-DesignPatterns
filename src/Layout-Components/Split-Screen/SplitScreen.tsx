import React from "react"

type SplitScreenProps = {
  left: React.ComponentType
  right: React.ComponentType
  leftColor: string
  rightColor: string
}
const SplitScreen: React.FC<SplitScreenProps> = ({left: Left, right: Right, leftColor: LeftColor, rightColor: RightColor}) => {
  return (
    <div className="flex">
      <div className={`${LeftColor} flex-1`}>
        <Left />
      </div>
      <div className={`${RightColor} flex-1`}>
        <Right />
      </div>
    </div>
  )
}

export default SplitScreen