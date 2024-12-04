function scrollIfNeeded() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 100) {
        return false;
    }
    window.scrollTo(0, document.body.scrollHeight);
    return true;
}

function unlikeTweets(batchSize = 5) {
    try {
        const unlikeButtons = document.querySelectorAll('button[data-testid="unlike"]');
        if (unlikeButtons.length > 0) {
            for (let i = 0; i < Math.min(batchSize, unlikeButtons.length); i++) {
                unlikeButtons[i].click();
                console.log(`Clicked unlike button ${i + 1}.`);
            }
            const randomDelay = Math.floor(Math.random() * 3000) + 2000;
            setTimeout(unlikeTweets, randomDelay, batchSize);
        } else if (scrollIfNeeded()) {
            console.log("Scrolled down the page.");
            const randomDelay = Math.floor(Math.random() * 3000) + 2000;
            setTimeout(unlikeTweets, randomDelay, batchSize);
        } else {
            console.log("No more tweets to unlike.");
        }
    } catch (error) {
        console.error("An error occurred while unliking tweets:", error);
        setTimeout(unlikeTweets, 5000, batchSize);
    }
}

function removeBookmarks(batchSize = 5) {
    try {
        const unbookmarkButtons = document.querySelectorAll('button[data-testid="removeBookmark"]');
        if (unbookmarkButtons.length > 0) {
            for (let i = 0; i < Math.min(batchSize, unbookmarkButtons.length); i++) {
                unbookmarkButtons[i].click();
                console.log(`Clicked remove bookmark button ${i + 1}.`);
            }
            const randomDelay = Math.floor(Math.random() * 3000) + 2000;
            setTimeout(removeBookmarks, randomDelay, batchSize);
        } else if (scrollIfNeeded()) {
            console.log("Scrolled down the page.");
            const randomDelay = Math.floor(Math.random() * 3000) + 2000;
            setTimeout(removeBookmarks, randomDelay, batchSize);
        } else {
            console.log("No more bookmarks to remove.");
        }
    } catch (error) {
        console.error("An error occurred while removing bookmarks:", error);
        setTimeout(removeBookmarks, 5000, batchSize);
    }
}

function undoRetweets(batchSize = 5) {
    try {
        const unretweetButtons = document.querySelectorAll('button[data-testid="unretweet"]');
        if (unretweetButtons.length > 0) {
            for (let i = 0; i < Math.min(batchSize, unretweetButtons.length); i++) {
                unretweetButtons[i].click();
                console.log(`Clicked unretweet button ${i + 1}.`);
                setTimeout(() => {
                    const confirmButton = document.querySelector('div[data-testid="unretweetConfirm"]');
                    if (confirmButton) {
                        confirmButton.click();
                        console.log("Confirmed the unretweet.");
                    } else {
                        console.log("Confirmation button not found.");
                    }
                }, 500);
            }
            const randomDelay = Math.floor(Math.random() * 3000) + 2000;
            setTimeout(undoRetweets, randomDelay, batchSize);
        } else if (scrollIfNeeded()) {
            console.log("Scrolled down the page.");
            const randomDelay = Math.floor(Math.random() * 3000) + 2000;
            setTimeout(undoRetweets, randomDelay, batchSize);
        } else {
            console.log("No more retweets to undo.");
        }
    } catch (error) {
        console.error("An error occurred while undoing retweets:", error);
        setTimeout(undoRetweets, 5000, batchSize);
    }
}

