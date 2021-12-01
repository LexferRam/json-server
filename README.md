# JSON Server <https://www.npmjs.com/package/json-server>

1. npm install -g json-server
2. Create a db.json. ejemplo:

```javascript
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

3. Add the script in the package.json ==> json-server --watch db.json
4. Plural routes
GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
PATCH  /posts/1
DELETE /posts/1

## Alternative port

json-server --watch db.json --port 3004

## Delay responses

--delay, -d       