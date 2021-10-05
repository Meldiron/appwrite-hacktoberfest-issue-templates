const path = require("path");
const fs = require("fs");
const fse = require("fs-extra");
const Handlebars = require("handlebars");

// Prepare database of functions
// const functions = [
//  {
//   name: "sendRequest",
//   "dashed-name": "send-request",
//   description:
//    "This function should replace our current [Appwrite Tasks](https://appwrite.io/docs/tasks) feature. It should take the configuration of the HTTP request as input and send the HTTP request.",
//  },
//  {
//   name: "getInternetSpeed",
//   "dashed-name": "get-internet-speed",
//   description:
//    "This function should use any Speedtest provider to check the download and upload speed of the server. The results should be provided as an output of the function.",
//  },
//  {
//   name: "backupToStorage",
//   "dashed-name": "backup-to-storage",
//   description:
//    "This function should export all data from all collections, generate an in-memory CSV file and save it to Appwrite Storage.",
//  },
//  {
//   name: "backupToBackblaze",
//   "dashed-name": "backup-to-backblaze",
//   description:
//    "This function should export all data from all collections, generate an in-memory CSV file and save it to [Backblaze](https://www.backblaze.com/).",
//  },
//  {
//   name: "backtoToS3",
//   "dashed-name": "backup-to-s3",
//   description:
//    "This function should export all data from all collections, generate an in-memory CSV file and save it to [Amazon S3](https://aws.amazon.com/s3/).",
//  },
//  {
//   name: "backupToDropbox",
//   "dashed-name": "backup-to-dropbox",
//   description:
//    "This function should export all data from all collections, generate an in-memory CSV file and save it to [Dropbox](https://www.dropbox.com/).",
//  },
//  {
//   name: "generateGdprExport",
//   "dashed-name": "generate-gdpr-export",
//   description:
//    "This function should find all documents in all collections where the ID of the user who executed the function is mentioned and generate a CSV file that will be saved to Appwrite Storage.",
//  },
//  {
//   name: "getStripePaymentStatus",
//   "dashed-name": "get-stripe-payment-status",
//   description:
//    "This function should take `stripePaymentId` as an input, check the status of the payment and respond with the payment status.",
//  },
//  {
//   name: "sendSMS",
//   "dashed-name": "send-sms",
//   description:
//    "This function should take `phoneNumber` and `text` as input and send an SMS using [Twilio](https://www.twilio.com/) to this number.",
//  },
//  {
//   name: "sendWhatsAppMessage",
//   "dashed-name": "send-whats-app-msg",
//   description:
//    "This function should take `phoneNumber` and `text` as input and send a WhatsApp message using [Twilio](https://www.twilio.com/) to this number.",
//  },
//  {
//   name: "subscribeToSendGrid",
//   "dashed-name": "subscribe-to-send-grid",
//   description:
//    "This function should take an `email` as input and register this email as a subscriber to [SendGrid](https://sendgrid.com/) newsletter.",
//  },
//  {
//   name: "subscribeToMailchimp",
//   "dashed-name": "subscribe-to-mailchimp",
//   description:
//    "This function should take an `email` as input and register this email as a subscriber to [Mailchimp](https://mailchimp.com/) newsletter.",
//  },
//  {
//   name: "generateBitlyUrl",
//   "dashed-name": "generate-bitly-url",
//   description:
//    "This function should take an `url` as an input, generate a short URL using [Bitly](https://bitly.com/) and output the shorten URL.",
//  },
//  {
//   name: "generateGoogleMap",
//   "dashed-name": "generate-google-map",
//   description:
//    "This function should take `latitude` and `longitude` as an input, generate map preview using [Google Maps API](https://developers.google.com/maps) and save it into Appwrite Storage.",
//  },
//  {
//   name: "translateText",
//   "dashed-name": "translate-text",
//   description:
//    "This function should take `text`, `sourceLanguage` and `destinationLanguage` as an input, use [Google Translate API](https://cloud.google.com/translate) to translate it and output the translated version.",
//  },
//  {
//   name: "textToSpeech",
//   "dashed-name": "text-to-speech",
//   description:
//    "This function should take `text` as an input, generate an MP3 file using [Google Text-to-speech API](https://cloud.google.com/text-to-speech) and save it into Appwrite Storage.",
//  },
//  {
//   name: "generateXeroInvoice",
//   "dashed-name": "generate-xero-invoice",
//   description:
//    "This function should trigger on `database.documents.create` event, get content of the document and use it to generate [Xero](https://www.xero.com/) invoice. Finally, save the invoice to Appwrite Storage.",
//  },
//  {
//   name: "generateInvoicelyInvoice",
//   "dashed-name": "generate-invoicely-invoice",
//   description:
//    "This function should trigger on `database.documents.create` event, get content of the document and use it to generate [Invoicely](https://invoicely.com/) invoice. Finally, save the invoice to Appwrite Storage.",
//  },
//  {
//   name: "generateInvoice2goInvoice",
//   "dashed-name": "generage-invoice2go-invoice",
//   description:
//    "This function should trigger on `database.documents.create` event, get content of the document and use it to generate [Invoice2go](https://invoice.2go.com/) invoice. Finally, save the invoice to Appwrite Storage.",
//  },
//  {
//   name: "tweetNewMembership",
//   "dashed-name": "tweet-new-membership",
//   description:
//    "This function should trigger on `team.membership.create` event, and post a tweet that a new user joined a team.",
//  },
//  {
//   name: "generateUnsplashImage",
//   "dashed-name": "generate-unsplash-image",
//   description:
//    "This function should take a `keyword` as an input, use it as a keyword for Unsplash search, pick the first image and return `imageUrl` and `imageAuthor`.",
//  },
// ];

const functions = [
 {
  name: "compressTinyPNGImage",
  "dashed-name": "compress-tinypng-image",
  description:
   "This function should take `link` of image as an input, generate compressed version using [TinyPNG API](https://tinypng.com/developers) and save it into Appwrite Storage.",
 },
 {
  name: "generateGiphyGif",
  "dashed-name": "generate-giphy-gif",
  description:
   "This function should take a `keyword` as an input, use it as a keyword for [Giphy API](https://developers.giphy.com/docs/api#quick-start-guide) search, pick the first gif and return gif url",
 },
 {
  name: "getCovidStats",
  "dashed-name": "get-covid-stats",
  description:
   "This function should take `country` as input, fetches summary from [Covid19 API](https://covid19api.com/) and provide today coronavirus stats in this country. If country is not provided, use global stats.",
 },
 {
  name: "sendMessageBirdSMS",
  "dashed-name": "send-message-bird-sms",
  description:
   "This function should take `phoneNumber` and `text` as input, send request to send message using [MessageBird SMS API](https://developers.messagebird.com/api/sms-messaging/) and provide status as an input (if the SMS was successfully sent or not).",
 },
 {
  name: "sendMessageBirdWhatsAppMessage",
  "dashed-name": "send-message-bird-whatsapp-msg",
  description:
   "This function should take `phoneNumber` and `text` as input, send request to send message using [MessageBird WhatsApp API](https://developers.messagebird.com/api/whatsapp/) and provide status as an input (if the WhatsApp message was successfully sent or not).",
 },
 {
  name: "sendMessageBirdVoiceMessage",
  "dashed-name": "send-message-bird-voice-msg",
  description:
   "This function should take `phoneNumber` and `text` as input, send request to make a call using [MessageBird Voice Messaging API](https://developers.messagebird.com/api/voice-messaging/#voice-messaging-api) and provide status as an input (if the call was successfully created).",
 },
 {
  name: "createCloudConvertArchive",
  "dashed-name": "create-cloud-convert-archive",
  description:
   "This function should take a list of IDs of files in Appwrite Storage as input, send them to [CloudConvert Archives API](https://cloudconvert.com/api/v2/archive#archive-tasks), wait for the job to finish and save newly created archive into Appwrite Storage. Finally, return ID of the new file.",
 },
 {
  name: "mergeCloudConvertFiles",
  "dashed-name": "merge-cloud-convert-files",
  description:
   "This function should take a list of IDs of files in Appwrite Storage as input, send them to [CloudConvert Merge API](https://cloudconvert.com/api/v2/merge#merge-tasks), wait for the job to finish and save newly created file into Appwrite Storage. Finally, return ID of the new file.",
 },
 {
  name: "generateCloudConvertThumbnail",
  "dashed-name": "generate-cloud-convert-thumbnail",
  description:
   "This function should take an ID of the file in Appwrite Storage as input, send it to [CloudConvert Thumbnails API](https://cloudconvert.com/api/v2/thumbnails#thumbnail-tasks), wait for the job to finish and save newly created thumbnail image into Appwrite Storage. Finally, return ID of the new file.",
 },
 {
  name: "generateWebsiteScreenshot",
  "dashed-name": "generate-website-screenshot",
  description:
   "This function should take `url` of a website as input, send it to [CloudConvert CaptureWebsite API](https://cloudconvert.com/api/v2/capture-website#capture-website-tasks), wait for the job to finish and save newly created screenshot image into Appwrite Storage. Finally, return ID of the new file.",
 },
 {
  name: "optimizeCloudConvertFile",
  "dashed-name": "optimize-cloud-convert-file",
  description:
   "This function should take an ID of the file in Appwrite Storage as input, send it to [CloudConvert Optimize API](https://cloudconvert.com/api/v2/optimize#optimize-tasks), wait for the job to finish and save newly created thumbnail image into Appwrite Storage. Finally, return ID of the new file.",
 },
 {
  name: "convertCloudConverterFile",
  "dashed-name": "convert-cloud-convert-file",
  description:
   "This function should take an ID of the file in Appwrite Storage as input, send it to [CloudConvert Convert API](https://cloudconvert.com/api/v2/convert#convert-tasks), wait for the job to finish and save newly created file into Appwrite Storage. Finally, return the ID of the new file. There are a bunch of options for this API endpoint, so let's limit the functionality of this function to images only.",
 },
];

// Make sure we have empty folder ready
const localeIssuesFolderPath = path.join(
 __dirname,
 "../generated/function-demos"
);
fse.ensureDirSync(localeIssuesFolderPath);
fse.removeSync(localeIssuesFolderPath);
fse.ensureDirSync(localeIssuesFolderPath);

// Load template
const markdownTemplate = fs
 .readFileSync(path.join(__dirname, "../function.MD"))
 .toString();
const markdownTemplateHandebar = Handlebars.compile(markdownTemplate);

// Generate files
for (const func of functions) {
 const issuePath = path.join(localeIssuesFolderPath, `${func.name}.MD`);
 const markdownText = markdownTemplateHandebar(func);
 fs.writeFileSync(issuePath, markdownText);
}

console.log(`Generated ${functions.length} issue in generated/function-demos`);
