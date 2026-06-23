import { request, test, expect }from '@playwright/test'
import { time } from 'node:console'

test('Delete Particular user Playwright Test', async({request})=>{

      const responseBody = await request.delete('/api/users/2',
       { headers: {
    'content-type': 'application/json',
    'x-api-key':process.env.REQRES_API_KEY ?? ''
  }
       }
    )   
      expect(responseBody.status()).toBe(204)
            
    })