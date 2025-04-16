---
title: "Arma 3 dedicated server on linux"
author: [Miroux J.]
date: "02-04-2025"
lang: "en"
background: "#faf7f6"
---

# How to setup an Arma 3 server on linux.

Hello today i'm going to explain the steps i took to make my own Arma 3 server on linux.
Obviously you will need a machine or VM running linux.

## Install SteamCMD

This depends on the distro you are running. For the sake of simplicity i'm personaly using Ubuntu server (it's just good enough for me).
First of all we are going to create a user dedicated to steam and the Arma3 game.
```bash
sudo useradd -s /bin/bash -m steam
sudo passwd steam
```
After this we will install the libraries needed for steamCMD to run and then install steamCMD.
```bash
sudo add-apt-repository multiverse && sudo dpkg --add-architecture i386 && sudo apt update
sudo apt install steamcmd
```
Once this is done you can move to the steam user we created earlier like this
```bash
sudo -u steam -s
cd
```
Then we will need to add the directory in wich steamcmd was installed into steam .bashrc
to do that just edit the .bashrc file in the home folder of the user and add this line at the end of the file :
```bash
PATH="$PATH:/usr/games/"
```
Then just restart bash or exit and re enter the user account to apply the changes.

## Install Arma 3 dedicated server

First off all you will need to create a new directory (arma3) for the server files, 
then start steamcmd and changes the location where the files will be installed to said directory and finally login to an account that has the game.
```bash
mkdir arma3
steamcmd
# Wait for steam cmd to load
force_install_dir /home/steam/arma3/
login YourSteamAccount
```
