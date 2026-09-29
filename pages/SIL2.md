```
function Get-Permissions ($folder) {
    try {
 # On récupère l'ACL du dossier
        if((Get-Acl $folder).access | Where-Object -FilterScript {
            ( ($_.IdentityReference -like "*$env:USERNAME") -or
($_.IdentityReference -like "*Users") ) -and
    ($_.FileSystemRights -eq 'FullControl')
    })
     {
 
         Write-Output "FAILLE TROUVEE : $folder"
    }
    }
 catch {
 
 }
}
Write-Host "Démarrage de l'analyse des permissions dans C:\Users..." -ForegroundColor Cyan

$list_of_dir = Get-ChildItem -Path "C:\Users" -Recurse -Directory -ErrorAction SilentlyContinue
$list_of_dir | ForEach-Object {
 Get-Permissions($_.FullName)
}
Write-Host "Analyse terminee." -ForegroundColor Cyan
```