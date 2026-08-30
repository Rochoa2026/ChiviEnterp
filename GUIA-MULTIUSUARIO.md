# Guía de datos en la nube y acceso multiusuario

## Cómo está preparada la aplicación

Rosarios Little Flower ya utiliza servicios de nube para que la información no dependa de un solo teléfono:

- **Base de datos D1:** guarda pedidos, materiales, existencias y movimientos de inventario.
- **Almacenamiento R2:** guarda fotografías de materiales y reliquias.
- **Acceso web:** cada usuario autorizado abre la misma dirección y consulta la misma información actualizada.
- **Actualización compartida:** cuando un usuario registra una entrada, salida o pedido, los demás ven el cambio al recargar la aplicación.

## Cómo incorporar a otros usuarios

1. Defina quiénes podrán entrar a la aplicación.
2. Reúna el correo electrónico que cada persona utiliza para iniciar sesión en ChatGPT.
3. Agregue esos correos como usuarios autorizados de la aplicación.
4. Envíeles la dirección web de Rosarios Little Flower.
5. Cada persona debe abrirla con su cuenta autorizada.

La aplicación debe mantenerse con acceso restringido. No se recomienda hacerla pública porque contiene nombres, teléfonos, direcciones y datos de pedidos.

## Prueba recomendada

1. El usuario A registra un material con existencia inicial de 10 unidades.
2. El usuario B abre Inventario y registra una salida de 2 unidades.
3. Ambos recargan la aplicación y verifican existencia de 8 unidades.
4. Revisan que el movimiento aparezca en el historial con fecha, cantidad y motivo.

## Información necesaria para habilitar usuarios

Para autorizar a cada persona se necesita su nombre y el correo de su cuenta de ChatGPT. El propietario de la aplicación debe decidir quién tendrá acceso.
