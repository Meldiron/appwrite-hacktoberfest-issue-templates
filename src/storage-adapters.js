const path = require("path");
const fs = require("fs");
const fse = require("fs-extra");
const Handlebars = require("handlebars");

const adapters = {
    "dataset": [
        {
            "adapter": "Ceph"
        },
        {
            "adapter": "Oracle Object Storage"
        },
        {
            "adapter": "Alibaba Cloud"
        },
        {
            "adapter": "NetApp Storage Grid"
        },
        {
            "adapter": "Exoscale"
        },
        {
            "adapter": "IBM Cloud Object Storage"
        },
        {
            "adapter": "Azure Blob Storage"
        },
        {
            "adapter": "Clouddian"
        },
        {
            "adapter": "Swiftstack"
        },
    ],
}

// Make sure we have empty folder ready
const localeIssuesFolderPath = path.join(
    __dirname,
    "../generated/storage-adapters"
);
fse.ensureDirSync(localeIssuesFolderPath);
fse.removeSync(localeIssuesFolderPath);
fse.ensureDirSync(localeIssuesFolderPath);

// Load template
const markdownTemplate = fs
    .readFileSync(path.join(__dirname, "../templates/storage-adapters.md"))
    .toString();
const markdownTemplateHandebar = Handlebars.compile(markdownTemplate);

// Generate files
for (const adapter of adapters.dataset) {
    console.log(adapter)
    const issuePath = path.join(localeIssuesFolderPath, `${adapter.adapter}.md`);
    const markdownText = markdownTemplateHandebar(adapter);
    fs.writeFileSync(issuePath, markdownText);
}

console.log(`Generated ${adapters.dataset.length} issues in generated/storage-adapters`);
