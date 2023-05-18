import React, {useState} from "react"

interface ModalProps {
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({children}) => {
    const [shouldShow, setShouldShow] = useState(false)
  return (
    <>
        <button 
        className="bg-indigo-600 rounded-lg px-4 py-1 text-white"
        onClick={() => setShouldShow(true)}>Show Modal</button>
        {
            shouldShow && (
                <div className="fixed z-1 left-0 top-0 w-full h-screen overflow-auto bg-black/20 backdrop-blur-sm" onClick={() => setShouldShow(false)}>
                    <div onClick={(e) => e.stopPropagation()} className="bg-white my-20 mx-auto p-10 w-[50%]">
                        <button 
                        className="bg-red-600 rounded-lg px-4 py-1 text-white"
                        onClick={() => setShouldShow(false)}>
                            Hide modal
                        </button>
                        {children}
                    </div>
                </div>
            )
        } 
    </>

  )
}

export default Modal