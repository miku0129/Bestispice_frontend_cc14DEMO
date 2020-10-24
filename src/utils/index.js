// Amazon Cognito 認証情報プロバイダーを初期化します
// AWS.config.region = 'ap-northeast-1'; // リージョン
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'ap-northeast-1:3c5a91da-e9ef-4a20-a6e6-ff256443d96a',
// });

import AWS from "aws-sdk";

const bucketName = "cc14-polyglottal2-fe";
const identityPoolId = "ap-northeast-1:3c5a91da-e9ef-4a20-a6e6-ff256443d96a";

AWS.config.update({
  region: "ap-northeast-1",
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: identityPoolId
  })
});

const bucket = new AWS.S3({
  params: {
    Bucket: bucketName
  }
});

export function listObjects() {
  const listObjects = new Promise((resolve, reject) => {
    bucket.listObjects((error, data) => {
      if (error) {
        console.error("error: ", error);
        return;
      }

      resolve(data.Contents);
    });
  });

  return listObjects;
}

export function getSingleObject(key) {
  const getSingleObject = new Promise((resolve, reject) => {
    bucket.getObject(
      {
        Bucket: bucketName,
        Key: key
      },
      (error, data) => {
        if (error) {
          console.error("error: ", error);
          return;
        }

        resolve(data.Body.toString("base64"));
      }
    );
  });

  return getSingleObject;
}

export function saveObject(file) {
  const saveObject = new Promise((resolve, reject) => {
    bucket.putObject(
      {
        Key: file.name,
        Body: file,
        ACL: "public-read"
      },
      (error, data) => {
        if (error) {
          console.error("error: ", error);
          return;
        }

        resolve(data);
      }
    );
  });

  return saveObject;
}
