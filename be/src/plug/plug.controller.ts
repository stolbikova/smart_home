import { Controller, Post, Param } from '@nestjs/common';
import { PlugService } from './plug.service';

@Controller('plug')
export class PlugController {
  constructor(private readonly plugService: PlugService) {}

  @Post(':action')
  async togglePlug(@Param('action') action: string): Promise<string> {
    return this.plugService.togglePlug(action);
  }
}
