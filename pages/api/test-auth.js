import auth0 from '../../utils/auth0';

export default auth0.requireAuthentication(
    async (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ hello: 'world - authed' }));
    }
);
  
  