import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  const colors = ["red", "green", "blue", "pink", "cyan"]
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap-justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl text-white" >
            {
              colors.map((colorName, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setColor(colorName)}
                    className="outline-none px-4 rounded-3xl"
                    style={{ backgroundColor: colorName }}
                  >
                    {colorName.toUpperCase()}
                  </button>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
