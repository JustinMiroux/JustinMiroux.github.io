# Securité d'infrastructure

## Centreon

https://download.centreon.com/#im:appliances
https://thewatch.centreon.com/infra-monitoring-platform-7/set-static-ip-4087
https://www.linuxtricks.fr/wiki/systemd-le-reseau-avec-systemd-networkd
https://docs.centreon.com/docs/installation/installation-of-a-central-server/using-virtual-machines/
https://docs.centreon.com/fr/docs/getting-started/monitor-linux-server-with-snmp/
https://docs.centreon.com/pp/integrations/plugin-packs/procedures/applications-webservers-apache-serverstatus/

### snmpd.conf
```
agentaddress 0.0.0.0,[::]

#       sec.name  source          community
com2sec notConfigUser  default       my-snmp-miroux

####
# Second, map the security name into a group name:

#       groupName      securityModel securityName
group   notConfigGroup v1           notConfigUser
group   notConfigGroup v2c           notConfigUser

####
# Third, create a view for us to let the group have rights to:

# Make at least  snmpwalk -v 1 localhost -c public system fast again.
#       name           incl/excl     subtree         mask(optional)
view centreon included .1.3.6.1
view    systemview    included   .1.3.6.1.2.1.1
view    systemview    included   .1.3.6.1.2.1.25.1.1

####
# Finally, grant the group read-only access to the systemview view.

#       group          context sec.model sec.level prefix read   write  notif
access notConfigGroup "" any noauth exact centreon none none
access  notConfigGroup ""      any       noauth    exact  systemview none none
```
