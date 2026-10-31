# 📦 Product Inventory API
              
                     
                Name : Md. Salauddin Shaon 
                ID: 23-54463-3

## 📖 About

A Product Inventory REST API for an e-commerce platform, built with **NestJS**, **TypeORM** and **PostgreSQL**.
It manages a single `Products` entity and supports:

- Full CRUD (Create, Read, Update, Delete)
- Full replace (`PUT`) and partial update (`PATCH`)
- Input validation using DTOs and `class-validator`
- Filtering by category and searching by name
- Toggling a product's active / inactive status


## 🚀 Getting Started

### 1. Clone and install

```bash

npm install
##Run the app
npm run start:dev
##create database
CREATE DATABASE product_inventory_db;
```

The API runs at **http://localhost:3000**


## 🧪 Test Cases (Postman)



**Test 1 — Create iPhone 15**
(../Screensort/1.png)

**Test 2 — Create Samsung TV**
(../Screensort/2.png)

**Test 3 — Create Running Shoes**
(../Screensort/3.png)

**Test 4 — Create Notebook**
(../Screensort/4.png)



**Test 5 — Get all products (newest first)**
(../Screensort/5.png)

**Test 6 — Get product by id**
(../Screensort/6.png)

**Test 7 — Product not found (404)**
(../Screensort/7.png)

**Test 8 — Filter by category**
(../Screensort/8.png)

**Test 9 — Search by keyword `phone`**
(../Screensort/9.png)

**Test 10 — Search by keyword `s`**
(../Screensort/10.png)



**Test 11 — PATCH price and stock**
(../Screensort/11.png)

**Test 12 — PATCH with empty name (validation error)**
(../Screensort/12.png)

**Test 13 — PUT full replace**
(../Screensort/13.png)

**Test 14 — PUT with missing fields (validation error)**
(../Screensort/14.png)

**Test 15 — Toggle: active → inactive**
(../Screensort/15.png)

**Test 16 — Toggle: inactive → active**
(../Screensort/16.png)



**Test 17 — Delete product**
(../Screensort/17.png)

**Test 18 — Delete again (404)**
(../Screensort/18.png)

**Test 19 — Verify 3 products remain**
(../Screensort/19.png)



**Test 20 — Missing name**
(../Screensort/20.png)

**Test 21 — Negative price**
(../Screensort/21.png)

**Test 22 — Unknown property**
(../Screensort/22.png)

**Test 23 — Empty body**
(../Screensort/23.png)
