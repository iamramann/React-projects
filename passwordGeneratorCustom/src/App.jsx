import { useEffect, useRef, useState } from "react";

function App() {
  const referencePasswordText = useRef(null);

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [areNumbersAllowed, setAreNumbersAllowed] = useState(false);
  const [areSpecialCharactersAllowed, setAreSpecialCharactersAllowed] =
    useState(false);

  const passwordGenerator = () => {
    let password = "";
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (areNumbersAllowed) {
      text += "1234567890";
    }

    if (areSpecialCharactersAllowed) {
      text += "!@#$%^&*()_+{}:?</>";
    }

    for (let i = 0; i < length; i++) {
      let position = Math.floor(Math.random() * text.length + 1);
      password += text.charAt(position);
    }

    setPassword(password);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, areNumbersAllowed, areSpecialCharactersAllowed]);

  const onClickCopy = () => {
    referencePasswordText.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <>
      <h1>Password Generator</h1>
      <input
        type="text"
        name="passwordText"
        id="passwordText"
        value={password}
        placeholder="Generate password"
        ref={referencePasswordText}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onClickCopy}>Copy</button>
      <br />
      <input
        type="range"
        name="range"
        id="range"
        min={8}
        max={200}
        value={length}
        onChange={(e) => {
          setLength(e.target.value);
        }}
      />
      <label>Length: {length}</label>
      <br />
      <input
        type="checkbox"
        name="numbers"
        id="numbers"
        value={areNumbersAllowed}
        onChange={() => {
          setAreNumbersAllowed((prev) => !prev);
        }}
      />
      <label htmlFor="numbers">Numbers</label>
      <input
        type="checkbox"
        name="spCharacters"
        id="spCharacters"
        value={areSpecialCharactersAllowed}
        onChange={() => {
          setAreSpecialCharactersAllowed((prev) => !prev);
        }}
      />
      <label htmlFor="spCharacters">Special Characters</label>
    </>
  );
}

export default App;
