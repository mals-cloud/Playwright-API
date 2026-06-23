import {test, expect} from '@playwright/test'
import getData from '../../testdata/reqres_createnewuser.json'

test('Post - Create new User Playwright test',async({request})=>{


    const responseBody = await request.post('/api/users',{
    headers : {
    'Content-Type':'application/json',
    'x-api-key':process.env.REQRES_API_KEY ?? '',
}, data : getData

})

const responseBodyJson = await responseBody.json()
console.log(responseBodyJson)
expect(responseBody.status()).toBe(201)
expect(responseBodyJson).toHaveProperty('email')
expect(responseBodyJson.first_name).toBe('Malathi')
expect(responseBodyJson.email).toBe('mals.ece@reqres.in')

})