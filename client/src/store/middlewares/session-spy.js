import { CHECK_SESSION_FAILED } from "store/actions/user-actions"

export const sessionSpy = store => next => action => {
  if (action.type !== CHECK_SESSION_FAILED) {
    next(action);
  }
}
