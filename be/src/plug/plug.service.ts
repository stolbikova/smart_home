import { Injectable } from '@nestjs/common';
import { MqttService } from '../mqtt/mqtt.service';

@Injectable()
export class PlugService {
  constructor(private readonly mqttService: MqttService) {}

  async togglePlug(action: string): Promise<string> {
    if (action !== 'on' && action !== 'off') {
      throw new Error('Invalid action');
    }

    const topic = `smartplug/${action}`;
    await this.mqttService.publish(topic, action);
    return `Plug turned ${action}`;
  }
}
