import { registerAs } from '@nestjs/config';
import { KafkaOptions, Transport } from '@nestjs/microservices';

export const CONFIG_BROKER = 'config-broker';
export const CONFIG_BROKER_NAME = 'BROKER_CUSTOMER';

export default registerAs(
  CONFIG_BROKER,
  (): KafkaOptions => ({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: process.env.KAFKAJS_CONSUMER_GROUP_PREFIX,
        brokers: process.env.KAFKAJS_CLIENT.split(','),
      },
      consumer: {
        groupId: process.env.KAFKAJS_CONSUMER_GROUP_PREFIX,
      },
      subscribe: { fromBeginning: true },
      producer: { allowAutoTopicCreation: false },
    },
  }),
);
