import Immutable from 'immutable'

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { initializePuzzleSaga, verifyAnswerSaga } from './sagas'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    new Immutable.Map(),
    composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(initializePuzzleSaga)
sagaMiddleware.run(verifyAnswerSaga)

export default store
