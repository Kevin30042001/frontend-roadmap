# Portfolio Frontend Engineer — Kevin Chavez

Portafolio público con roadmap de aprendizaje, proyectos y contacto.
Desplegado en Vercel, sin backend, sin costo.

## Archivos

```
portfolio-vercel/
├── index.html     ← estructura de la web
├── app.js         ← toda la lógica de renderizado
├── data.json      ← TUS DATOS (edita esto para actualizar la web)
├── vercel.json    ← configuración de Vercel
└── README.md
```

## Cómo actualizar tu progreso

1. Abre `data.json`
2. En la sección `roadmap.phases`, actualiza el `pct` de cada curso
3. Haz commit y push a GitHub → Vercel despliega automáticamente

```json
{
  "name": "Universidad Desarrollo Web - FrontEnd Web Developer!",
  "pct": 6
}
```

## Despliegue en Vercel (primera vez)

1. Sube esta carpeta a un repositorio GitHub
2. Ve a [vercel.com](https://vercel.com) → New Project
3. Importa tu repositorio
4. Framework Preset: **Other**
5. Root Directory: la carpeta de este proyecto (o raíz si subiste solo esto)
6. Deploy → ¡listo! Obtienes URL tipo `tu-nombre.vercel.app`

## Integración con la extensión de Chrome

Cuando subas el proyecto a GitHub, puedes sincronizar automáticamente
el `data.json` ejecutando el script `sync.js` (próximamente) desde
la extensión de Chrome → exporta los datos de Udemy y actualiza el JSON.

## Personalización

Edita `data.json` para:
- Cambiar tu nombre, bio, email, GitHub, LinkedIn
- Agregar/editar proyectos
- Actualizar porcentajes de cursos
- Marcar disponibilidad para trabajo (`"available": true/false`)
- Ajustar niveles de skills
