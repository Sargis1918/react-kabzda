module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg|webr)$': 'jest-transform-stub'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(react-redux|@babel/runtime)/)'
  ],
  testEnvironment: 'jsdom',
};
