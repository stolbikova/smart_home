import { Module } from '@nestjs/common';
import { MqttService } from '../mqtt/mqtt.service';
import { PlugController } from './plug.controller';
import { PlugService } from './plug.service';

@Module({
  controllers: [PlugController],
  providers: [MqttService, PlugService],
  exports: [MqttService],
})
export class PlugModule {}
