// Import dependencies
const bcrypt = require("bcrypt");

(async () => {
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    console.log(await bcrypt.hash("123", salt));
})();