#!/bin/sh

# Generate random cluster ID that gets used when formatting storage
echo "export CLUSTER_ID=$(cat /data/clusterID)" >> /etc/confluent/docker/bash-config