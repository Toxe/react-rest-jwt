# A React REST API example using JWT Authentication

## Dependencies

- Axios
- jsonwebtoken
- date-fns

## Running REST API Server (for development)

Add proxy settings to `package.json`:

```
{
  "proxy": "http://localhost:5000",
  [..]
}
```

Run server (https://github.com/Toxe/python-flask-rest-jwt):

```
flask run
```

## Running the application

```
npm start
```

### Building and running a production version

```
npm run build
serve -s build
```
