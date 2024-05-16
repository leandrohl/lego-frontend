
export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/__tests__/__mocks__/fileMock.ts',
        '\\.(css|scss)$': 'identity-obj-proxy',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@data/(.*)$': '<rootDir>/src/data/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    "testPathIgnorePatterns": ["/node_modules/", "/__tests__/__mocks__/"],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}",
        "!src/**/*.d.ts"
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
}
