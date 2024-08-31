# Twitter Cleanup Tool

## Overview

The **Twitter Cleanup Tool** is a versatile JavaScript utility designed to help you efficiently manage your Twitter account by automating the process of unliking tweets, removing bookmarks, and undoing retweets. This script is perfect for users who want to clean up their Twitter profile, streamline their activity, and ensure their account reflects their current interests.

## Features

- **Unlike Tweets:** Automatically unlike tweets on your profile with randomized delays to mimic human behavior.
- **Remove Bookmarks:** Easily remove bookmarks from tweets with just a few lines of code.
- **Undo Retweets:** Quickly undo retweets, including handling any confirmation prompts, with a script designed to work smoothly on the Twitter web interface.

## How to Use

### 1. Download the Script
- Clone the repository or download the `twitter_cleaner.js` file to your local machine.

### 2. Open Twitter in Your Browser
- Open Google Chrome, Firefox, or any other browser that supports developer tools.
- Log in to your Twitter account and navigate to the page you want to clean up (e.g., Likes, Bookmarks, Retweets).

### 3. Open Developer Console
- Press `F12` or `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I` (Mac) to open the Developer Console.
- Go to the "Console" tab where you can input JavaScript.

### 4. Paste the Script
- Copy the entire contents of `twitter_cleaner.js` and paste it into the Console.

### 5. Run the Desired Function
- To unlike all tweets: `unlikeTweets();`
- To remove all bookmarks: `removeBookmarks();`
- To undo all retweets: `undoRetweets();`

### 6. Monitor the Process
- The script will run continuously until all actions are complete. You can watch the progress in the console as each tweet is processed.

## Script Details

### Functions Included

- **unlikeTweets()**: 
  - Unlikes tweets on your profile with random intervals to avoid detection as a bot.
  
- **removeBookmarks()**: 
  - Removes bookmarks from tweets, simulating natural user behavior with random delays.
  
- **undoRetweets()**: 
  - Undoes retweets and handles confirmation prompts automatically, with delays to simulate human interaction.

### Randomized Delays
- Each function incorporates randomized delays between actions (ranging from 1 to 4 seconds) to make the script less detectable by Twitter's anti-bot mechanisms.

## Contributing

Contributions are welcome! If you have suggestions for improving the tool, new features, or optimizations, feel free to fork the repository, create a new branch, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support & Feedback

If you encounter any issues, have questions, or want to provide feedback, feel free to open an issue on GitHub. We appreciate your input and are here to help!

## Stars

If you find this tool helpful, please consider giving the repository a star on GitHub. It helps others discover the project and encourages further development.

---

**Disclaimer**: Use these scripts responsibly. Automating interactions on Twitter can be against their Terms of Service, so ensure you are complying with their policies when using this tool.
