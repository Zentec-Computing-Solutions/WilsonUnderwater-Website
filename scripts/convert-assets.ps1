$projectRoot = Split-Path -Parent $PSScriptRoot
Add-Type -AssemblyName System.Drawing
$source = [System.Drawing.Bitmap]::new((Join-Path $projectRoot "WilsonUnderwaterLogo.jpg"))
$source.Save((Join-Path $projectRoot "assets\wilson-logo.png"), [System.Drawing.Imaging.ImageFormat]::Png)
foreach ($size in @(32, 180, 192)) {
  $target = [System.Drawing.Bitmap]::new($size, $size)
  $graphics = [System.Drawing.Graphics]::FromImage($target)
  $graphics.Clear([System.Drawing.Color]::White)
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.DrawImage($source, 0, 0, $size, $size)
  $target.Save((Join-Path $projectRoot "assets\icon-$size.png"), [System.Drawing.Imaging.ImageFormat]::Png)
  $graphics.Dispose(); $target.Dispose()
}
$source.Dispose()
