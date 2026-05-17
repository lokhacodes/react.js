import { useState } from "react"
import { languages } from "./languages"
import clsx from "clsx"



export default function AssemblyEndgame() {
  //State values
  const [currentWord, setCurrentWord] = useState("react")
  const [gussedLetters, setGussedLetters] = useState([])

  //Derived values
  const wrongGuessesCounnt = gussedLetters.filter(letter => !currentWord.includes(letter)).length
  const isGameWon = currentWord.split("").every(letter => gussedLetters.includes(letter))
  const isGameLost = wrongGuessesCounnt >= languages.length - 1
  const isGameOver = isGameWon || isGameLost
  
  
  //Static Values
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

  const languageElements = languages.map((lang, index) => {
    const isLangaugeLost = index < wrongGuessesCounnt
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    }

    const className = clsx("chip", isLangaugeLost && "lost" )

    return (
      <span 
      className={className}
      style={styles} 
      key={lang.name}
      >
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
      {isGameOver && (
        <button className="new-game">New Game</button>
      )}
    </main>
  )
}

