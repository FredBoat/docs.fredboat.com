# Welcome to FredBoat Docs
FredBoat is a free Discord music bot that delivers high-quality music to your Discord server. The music bot is made to be easy plug in to your Discord server with no configuration. 

## Setting up the bot
FredBoat is made to be super simple to use! Getting FredBoat running on your server is simple. You can invite the bot by authenticating it with your account using [this](https://discordapp.com/oauth2/authorize?&client_id=184405253028970496&scope=bot) link. Bear in mind that you must have `Manage Server` permissions to be able to do this.

# Music Commands
[(Requires the music bot)](https://discordapp.com/oauth2/authorize?&client_id=184405253028970496&scope=bot).

| Command                    | Description                                                           | Example usage                               |
|----------------------------|-----------------------------------------------------------------------|---------------------------------------------|
| ;;play ***url***           | Plays music from the given URLs. See supported sources below.       | ;;play https://www.youtube.com/watch?v=dQw4w9WgXcQ     |
| ;;list                     | Displays a list of the current songs in the playlist.                 | ;;list                                      |
| ;;nowplaying               | Displays the currently playing song.                                  | ;;nowplaying                                |
| ;;skip                     | Skips the current song. Please use in moderation.                     | ;;skip                                      |
| ;;stop                     | Stops the player and **clears** the playlist. Reserved for moderators.| ;;stop                                      |
| ;;pause                    | Pauses the player.                                                    | ;;pause                                     |
| ;;unpause                  | Unpauses the player.                                                  | ;;unpause                                   |
| ;;join                     | Makes the bot join your current voice channel.                        | ;;join                                      |
| ;;leave                    | Makes the bot leave the current voice channel.                        | ;;leave                                     |
| ;;repeat                   | Changes the repeat mode. Run this command for more info.              | ;;repeat all                                |
| ;;shuffle                  | Toggles shuffle mode for the current queue.                           | ;;shuffle                                   |
| ;;fwd ***time***           | Forwards the track by a given amount of time.                         | ;;fwd 2:30                                  |
| ;;rew ***time***           | Rewinds the track by a given amount of time.                          | ;;rew 30                                    |
| ;;seek ***time***          | Sets the position of the track to the given time.                     | ;;seek 2:45:00                              |
| ;;split                    | Takes a YouTube track and splits the track based on the tracklist.    | ;;split https://www.youtube.com/watch?v=8EdW28B-In4   |


The bot will not be able to play songs blocked in the US (usually due to copyright infringements on YouTube).

## Adding music to the playlist
Adding music to the playlist is pretty simple. To start playing a song, simply use the ;;play command. Here are two examples:
```
;;play https://www.youtube.com/watch?v=dQw4w9WgXcQ
;;play rick roll
```
You can either explicitly state the URL, or you can get the bot to search YouTube and give you some choices. Here's an example response:

```
Please select a video with the ';;play n' command:
1: Rick Astley - Never Gonna Give You Up (03:33)
2: YOUTUBERS REACT TO RICKROLL (Ep. #5) (09:20)
3: I Rick Roll My Entire Chemistry Class! (05:55)
4: The New Rick Roll! (04:26)
5: Melania Trump's RNC RICKROLL (00:19)
```

You can then choose your song with the `;;select <number>` command.

**Supported sites:**

* YouTube (streams hopefully coming soon)

* SoundCloud

* Bandcamp

* Twitch

* Vimeo

* ~~Direct links to files, including streams. Not all formats supported.~~¹

* ~~URLs pointing to .m3u and .pls can be used to start streams.~~¹

¹**Due to threats of (D)DoS attacks we have disabled files served over HTTP(S).**

Let us know if you want other sites supported. 

## Join FredBoat Hangout!
We invite everyone to join FredBoat hangout, which is a place to discuss suggestions and request for support. I'm very willing to take suggestions for the bot so don't hesitate to say what you have in mind! [Click here to join!](https://discord.gg/cgPFW4q)

## Support
Before you do anything, please [read our FAQ](https://docs.fredboat.com/faq).

You can join either our [Discord server](https://discord.gg/cgPFW4q) or tweet us at [@DiscordFredBoat](https://twitter.com/DiscordFredBoat).

## Legal
By using any of my hosted (but not selfhosted) bots you are subject to our (very minimal!) [terms of service](http://docs.fredboat.com/terms).

Effective as of 25-apr-2017.

## Credits
FredBoat is developed by Fre_d (aka Frederikam) with the help of contributors on GitHub.

Special thanks to EJ Technologies for providing us with open source licenses for their [Java profiler](https://www.ej-technologies.com/products/jprofiler/overview.html).

[![JProfiler](https://www.ej-technologies.com/images/product_banners/jprofiler_large.png)](https://www.ej-technologies.com/products/jprofiler/overview.html)

This site is hosted as an open source project on [Netlify](https://www.netlify.com/).

The FredBoat logo was created by Sturm/JDK\#0216.
