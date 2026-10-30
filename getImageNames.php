<?php
$directory = './images'; // Specify the folder path
$images = scandir($directory); // Get all files in the directory

foreach ($images as $image) {
// Filter only image files (e.g., .jpg, .png)
if (preg_match('/\.(jpg|jpeg|png|gif)$/i', $image)) {
echo "<img src='$directory/$image' alt='$image' style='width:150px; margin:10px;' />";
}
}

echo "<script>console.log('{$images}');</script>";
?>