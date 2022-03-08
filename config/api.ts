export default process.env.NODE_ENV === 'production'
  ? 'https://rafchat.herokuapp.com/'
  : 'http://localhost/';
