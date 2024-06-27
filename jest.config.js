module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    
      "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-stub"
    
    
  },
  moduleFileExtensions: ["js", "jsx"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};
