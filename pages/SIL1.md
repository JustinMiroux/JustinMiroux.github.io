# Les accès sous enquètes.

## Mission 1 - Trois portes, un compte

## Mission 2 - Le badge SSH de Bob

### Part 1
In "/etc/pam.d/sshd" uncomment line :
```
# account  required     pam_access.so
```

In "/etc/security/access.conf" at the end add :
```
-:bob:ALL
```

### Part 2
In "/etc/pam.d/sshd" comment line :
```
# account  required     pam_access.so
```
And add line :
```
auth  required     pam_succeed_if.so user ingroup sshusers
```

Create group sshusers and add users to said group:
```
addgroup sshusers
usermod -aG sshusers YOUR_USER
