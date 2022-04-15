module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-imagekit", // Community providers need to have the full package name
      providerOptions: {
        publicKey: env("IMAGEKIT_PUBLIC_KEY", ""),
        privateKey: env("IMAGEKIT_SECRET_KEY", ""),
        urlEndpoint: env("IMAGEKIT_ENDPOINT", ""),

        // Optional
        params: {
          folder: "/piko", // Defaults to "/" if value is not supplied
        },
      },
    },
  },
});
