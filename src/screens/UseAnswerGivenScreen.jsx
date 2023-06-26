import constate from 'constate'
import { useState } from 'react'

export function useAnswerGiven() {
  const [answersGiven, setAnswersGiven] = useState({})
  return {
    answersGiven,
    setAnswersGiven,
  }
}

export const [AnswerGivenProvider, useAnswerGivenContext] = constate(useAnswerGiven)
