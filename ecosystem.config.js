module.exports = {
  apps: [{
    name: 'pbs server',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'bitnami',
      host: '35.169.9.123',
      key: 'C:/Users/tue19/Desktop/NodeJS-server.ppk',
      ref: 'origin/master',
      repo: 'git@github.com:tuetranduy/pbs-nodeJs-server.git',
      path: '~/server',
      'post-deploy': 'npm install && sudo pm2 startOrRestart ecosystem.config.js'
    }
  }
}