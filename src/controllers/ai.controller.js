// import aiService from '../services/ai.service.js';  // Adjust the path if necessary

// export const getReview = async (req, res) => {
//     const code = req.body.code;
//     if (!code) {
//         return res.status(400).send("prompt is required");
//     }

//     try {
//         const response = await aiService(code);
//         res.send(response);
//     } catch (error) {
//         res.status(500).send("Error generating response");
//     }
// };

import aiService from "../services/ai.service.js"; // ".js" extension zaroori hai

export const getReview = async (req, res) => {
  const code = req.body.code;
  if (!code) {
    return res.status(400).send("Prompt is required");
  }

  try {
    const response = await aiService(code);
    res.send(response);
  } catch (error) {
    res.status(500).send("Error generating response");
  }
};



