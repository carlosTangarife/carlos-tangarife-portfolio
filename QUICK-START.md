# Quick Start Guide
## Carlos Tangarife Portfolio

¡Bienvenido! Este es tu guía rápida para poner tu portfolio en producción.

---

## 🎯 Objetivo

Tener tu portfolio profesional funcionando en **carlostangarife.com** usando AWS (S3 + CloudFront + Route 53).

---

## ✅ Checklist Pre-Deployment

Antes de subir a AWS, asegúrate de:

### 1. Personalizar Contenido

- [ ] Actualiza email en `index.html` (busca: `carlos@carlostangarife.com`)
- [ ] Actualiza LinkedIn URL (busca: `linkedin.com/in/carlostangarife`)
- [ ] Actualiza GitHub URL si lo tienes (busca: `github.com/carlostangarife`)
- [ ] Revisa que toda la información del CV esté correcta
- [ ] Agrega tu foto profesional (opcional, ver sección About)

### 2. Configurar Scripts de Deployment

- [ ] Abre `deploy.sh` (Linux/Mac) o `deploy.ps1` (Windows)
- [ ] Reemplaza `YOUR_CLOUDFRONT_DISTRIBUTION_ID` con tu Distribution ID real
  - Lo obtendrás después de crear CloudFront (Step 4 en AWS Guide)

### 3. Probar Localmente

- [ ] Abre `index.html` en tu navegador
- [ ] Verifica que todo se vea bien
- [ ] Prueba la navegación entre secciones
- [ ] Prueba en móvil (responsive)
- [ ] Revisa que no haya errores en la consola (F12)

---

## 🚀 Deployment en AWS (Resumen)

### Proceso Completo (60-90 minutos primera vez)

1. **Crear S3 Bucket** (10 min)
   - Nombre: `carlostangarife.com`
   - Habilitar hosting estático
   - Configurar bucket policy

2. **Subir Archivos** (5 min)
   - Usar AWS Console (drag & drop)
   - O usar script de deployment

3. **Crear Certificado SSL** (20-30 min)
   - AWS Certificate Manager (us-east-1 región)
   - Validación DNS
   - Esperar a que se emita

4. **Crear CloudFront Distribution** (15 min + 15 min deploy)
   - Configurar origen (S3)
   - Agregar dominio alternativo
   - Asignar certificado SSL

5. **Configurar Route 53** (10 min)
   - Crear records A (alias)
   - Apuntar a CloudFront

6. **Esperar Propagación** (5-30 min)
   - DNS toma tiempo
   - CloudFront se despliega globalmente

### Guía Detallada

Ver: [`docs/AWS-DEPLOYMENT-GUIDE.md`](docs/AWS-DEPLOYMENT-GUIDE.md)

---

## 💻 Comandos Rápidos

### Deployment Manual (Windows)

```powershell
# Asegúrate de estar en la carpeta del proyecto
cd carlos-tangarife-portfolio

# Ejecutar script de deployment
.\deploy.ps1
```

### Deployment Manual (Linux/Mac)

```bash
# Asegúrate de estar en la carpeta del proyecto
cd carlos-tangarife-portfolio

# Dar permisos de ejecución (solo primera vez)
chmod +x deploy.sh

# Ejecutar script de deployment
./deploy.sh
```

### Comandos AWS CLI Directo

```bash
# Subir archivos
aws s3 sync . s3://carlostangarife.com --exclude ".git/*" --exclude "docs/*" --delete

# Invalidar caché de CloudFront
aws cloudfront create-invalidation --distribution-id TU_DIST_ID --paths "/*"
```

---

## 🔧 Actualizar Contenido

### Workflow Normal

1. **Hacer cambios** en `index.html`, `styles.css`, o `script.js`
2. **Probar localmente** (abre index.html en navegador)
3. **Ejecutar deployment script**:
   - Windows: `.\deploy.ps1`
   - Linux/Mac: `./deploy.sh`
4. **Esperar 30-60 segundos** (invalidación de caché)
5. **Refrescar navegador** (Ctrl+Shift+R para hard refresh)
6. **Verificar cambios** en https://carlostangarife.com

---

## 📞 Formulario de Contacto

El formulario actualmente muestra una alerta. Para conectarlo:

### Opción 1: Formspree (Más Fácil) ⭐

1. Ir a https://formspree.io/
2. Crear cuenta gratis
3. Obtener Form ID
4. En `index.html`, buscar `<form class="contact-form">`
5. Cambiar a:
   ```html
   <form action="https://formspree.io/f/TU_FORM_ID" method="POST" class="contact-form">
   ```

### Opción 2: AWS Lambda + API Gateway (Más Profesional)

1. Crear función Lambda en AWS
2. Configurar API Gateway
3. En `script.js` línea ~53, actualizar URL:
   ```javascript
   const response = await fetch('TU_API_GATEWAY_URL', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
   });
   ```

---

## 💰 Costos Estimados AWS

- **Primer año**: ~$0.50/mes (prácticamente gratis)
- **Después**: ~$1-3/mes
- **Componentes**:
  - S3: $0.02/mes
  - CloudFront: $0.50-2/mes (incluye 1TB gratis)
  - Route 53: $0.50/mes
  - Certificate Manager: GRATIS

**Total anual**: ~$12-36 USD 🎉

---

## 🐛 Troubleshooting Común

### "La página no carga"
- ✅ Espera 5-30 minutos (DNS propagation)
- ✅ Verifica que CloudFront esté "Deployed"
- ✅ Prueba en navegación privada

### "Los estilos no se ven"
- ✅ Hard refresh: Ctrl+Shift+R
- ✅ Invalida caché de CloudFront
- ✅ Verifica Content-Type en S3

### "El certificado SSL no funciona"
- ✅ Espera a que ACM muestre "Issued"
- ✅ Verifica que cert esté en us-east-1
- ✅ Revisa alternate domain names en CloudFront

### "Los cambios no aparecen"
- ✅ Ejecuta invalidación de CloudFront
- ✅ Espera 60 segundos
- ✅ Hard refresh en navegador

---

## 📊 Post-Deployment

### Después de Subir

1. **Google Search Console**
   - Registrar sitio
   - Subir sitemap: `https://carlostangarife.com/sitemap.xml`

2. **Google Analytics** (Opcional)
   - Crear cuenta
   - Agregar tracking code en `index.html`

3. **LinkedIn**
   - Actualizar URL de website
   - Compartir en LinkedIn

4. **CV / Resume**
   - Actualizar con URL del portfolio

---

## 🎯 Checklist Post-Deployment

- [ ] Sitio carga correctamente
- [ ] HTTPS funciona (candado verde)
- [ ] Todas las secciones funcionan
- [ ] Navegación smooth scroll funciona
- [ ] Formulario de contacto conectado
- [ ] Mobile responsive verificado
- [ ] Probado en múltiples navegadores
- [ ] Enviado a Google Search Console
- [ ] Compartido en LinkedIn
- [ ] Actualizado CV con URL

---

## 📚 Recursos Útiles

- **AWS Guide Completo**: `docs/AWS-DEPLOYMENT-GUIDE.md`
- **README Principal**: `README.md`
- **AWS Console**: https://console.aws.amazon.com/
- **Formspree**: https://formspree.io/
- **Google Search Console**: https://search.google.com/search-console
- **PageSpeed Test**: https://pagespeed.web.dev/

---

## 🚀 ¡Éxito!

Una vez completado este proceso, tendrás un portfolio profesional con:

✅ Tu propio dominio  
✅ HTTPS seguro  
✅ Velocidad ultra-rápida (CloudFront CDN)  
✅ Infraestructura de nivel empresarial  
✅ Costos mínimos  

**¡Bienvenido a tener un portfolio de élite!** 🎉

---

## 💬 Preguntas

Si tienes dudas sobre algún paso:
1. Revisa `docs/AWS-DEPLOYMENT-GUIDE.md` (guía detallada)
2. Consulta documentación oficial de AWS
3. Busca en Stack Overflow
4. Considera contratar ayuda si es necesario

**¡Buena suerte con el deployment!** 🚀

