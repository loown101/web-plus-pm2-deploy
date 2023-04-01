require('dotenv').config({ path: '.env.deploy' });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REF,
  DEPLOY_REPO = 'origin/master',
} = process.env;

module.exports = {
  apps: [
    {
      name: 'frontend',
      script: './build/index.html',
    },
  ],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      'post-deploy':
        'source ~/.bash_rc && cd frontend && npm i && npm run build',
    },
  },
};
