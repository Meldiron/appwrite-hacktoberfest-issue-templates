💬 Improve Appwrite Messaging with {{adapter}} Adapter

# 💭 Introduction

Having an app is cool, but having integrations is even cooler! 😎 It always brings a smile to my face when a website has the option to sign in with my GitHub account, so I don't have to go over the lengthy process of creating an account… The same can be said about messages! Every app with the option to enable push notifications, email, or SMS notifications gives the users confidence they won't miss anything important. We all have our channels we check the most, and having the ability to connect some app directly in there is always a positive.

Appwrite will use Utopia PHP messaging library to allow developers to get in touch with users using one of its many messaging adapters, such as Email, Discord, or Slack.

Since the messaging library supports adapters, there is always space for more. 😎 Each provider implements a method to send the message to the correct channel (usually using an HTTP request or a library) alongside a few configuration variables and methods to set what the adapter allows.

Your task is to implement support for **{{adapter}}** in the Utopia PHP messaging library. This goes under **{{category}}** category, so feel free to look at existing ones in the [adapters folder](https://github.com/utopia-php/messaging/tree/main/src/Utopia/Messaging/Adapters). We have prepared detailed documentation on [how to add a new messaging adapter](https://github.com/utopia-php/messaging/blob/main/docs/add-new-adapter.md). Please read the document and ensure you understand them before working on this issue.

### 🎯 Requirements

- Experience with PHP.
- Experience with **{{adapter}}**.
- Experience with **[Docker](https://www.docker.com/)** and **[Docker Compose](https://docs.docker.com/compose/)**.

### ✅ Task Summary

- [ ]  Ask to be assigned to the issue.
- [ ]  Wait to be assigned.
- [ ]  Implement Utopia PHP logger adapter for **{{category}}/{{adapter}}**.
- [ ]  Submit a pull request in [utopia-php/messaging](https://github.com/utopia-php/messaging/).
- [ ]  Write a blog post on the platform of your choosing on how to integrate and use the adapter you just created. 

If you have questions, need any help, or just want to hang out, make sure to join us on our [Discord server](https://appwrite.io/discord).

**Happy Appwriting!**