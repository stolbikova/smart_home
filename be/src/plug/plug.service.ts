import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PlugService {
  private readonly hubApiUrl = 'http://your-zigbee-hub-api-url';
  private readonly apiKey = 'your-api-key';

  async togglePlug(action: string): Promise<string> {
    if (action !== 'on' && action !== 'off') {
      throw new Error('Invalid action');
    }

    try {
      await axios.post(
        `${this.hubApiUrl}/plug/${action}`,
        {},
        {
          headers: { Authorization: `Bearer ${this.apiKey}` },
        },
      );
      return `Plug turned ${action}`;
    } catch (error) {
      console.error(`Error turning plug ${action}`, error);
      throw new Error(`Error turning plug ${action}`);
    }
  }
}
