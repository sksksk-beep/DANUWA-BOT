const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}



// Change following defaultConfig if you are deploying DANUWA-MD on github actions/github codespaces or replit...Railway users don't need to edit this



const defaultConfig = {
  SESSION_ID: "7AwAgQbJ#NhTb-jXIPybhj5g3nz-AsJeyXKgMngUDswMapbEwm4s", // Put your session id here
  ALIVE_IMG: "https://github.com/DANUWA-MD/DANUWA-BOT/blob/main/images/Danuwa%20-%20MD.png?raw=true",
  ALIVE_MSG: "*Hello👋 Meta-AI Is Alive Now*", // Change alive msg from here
  OPENAI_API_KEY: "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",// Add OPENAI API key here
  GEMINI_API_KEY: "AIzaSyDYcFx2G-g0VMxUpFXcfWxZNU0k1g7rr8g", // Add Gemini API key here
  REMOVE_BG_API_KEY:"49bJxRaRAQJ3rwXWKHxHRBtV", // Add removebg API key here
  WEATHER_API_KEY: "2db86621a8a24d2fb73174030252506", // Add your weather API key here
  BOT_OWNER: "94774012435", // Replace your bot owner number here with 94(country code)
  ownerNumber: ["94774012435"], // Replace your bot owner number here (same as bot owner number)
  AUTO_STATUS_REACT: "true",
  AUTO_STATUS_REPLY: "true",
  AUTO_STATUS_SEEN: "true",
  MODE: "public", // 'private', 'public'
};

//*******************************************************************************************************************************************************

module.exports = {
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || defaultConfig.AUTO_STATUS_REACT,
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REPLY|| defaultConfig.AUTO_STATUS_REPLY,
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_SEEN || defaultConfig.AUTO_STATUS_SEEN,
  SESSION_ID: process.env.SESSION_ID || defaultConfig.SESSION_ID,
  ALIVE_IMG: process.env.ALIVE_IMG || defaultConfig.ALIVE_IMG,
  ALIVE_MSG: process.env.ALIVE_MSG || defaultConfig.ALIVE_MSG,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || defaultConfig.OPENAI_API_KEY,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || defaultConfig.GEMINI_API_KEY,
  REMOVE_BG_API_KEY: process.env.REMOVE_BG_API_KEY || defaultConfig.REMOVE_BG_API_KEY, 
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || defaultConfig.WEATHER_API_KEY,
  BOT_OWNER: process.env.BOT_OWNER || defaultConfig.BOT_OWNER,
  ownerNumber: process.env.ownerNumber
    ? process.env.ownerNumber.split(",")
    : defaultConfig.ownerNumber,
  AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS, defaultConfig.AUTO_READ_STATUS),
  MODE: process.env.MODE || defaultConfig.MODE,

};
