# ExpertOnDemand — Simple Backend (Render-ready)

This is a minimal Express server for live testing.
Use it to verify your app can talk to a backend before adding Stripe & AI.

## Endpoints
- `GET /health` -> `{ ok: true, ts: <timestamp> }`
- `POST /echo` -> echos back the JSON you send

## Run locally
```
npm install
npm start
```

## Deploy on Render (Drag & Drop)
1. Go to Render -> New -> Web Service -> Manual Deploy -> Drag & Drop
2. Upload this zip
3. **Build Command:** `npm install`
4. **Start Command:** `npm start`
5. Once deployed, copy the public URL (e.g., https://your-app.onrender.com)

Set that URL in your Flutter app:
```dart
const String kBackendBase = 'https://your-app.onrender.com';
```

Test in a browser:
- https://your-app.onrender.com/health
- POST https://your-app.onrender.com/echo with JSON body `{ "hello": "world" }`
