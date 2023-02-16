export const selectIsLoggedIn = state => state.auth.isLoggedIn

export const selectUserEmail = state => state.auth.user.email

export const selectIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser