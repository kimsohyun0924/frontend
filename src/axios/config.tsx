const port = window.location.port;

export const admin_path = (port === "3000") ? 'http://localhost:3000/local'
  : (port === "33001") ? 'http://localhost:33001/dev'
    : (port === "43001") ? 'http://localhost:43001/gcloud'
      : 'http://localhost:53001/gcloud';

export const env = (port === "3000") ? 'local'
  : port === "33001" ? 'dev'
    : port === "43001" ? 'gcloud'
      : 'pcloud';