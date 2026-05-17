import { useState } from "react"
import { languages } from "./languages"
import clsx from "clsx"



export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react")
  const [gussedLetters, setGussedLetters] = useState([])




  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  
  function addGuessedLetter(letter) {
    setGussedLetters(prevLetters => 
      prevLetters.includes(letter) ? 
      prevLetters :
      [...prevLetters, letter]
    )
  }
  
  const keyboardElements = alphabet.split("").map(letter => {
    const isGuessed = gussedLetters.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong= isGuessed && !currentWord.includes(letter)
    const className = clsx({
       correct: isCorrect,
       wrong: isWrong,

    })

    return (
    <button
      className={ className}
           key={letter}
      onClick={() => addGuessedLetter(letter)}>
      {letter.toUpperCase()}
    </button>
  )}
  )

  const languageElements = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    }

    return (
      <span className="chip" style={styles} key={lang.name}>
        {lang.name}
      </span>
    )
  })

  const letterElements = currentWord.split("").map ((letter, index) => (
    <span key={index}>
      {gussedLetters.includes(letter) ? letter.toUpperCase() : ""}
    </span>
  ))

  return (
    <main>
      <header>
        <h1> Game goes here</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe from
          assembly
        </p>
      </header>

      <section className="game-status">
        <h2>You win!!  🎉🎉</h2>
        <p>Well done!</p>
      </section>

       

      <section className="language-chips">{languageElements}</section>
      <section className="word">
        {letterElements}
      </section>
      <section className="keyboard">
          {keyboardElements}
      </section>
      <button className="new-game">New Game</button>
    </main>
  )
}

