# Rosarios Little Flower

Aplicación PWA para controlar pedidos, inventario de materiales y fotografías de reliquias producidas.

## Funciones principales

- Registro, edición y eliminación de pedidos.
- Pestaña Consultas por nombre, tipo de reliquia y fecha, con orden reciente, antiguo o todos.
- Control de cantidades, anticipos, saldos y totales.
- Inventario de materiales con fotografía, entradas, salidas, existencia e historial.
- Galería de trabajos terminados.
- Instalación como aplicación PWA.
- Base de datos persistente D1 y almacenamiento de fotografías R2.

## Desarrollo local

Requiere Node.js 22 o superior.

```bash
npm ci
npm run db:generate
npm run dev
```

## Publicación

El repositorio puede guardarse en GitHub. Como utiliza base de datos y almacenamiento de imágenes en el servidor, GitHub Pages por sí solo no ejecuta todas sus funciones. Para una instalación completa se requiere un entorno compatible con Cloudflare Workers, D1 y R2.

Consulte `GUIA-MULTIUSUARIO.md` para conocer cómo compartir el acceso manteniendo los datos en la nube.
