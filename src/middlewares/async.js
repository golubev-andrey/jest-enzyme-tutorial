export default ({dispatch}) => next => action => {
  // check to see if the action has a propmise on porperty
  if (!action.payload || !action.payload.then) {
    return next(action)
  }
  // if it does then wait for it to resolve
  // if it doesnt send the action to next middleware

  action.payload.then((response) =>{
    const newAction = { ...action, payload: response }
    dispatch(newAction)
  })
  // we want to wait for promise to resolve and then create a new action with data and dispatch it
}
