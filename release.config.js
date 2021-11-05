module.exports = {
  branches: ['main'],
  repositoryUrl: 'git@github.com:fourkitchens/basic-ts-starter.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};
