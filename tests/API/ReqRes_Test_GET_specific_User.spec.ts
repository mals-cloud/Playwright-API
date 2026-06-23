import { request, test, expect }from '@playwright/test'
import { time } from 'node:console'

test('Get All Users Playwright Test', async({request})=>{

  const startTime = Date.now()
  console.log(startTime)

    const responseBody = await request.get('/api/users/2',
       { headers: {
    'content-type': 'application/json',
    'x-api-key':process.env.REQRES_API_KEY ?? ''
  }
       }
    )

    const endTime = Date.now()
    console.log(endTime)

    const responseTime = endTime - startTime
    console.log(responseTime)
    const responseBodyJson = await responseBody.json()
      console.log(responseBodyJson)
      expect(responseBody.status()).toBe(200)
      expect(responseBodyJson).toBeTruthy()
      expect(responseBodyJson.data.id).toBe(2)
      expect(responseBodyJson.data.first_name).toBe('Janet')
      expect(responseTime).toBeLessThan(2000)
      expect(responseBodyJson).toHaveProperty('data.last_name','Weaver')
           
    })