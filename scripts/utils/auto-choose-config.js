const { configPath } = require("../constants");
const path = require("path");

const configRegion = () => {
    return process.env.FLAT_REGION || "SG";
};

const autoChooseConfig = () => {
    return path.join(configPath, configRegion());
};

module.exports.configRegion = configRegion;
module.exports.autoChooseConfig = autoChooseConfig;
