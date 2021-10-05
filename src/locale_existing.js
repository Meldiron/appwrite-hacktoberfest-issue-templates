const path = require("path");
const fs = require("fs");
const fse = require("fs-extra");
const Handlebars = require("handlebars");

// EDIT THIS
const appwriteFolder = path.join(__dirname, "../../../appwrite");
// EDIT THIS END

const languagesPhpPath = "app/config/locale/languages.php";
const languagesFolderPath = "app/config/locale/translations";

// Load and parse php script to json object
const languagesPhp = fs
 .readFileSync(path.join(appwriteFolder, languagesPhpPath))
 .toString()
 .replace(/(\r\n|\n|\r)/gm, "")
 .split("return [")[1]
 .split("];")
 .join("")
 .split("[")
 .join("{")
 .split("]")
 .join("}")
 .split("=>")
 .join(":");

const languagesArray = JSON.parse(`[ ${languagesPhp} ]`);

// Get list of supported languages
const supportedLanguages = fs
 .readdirSync(path.join(appwriteFolder, languagesFolderPath))
 .map((fileName) => {
  return fileName.split(".json").join("");
 });

// Get all data we need - language code and name

const languagesObject = {}; // { 'sk': 'Slovak' }
for (const supportedLanguage of supportedLanguages) {
 const languageConfig = languagesArray.find(
  (lang) => lang.code === supportedLanguage
 );

 let verboseName = languageConfig ? languageConfig.name : undefined;

 if (!verboseName) {
  if (supportedLanguage === "pt-br") {
   verboseName = "Portugal (Brazil)";
  }

  if (supportedLanguage === "pt-pt") {
   verboseName = "Portugal (Portugal)";
  }

  if (supportedLanguage === "zh-cn") {
   verboseName = "Chinese (China)";
  }

  if (supportedLanguage === "zh-tw") {
   verboseName = "Chinese (Taiwan)";
  }
 }

 languagesObject[supportedLanguage] = verboseName;
}

// Make sure we have empty folder ready
const localeIssuesFolderPath = path.join(
 __dirname,
 "../generated/locale-issues-existing"
);
fse.ensureDirSync(localeIssuesFolderPath);
fse.removeSync(localeIssuesFolderPath);
fse.ensureDirSync(localeIssuesFolderPath);

// Load template
const markdownTemplate = fs
 .readFileSync(path.join(__dirname, "../locale_existing.MD"))
 .toString();
const markdownTemplateHandebar = Handlebars.compile(markdownTemplate);

// Generate files
for (const languageCode of Object.keys(languagesObject)) {
 const languageName = languagesObject[languageCode];

 const issuePath = path.join(localeIssuesFolderPath, `${languageCode}.MD`);
 const markdownText = markdownTemplateHandebar({
  code: languageCode,
  name: languageName,
 });
 fs.writeFileSync(issuePath, markdownText);
}

console.log(
 `Generated ${
  Object.keys(languagesObject).length
 } issue in generated/locale-issues-missing`
);
