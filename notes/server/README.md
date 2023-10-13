# Authorization

## Server Side

On User signup we save user password and login. We shouldn't store password itself, we must encrypt it before saving.
And for the User authentification we will create a token which we will store in the database. We will set cookie in response header, so that get this cookie in each request then.

On User signin we check user password and login and in case it is valid we will create a new token and set cookie in response header.

On request we check isAuthorized, if not we return error status code 401.

```
  Signup request { login: 'Sasha', password: 'querty' } 
  Server creates in users.js
    { id: "09799ce6-51b5-415e-bbfd-389b06db41ea", login: 'Sasha', passwordHash: 'asdf;ajslkdfjapsodfyhqpwejrf' }
  Server creates in sessions.js
    { id: "09799ce6-51b5-415e-bbfd-389b06db41ea", token: "0214a42f-17c8-47d6-add2-1dbce3d7e457" }

  Server sets response header
    'Set-Cookie' = "0214a42f-17c8-47d6-add2-1dbce3d7e457;path=/;expires=12/12/2023" (token)


  Signin request { login: 'Sasha', password: 'querty' }
  Server compare with user.js by login
  Server updates token in sessions.js
    { id: "09799ce6-51b5-415e-bbfd-389b06db41ea", token: "0214a42f-17c8-47d6-add2-1dbce3d7e457" }

  Server sets response header
    'Set-Cookie' = "0214a42f-17c8-47d6-add2-1dbce3d7e457;path=/;expires=12/12/2023" (token)
```

## Client Side

We try to get something from server. On Error 401 we will redirect to sigin.html.


## Sessions

key is user id
value is token