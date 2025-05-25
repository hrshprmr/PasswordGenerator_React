import { useState, useCallback, useEffect } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(0)
  const [text, setText] = useState('')
  const [password, setPassword] = useState('')


  const generatePassword = useCallback(() => {
    let pass = ""
    let lower = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) {
      lower += "0123456789"
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * lower.length)
      pass += lower[randomIndex]
    }
     setPassword(pass)
  }, [length, numAllowed])
  
  useEffect(() => {
    generatePassword()
  }
  , [length, numAllowed, generatePassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            // onChange={(e) => setText(e.target.value)}
            className="outline-none w-full py-1 px-3"
            placeholder="Type something..."
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            name="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer' 
            onChange={(e) => setLength(e.target.value)}
            id=''
            />
            <label htmlFor="range" className='text-gray-400'>Length: {length}</label>
            </div>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             name=''
             id=""
             defaultChecked={numAllowed}
             onChange={(e) => setNumAllowed(e.target.checked)}
             />
            <label htmlFor="" className='text-gray-400'>Allow Numbers</label>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
