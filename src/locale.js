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

// Find problematic languages
const problematicLangages = supportedLanguages.filter((languageCode) => {
 const languageDefinition = languagesArray.find(
  (language) => language.code === languageCode
 );
 return languageDefinition ? false : true;
});

if (problematicLangages.length > 0) {
 console.log(`Found ${problematicLangages.length} problematic languages:`);
 console.log(problematicLangages);
}

// Find missing languages
const missingLanguages = languagesArray.filter(
 (language) => !supportedLanguages.includes(language.code)
);

console.log(`Found ${missingLanguages.length} missing languages`);
console.log("Generating issues ...");

// Make sure we have empty folder ready
const localeIssuesFolderPath = path.join(
 __dirname,
 "../generated/locale-issues"
);
fse.ensureDirSync(localeIssuesFolderPath);
fse.removeSync(localeIssuesFolderPath);
fse.ensureDirSync(localeIssuesFolderPath);

// Load template
const markdownTemplate = fs
 .readFileSync(path.join(__dirname, "../locale.MD"))
 .toString();
const markdownTemplateHandebar = Handlebars.compile(markdownTemplate);

// Generate files
for (const missingLanguage of missingLanguages) {
 const issuePath = path.join(
  localeIssuesFolderPath,
  `${missingLanguage.code}.MD`
 );
 const markdownText = markdownTemplateHandebar(missingLanguage);
 fs.writeFileSync(issuePath, markdownText);
}

console.log(
 `Generated ${missingLanguages.length} issue in generated/locale-issues`
);
