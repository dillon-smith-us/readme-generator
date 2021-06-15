const axios = require('axios');

const api = {
    async getUser(userResponses) {
        try { let response = await axios
        .get(`https://api.githib.com/users/${userResponses.username}`);
        return response.data;
        } catch (error) {
            console.log(error);
        }
    }
};

// export module to call in index.js
module.exports = api;