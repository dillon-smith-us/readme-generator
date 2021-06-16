const axios = require('axios');

const api = {
    async getUser(userAnswers) {
        try { let response = await axios
        .get(`https://api.github.com/users/${userAnswers.username}`);
        return response.data;
        } catch (error) {
            console.log(error);
        }
    }
};

// export module to call in index.js
module.exports = api;