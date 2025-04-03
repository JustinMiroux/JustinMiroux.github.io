---
title: "Arma 3 dedicated server on linux"
author: [Miroux J.]
date: "02-04-2025"
lang: "en"
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
