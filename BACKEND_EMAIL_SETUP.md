# 📧 Configuración Backend Propio - Envío de Emails

> **Cambio importante:** Ya no usamos SendGrid/Mailgun. Ahora usamos un backend propio con Nodemailer para mayor control y privacidad.

## 🎯 Ventajas del Backend Propio

✅ **Sin dependencias de terceros** - Control total  
✅ **Mejor privacidad** - Tus datos en tu servidor  
✅ **Menores costos** - Gmail/Outlook son gratis  
✅ **Más fácil de configurar** - 3 pasos simples  
✅ **Producción lista** - Compatible con: Gmail, Outlook, SMTP personalizado

---

## 🚀 Setup Rápido (3 pasos)

### Paso 1: Crear archivo `.env.local`

```bash
# Copia .env.example a .env.local
cp .env.example .env.local
```

### Paso 2: Configurar credenciales

Hay 3 opciones. Elige una:

#### Opción A: Gmail (Recomendado - GRATIS)

```bash
# .env.local

EMAIL_SERVICE=gmail
EMAIL_USER=tu-email@gmail.com
EMAIL_PASSWORD=tu-contraseña-app-gmail
CONTACT_EMAIL=socios@appki.com.co
```

**¿Cómo obtener "contraseña de app" de Gmail?**

1. Ve a: https://myaccount.google.com/apppasswords
2. Selecciona: Mail + Windows/Mac/Linux
3. Copia la contraseña generada (sin espacios)
4. Pégala en `EMAIL_PASSWORD`

> **Nota:** Necesita autenticación de 2 factores habilitada

#### Opción B: Outlook/Hotmail (GRATIS)

```bash
# .env.local

EMAIL_SERVICE=outlook
EMAIL_USER=tu-email@hotmail.com
EMAIL_PASSWORD=tu-contraseña
CONTACT_EMAIL=socios@appki.com.co
```

#### Opción C: SMTP Personalizado

Si tienes tu propio servidor SMTP:

```bash
# .env.local

EMAIL_SERVICE=custom_smtp
EMAIL_USER=tu-usuario
EMAIL_PASSWORD=tu-contraseña
SMTP_HOST=smtp.tuservidor.com
SMTP_PORT=587
SMTP_SECURE=false
CONTACT_EMAIL=socios@appki.com.co
```

### Paso 3: Reiniciar servidor

```bash
npm run dev
```

---

## 🧪 Prueba de Envío

### Opción 1: Desde PowerShell

```powershell
# Ejecuta el script de test
.\scripts\test-api.ps1
```

### Opción 2: Desde Terminal

```bash
# Test POST
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan Pérez",
    "business": "Restaurante El Sabor",
    "phone": "+573001234567",
    "email": "juan@restaurante.com"
  }'

# Respuesta exitosa (201-299):
# {"success":true,"message":"...","timestamp":"..."}
```

### Opción 3: Desde el navegador

1. Ve a: http://localhost:3000/se-un-socio
2. Completa el formulario
3. Haz clic en "Únete a los Early Adopters"
4. Verifica que el email llegó

---

## 📞 Pasos Detallados por Proveedor

### Gmail - Paso a Paso

#### 1. Habilitar autenticación de 2 factores

```
1. Ve a: https://myaccount.google.com/security
2. Busca "Verificación en dos pasos"
3. Si está deshabilitada, actívala
4. Necesitarás tu teléfono
```

#### 2. Generar contraseña de aplicación

```
1. Ve a: https://myaccount.google.com/apppasswords
2. Selecciona: Mail
3. Selecciona: Windows/Mac/Linux
4. Google genera una contraseña (16 caracteres)
5. Copia sin espacios: ejemplo: abcdabcdabcdabcd
```

#### 3. Configurar .env.local

```bash
EMAIL_SERVICE=gmail
EMAIL_USER=mi.email@gmail.com
EMAIL_PASSWORD=abcdabcdabcdabcd
CONTACT_EMAIL=socios@appki.com.co
```

#### 4. Verificar funcionamiento

```bash
npm run dev
# Abre http://localhost:3000/se-un-socio
# Completa y envía el formulario
# Revisa tu bandeja (puede tardar 1-2 minutos)
```

---

### Outlook - Paso a Paso

#### 1. Crear cuenta Microsoft

```
1. Ve a: https://signup.live.com
2. Crea una cuenta @outlook.com
3. Usa la misma contraseña en .env.local
```

#### 2. Configurar .env.local

```bash
EMAIL_SERVICE=outlook
EMAIL_USER=mi.email@outlook.com
EMAIL_PASSWORD=mi-contraseña
CONTACT_EMAIL=socios@appki.com.co
```

#### 3. Desabilitar autenticación moderna (si es necesario)

Si obtienes error:

```
1. Ve a: https://account.live.com/security/advanced
2. Busca "Aplicaciones menos seguras"
3. Actívalo
```

#### 4. Verificar funcionamiento

```bash
npm run dev
# Prueba el formulario
```

---

### SMTP Personalizado - Paso a Paso

Si tienes tu propio servidor:

```bash
# .env.local

EMAIL_SERVICE=custom_smtp
EMAIL_USER=tu-usuario-smtp
EMAIL_PASSWORD=tu-contraseña-smtp
SMTP_HOST=mail.tudominio.com     # Ejemplo: mail.Appki.co
SMTP_PORT=587                     # O 465 para SSL
SMTP_SECURE=false                 # true si usas puerto 465
CONTACT_EMAIL=socios@appki.com.co
```

---

## 🔍 Troubleshooting

### Error: "Invalid login credentials"

**Solución:**

- Verifica credenciales en `.env.local`
- Gmail: Usa la contraseña de APP, no la de tu cuenta
- Outlook: Habilita "Aplicaciones menos seguras"

### Error: "EAUTH - smtp 550"

**Solución:**

- El email ya fue enviado (revisa spam)
- Gmail/Outlook puede tardar 1-5 minutos
- Verifica la cuenta está activa

### Error: "SMTP connection timeout"

**Solución:**

- Si usas SMTP personalizado, verifica host/puerto
- Revisa si el puerto está abierto en firewall
- Intenta puerto 587 (TLS) o 465 (SSL)

### El formulario no envía

**Checklist:**

- [ ] `.env.local` existe en raíz del proyecto
- [ ] Todas las variables están configuradas
- [ ] Servidor reiniciado (`npm run dev`)
- [ ] No hay errores en consola del servidor
- [ ] Revisa la consola (tecla F12) en navegador

---

## 📊 Comparativa de Proveedores

| Proveedor         | Costo       | Setup          | Límite       | Velocidad       | Recomendación  |
| ----------------- | ----------- | -------------- | ------------ | --------------- | -------------- |
| **Gmail**         | ⭐ Gratis   | ⭐ Fácil (2FA) | 500/día      | ⭐⭐⭐ Rápido   | ✅ RECOMENDADO |
| **Outlook**       | ⭐ Gratis   | ⭐ Fácil       | Ilimitado    | ⭐⭐⭐ Rápido   | ✅ RECOMENDADO |
| **SMTP Personal** | 💰 Variable | ⭐⭐ Moderado  | Configurable | ⭐⭐⭐ Variable | Para expertos  |

---

## 🔐 Seguridad

### Variables Sensibles

Nunca commits `.env.local` a Git:

```bash
# .gitignore (ya incluye esto)
.env.local
.env.*.local
```

### Contraseñas Seguras

- ✅ Usa contraseña de APP de Gmail (no la real)
- ✅ Cambia periódicamente
- ✅ No compartas `.env.local`
- ✅ En producción, usa variables de entorno

---

## 🚢 Deployment a Producción

### Vercel (Recomendado)

1. **Configurar variables de entorno:**

```
Vercel Dashboard > Settings > Environment Variables

EMAIL_SERVICE=gmail
EMAIL_USER=tu-email@gmail.com
EMAIL_PASSWORD=tu-contraseña-app
CONTACT_EMAIL=socios@appki.com.co
```

2. **Deploy:**

```bash
vercel
```

### VPS/Servidor Propio

1. **En el servidor:**

```bash
# SSH a tu VPS
ssh usuario@tu-vps.com

# Crea .env.local
nano .env.local

# Pega las variables:
EMAIL_SERVICE=gmail
EMAIL_USER=...
...

# Inicia la app
npm run build
npm run start
```

---

## 📞 Soporte

Si tienes problemas:

1. **Revisa la consola:** `npm run dev` y busca errores rojos
2. **Verifica .env.local:** Todas las variables configuradas
3. **Reinicia servidor:** Cambios en .env.local requieren reinicio
4. **Prueba credenciales:** Intenta loguear en el proveedor manualmente

---

## 📚 Recursos

- [Gmail App Passwords](https://myaccount.google.com/apppasswords)
- [Outlook Security](https://account.live.com/security)
- [Nodemailer Docs](https://nodemailer.com)
- [SMTP Providers](https://nodemailer.com/smtp/)

---

**Última actualización:** 10 de Noviembre, 2024  
**Versión:** Backend v1.0  
**Status:** ✅ Producción Ready
