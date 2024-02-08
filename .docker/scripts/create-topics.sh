#!/usr/bin/sh

kafka-topics --bootstrap-server broker1:19092 --create --if-not-exists --topic  kafka-karft-starter.customers.1.0.action.create
kafka-topics --bootstrap-server broker1:19092 --create --if-not-exists --topic  kafka-karft-starter.customers.1.0.action.create.reply