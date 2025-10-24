<?php

$arr = [];

$arr[1] = 'a';
$arr[0] = 'b';

foreach ($arr as $key => $value) {
    echo "{$key}:{$value}<br>";
}

/*
1:a
0:b
*/

for ($i = 0; $i < count($arr); $i++) {
    echo "{$i}:{$arr[$i]}<br>";
}

/*
0:b
1:a
*/
