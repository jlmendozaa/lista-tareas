const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Configuración del proxy aquí
  server.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080', // URL del servidor de Spring Boot
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );

  // Manejo del resto de las rutas
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
