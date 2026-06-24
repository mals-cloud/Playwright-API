import {test,expect} from '@playwright/test'
import invalidlogindata from '../../testdata/reqres_login_negative.json'

test('Login check - Negative',async({request})=>{

   const response = await request.post('/api/login',
        {
            headers :{
                'content-type':'application/json',
                'x-API-Key': process.env.REQRES_API_KEY ??'',
            },

            data :invalidlogindata
            
        }
    )
    expect(response.status()).toBe(400)
   const responseBodyJson = await response.json()
   expect(responseBodyJson).toHaveProperty('error','Missing password')

})