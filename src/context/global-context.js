import React from 'react'
import PropTypes from 'prop-types'

import {
  actions,
  UserProvider,
  VideosProvider,
  Likesprovider,
  WatchLaterprovider,
  Historyprovider,
  PlaylistProvider,
} from './'

const GlobalContext = React.createContext()

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case actions.setToast:
      return {
        ...state,
        toast: {
          message: action.payload.message,
          type: action.payload.type,
          show: true,
        },
      }
    case actions.closeToast:
      return {
        ...state,
        toast: {
          message: '',
          type: '',
          show: false,
        },
      }
    default:
      return state
  }
}

const GlobalProvider = ({ children }) => {
  const [globalState, globalDispatch] = React.useReducer(GlobalReducer, {
    toast: {
      message: '',
      type: '',
      show: false,
    },
  })

  const showToast = ({ message, type }) => {
    globalDispatch({
      type: actions.setToast,
      payload: { message, type },
    })
  }

  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch, showToast }}>
      <UserProvider>
        <VideosProvider>
          <Likesprovider>
            <WatchLaterprovider>
              <Historyprovider>
                <PlaylistProvider>{children}</PlaylistProvider>
              </Historyprovider>
            </WatchLaterprovider>
          </Likesprovider>
        </VideosProvider>
      </UserProvider>
    </GlobalContext.Provider>
  )
}

const useGlobalState = () => React.useContext(GlobalContext)

GlobalProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export { GlobalProvider, useGlobalState }
