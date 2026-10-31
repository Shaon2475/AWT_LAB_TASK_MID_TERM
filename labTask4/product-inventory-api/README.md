# 📦 Product Inventory API

**Name:** Md. Salauddin Shaon
**ID:** 23-54463-3

## 📖 About

A Product Inventory REST API for an e-commerce platform, built with **NestJS**, **TypeORM** and **PostgreSQL**.
It manages a single `Products` entity and supports:

- Full CRUD (Create, Read, Update, Delete)
- Full replace (`PUT`) and partial update (`PATCH`)
- Input validation using DTOs and `class-validator`
- Filtering by category and searching by name
- Toggling a product's active / inactive status

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create the database

```sql
CREATE DATABASE product_inventory_db;
```

### 3. Run the app

```bash
npm run start:dev
```

The API runs at **http://localhost:3000**

## 🧪 Test Cases (Postman)

### ➕ Create Products

**Test 1 — Create iPhone 15**

![Create iPhone 15](../Screensort/1.png)

**Test 2 — Create Samsung TV**

![Create Samsung TV](../Screensort/2.png)

**Test 3 — Create Running Shoes**

![Create Running Shoes](../Screensort/3.png)

**Test 4 — Create Notebook**

![Create Notebook](../Screensort/4.png)

### 📖 Read Operations

**Test 5 — Get all products (newest first)**

![Get all products](../Screensort/5.png)

**Test 6 — Get product by id**

![Get product by id](../Screensort/6.png)

**Test 7 — Product not found (404)**

![Product not found](../Screensort/7.png)

**Test 8 — Filter by category**

![Filter by category](../Screensort/8.png)

**Test 9 — Search by keyword `phone`**

![Search phone](../Screensort/9.png)

**Test 10 — Search by keyword `s`**

![Search s](../Screensort/10.png)

### ✏️ Update & Toggle

**Test 11 — PATCH price and stock**

![PATCH update](../Screensort/11.png)

**Test 12 — PATCH with empty name (validation error)**

![PATCH validation error](../Screensort/12.png)

**Test 13 — PUT full replace**

![PUT replace](../Screensort/13.png)

**Test 14 — PUT with missing fields (validation error)**

![PUT validation error](../Screensort/14.png)

**Test 15 — Toggle: active → inactive**

![Toggle to false](../Screensort/15.png)

**Test 16 — Toggle: inactive → active**

![Toggle to true](../Screensort/16.png)

### 🗑️ Delete

**Test 17 — Delete product**

![Delete product](../Screensort/17.png)

**Test 18 — Delete again (404)**

![Delete again 404](../Screensort/18.png)

**Test 19 — Verify 3 products remain**

![Remaining products](../Screensort/19.png)

### ⚠️ Validation Errors

**Test 20 — Missing name**

![Missing name](../Screensort/20.png)

**Test 21 — Negative price**

![Negative price](../Screensort/21.png)

**Test 22 — Unknown property**

![Unknown property](../Screensort/22.png)

**Test 23 — Empty body**

![Empty body](../Screensort/23.png)
