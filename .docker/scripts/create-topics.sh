#!/usr/bin/sh

kafka-topics --bootstrap-server broker1:19092 --create --topic kafka.karft.starter.cdc.order
kafka-topics --bootstrap-server broker1:19092 --create --topic kafka.karft.starter.cdc.customer
