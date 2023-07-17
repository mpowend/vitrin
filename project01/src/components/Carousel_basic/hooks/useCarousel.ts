import { useReducer } from 'react'

let useCarousel = ({
  imageCount,
  defaultIndex = 0,
}: {
  imageCount: number
  defaultIndex?: number
}) => {
  const reducer = (
    state: { active: number; prev: number; userSet: boolean },
    action: { type: string; payload?: number }
  ) => {
    console.log('reducer', state, action)

    switch (action.type) {
      case 'next':
        return {
          ...state,
          active: (state.active + 1) % imageCount,
          prev: state.active,
        }
      case 'prev':
        return {
          ...state,
          active: (state.active - 1) % imageCount,
          prev: state.active,
        }
      case 'set':
        return { active: action.payload!, prev: state.active, userSet: true }
      case 'userSetReset':
        return { ...state, userSet: false }
      default:
        return state
    }
  }
  const [activeIndex, dispatch] = useReducer(reducer, {
    active: defaultIndex,
    prev: -1,
    userSet: false,
  })
  return { activeIndex, dispatch }
}

export default useCarousel
