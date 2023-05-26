const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
  const { marca, modelo } = event; // Obtener marca y modelo del evento

  // Realizar la búsqueda en el servicio de almacenamiento de objetos (Amazon S3)
  const params = {
    Bucket: 'nombre-del-bucket',
    Prefix: `car-photos/${marca}/${modelo}` // Carpeta donde se almacenan las fotos
  };

  try {
    const data = await s3.listObjectsV2(params).promise();
    const photos = data.Contents.map((object) => object.Key);

    return {
      statusCode: 200,
      body: JSON.stringify(photos)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message)
    };
  }
};