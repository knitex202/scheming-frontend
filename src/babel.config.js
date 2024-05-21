module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "current" // Or specify the browsers you want to support
                }
            }
        ]
    ]
};
