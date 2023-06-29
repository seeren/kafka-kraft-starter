#!/bin/sh

file_path="/tmp/clusterID/.env"

if [ ! -f "$file_path" ]; then
  echo "CLUSTER_ID=$(/bin/kafka-storage random-uuid)" > /tmp/clusterID/.env
  echo "Env file with CLUSTER_ID has been created..."
fi