import type {Config} from 'jest';
const config: Config = {
coverageProvider: "v8",
preset: 'ts-jest',
testEnvironment: "jest-environment-node",
testMatch: [
"**/__tests__/**/*.[jt]s?(x)",
"**/?(*.)+(spec|test).[tj]s?(x)"
],
transformIgnorePatterns: [
"/node_modules/(?!(uuid)/)"
],
};
export default config;
