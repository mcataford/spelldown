import Immutable from 'immutable'

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import initializePuzzleSaga from './initializePuzzle.sagas'
import verifyAnswerSaga from './verifyAnswer.sagas'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    new Immutable.Map(),
    composeEnhancers(applyMiddleware(sagaMiddleware)),
)

const sagas = [initializePuzzleSaga, verifyAnswerSaga]

sagas.forEach(saga => {
    sagaMiddleware.run(saga)
})

export default store
