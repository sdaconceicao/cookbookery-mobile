module.exports = api => {
    api.cache(false);
    return {
        presets: [
            "module:metro-react-native-babel-preset",
            "module:react-native-dotenv"],
        plugins: [
            "@babel/plugin-proposal-export-default-from",
            "@babel/plugin-proposal-export-namespace-from"
        ]
    }
};
