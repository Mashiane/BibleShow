<?php
if (isset($_REQUEST['file'])) {
  $file = basename($_REQUEST['file']);
  echo file_get_contents('./bibles/'.$file);
} else {
  if (is_dir('./bibles') && $handle = opendir('./bibles/')) {
    while (false !== ($entry = readdir($handle))) {
      if (!is_dir($entry)) {
        echo basename($entry)."\n";
      }
    }
    closedir($handle);
  } else {
    header("HTTP/1.0 404 Not Found");
  }
}
