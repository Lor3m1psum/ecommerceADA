# E-commerce ADA

## Descripción

Este es un proyecto de e-commerce desarrollado como trabajo final para **ADA ITW**. Permite a los usuarios navegar por productos, agregarlos al carrito, completar un checkout y realizar pedidos.

## Características

- 🔍 **Lista de Productos**: Visualización de productos almacenados en Firebase.
- 🛒 **Carrito de Compras**: Agregar, eliminar y vaciar productos.
- 🔐 **Autenticación**: Registro e inicio de sesión con Firebase Auth.
- 💳 **Checkout**: Proceso de compra con formulario de dirección y pago.
- ✅ **Confirmación de Orden**: Mensaje de éxito después de completar el pago.
- 🚀 **Despliegue**: Disponible en [Netlify/Vercel] (reemplaza con el enlace de tu despliegue).

## Tecnologías Utilizadas

- React.js ⚛️
- Chakra UI 🎨
- Firebase 🔥 (Auth, Firestore, Hosting)
- React Router 🚦

## Instalación y Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Lor3m1psum/ecommerceADA.git
   ```
2. Ingresa al directorio:
   ```bash
   cd ecommerceada
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Configura Firebase:
   - Crea un archivo `.env` en la raíz del proyecto con las credenciales de Firebase:
     ```env
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

## Ejecución Local

Para iniciar la aplicación en modo desarrollo:

```bash
npm run dev
```

La app estará disponible en `http://localhost:5173/`

## Autor

👩‍💻 **Lorena Rosales** - Desarrollado para **ADA ITW** 🚀
https://github.com/Lor3m1psum
