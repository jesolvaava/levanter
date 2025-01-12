const { forwardOrBroadCast, bot, parsedJid, getBuffer } = require('./lib'); // Path to your lib file

// ... your bot code ...

bot({ /* ... your bot command ... */ }, async (message, match) => {
    // ... (rest of your command handler code)
    try {
        await forwardOrBroadCast(parsedTargetJid, message.reply_message, options);
    } catch (error) {
        // Handle the error (e.g., send an error message to the user)
        await message.sendMessage("Failed to forward message: " + error.message, { quoted: message.data });
    }
});
