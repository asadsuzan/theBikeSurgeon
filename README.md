# theBikeSurgeon


This is the backend part of a system to help bike service centers manage their work. It helps them keep track of customers, bikes, and service records. This system lets you create, read, update, and delete (CRUD) information about bikes, customers, and services. It also has special ways to assign and finish service jobs.

### Go live here:
[https://the-bike-surgeon.vercel.app/](https://the-bike-surgeon.vercel.app/)

## 🛠️ What We Used

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL

## 📦 What the API Can Do (Endpoints)

### 1. Customer Management

#### ✅ 1. POST /api/customers - Make a new customer

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "123-456-7890"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Customer created successfully",
  "data": {
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "123-456-7890",
    "createdAt": "2025-04-11T12:34:56.789Z"
  }
}
```
#### ✅ 2. GET /api/customers - Get all customers

**Response:**
```json
{
  "success": true,
  "message": "Customers fetched successfully",
  "data": [
    {
      "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "123-456-7890",
      "createdAt": "2025-04-11T12:34:56.789Z"
    }
  ]
}

```
#### ✅ 3. GET /api/customers/{customerId} - Get one customer by their ID

**Response:**
```json
{
  "success": true,
  "message": "Customer fetched successfully",
  "data": {
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "123-456-7890",
    "createdAt": "2025-04-11T12:34:56.789Z"
  }
}


```
#### ✅ 4. PUT /api/customers/{customerId} - Change a customer's information

**Request Body:**

```json
{
  "name": "Johnathan Doe",
  "phone": "555-123-9999"
}

```

**Response:**
```json
{
  "success": true,
  "message": "Customer updated successfully",
  "data": {
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
    "name": "Johnathan Doe",
    "email": "john.doe@example.com",
    "phone": "555-123-9999",
    "createdAt": "2025-04-11T12:34:56.789Z"
  }
}

```

### ✅ 5. DELETE /api/customers/{customerId} - Remove a customer
**Response:**
```json
{
  "success": true,
  "message": "Customer deleted successfully"
}


```

### 2. Bike Management
#### ✅ 1. POST /api/bikes - Add a new bike

**Request Body:**

```json
{
  "brand": "Yamaha",
  "model": "R15",
  "year": 2022,
  "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
}

```

**Response:**
```json
{
  "success": true,
  "message": "Bike added successfully",
  "data": {
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "brand": "Yamaha",
    "model": "R15",
    "year": 2022,
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
  }
}

```

#### ✅ 2. GET /api/bikes - Get all bikes

**Response:**
```json
{
  "success": true,
  "message": "Bikes fetched successfully",
  "data": [
    {
      "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
      "brand": "Yamaha",
      "model": "R15",
      "year": 2022,
      "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
    }
  ]
}


```
#### ✅ 3. GET /api/bikes/{bikeId} - Get one bike by its ID

**Response:**
```json
{
  "success": true,
  "message": "Bike fetched successfully",
  "data": {
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "brand": "Yamaha",
    "model": "R15",
    "year": 2022,
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
  }
}


```
### 3. Service Management
#### ✅ 1. POST /api/services – Make a new service record

**Request Body:**

```json
{
  "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
  "serviceDate": "2025-04-11T10:00:00.000Z",
  "description": "Oil change",
  "status": "pending"
}


```

**Response:**
```json
{
  "success": true,
  "message": "Service record created successfully",
  "data": {
    "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "serviceDate": "2025-04-11T10:00:00.000Z",
    "completionDate": null,
    "description": "Oil change",
    "status": "pending"
  }
}


```
#### 2. GET /api/services – Get all service records

**Response:**
```json
{
  "success": true,
  "message": "Service records fetched successfully",
  "data": [
    {
      "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
      "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
      "serviceDate": "2025-04-11T10:00:00.000Z",
      "completionDate": null,
      "description": "Oil change",
      "status": "pending"
    }
  ]
}



```
#### 3. GET /api/services/{serviceId} – Get one service record by its ID

**Response:**
```json
{
  "success": true,
  "message": "Service record fetched successfully",
  "data": {
    "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "serviceDate": "2025-04-11T10:00:00.000Z",
    "completionDate": null,
    "description": "Oil change",
    "status": "pending"
  }
}




```
#### ✅✅ 4. PUT /api/services/{serviceId}/complete – Mark a service as finished

**Request Body:**

```json
{
  "completionDate": "2025-04-11T15:30:00.000Z"
}



```

**Response:**
```json
{
  "success": true,
  "message": "Service marked as completed",
  "data": {
    "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "serviceDate": "2025-04-11T10:00:00.000Z",
    "completionDate": "2025-04-11T15:30:00.000Z",
    "description": "Oil change",
    "status": "done"
  }
}



```
### Services That Are Waiting or Late

#### ✅ GET /api/services/status – Get services that are waiting or should have been done (older than 7 days)

**Response:**
```json
{
  "success": true,
  "message": "Overdue or pending services fetched successfully",
  "data": [
    {
      "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
      "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
      "serviceDate": "2025-04-01T10:00:00.000Z",
      "completionDate": null,
      "description": "Oil change",
      "status": "pending"
    }
  ]
}
```

## How to Set Up

#### 1. Clone the repository:
```bash
git clone https://github.com/asadsuzan/theBikeSurgeon.git
```
#### 2. Go into the project folder and install dependencies:
```bash
npm install
```
#### 3.Create a .env file and add the following:
```env
DATABASE_URL=your_supabase_database_url
DIRECT_URL=your_supabase_direct_url
ENABLE_PRISMA_CACHING=false

```
#### 4.Run the server:
```bash
npm run dev
```