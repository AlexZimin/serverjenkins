import { Module } from '@nestjs/common'
import { LabController } from './lab/lab.controller'

@Module({
  imports: [],
  controllers: [LabController],
  providers: [],
})
export class AppModule {}
