# node-api-docker

It is a working project

A RESTful api server locally using Docker and MongoDB and written in TypeScript

- It 🏃runs a server (docker) using nodejs [v16]
- Exposes following RESTFUL endpoints with all CRUD operations perisited through MongoDB

|**Rest API** call          | **CRUD** operation | REST endpoints| **Body**|
|:----:                 |:----:           |:----:|      :----:|
|**GET** {with body}   | **R**ead        | `http://localhost:4005/` <br /> `http://localhost:4005/api/user`| `{ id: string }` |
|**PATCH**  {with body}   | **U**pdate     | `http://localhost:4005/api/user/`| `{ id: string,  optional: (email: string, firstName: string, lastName: string) }` |
|**POST** {with body}   | **C**reate      | `http://localhost:4005/api/user`| `{ email: string, firstName: string, lastName: string }` |
|**DELETE**  {with body}   | **D**elete      | `http://localhost:4005/api/user/`| `{ id: string }` |

 - Response codes:
 
|Response `Code`  | Response `Status` |
|:---------------:|:-----------------:|
|     **200**     |       `OK`        |
|     **201**     |     `Created`     |
|     **204**     |     `Deleted`     |
|     **404**     |    `Not Found`    |

## Project setup 💼

Clone the repository on your machine

|**Using** | **Comand** |
|:---:|:---:|
|via **https**|```git clone https://github.com/ahadjawaid/api-server-docker.git``` |
|via **ssh**|```git clone git@github.com:ahadjawaid/api-server-docker.git``` |

```shell
cd node-app-http-docker
```

## Testing (is it working ✅ ❎)

Lets hit the docker image as a **client** / **User** 

|Test Type (Positive /Negative) |**CLIENT** On terminal | Response |
|:----:|:---:|:---:|
|✅ `Home Page` |`http://localhost:4005/`| *Welcome, this is your Home page* |
|❎ `Invalid endpoint`|`http://localhost:4005/ealfb` |`{"message":"Route not found"}`|


## Running docker 🐋

- Builds services

```shell
docker compose build
```
- Creates the docker image

```shell
docker compose create
```

## Creating docker Image 🎽

- Start services

```shell
docker compose start
```

❗ verify this docker (running)

```shell
docker ps
```

## STOPPING docker (docker container) 🛑

- Stop services

```shell
docker compose stop
```

Or 

- Stop and remove containers, networks

```shell
docker compose down
```

❗ once again verify this docker (stopped)

```shell
docker ps
```

