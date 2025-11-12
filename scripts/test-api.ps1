#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Test script for the contact API endpoint
    
.DESCRIPTION
    Prueba local del endpoint POST /api/contact
    Asegúrate de que el servidor dev esté corriendo (npm run dev)

.EXAMPLE
    .\test-api.ps1
#>

# Variables
$baseUrl = "http://localhost:3000"
$endpoint = "/api/contact"

Write-Host "🧪 Iniciando pruebas del endpoint $endpoint" -ForegroundColor Cyan
Write-Host "Base URL: $baseUrl`n" -ForegroundColor Gray

# Test 1: GET - Info del endpoint
Write-Host "TEST 1: GET /api/contact" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "$baseUrl$endpoint" -Method GET
    Write-Host "✅ Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "Respuesta:" -ForegroundColor Gray
    $response.Content | ConvertFrom-Json | ConvertTo-Json | Write-Host
}
catch {
    Write-Host "❌ Error: $_" -ForegroundColor Red
}

Write-Host "`n" -ForegroundColor Gray

# Test 2: POST - Envío exitoso
Write-Host "TEST 2: POST - Contacto válido" -ForegroundColor Yellow
$validData = @{
    name     = "Juan García"
    business = "Restaurante El Buen Sabor"
    phone    = "+57 3001234567"
    email    = "juan@restaurante.co"
    honeypot = ""
} | ConvertTo-Json

try {
    $response = Invoke-WebRequest -Uri "$baseUrl$endpoint" `
        -Method POST `
        -ContentType "application/json" `
        -Body $validData
    Write-Host "✅ Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "Respuesta:" -ForegroundColor Gray
    $response.Content | ConvertFrom-Json | ConvertTo-Json | Write-Host
}
catch {
    Write-Host "❌ Error: $_" -ForegroundColor Red
}

Write-Host "`n" -ForegroundColor Gray

# Test 3: POST - Email inválido
Write-Host "TEST 3: POST - Email inválido" -ForegroundColor Yellow
$invalidEmailData = @{
    name     = "María López"
    business = "Hotel Vista al Mar"
    phone    = "+57 3009876543"
    email    = "email-invalido"
    honeypot = ""
} | ConvertTo-Json

try {
    $response = Invoke-WebRequest -Uri "$baseUrl$endpoint" `
        -Method POST `
        -ContentType "application/json" `
        -Body $invalidEmailData `
        -ErrorAction Stop
    Write-Host "✅ Status: $($response.StatusCode)" -ForegroundColor Green
}
catch {
    $errorResponse = $_.Exception.Response
    if ($errorResponse) {
        $reader = New-Object System.IO.StreamReader($errorResponse.GetResponseStream())
        $content = $reader.ReadToEnd()
        Write-Host "⚠️ Status: $($errorResponse.StatusCode)" -ForegroundColor Yellow
        Write-Host "Respuesta esperada (error validación):" -ForegroundColor Gray
        $content | ConvertFrom-Json | ConvertTo-Json | Write-Host
    }
}

Write-Host "`n" -ForegroundColor Gray

# Test 4: POST - Campo requerido faltante
Write-Host "TEST 4: POST - Campo requerido faltante" -ForegroundColor Yellow
$incompleteData = @{
    name     = "Carlos Mendez"
    business = ""
    phone    = "+57 3005555555"
    email    = "carlos@negocio.co"
    honeypot = ""
} | ConvertTo-Json

try {
    $response = Invoke-WebRequest -Uri "$baseUrl$endpoint" `
        -Method POST `
        -ContentType "application/json" `
        -Body $incompleteData `
        -ErrorAction Stop
    Write-Host "✅ Status: $($response.StatusCode)" -ForegroundColor Green
}
catch {
    $errorResponse = $_.Exception.Response
    if ($errorResponse) {
        $reader = New-Object System.IO.StreamReader($errorResponse.GetResponseStream())
        $content = $reader.ReadToEnd()
        Write-Host "⚠️ Status: $($errorResponse.StatusCode)" -ForegroundColor Yellow
        Write-Host "Respuesta esperada (error validación):" -ForegroundColor Gray
        $content | ConvertFrom-Json | ConvertTo-Json | Write-Host
    }
}

Write-Host "`n" -ForegroundColor Gray

# Test 5: POST - Honeypot detection (spam)
Write-Host "TEST 5: POST - Honeypot detection (spam silencioso)" -ForegroundColor Yellow
$spamData = @{
    name     = "Spammer"
    business = "Spam Business"
    phone    = "+57 3000000000"
    email    = "spam@spam.com"
    honeypot = "filled" # This simulates spam
} | ConvertTo-Json

try {
    $response = Invoke-WebRequest -Uri "$baseUrl$endpoint" `
        -Method POST `
        -ContentType "application/json" `
        -Body $spamData
    Write-Host "✅ Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "Respuesta (éxito simulado para evitar detección):" -ForegroundColor Gray
    $response.Content | ConvertFrom-Json | ConvertTo-Json | Write-Host
}
catch {
    Write-Host "❌ Error: $_" -ForegroundColor Red
}

Write-Host "`n" -ForegroundColor Gray

# Test 6: OPTIONS - CORS
Write-Host "TEST 6: OPTIONS - CORS" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "$baseUrl$endpoint" -Method OPTIONS
    Write-Host "✅ Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "Headers:" -ForegroundColor Gray
    $response.Headers | ConvertTo-Json | Write-Host
}
catch {
    Write-Host "⚠️ Respuesta: $_" -ForegroundColor Yellow
}

Write-Host "`n`n✅ Pruebas completadas" -ForegroundColor Green
Write-Host "Para usar con variables de entorno reales, configura:" -ForegroundColor Gray
Write-Host "  - .env.local con SENDGRID_API_KEY o MAILGUN_API_KEY" -ForegroundColor Gray
Write-Host "  - Luego reinicia el servidor: npm run dev" -ForegroundColor Gray
