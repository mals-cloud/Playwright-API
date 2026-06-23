import { request, test, expect }from '@playwright/test'

test('Get All Users Playwright Test', async({request})=>{

    const responseBody = await request.get('https://reqres.in/api/users',
       { headers: {
    'content-type': 'application/json',
    'x-api-key':process.env.REQRES_API_KEY ?? ''
  }
       }
    )
    const responseBodyJson = await responseBody.json()
      console.log(responseBodyJson)
      expect(responseBody.status()).toBe(200)
      expect(responseBodyJson.data).toHaveLength(6)
      expect(responseBodyJson.data[1]).toHaveProperty('email')
    })