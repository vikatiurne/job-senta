// const passport = require("passport");
// const Auth0Strategy = require("passport-auth0");
// const { Pool } = require("pg");


// const passwordService = require("./service/passwordService");
// const TokenService = require("./service/tokenService");
// const { User } = require("../../models/models");
// const UserDto = require("../dtos/user-dto");



// // проверка соединения с бд
// const pool = new Pool({
//     connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
// });
  
// pool.connect()  
//   .then(() => console.log("Postgres connected"))  
//   .catch(err => console.error("Connection error", err.stack)); 


//   passport.use(
//     new Auth0Strategy(
//       {
//         domain: process.env.AUTH0_DOMAIN,
//         clientID: process.env.AUTH0_CLIENT_ID,
//         clientSecret: process.env.AUTH0_CLIENT_SECRET,
//         callbackURL: `${process.env.API_URL}/api/auth/login/callback`,
//         scope: "openid profile email offline_access r_liteprofile r_emailaddress",
//       },
//       async (accessToken, refreshToken, extraParams, profile, done) => {
//         try {  

//             console.log('Profile from Auth0:', profile); 
//             console.log('refreshToken from Auth0:', refreshToken); 
//             console.log('accessToken from Auth0:', accessToken); 

          
//             let userData = await User.findOne({ where: { email: profile.emails[0].value } });  
    
//             if (!userData) {  
//                 const randomPassword = passwordService.cryptoPassword(profile._json.name);

//                 userData = await User.create({ 
//                   username: profile._json.given_name || profile._json.nickname,
//                   lastName:profile._json.family_name || profile._json.nickname,
//                   email: profile.emails[0].value,
//                   password: randomPassword,
                     
//                 });
//                 const userDto = new UserDto(userData);
//                 await TokenService.saveToken(
//                   userDto.id,
//                   refreshToken,
//                   accessToken
//                 );
 
//                 console.log('New user created:', userDto); 
//             } else {  
//                 console.log('Existing user found:', userData); 
//             }  
    
//             return done(null, userData);  
//         } catch (err) {  
//             console.error('Error creating or finding user:', err);  
//             return done(err, null);  
//         }  
//       }
//     )
//   );
  
//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });
  
//   passport.deserializeUser(async (id, done) => {
//     const user = await User.findByPk(id);  
//     done(null, user);;
//   });

  

// module.exports= passport;