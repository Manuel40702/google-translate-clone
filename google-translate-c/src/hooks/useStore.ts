import { useReducer } from 'react'
import { Action, FromLanguage, Language, State } from '../Types/types'
// 
const initialState : State = {
    fromLanguage: 'es',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false
  }
  
  
function reducer (state : State, action : Action){
    const {type} = action

    if(type === 'INTERCHANGE_LANGUAGES'){

        if(state.fromLanguage === 'auto') return state
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }
    }
  
    if(type === 'SET_FROM_LANGUAGE'){
      if(state.fromLanguage === action.payload) return state
      return{
        ...state,
        fromLanguage: action.payload,
        result: '',
      }
    }
  
    if(type === 'SET_TO_LANGUAGE'){
      if(state.toLanguage === action.payload) return state
      return{
        ...state,
        toLanguage: action.payload,
        result: '',
      }
    }
  
    if(type === 'SET_FROM_TEXT'){
      return{
        ...state,
        fromText: action.payload,
        result: ''
      }
    }
  
    if(type === 'SET_RESULT'){
      return{
        ...state,
        loading: true,
        result: action.payload
      }
    }

    if(type === 'SET_LOADING'){
      return{
        ...state,
        loading: action.payload
      }
    }
  
    return state
  }

export function useStore() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const interchangeLanguages = () => {
        dispatch({type : 'INTERCHANGE_LANGUAGES'})
    }

    const setFromLanguages = (payload : FromLanguage) => {
        dispatch({type : 'SET_FROM_LANGUAGE', payload})
    }

    const setToLanguage = (payload : Language) => {
        dispatch({type: 'SET_TO_LANGUAGE', payload})
    }

    const setFromText = (payload : string) => {
        dispatch({type: 'SET_FROM_TEXT', payload})
    }

    const setResult = (payload : string) => {
        dispatch({type: 'SET_RESULT', payload})
    }

    const setLoading = (payload: boolean) =>{
        dispatch({type: 'SET_LOADING', payload})
    }

    return {state, setFromLanguages, setToLanguage, setFromText, setResult, interchangeLanguages, setLoading};
}