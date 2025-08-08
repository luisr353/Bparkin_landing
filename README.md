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

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
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