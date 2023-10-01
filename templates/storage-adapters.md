# 🗄️ Extend Appwrite Storage with {{adapter}} Adapter

# 💭 Introduction

Appwrite Storage lets you upload images, videos, or any kind of file and store it for later. This comes with support for encryption, compression, chunk upload, resumable upload, and much more! 💪 To learn more, check out our official [Appwrite Storage docs](https://appwrite.io/docs/storage).

Every file uploaded to Appwrite Storage needs to be stored somewhere, whether that is your server’s hard drive or cloud provider. To make this possible, Appwrite uses storage adapters that each implement simple methods such as `read()`, `move()`, `delete()`...

Your task is to implement support for **{{adapter}}** in Appwrite and the Utopia PHP storage library. We have prepared detailed documentation on [how to create Utopia PHP storage adapter](https://github.com/utopia-php/storage/blob/main/docs/adding-new-storage-adapter.md), and [how to use Utopia PHP adapter in Appwrite](https://github.com/appwrite/appwrite/blob/master/docs/tutorials/add-storage-adapter.md). Please read these documents and ensure you understand it before working on this issue.

### 🎯 Requirements

- Experience with Appwrite.
- Experience with PHP.
- Experience with **{{adapter}}**.
- Experience with **[Docker](https://www.docker.com/)** and **[Docker Compose](https://docs.docker.com/compose/)**.

### ✅ Task Summary

- [ ]  Ask to be assigned to the issue.
- [ ]  Wait to be assigned.
- [ ]  Implement Utopia PHP storage adapter for **{{adapter}}**.
- [ ]  Submit a pull request in [utopia-php/storage](https://github.com/utopia-php/storage).
- [ ]  Implement Appwrite support for **{{adapter}}**.
- [ ]  Submit a pull request in [appwrite/appwrite](https://github.com/appwrite/appwrite).
- [ ]  Write a blog post on any platform of your choosing to demonstrate the usage of your adapter!

If you have questions, need any help, or just want to hang out, make sure to join us on our [Discord server](https://appwrite.io/discord).

**Happy Appwriting!**