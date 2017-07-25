# How to selfhost FredBoat
This is a tutorial for users who would like to host their own bot running Fredboat. Please bear in mind that this is not a requirement for using the FredBoat service as I host a public bot that is simple to use.

#### This tutorial is for advanced users. If you can't figure out how to run this, please use the public FredBoat♪♪

## Intallation

### Requirements

1. [Java 8 JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

2. git and maven in your PATH

3. [A registered Discord application](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)

4. Linux \(Windows works too, but this tutorial is targetted at Linux\)

### Instructions
Clone the `master` branch of FredBoat recursively:

```sh
git clone --recursive https://github.com/Frederikam/FredBoat.git
```

Now compile the bot:

```sh
cd FredBoat
mvn package shade:shade
```

To run the bot you should set up a directory that looks like this:

```
├──FredBoat-1.0.jar
├──credentials.yaml
└──config.yaml
```

The compiled bot can be found in `FredBoat/FredBoat/target`. A sample `config.yaml` and an example `credentials.yaml` can be found in https://github.com/Frederikam/FredBoat/tree/master/FredBoat

In order to run the bot, you must first populate your bot with API credentials for Discord in the `credentials.yaml` file.

Music bot only: Fill in the Discord bot token for patron and at least one Youtube API key. Set patron to true in the `config.yaml` file and development to false. Fill in the Spotify tokens to use Spotify.

Full bot: Fill in the Discord bot token for beta and every other setting too. Set development to true in the `config.yaml` file and patron to false.

Example credentials.yaml file:

```yaml
---

### *** WARNING ***
### ALMOST EVERYTHING REQUESTED IN THIS FILE IS CONFIDENTIAL CREDENTIALS
### IF YOU POST THIS FILE ONLINE (such as on GitHub) YOUR BOT COULD BE COMPROMISED

# For the ;;mal command
# Create an account on https://myanimelist.net/ and enter its login below
malUser:
malPassword:

token:
  # Add your discord bot token below to the beta and patron slots, between the quotation marks
  # Find the token of your bot on https://discordapp.com/developers/applications/me

  beta: "YourTokenHere"
  patron: "YourTokenHere"
  production: 
  music:

# Used by the ;;split and ;;np commands. Must be hooked up to the Youtube Data API.
# Add your google API key in the brackets below between the quotation marks
# How to get the key: https://developers.google.com/youtube/registering_an_application

googleServerKeys: ["YourYoutubeAPIKey"]


# From https://cleverbot.io/
cbUser:
cbKey:


# Used to access imgur galleries for some RandomImageCommands
# Acquired from here: https://api.imgur.com/oauth2/addclient
# Choose an option that does not require an Authorization callback URL
imgurClientId:


# Used to retrieve Spotify playlists
# Get them from here: https://developer.spotify.com/my-applications
spotifyId:
spotifySecret:
```

Once you are done configuring, run the bot with `java -jar -Xmx128m FredBoat-1.0.jar`.


[Follow this link](http://docs.fredboat.com/systemdservice) to find a tutorial on running FredBoat as a `systemd` service.
