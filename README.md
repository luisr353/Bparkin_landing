# BParking - Landing Page

Landing page para BParking, empresa de alquiler de parqueaderos en Barranquilla.

## Características

- **Servicios de Parqueadero**: 
  - Carros: $5.000 COP por hora
  - Motos: $3.000 COP por hora
  
- **Publicidad en Pantalla LED**:
  - Plan Semanal
  - Plan Quincenal  
  - Plan Mensual

- **Ubicación**: Barranquilla, Colombia
- **Disponibilidad**: 24/7

## Tecnologías

- Next.js 14
- TypeScript
- Tailwind CSS
- Screaming Architecture
- Lucide React Icons

## Instalación (Bun)

```bash
# Instalar dependencias
bun install

# Ejecutar en desarrollo
bun run dev

# Construir para producción
bun run build

# Ejecutar en producción
bun run start
```

Notas:
- El proyecto usa Bun como package manager (`packageManager: bun@1.2.23`) y `bun.lockb`.
- Asegúrate de no commitear `package-lock.json` ni `yarn.lock` para evitar conflictos con Vercel.

### Despliegue en Vercel

- `vercel.json` ya define:
  - installCommand: `bun install`
  - buildCommand: `bun run build`
  
Si usas la UI de Vercel, verifica en Project Settings → Build & Development Settings que coincidan estos comandos.

### Variables de entorno

Crea un archivo `.env.local` en la raíz para desarrollo:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_clave_publica
```

## Estructura del Proyecto

```
src/
├── app/                 # App Router de Next.js
├── features/           # Features organizadas por dominio
│   ├── hero/
│   ├── parking/
│   ├── advertising/
│   └── contact/
└── shared/             # Componentes compartidos
    └── components/
        ├── ui/         # Componentes UI base
        └── layout/     # Componentes de layout
```

## Screaming Architecture

El proyecto utiliza Screaming Architecture donde:
- Cada feature tiene su propia carpeta
- Los componentes compartidos están en `/shared`
- La estructura grita sobre qué hace la aplicación
- Separación clara entre features y componentes compartidos