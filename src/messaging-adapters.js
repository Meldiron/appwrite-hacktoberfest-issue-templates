const path = require("path");
const fs = require("fs");
const fse = require("fs-extra");
const Handlebars = require("handlebars");

// const adapters = {
//     "labels": ["hacktoberfest", "good first issue"],
//     "dataset": [
//         {
//             "adapter": "Mailjet",
//             "category": "Email",
//         },
//         {
//             "adapter": "Mailchimp",
//             "category": "Email",
//         },
//         {
//             "adapter": "Postmark",
//             "category": "Email",
//         },
//         {
//             "adapter": "SparkPost",
//             "category": "Email",
//         },
//         {
//             "adapter": "Brevo",
//             "category": "Email",
//         },
//         {
//             "adapter": "MailSlurp",
//             "category": "Email",
//         },
//         {
//             "adapter": "ElasticEmail",
//             "category": "Email",
//         },
//         {
//             "adapter": "Amazon SES",
//             "category": "Email",
//         },
//         {
//             "adapter": "SMTP2GO",
//             "category": "Email",
//         },
//         {
//             "adapter": "Mailtrap",
//             "category": "Email",
//         },
//         {
//             "adapter": "Netcore",
//             "category": "Email",
//         },
//         {
//             "adapter": "Socketlabs",
//             "category": "Email",
//         },


//         {
//             "adapter": "AfricasTalking",
//             "category": "SMS",
//         },
//         {
//             "adapter": "Sms77",
//             "category": "SMS",
//         },
//         {
//             "adapter": "SmsGlobal",
//             "category": "SMS",
//         },
//         {
//             "adapter": "MessageBird",
//             "category": "SMS",
//         },
//         {
//             "adapter": "Bandwidth",
//             "category": "SMS",
//         },
//         {
//             "adapter": "CM",
//             "category": "SMS",
//         },
//         {
//             "adapter": "SMSApi",
//             "category": "SMS",
//         },
//         {
//             "adapter": "Mobivate",
//             "category": "SMS",
//         },
//         {
//             "adapter": "BulkSMS",
//             "category": "SMS",
//         },


//         {
//             "adapter": "OneSignal",
//             "category": "Push",
//         },
//         {
//             "adapter": "Azure Notification Hubs",
//             "category": "Push",
//         },
//         {
//             "adapter": "AWS SNS",
//             "category": "Push",
//         },
//         {
//             "adapter": "Pusher",
//             "category": "Push",
//         },
//         {
//             "adapter": "WebPush",
//             "category": "Push",
//         },
//         {
//             "adapter": "Airship",
//             "category": "Push",
//         },
//         {
//             "adapter": "Pushwoosh",
//             "category": "Push",
//         },
//         {
//             "adapter": "PushBullet",
//             "category": "Push",
//         },
//         {
//             "adapter": "Pushy",
//             "category": "Push",
//         },
//     ],
//     "combinations": []
// }

// Make sure we have empty folder ready
const localeIssuesFolderPath = path.join(
    __dirname,
    "../generated/messaging-adapters"
);
fse.ensureDirSync(localeIssuesFolderPath);
fse.removeSync(localeIssuesFolderPath);
fse.ensureDirSync(localeIssuesFolderPath);

// Load template
const markdownTemplate = fs
    .readFileSync(path.join(__dirname, "../templates/messaging-adapters.md"))
    .toString();
const markdownTemplateHandebar = Handlebars.compile(markdownTemplate);

// Generate files
for (const adapter of adapters.dataset) {
    console.log(adapter)
    const issuePath = path.join(localeIssuesFolderPath, `${adapter.adapter}.md`);
    const markdownText = markdownTemplateHandebar(adapter);
    fs.writeFileSync(issuePath, markdownText);
}

console.log(`Generated ${adapters.dataset.length} issues in generated/messaging-adapters`);
