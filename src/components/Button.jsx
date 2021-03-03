import React, { useEffect, useState } from "react"
import styles from "./Button.module.css"

const Button = ({ onClick, children }) => {
  const [state, setState] = useState("")

  useEffect(() => {
    setState("test")
  }, [])

  return (
    <button onClick={onClick} className={`${styles.button} ${styles.primary}`}>
      {children}
    </button>
  )
}

export default Button
