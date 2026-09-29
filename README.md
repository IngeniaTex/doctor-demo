# Landing page para consultorio médico (React)

One-page landing para un doctor/a, basada en el template Nischinto (React 18 + Bootstrap 5 + Sass).

## Uso

```bash
npm install
npm start       # http://localhost:3000
npm run build   # genera /build listo para desplegar
```

## Personalización

Todo el contenido está centralizado en **`src/data/site.js`**:

| Sección        | Qué cambiar                                              |
|----------------|----------------------------------------------------------|
| `brand`        | Nombre, especialidad, logo (`/public/images/logo.svg`)   |
| `contact`      | Teléfono, WhatsApp, email, dirección, iframe de Google Maps |
| `social`       | Redes sociales (icono Iconify + URL)                     |
| `hero`         | Slides de portada (título, subtítulo, imagen de fondo)   |
| `highlights`   | Las 3 tarjetas debajo del hero                           |
| `about`        | Biografía, avatar, horario de consulta                   |
| `services`     | Tarjetas de servicios (icono Iconify + texto)            |
| `stats`        | Cifras (años, pacientes, etc.) + `video`                 |
| `appointment`  | Motivos de consulta y `web3formsKey`                     |
| `testimonials` | Opiniones de pacientes                                   |
| `faq`          | Preguntas frecuentes                                     |
| `footer`       | Enlaces rápidos y crédito                                |

### Formulario de citas
Usa [web3forms.com](https://web3forms.com) (gratis). Crea una *access key* con el correo
donde quieras recibir las solicitudes y pégala en `appointment.web3formsKey`.

### Logo
Reemplaza `public/images/logo.svg`, `logo-white.svg` y `favicon.svg`. El header
muestra el logo a ~45 px de alto, así que un SVG/PNG horizontal funciona mejor.

### Colores
Variables en `src/sass/default/_variable.scss` (`$blue` es el color principal).
