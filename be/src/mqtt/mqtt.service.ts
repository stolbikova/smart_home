import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import * as mqtt from 'mqtt';
import { IClientOptions, MqttClient } from 'mqtt';

@Injectable()
export class MqttService implements OnModuleInit, OnModuleDestroy {
  private client: MqttClient;

  onModuleInit() {
    this.connect();
  }

  onModuleDestroy() {
    this.client.end();
  }

  private connect() {
    const options: IClientOptions = {
      protocolVersion: 5,
    };
    this.client = mqtt.connect('mqtt://localhost:1883', options);

    this.client.on('connect', () => {
      console.log('Connected to MQTT broker');
    });

    this.client.on('error', (err: Error) => {
      console.error('MQTT connection error:', err);
    });
  }

  async publish(topic: string, message: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(
        topic,
        message,
        { qos: 0 },
        (err: Error | undefined) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        },
      );
    });
  }

  async subscribe(
    topic: string,
    callback: (message: string) => void,
  ): Promise<void> {
    this.client.subscribe(topic, (err) => {
      if (err) {
        console.error('Subscription error:', err);
      }
    });

    this.client.on('message', (topic, message) => {
      callback(message.toString());
    });
  }
}
