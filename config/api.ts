export default process.env.NODE_ENV === 'production'
  ? 'https://rafchat-app-server.herokuapp.com/'
  : 'http://localhost/';
