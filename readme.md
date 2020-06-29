# setup

```
npx lerna bootstrap --force-local
npx lerna run dev --scope override-server
```

## render-server

```
http://localhost:3000/ - "render-server home"
```

## override-server

```
http://localhost:3000/ - "override-server home"
```

Idea being: when I start `override-server`, the server defined in `render-server` should start & serve tamplates from `override-server` (if present), falling back to template in `render-server`.
