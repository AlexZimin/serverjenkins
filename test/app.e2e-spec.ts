import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'

describe('AppController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('should return success/lab/success (GET)', () => {
    return request(app.getHttpServer())
      .get('/lab/success')
      .expect(200)
      .expect('all right')
  })
  it('should return error /lab/error (GET)', () => {
    return request(app.getHttpServer())
      .get('/lab/error ')
      .expect(400)
      .expect('response with error')
  })
})
