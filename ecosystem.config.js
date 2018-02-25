module.exports = {
  apps: [{
    name: 'index',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'bitnami',
      host: '52.23.184.144',
      key: 'C:/Users/tue19/.ssh/server.pem',
      ref: 'origin/master',
      repo: 'git@github.com:tuetranduy/pbs-nodeJs-server.git',
      path: '~/server',
      'post-deploy': 'npm install && sudo pm2 startOrRestart ecosystem.config.js'
    }
  }
}