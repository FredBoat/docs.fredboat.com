# Running FredBoat as a systemd service
Your linux distro needs to be using systemd, for example Ubuntu 15.04 and later; tested on 16.04.
You will need the file `fredboat.service`, which you can find at https://github.com/Frederikam/FredBoat/tree/master/FredBoat

Edit the `fredboat.service` file: 
Set the `WorkingDirectory` with your path to the folder where your FredBoat jar and the config and credentials files are located.
You might also need to edit the path to your java executable. You can find that path by running `which java` in your commandline. The default is `/usr/bin/java`.

Some of the following commands may require to be run with `sudo`.

Copy `fredboat.service` to `/etc/systemd/system/`.
```sh
cp fredboat.service /etc/systemd/system/
```

Run this to have systemd recognize the new service we just added:
```sh
systemctl daemon-reload
```

Enabling the service will have your machine run Fredboat automatically after a reboot:
```sh
systemctl enable fredboat.service
```

To disable automatic start after a reboot:
```sh
systemctl disable fredboat.service
```

Run this to start FredBoat:
```sh
systemctl start fredboat.service
```

To stop FredBoat you can run:
```sh
systemctl stop fredboat.service
```
You will find the log of the bot in your FredBoat path, called `fredboat.log`.
To see what's happening there for troubleshooting you can run this command in a terminal while
starting/stopping the bot in another:
```sh
tail -f fredboat.log
```

Troubleshooting systemd can be done by using:
```sh
systemctl status fredboat.service
```