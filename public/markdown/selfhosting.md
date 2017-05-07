# How to self-host FredBoat
This tutorial is users who want to host their own bot running FredBoat. Bear in mind that this is not a requirement for using FredBoat, as I also host a public bot. This is merely for those of you who want to host your own.

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
cd FredBoat/FredBoat
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

Music bot only: Fill in the Discord bot token for patron and at least one Youtube API key. Set patron to true in the `config.yaml` file and development to false.

Full bot: Fill in the Discord bot token for beta and every other setting too. Set development to true in the `config.yaml`.

Example credentials.yaml file:

```yaml
---
# For the ;;mal command
# Create an account on https://myanimelist.net/ and enter its login below
malUser:
malPassword:

token:
  # add your discord bot token below and remove the # (but keep two spaces in front of it)
  # find the token of your bot on https://discordapp.com/developers/applications/me
  # Optionally fill the other three tokens below in

  #beta: YourTokenHere

  production: 
  music:
  patron:

# Used by the ;;split and ;;np commands. Must be hooked up to the Youtube Data API
# add your google API keys in the brackets below, separated by commas if more than one, uncomment by removing the #
# how to get them: https://developers.google.com/youtube/registering_an_application

#googleServerKeys: [YourYoutubeAPIKey]
#googleServerKeys: [Key1, Key2]


# From https://cleverbot.io/
cbUser:
cbKey:


# Used for the ;;leet command
mashapeKey:

# Used to access imgur galleries for some RandomImageCommands
# acquired from here: https://api.imgur.com/oauth2/addclient
# choose an option that does not require an Authorization callback URL
imgurClientId:
```

Once you are done configuring, run the bot with `java -jar FredBoat-1.0.jar`.


[Follow this link](http://docs.frederikam.com/systemdservice) to find a tutorial on running FredBoat as a `systemd` service.