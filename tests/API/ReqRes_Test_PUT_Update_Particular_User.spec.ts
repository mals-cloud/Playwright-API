import {test, expect} from '@playwright/test'
import getUpdateData from '../../testdata/reqres_updateexistinguser.json'

test('Put - Update User Playwright test',async({request})=>{


    const responseBody = await request.put('/api/users/2',{
    headers : {
    'Content-Type':'application/json',
    'x-api-key':process.env.REQRES_API_KEY ?? '',
}, data : getUpdateData

})

const responseBodyJson = await responseBody.json()
console.log(responseBodyJson)
expect(responseBody.status()).toBe(200)
expect(responseBodyJson.first_name).toBe('Malathi')
expect(responseBodyJson.last_name).toBe('Subburathinam')
expect(responseBodyJson.email).toBe('mals.ece@reqres.in')

})