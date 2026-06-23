import { request, test, expect }from '@playwright/test'
import { time } from 'node:console'

test('Get Invalid user Playwright Test', async({request})=>{

     const responseBody = await request.get('/api/users/24',
       { headers: {
    'content-type': 'application/json',
    'x-api-key':process.env.REQRES_API_KEY ?? ''
  }
       }
    )
      const responseBodyJson = await responseBody.json()
      expect(responseBody.status()).toBe(404)
   
           
    })