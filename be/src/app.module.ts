import { Module } from '@nestjs/common';
import { MqttService } from './mqtt/mqtt.service';
import { PlugModule } from './plug/plug.module';

@Module({
  imports: [PlugModule], // Import PlugModule to access PlugService
  providers: [MqttService],
  exports: [MqttService],
})
export class AppModule {}
