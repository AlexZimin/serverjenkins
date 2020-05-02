import { Controller, Get, HttpCode } from '@nestjs/common'

@Controller('lab')
export class LabController {
  @Get('success')
  @HttpCode(200)
  getSuccess() {
    return 'all right!!!!!!!!'
  }

  @Get('delay')
  @HttpCode(200)
  async getWithDelay() {
    await new Promise(res => setTimeout(res, 5000))
    return 'response with delay'
  }
  @Get('error')
  @HttpCode(400)
  getError() {
    return 'response with error'
  }
}
