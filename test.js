const handler = require( './index.js' ).handler

;( async function () {
  const response = await handler( { search: 'superman theme' } )
  console.log( response.body )
} )()
