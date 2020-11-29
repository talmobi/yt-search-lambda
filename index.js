const yts = require( 'yt-search' )

exports.handler = async function ( evt ) {
  const params = evt.queryStringParameters || evt

  const search = params.search || params.query

  if ( !search ) {
    return {
      statusCode: 300,
      body: 'invalid search: ' + search
    }
  }

  try {
    const r = await yts( search )
    return {
      statusCode: 200,
      body: JSON.stringify( r )
    }
  } catch ( e ) {
    return {
      statusCode: 500,
      body: String( e )
    }
  }
}
