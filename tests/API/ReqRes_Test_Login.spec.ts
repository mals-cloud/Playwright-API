import {test,expect} from '@playwright/test'
import logindata from '../../testdata/reqres_login.json'

test('Login check',async({request})=>{

   const response = await request.post('/api/login',
        {
            headers :{
                'content-type':'application/json',
                'x-API-Key': process.env.REQRES_API_KEY ??'',
            },

            data :logindata
            
        }
    )
    expect(response.status()).toBe(200)

})