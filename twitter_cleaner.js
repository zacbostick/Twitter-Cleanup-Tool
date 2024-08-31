/**
 * Twitter Cleaner Script
 * 
 * This script provides functions to help clean up your Twitter account by
 * unliking tweets, removing bookmarks, and undoing retweets. Each function 
 * can be run independently depending on your needs.
 * 
 * To use: Open Twitter in your browser, open the Developer Console (F12 or 
 * Ctrl+Shift+I), paste the entire script, and then call the function you need.
 */

/* -----------------------------
 * Function to Unlike Tweets
 * -----------------------------
 */

function unlikeTweets() {
    const unlikeButtons = document.querySelectorAll('button[data-testid="unlike"]');
    
    if (unlikeButtons.length > 0) {
        unlikeButtons[0].click();
        console.log("Clicked an unlike button.");
        const randomDelay = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(unlikeTweets, randomDelay);
    } else {
        window.scrollTo(0, document.body.scrollHeight);
        console.log("Scrolled down the page.");

        const randomDelay = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(unlikeTweets, randomDelay);
    }
}

/* -----------------------------
 * Function to Remove Bookmarks
 * -----------------------------
 */

function removeBookmarks() {
    const unbookmarkButtons = document.querySelectorAll('button[data-testid="removeBookmark"]');
    
    if (unbookmarkButtons.length > 0) {
        unbookmarkButtons[0].click();
        console.log("Clicked a remove bookmark button.");
        const randomDelay = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(removeBookmarks, randomDelay);
    } else {
        window.scrollTo(0, document.body.scrollHeight);
        console.log("Scrolled down the page.");
        const randomDelay = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(removeBookmarks, randomDelay);
    }
}

/* -----------------------------
 * Function to Undo Retweets
 * -----------------------------
 */

function undoRetweets() {
    const unretweetButtons = document.querySelectorAll('button[data-testid="unretweet"]');
    
    if (unretweetButtons.length > 0) {
        unretweetButtons[0].click();
        console.log("Clicked an unretweet button.");
        setTimeout(() => {
            const confirmButton = document.querySelector('div[data-testid="unretweetConfirm"]');
            if (confirmButton) {
                confirmButton.click();
                console.log("Confirmed the unretweet.");
            } else {
                console.log("Confirmation button not found.");
            }
            const randomDelay = Math.floor(Math.random() * 3000) + 1000;
            setTimeout(undoRetweets, randomDelay);
        }, 500);
    } else {
        window.scrollTo(0, document.body.scrollHeight);
        console.log("Scrolled down the page.");
        const randomDelay = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(undoRetweets, randomDelay);
    }
}

// To use a function, simply call one of the following in the console:
// unlikeTweets();
// removeBookmarks();
// undoRetweets();
