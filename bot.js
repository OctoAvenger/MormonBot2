//Defines bot/prefix and languages used.
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const prefix = ">";

var Inephi = ["1 Nephi", "1Nephi", "1ne", "nephi"]

var bomLookups = Object()

bomLookups["1 nephi"] = "1-ne"
bomLookups["1ne"] = "1-ne"
bomLookups["1 ne"] = "1-ne"
bomLookups["nephi"] = "1-ne"
bomLookups["2 nephi"] = "2-ne"
bomLookups["2ne"] = "2-ne"
bomLookups["jacob"] = "jacob"
bomLookups["ja"] = "jacob"
bomLookups["enos"] = "enos"
bomLookups["en"] = "enos"


//Messages and commands that MormonBot can perform.
bot.on("message", (message) => {

    if (message.author.bot === true) {
        return
    }

    var lowercaseMessage = message.content.toLowerCase()

    //Help message. Useful for new users.
    if (lowercaseMessage === prefix + "help") {
        let embed = new Discord.RichEmbed();
        embed.setColor("#FC9509");
        embed.setTitle("My commands are as follows:\n\n");
        embed.setDescription("**General commands:**\n" + prefix + "help *Displays this message.*\n[BOOK CHAPTER:VERSE-VERSE] Example: **1 Nephi 1:1-3** *Displays verse.*\n\n**Other commands:**\n" + prefix + "code *gives you a link to the GitHub.*\n\n**ALL COMMANDS AS OF VERSION 0.5.0**");
        message.channel.send({ embed });
    }
    /*let verseEmbed = new Discord.RichEmbed();
        verseEmbed.setColor("#FC9509");
        verseEmbed.setTitle(https://upload.wikimedia.org/wikipedia/commons/e/e5/Mormon-book.jpg + book " " + reference + " - Book of Mormon (BoM)\n\n");
        verseEmbed.setDescription(verse1 + \n + verse2 etc.);
        message.channel.send({ verseEmbed });*/

    var book = bomLookups[lowercaseMessage]
    if (book !== undefined) {
        message.channel.send("https://www.lds.org/scriptures/bofm/" + book + "/1.1?lang=eng");
    }
    
    if (message.content === prefix + "code") {
        message.channel.send("https://github.com/OctoAvenger/MormonBot");
    }
    });

//Bot login Token.
bot.login("NDAyMjMwOTQyNjExMDEzNjMy.Deyo7w.rB_IPKnvQi9t0sEBVeCSXfpSsEE");

//https://www.lds.org/scriptures/bofm/[book]/[chapter]?lang=eng