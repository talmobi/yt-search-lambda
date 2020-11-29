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

    const videos = r.videos

    return {
      statusCode: 200,
      body: (
        videos.reduce( function ( acc, v ) {
          const views = String( v.views ).padStart( 10, ' ' )
          return ( acc + `${ views } | ${ v.title } (${ v.timestamp }) | ${ v.author.name }\n` )
        }, '' )
      )
    }
  } catch ( e ) {
    return {
      statusCode: 500,
      body: String( e )
    }
  }
}
