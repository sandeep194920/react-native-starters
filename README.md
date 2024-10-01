### Starter Project React-Native

This is a react-native expo starter project.

#### Details

- This branch is an extension to [branch-#2-drawer-nav-in-first-screen-plus-stack-nav-in-other-screens](https://github.com/sandeep194920/react-native-starters/tree/branch-%232-drawer-nav-in-first-screen-plus-stack-nav-in-other-screens). It contains drawer navigator in first screen and stack navigator in other screens.

- This branch is all about creating a login and register screen with field validations.

##### BACKEND

- Created a register & login endpoint. We pass email, password, mobile and name for registering the user. We use `bcryptjs` package to hash the password and store in the db.

- While login, we pass email and password. We compare the hashed passwords. If the passwords match then we use `jsonwebtoken` package to generate JWT token, along with our secret created. This is a
  token that would be passed to FE after login. So in simple words, a loggedin user will have a token on FE and a loggedout user will not have the token.

##### FRONTEND

- Once the user logs in, the BE will send the token as I explained above to FE. Once we get the token on FE, we can request any other resource/end-point like `/user-data` for example by passing this token.

- The key point to understand is, when user logs in he gets back the token from BE. FE would first have to store this token using a package called [async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage). We then can get this token from `async storage` and pass it along any endpoint we like to call, for example `user-data`.

Reference - [Refer this video about login and register UI](https://www.youtube.com/watch?v=GmRLAOe6bzU&list=PLS3Cbnye46msryIoZjQ5AQ57nxENwnJfl&index=11)
