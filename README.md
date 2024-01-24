# Kafka KRaft Starter

This repository contain Kafka without ZooKeeper in cluster mode ready for developement.

---

## Prerequist

Docker installed globally with Option api >= 3.4

---

## Installation

_Clone this repository._

```bash
git clone https://github.com/seeren/kafka-kraft-starter.git
```

_Start services._

```bash
docker compose up
```

### Cluster id

_Generate a fresh cluster id._

```bash
rm .env
```

```bash
docker compose up kafka-gen
```

---

## Usage

Browse to admin pannel at <http://localhost:8080>
