# Start
npm i
npm run dataServer
npm run server

# jwt_L1 process
rest-request.rest ->server.js ->POST-login
                              ->GET-user_info ->auth ->user_info













# dev process
mkdir jwt
npm init
npm i express cors dotenv ip nodemon jsonwebtoken json-server axios

    - genSecret.js ->generate secret
    - .env -> store secret | port | address
    - server.js
    - src
    -   -login.js
    -   -userInfo.js
    -   -auth.js
    - data

rest-request.rest ->server.js ->POST-login
                              ->GET-user_info ->auth ->user_info