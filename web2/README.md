# Mi Página Web Simple

Una página web moderna creada con HTML, CSS, JavaScript y Sass como preprocesador.

## 🚀 Características

- **HTML5 semántico** - Estructura limpia y accesible
- **Sass (SCSS)** - Preprocesador CSS con variables, mixins y funciones
- **JavaScript ES6+** - Funcionalidad interactiva moderna
- **Diseño responsivo** - Optimizado para todos los dispositivos
- **Animaciones CSS** - Transiciones y efectos suaves
- **Formulario de contacto** - Con validación y notificaciones
- **Navegación suave** - Scroll suave entre secciones

## 📁 Estructura del Proyecto

\`\`\`
mi-pagina-simple/
├── index.html          # Página principal
├── scss/
│   └── style.scss      # Estilos Sass
├── css/
│   └── style.css       # CSS compilado (generado automáticamente)
├── js/
│   └── main.js         # JavaScript principal
├── package.json        # Dependencias y scripts
├── vercel.json         # Configuración de Vercel
└── README.md           # Este archivo
\`\`\`

## 🛠️ Instalación y Uso

### 1. Clonar o descargar el proyecto

### 2. Instalar dependencias
\`\`\`bash
npm install
\`\`\`

### 3. Compilar Sass (una vez)
\`\`\`bash
npm run sass
\`\`\`

### 4. Modo desarrollo (watch + live server)
\`\`\`bash
npm run dev
\`\`\`

### 5. Compilar para producción
\`\`\`bash
npm run build
\`\`\`

## 🌐 Despliegue en Vercel

### Opción 1: Desde GitHub
1. Sube tu código a un repositorio de GitHub
2. Conecta tu repositorio con Vercel
3. Vercel detectará automáticamente la configuración

### Opción 2: Vercel CLI
\`\`\`bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
\`\`\`

### Opción 3: Drag & Drop
1. Ejecuta `npm run build`
2. Arrastra la carpeta completa a vercel.com

## 📝 Scripts Disponibles

- `npm run sass` - Compila Sass una vez
- `npm run sass:watch` - Compila Sass en modo watch
- `npm run build` - Compila Sass para producción (comprimido)
- `npm run dev` - Modo desarrollo con live reload
- `npm run start` - Inicia live server

## 🎨 Personalización

### Variables Sass
Edita las variables en `scss/style.scss`:

\`\`\`scss
$primary-color: #3498db;    // Color principal
$secondary-color: #2c3e50;  // Color secundario
$accent-color: #e74c3c;     // Color de acento
\`\`\`

### Contenido
- Modifica el contenido en `index.html`
- Agrega tus proyectos en el array `projects` en `js/main.js`
- Personaliza los estilos en `scss/style.scss`

## 🔧 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **Sass/SCSS** - Preprocesador CSS
- **JavaScript ES6+** - Funcionalidad interactiva
- **CSS Grid & Flexbox** - Layout responsivo
- **Intersection Observer API** - Animaciones al scroll
- **Vercel** - Hosting y despliegue

## 📱 Características Responsivas

- Menú hamburguesa en móviles
- Grid adaptativo para proyectos
- Tipografía escalable
- Imágenes responsivas
- Touch-friendly en dispositivos móviles

¡Disfruta construyendo tu página web! 🎉
