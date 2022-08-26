module.exports = ({ env }) => ({
 upload: {
    config: {
      provider: 'strapi-provider-upload-digitalocean-nohash',
      providerOptions: {
        includeHash: true, // rename files with MD5 hash
        key: env('DO_SPACE_ACCESS_KEY'),
        secret: env('DO_SPACE_SECRET_KEY'),
        endpoint: env('DO_SPACE_ENDPOINT'),
        space: env('DO_SPACE_BUCKET')
      }
    }
  },

})
