import { Module } from '@nestjs/common';
import { PlugModule } from './plug/plug.module';

@Module({
  imports: [PlugModule],
})
export class AppModule {}
