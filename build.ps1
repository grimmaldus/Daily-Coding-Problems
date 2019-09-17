param(
    [string]$path=".",
    [string]$output="dist",
    [string]$tsconfigSource="tsconfig.json"
)

function getTSCompilerOptions($inputFile){
    $jsonContent = Get-Content $inputFile -Raw
    $jsonObject = ConvertFrom-Json -InputObject $jsonContent
    $result;

    foreach($item in $jsonObject.compilerOptions.PSObject.Properties){
        #We add output within params
        if($item.Name -eq "outDir"){
            continue
        } 

        $property = $item.Name
        $value = $jsonObject.compilerOptions.$property
        $result += "--" + $property + " " + $value.ToString().ToLower() + " "
    }
    return $result
}

if(-not (Test-Path -path $tsconfigSource)) {
    throw "Config file doesn't exist"
} else {
    $options = getTSCompilerOptions($tsconfigSource)
    $files = Get-ChildItem $path -Recurse;
    
    foreach ($item in $files) {
        try {
            if ($item.Extension -eq ".ts") {
                #Build source path
                $srcPath = Resolve-Path -Path $item.FullName -Relative
                $directoryPath = Resolve-Path -Path $item.Directory -Relative
  
                #Build new path for compiled item
                $distPath = "'"
                if ($srcPath.Contains("\src")){
                    $distPath += $directoryPath.Replace(".\src",".\" + $output)
                } else {
                    $distPath += ".\" + $output     
                }
                $distPath += "\" + "'"
                  
                #TODO: split used instead
                $invokable = "tsc " + $srcPath + " " + $options + " --outDir " + $distPath

                Write-Host ("Invoke " + $invokable) -ForegroundColor Green

                Invoke-Expression $invokable -ErrorAction SilentlyContinue
            }
        }
        catch {
        
        }
        
    }
}

#remove all js js.map files Get-ChildItem @("*.js","*.js.map") -Recurse | Remove-Item -Force